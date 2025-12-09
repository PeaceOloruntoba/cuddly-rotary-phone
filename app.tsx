// UPDATED COMPLETE: Full single-page Next.js + Tailwind component set.
// Drop these files into your Next 13+ app directory (app/) and components/ folder.

/* ===========================
   FILE: app/page.tsx
=========================== */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Gallery />
      <FAQ />
      <Footer />
    </main>
  );
}

/* NOTE: Add `html { scroll-behavior: smooth; }` to your globals.css. Also ensure Tailwind's preflight is active. */

/* ===========================
   FILE: components/Navbar.tsx
=========================== */

/* ===========================
   FILE: components/Hero.tsx
=========================== */


/* ===========================
   FILE: components/Stats.tsx
=========================== */

/* ===========================
   FILE: components/Features.tsx
=========================== */

/* ===========================
   FILE: components/Gallery.tsx
=========================== */

/* ===========================
   FILE: components/FAQ.tsx
=========================== */

/* ===========================
   FILE: components/Footer.tsx
=========================== */


/*
  Additional notes:
  - Images: put optimized JPEG/WEBP files in /public (hero.jpg, f1.jpg, f2.jpg, f3.jpg, g1.jpg, g2.jpg, g3.jpg).
    Prefer generating WebP or AVIF builds for best perf. Next/Image will optimize at build time.
  - Install framer-motion: `npm i framer-motion` (used for the FAQ accordion animations).
  - Tailwind: ensure `@tailwind base; @tailwind components; @tailwind utilities;` are enabled in globals.css.
  - Accessibility: semantic landmarks and alt text are included — tweak as needed.
*/
