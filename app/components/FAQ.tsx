"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  { q: "What is cluster housing perumnas?", a: "Cluster housing perumnas is a gated residential concept with modern facilities." },
  { q: "Where is the location?", a: "Perumnas clusters are located in strategic, city-accessible regions." },
  { q: "How much are the prices?", a: "Prices vary depending on house type and cluster location." },
  { q: "What facilities are provided?", a: "Parks, sports fields, playgrounds, community centers, and more." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="max-w-5xl mx-auto py-20 px-4 md:px-6">
      <h2 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqData.map((item, i) => (
          <div key={i} className="border rounded-xl p-4 shadow-sm bg-white overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center">
              <span className="font-medium text-left">{item.q}</span>
              <span className="text-xl">{open === i ? "−" : "+"}</span>
            </button>

            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-3 text-gray-600"
                >
                  <div className="py-2">{item.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
