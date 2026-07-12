"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { BuiltFor } from "@/components/sections/built-for";
import { About } from "@/components/sections/about";

const Experience = dynamic(() =>
  import("@/components/sections/experience").then((mod) => ({
    default: mod.Experience,
  }))
);
const Approach = dynamic(() =>
  import("@/components/sections/approach").then((mod) => ({
    default: mod.Approach,
  }))
);
const HowIBuild = dynamic(() =>
  import("@/components/sections/how-i-build").then((mod) => ({
    default: mod.HowIBuild,
  }))
);
const Services = dynamic(() =>
  import("@/components/sections/services").then((mod) => ({
    default: mod.Services,
  }))
);
const Projects = dynamic(() =>
  import("@/components/sections/projects").then((mod) => ({
    default: mod.Projects,
  }))
);
const Skills = dynamic(() =>
  import("@/components/sections/skills").then((mod) => ({
    default: mod.Skills,
  }))
);
const CTA = dynamic(() =>
  import("@/components/sections/cta").then((mod) => ({ default: mod.CTA }))
);
const Contact = dynamic(() =>
  import("@/components/sections/contact").then((mod) => ({
    default: mod.Contact,
  }))
);
const Footer = dynamic(() =>
  import("@/components/sections/footer").then((mod) => ({
    default: mod.Footer,
  }))
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <BuiltFor />
        <About />
        <Experience />
        <Approach />
        <HowIBuild />
        <Services />
        <Projects />
        <Skills />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
