import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 py-12 border-t text-gray-700 text-sm bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div className="col-span-2 sm:col-span-1">
          <h3 className="text-lg font-semibold mb-2">Perumnas</h3>
          <p className="leading-snug">More Comfortable.<br />More Classy.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Product</h4>
          <ul className="space-y-1">
            <li>Features</li>
            <li>Integrations</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Customers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1">
            <li>Community</li>
            <li>Contact</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="opacity-60">© 2025 Perumnas. All rights reserved.</p>
        <div className="flex gap-4 text-xs opacity-70">
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy policy</Link>
          <Link href="#">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
