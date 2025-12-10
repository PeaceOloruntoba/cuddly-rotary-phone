import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real Estate · SafeNest",
  description:
    "SafeNest Real Estate — List properties, connect with buyers and investors, and grow your listings with our platform.",
  keywords: [
    "real estate",
    "list with us",
    "property listing",
    "buyers",
    "investors",
  ],
};

export default function RealEstatePage() {
  return (
    <main className="container py-20">
      <h1 className="text-3xl font-bold mb-4">SafeNest Real Estate</h1>

      <p className="text-neutral-600 mb-6">
        Our in-house Real Estate product helps realtors and property owners
        showcase listings, and enables buyers and investors to discover,
        evaluate, and purchase properties with confidence.
      </p>

      <section className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-semibold mb-2">For Realtors & Owners</h3>
          <p className="text-neutral-600">
            Create rich listings with photos, walkthroughs, maps, and agent
            profiles. Gain exposure to an active buyer and investor audience.
          </p>
          <ul className="list-disc ml-5 mt-3 text-neutral-600 space-y-1">
            <li>Quick listing creation & management</li>
            <li>Agent dashboards and leads</li>
            <li>Premium listing boosts and analytics</li>
          </ul>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-block px-4 py-2 bg-[--brand-blue] text-white rounded"
            >
              List your property
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">For Buyers & Investors</h3>
          <p className="text-neutral-600">
            Discover curated listings, compare properties, and connect with
            agents. Tools to help you evaluate ROI and streamline purchases.
          </p>
          <div className="mt-4">
            <Link
              href="/real-estate#browse"
              className="inline-block px-4 py-2 border rounded text-[--brand-blue]"
            >
              Browse listings
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Why SafeNest</h2>
        <ul className="list-disc ml-5 text-neutral-600 space-y-1">
          <li>Trusted marketplace with verified sellers and agents</li>
          <li>Powerful discovery tools & media-rich listings</li>
          <li>Support for payments, offers, and escrow integrations</li>
        </ul>
      </section>
    </main>
  );
}
