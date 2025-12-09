import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-6xl mx-auto py-16 px-4 md:px-6">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Find Your Dream Home Here</h2>
      <p className="text-gray-600 mb-10">Explore beautiful interior designs and environments.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {["/g1.jpg", "/g2.jpg", "/g3.jpg"].map((src, i) => (
          <div key={i} className={`relative rounded-xl overflow-hidden shadow-md ${i === 2 ? "md:col-span-2 h-72 md:h-96" : "h-64"}`}>
            <Image src={src} alt="Gallery Image" fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
