import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { BlogListing } from "@/components/sections/blog-listing";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Usman Imran",
  description:
    "Build logs, case-study deep-dives, and notes on AI systems, automation, and what actually ships.",
  alternates: { canonical: "https://builtbyusman.com/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative z-10">
        <BlogListing posts={posts} />
      </main>
      <Footer />
    </>
  );
}
