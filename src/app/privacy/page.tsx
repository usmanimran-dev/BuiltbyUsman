import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Usman Imran",
  description: "How builtbyusman.com handles information and advertising cookies.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative z-10 mx-auto w-full max-w-3xl px-6 py-24">
        <p className="text-sm text-zinc-400">Last updated: November 1, 2026</p>
        <h1 className="mt-3 text-4xl font-medium">Privacy policy</h1>
        <div className="mt-10 space-y-8 leading-7 text-zinc-300">
          <section>
            <h2 className="mb-2 text-xl text-white">Information and contact</h2>
            <p>
              This website is operated by Usman Imran. If you contact me through
              the site, I use the information you provide to respond to your
              inquiry. The site may also receive standard technical information
              such as browser, device, and server request data needed to operate
              and secure the service.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-xl text-white">Advertising and cookies</h2>
            <p>
              This website may use Google AdSense to show advertisements. Google
              and its partners may use cookies, web beacons, IP addresses, or
              similar identifiers to serve, measure, and personalize ads, subject
              to your location, consent choices, and Google&apos;s policies. You
              can learn how Google uses data on sites that use its services in
              the{" "}
              <a
                className="underline underline-offset-4"
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noreferrer"
              >
                Google partner sites privacy page
              </a>
              . You can manage Google ad personalization in your{" "}
              <a
                className="underline underline-offset-4"
                href="https://myadcenter.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                Google Ad Center
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-xl text-white">Questions</h2>
            <p>
              For privacy questions, contact{" "}
              <a
                className="underline underline-offset-4"
                href="mailto:usman@builtbyusman.com"
              >
                usman@builtbyusman.com
              </a>
              . You can also return to the <Link className="underline" href="/">home page</Link>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
