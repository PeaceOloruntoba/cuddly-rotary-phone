import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · SafeNest",
  description: "Get in touch with SafeNest for product inquiries, partnerships, or investor relations.",
  keywords: ["contact", "safenest", "get in touch"],
};

export default function ContactPage() {
  return (
    <main className="container py-20">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-neutral-600 mb-6">We'd love to hear about your project. Share a few details and we'll respond within one business day.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <p><strong>Email</strong></p>
          <p><a href="mailto:hello@safenest.example" className="text-[--brand-blue]">hello@safenest.example</a></p>

          <p className="mt-4"><strong>Office</strong></p>
          <p className="text-neutral-600">Remote-first — serving clients globally</p>
        </div>

        <div className="rounded-xl p-6 bg-[--card] shadow-sm">
          <p className="text-neutral-600">Prefer a quick chat? Share your details and availability and we'll schedule a call.</p>
          <div className="mt-4">
            <a href="mailto:hello@safenest.example?subject=Project inquiry" className="inline-block px-4 py-2 bg-[--brand-blue] text-white rounded">Email us</a>
          </div>
        </div>
      </div>
    </main>
  );
}