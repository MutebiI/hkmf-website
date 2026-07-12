import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/hkmf-logo.png"
                alt="HKMF Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-white">
                HKMF
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              Hon Kyobe Muhamad Foundation (HKMF) is a community-based organization 
              dedicated to empowering vulnerable communities in Uganda through education, 
              skills development, child protection, and climate action.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              <span className="font-semibold text-white">Motto:</span> Empowering Communities, Transforming Lives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <Link href="/about" className="block hover:text-teal-400">About Us</Link>
              <Link href="/programmes" className="block hover:text-teal-400">Programmes</Link>
              <Link href="/contact" className="block hover:text-teal-400">Contact</Link>
              <Link href="/#partner" className="block hover:text-teal-400">Partner With Us</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white">Get In Touch</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <p>📍 Kawempe Division, Kampala, Uganda</p>
              <p>📧 info@hkmf.org</p>
              <p>📞 +256 701 481024</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Hon Kyobe Muhamad Foundation (HKMF). All rights reserved.</p>
          <p className="mt-1 text-xs text-slate-600">Empowering Communities, Transforming Lives.</p>
        </div>
      </div>
    </footer>
  );
}