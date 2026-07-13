// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="border-t border-slate-700 bg-slate-900">
//       <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

//           {/* Brand */}
//           <div className="lg:col-span-2">
//             <Link href="/" className="flex items-center gap-3">
//               <Image
//                 src="/images/hkmf-logo.png"
//                 alt="HKMF Logo"
//                 width={40}
//                 height={40}
//                 className="h-10 w-auto"
//               />
//               <span className="text-xl font-bold text-white">
//                 HKMF
//               </span>
//             </Link>
//             <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
//               Hon Kyobe Muhamad Foundation (HKMF) is a community-based organization 
//               dedicated to empowering vulnerable communities in Uganda through education, 
//               skills development, child protection, and climate action.
//             </p>
//             <p className="mt-4 text-sm text-slate-400">
//               <span className="font-semibold text-white">Motto:</span> Empowering Communities, Transforming Lives.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold text-white">Quick Links</h3>
//             <div className="mt-4 space-y-3 text-sm text-slate-400">
//               <Link href="/about" className="block hover:text-teal-400">About Us</Link>
//               <Link href="/programmes" className="block hover:text-teal-400">Programmes</Link>
//               <Link href="/contact" className="block hover:text-teal-400">Contact</Link>
//               <Link href="/#partner" className="block hover:text-teal-400">Partner With Us</Link>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="font-semibold text-white">Get In Touch</h3>
//             <div className="mt-4 space-y-3 text-sm text-slate-400">
//               <p>📍 Kawempe Division, Kampala, Uganda</p>
//               <p>📧 info@hkmf.org</p>
//               <p>📞 +256 701 481024</p>
//             </div>
//           </div>

//         </div>

//         {/* Bottom */}
//         <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
//           <p>© {new Date().getFullYear()} Hon Kyobe Muhamad Foundation (HKMF). All rights reserved.</p>
//           <p className="mt-1 text-xs text-slate-600">Empowering Communities, Transforming Lives.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/hkmf", icon: "🐦" },
    { name: "Facebook", href: "https://facebook.com/hkmf", icon: "📘" },
    { name: "YouTube", href: "https://youtube.com/hkmf", icon: "▶️" },
  ];

  return (
    <footer className="border-t border-slate-700 bg-slate-900">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand - Column 1 */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/HKMF_logo.jpeg"
                alt="HKMF Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-white">HKMF</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Hon Kyobe Muhamad Foundation (HKMF) is a community-based organization 
              dedicated to empowering vulnerable communities in Uganda.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              <span className="font-semibold text-white">Motto:</span> Empowering Communities, Transforming Lives.
            </p>
          </div>

          {/* Quick Links - Column 2 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-slate-400 hover:text-teal-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="text-sm text-slate-400 hover:text-teal-400 transition">
                  Programmes
                </Link>
              </li>
              <li>
                <Link href="/#partner" className="text-sm text-slate-400 hover:text-teal-400 transition">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-400 hover:text-teal-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Column 3 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <span className="mt-0.5">📍</span>
                <span>Kawempe Division, Kampala, Uganda</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <span className="mt-0.5">📧</span>
                <a href="mailto:info@hkmf.org" className="hover:text-teal-400 transition">
                  info@hkmf.org
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <span className="mt-0.5">📞</span>
                <a href="tel:+256701481024" className="hover:text-teal-400 transition">
                  +256 701 481 024
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <span className="mt-0.5">🕐</span>
                <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter - Column 4 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect With Us
            </h3>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-teal-600 hover:text-white"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Follow us for updates on our programmes and impact.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Hon Kyobe Muhamad Foundation (HKMF). All rights reserved.
          </p>
          <p className="text-center text-xs text-slate-600">
            Empowering Communities, Transforming Lives.
          </p>
        </div>
      </div>
    </footer>
  );
}