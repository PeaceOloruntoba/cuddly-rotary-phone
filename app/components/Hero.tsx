import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[72vh] flex items-center justify-center overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1505691723518-36a0a53b68a5?q=80&w=1920&auto=format&fit=crop"
        alt="Modern real estate and digital products"
        fill
        priority
        unoptimized
        className="object-cover"
      />

      <div className="absolute inset-0 hero-overlay"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
          SafeNest — Products & Software that Scale
        </h1>

        <p className="mt-4 text-lg opacity-95 drop-shadow">
          SafeNest builds and operates two flagship products — a Real Estate
          platform for property owners, realtors, buyers and investors, and a
          Podcast platform for creators and listeners — plus we offer bespoke
          software development services for businesses.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/real-estate"
            className="px-6 py-3 rounded-md bg-[--brand-blue] text-white shadow"
          >
            Real Estate — List & Browse
          </Link>

          <Link
            href="/podcast"
            className="px-6 py-3 rounded-md border border-white/40 text-white"
          >
            Podcast — Host & Listen
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-md bg-white/10 text-white hidden sm:inline-block"
          >
            Custom Solutions
          </Link>
        </div>

        <p className="mt-6 text-sm opacity-80">
          For realtors, podcasters, and businesses — onboard, list, host, or
          request a custom product demo.
        </p>
      </div>
    </section>
  );
}
