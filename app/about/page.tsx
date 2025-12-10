import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · SafeNest",
  description: "SafeNest is a software agency building real estate and podcast apps, plus custom digital products for enterprises and startups.",
  keywords: ["about", "safenest", "software agency", "about us"],
};

export default function AboutPage() {
  return (
    <main className="container py-20">
      <h1 className="text-3xl font-bold mb-4">About SafeNest</h1>
      <p className="text-neutral-600 mb-6">
        SafeNest is a product-focused software agency that builds high-quality web and mobile applications. We specialize in real estate platforms, podcast apps, and bespoke solutions — bringing design, performance, and SEO together.
      </p>

      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-neutral-600">To empower businesses and creators with intuitive digital products that scale.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Our Expertise</h2>
          <ul className="list-disc ml-5 text-neutral-600 space-y-1">
            <li>Web & Mobile Apps (React, Next.js, React Native, Flutter)</li>
            <li>Design Systems & UX</li>
            <li>Cloud and Backend Architecture</li>
            <li>SEO, Performance & Accessibility</li>
          </ul>
        </div>
      </section>
    </main>
  );
}