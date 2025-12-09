import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto py-16 px-4 md:px-6">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Enjoy Quality Life in Perumnas Housing</h2>
      <p className="text-gray-600 leading-relaxed mb-10 md:mb-12">Perumnas cluster housing is the right choice for those seeking comfort, safety, and affordability.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {["/f1.jpg", "/f2.jpg", "/f3.jpg"].map((src, i) => (
          <div key={i} className="relative h-56 md:h-72 rounded-xl overflow-hidden shadow-md">
            <Image src={src} alt="Feature" fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-semibold text-xl mb-2">Strategic Location</h3>
          <p className="text-gray-600">Easy access to city centers and transportation.</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-2">Modern Design</h3>
          <p className="text-gray-600">Elegant houses with multiple type options.</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-2">Guaranteed Security</h3>
          <p className="text-gray-600">Gated cluster, CCTV monitoring, & security personnel.</p>
        </div>
      </div>
    </section>
    );
}
