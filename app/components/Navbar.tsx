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
    <header className={`fixed w-full z-30 transition-all ${scrolled ? 'backdrop-blur bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold">Perumnas</div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#home" onClick={() => setOpen(false)} className="hover:underline">Home</a>
            <a href="#features" onClick={() => setOpen(false)} className="hover:underline">Features</a>
            <a href="#gallery" onClick={() => setOpen(false)} className="hover:underline">Gallery</a>
            <a href="#faq" onClick={() => setOpen(false)} className="hover:underline">FAQ</a>
          </div>
        </div>

        <div className="hidden md:flex gap-4">
          <Link href="#contact" className="px-4 py-2 rounded-md border">Contact</Link>
          <Link href="#about" className="px-4 py-2 rounded-md bg-blue-600 text-white">About</Link>
        </div>

        <button className="md:hidden p-2" aria-label="menu" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </nav>

      {/* Mobile sheet */}
      <div className={`md:hidden fixed inset-x-4 top-16 z-40 rounded-xl p-4 bg-white shadow-lg transform transition-all ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col gap-3">
          <a href="#home" onClick={() => setOpen(false)} className="py-2">Home</a>
          <a href="#features" onClick={() => setOpen(false)} className="py-2">Features</a>
          <a href="#gallery" onClick={() => setOpen(false)} className="py-2">Gallery</a>
          <a href="#faq" onClick={() => setOpen(false)} className="py-2">FAQ</a>
          <div className="flex gap-3 mt-2">
            <Link href="#contact" className="flex-1 px-3 py-2 text-center border rounded">Contact</Link>
            <Link href="#about" className="flex-1 px-3 py-2 text-center bg-blue-600 text-white rounded">About</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
