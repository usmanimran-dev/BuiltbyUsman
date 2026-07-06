import { createClient, SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let cached: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!url || !anonKey) return null;
  if (!cached) cached = createClient(url, anonKey);
  return cached;
}

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export async function submitContact(
  payload: ContactSubmission
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    // Send email via Resend
    const emailResponse = await fetch("/api/send-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.json();
      throw new Error(error.error || "Email send failed");
    }

    // Save to Supabase database
    const client = getSupabase();
    if (client) {
      await client.from("contacts").insert({
        name: payload.name,
        email: payload.email,
        message: payload.message,
      });
    }

    return { ok: true };
  } catch (error) {
    console.error("Contact submission error:", error);
    return {
      ok: false,
      error:
        "Failed to send message. Please email info@builtbyusman.com directly.",
    };
  }
}
