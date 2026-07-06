"use client";

import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { BuiltFor } from "@/components/sections/built-for";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Approach } from "@/components/sections/approach";
import { HowIBuild } from "@/components/sections/how-i-build";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <BuiltFor />
        <About />
        <Experience />
        <Approach />
        <HowIBuild />
        <Projects />
        <Skills />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
