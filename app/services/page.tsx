import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services · SafeNest",
  description: "Services — Real estate products, podcast apps, full-stack development, design systems, and consulting.",
  keywords: ["services", "development", "real estate app", "podcast app"],
};

export default function ServicesPage() {
  return (
    <main className="container py-20">
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <p className="text-neutral-600 mb-8">We deliver end-to-end product development, from idea and design to deployment and growth.</p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl shadow-sm bg-[--card]">
          <h3 className="font-semibold text-lg mb-2">Real Estate Platform</h3>
          <p className="text-neutral-600 mb-4">Listing management, search, payments, and agent dashboards tailored for property businesses.</p>
          <Link href="/real-estate" className="text-[--brand-blue]">View product →</Link>
        </div>

        <div className="p-6 rounded-xl shadow-sm bg-[--card]">
          <h3 className="font-semibold text-lg mb-2">Podcast App</h3>
          <p className="text-neutral-600 mb-4">Publish, distribute, monetize, and build community around audio content.</p>
          <Link href="/podcast" className="text-[--brand-blue]">View product →</Link>
        </div>

        <div className="p-6 rounded-xl shadow-sm bg-[--card]">
          <h3 className="font-semibold text-lg mb-2">Custom Development</h3>
          <p className="text-neutral-600 mb-4">Ecommerce, fintech, marketplaces, custom integrations, and consulting.</p>
          <Link href="/contact" className="text-[--brand-blue]">Get a proposal →</Link>
        </div>
      </div>
    </main>
  );
}