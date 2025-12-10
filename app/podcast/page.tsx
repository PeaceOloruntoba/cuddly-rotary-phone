import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcast · SafeNest",
  description:
    "SafeNest Podcast — Host your show, reach listeners, and monetize. Listener apps for discovery and streaming.",
  keywords: ["podcast hosting", "streaming", "podcasters", "listeners"],
};

export default function PodcastPage() {
  return (
    <main className="container py-20">
      <h1 className="text-3xl font-bold mb-4">SafeNest Podcast</h1>

      <p className="text-neutral-600 mb-6">
        SafeNest Podcast is our in-house platform for podcasters and listeners.
        Creators can host, publish, and monetize shows; listeners can discover,
        stream, and follow favorite podcasts.
      </p>

      <section className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-semibold mb-2">For Podcasters</h3>
          <p className="text-neutral-600">
            Upload episodes, schedule releases, manage subscriptions, and access
            analytics to grow your audience.
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-block px-4 py-2 bg-[--brand-blue] text-white rounded"
            >
              Host with SafeNest
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">For Listeners</h3>
          <p className="text-neutral-600">
            Stream episodes, create playlists, and follow shows — available on
            web and mobile for seamless listening.
          </p>
          <div className="mt-4">
            <Link
              href="/podcast#discover"
              className="inline-block px-4 py-2 border rounded text-[--brand-blue]"
            >
              Discover shows
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Creator-first Features</h2>
        <ul className="list-disc ml-5 text-neutral-600 space-y-1">
          <li>RSS generation & distribution</li>
          <li>Listener analytics & monetization</li>
          <li>Mobile streaming with offline support</li>
        </ul>
      </section>
    </main>
  );
}
