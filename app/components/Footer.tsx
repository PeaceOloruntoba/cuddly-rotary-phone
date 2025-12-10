import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 py-12 border-t text-neutral-600 bg-transparent">
      <div className="container grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div className="col-span-2 sm:col-span-1">
          <h3 className="text-lg font-semibold mb-2 text-[--brand-blue]">
            SafeNest
          </h3>
          <p className="leading-snug">
            Building great apps and digital products for real estate and podcast
            publishers.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Products</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/real-estate">Real Estate App</Link>
            </li>
            <li>
              <Link href="/podcast">Podcast App</Link>
            </li>
            <li>
              <Link href="/services">Custom Development</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/services">Careers</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="opacity-60">© {year} SafeNest. All rights reserved.</p>
        <div className="flex gap-4 text-xs opacity-70">
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
