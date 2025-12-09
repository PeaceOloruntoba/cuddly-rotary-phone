import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[85vh] md:h-[95vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/newhe.jpg"
        alt="Luxury House"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute top-0 left-0 w-full flex justify-between px-4 md:px-6 py-4 text-white text-sm z-10">
        <button className="bg-white/20 backdrop-blur px-3 py-1 rounded-md">Menu</button>
        <div className="flex gap-4 md:gap-6">
          <a href="#contact" className="hover:underline">Contact Us</a>
          <a href="#about" className="hover:underline">About Us</a>
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">More Comfortable.<br />More Classy.</h1>
        <p className="mt-4 text-lg opacity-95 drop-shadow">Make your living experience even more memorable.</p>
      </div>
    </section>
  );
}