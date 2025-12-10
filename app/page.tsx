import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-transparent text-[--foreground]">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Gallery />
      <FAQ />
      <Footer />
    </main>
  );
}