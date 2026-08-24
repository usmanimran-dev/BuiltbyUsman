"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

type NavLink = { label: string; href: string };

type NavConfig = {
  logoHref: string;
  ctaHref: string;
  links: NavLink[];
  dark: boolean;
};

function getNavConfig(pathname: string): NavConfig {
  // The AI landing page has its own sections, so link to those instead of
  // the homepage anchors, which don't exist on this route.
  if (pathname === "/ai") {
    return {
      logoHref: "/",
      ctaHref: "#ai-contact",
      dark: false,
      links: [
        { label: "Services", href: "#what-i-build" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Case studies", href: "#case-studies" },
        { label: "FAQ", href: "#faq" },
        { label: "Blog", href: "/blog" },
      ],
    };
  }

  if (pathname === "/") {
    return {
      logoHref: "#top",
      ctaHref: "#contact",
      dark: false,
      links: [
        { label: "Work", href: "#work" },
        { label: "Experience", href: "#experience" },
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
        { label: "AI Systems", href: "/ai" },
        { label: "Blog", href: "/blog" },
      ],
    };
  }

  // Blog and any other route: homepage anchors need the leading slash so they
  // navigate home first, and these pages render on a dark background.
  return {
    logoHref: "/",
    ctaHref: "/#contact",
    dark: true,
    links: [
      { label: "Work", href: "/#work" },
      { label: "Experience", href: "/#experience" },
      { label: "Services", href: "/#services" },
      { label: "About", href: "/#about" },
      { label: "AI Systems", href: "/ai" },
      { label: "Blog", href: "/blog" },
    ],
  };
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { logoHref, ctaHref, links, dark } = getNavConfig(pathname ?? "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrolledBar = dark
    ? "border-b border-white/10 bg-[#08090c]/85 backdrop-blur-xl"
    : "border-b border-neutral-200/60 bg-[#F0EFEA]/85 backdrop-blur-xl";

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? scrolledBar : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href={logoHref}
            className={`font-display text-2xl font-semibold leading-none ${
              dark ? "text-white" : "text-neutral-900"
            }`}
          >
            Usman Imran
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  dark
                    ? "text-zinc-400 hover:text-white"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href={ctaHref}
            className={`group hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors md:inline-flex ${
              dark
                ? "bg-white text-neutral-900 hover:bg-zinc-200"
                : "bg-neutral-900 text-white hover:bg-neutral-800"
            }`}
          >
            Get in touch
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className={`md:hidden ${
              dark
                ? "text-zinc-300 hover:text-white"
                : "text-neutral-700 hover:text-neutral-900"
            }`}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-4 top-20 z-40 rounded-2xl border p-4 backdrop-blur-xl md:hidden ${
              dark
                ? "border-white/10 bg-[#0c0d10]/95"
                : "border-neutral-200 bg-white/95"
            }`}
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`border-b py-3 text-sm last:border-b-0 ${
                    dark
                      ? "border-white/10 text-zinc-300 hover:text-white"
                      : "border-neutral-200 text-neutral-700 hover:text-neutral-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={ctaHref}
                onClick={() => setMobileOpen(false)}
                className={`mt-4 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm ${
                  dark
                    ? "bg-white text-neutral-900"
                    : "bg-neutral-900 text-white"
                }`}
              >
                Get in touch
                <ArrowRight size={14} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
