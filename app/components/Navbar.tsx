"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-30 transition-all ${
        scrolled ? "backdrop-blur bg-white/70 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-semibold text-[--brand-blue]">
            SafeNest
          </Link>
          <div className="hidden md:flex gap-6 text-sm text-[--muted]">
            <a href="/" className="hover:underline">
              Home
            </a>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </div>
        </div>

        <div className="hidden md:flex gap-3 items-center">
          <Link
            href="/contact"
            className="px-4 py-2 rounded-md border border-neutral-200"
          >
            Contact
          </Link>
          <Link
            href="/services"
            className="px-4 py-2 rounded-md bg-[--brand-blue] text-white"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          aria-label="menu"
          onClick={() => setOpen(!open)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`md:hidden fixed inset-x-4 top-16 z-40 rounded-xl p-4 bg-white shadow-lg transform transition-all ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3">
          <Link href="/" onClick={() => setOpen(false)} className="py-2">
            Home
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} className="py-2">
            Services
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="py-2">
            About
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="py-2">
            Contact
          </Link>

          <div className="flex gap-3 mt-2">
            <Link href="/contact" className="flex-1 px-3 py-2 text-center border rounded">
              Contact
            </Link>
            <Link href="/services" className="flex-1 px-3 py-2 text-center bg-[--brand-blue] text-white rounded">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
