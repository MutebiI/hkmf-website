// // import Image from "next/image";
// // import Link from "next/link";

// // export default function Footer() {
// //   return (
// //     <footer className="border-t border-slate-700 bg-slate-900">
// //       <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
// //         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

// //           {/* Brand */}
// //           <div className="lg:col-span-2">
// //             <Link href="/" className="flex items-center gap-3">
// //               <Image
// //                 src="/images/hkmf-logo.png"
// //                 alt="HKMF Logo"
// //                 width={40}
// //                 height={40}
// //                 className="h-10 w-auto"
// //               />
// //               <span className="text-xl font-bold text-white">
// //                 HKMF
// //               </span>
// //             </Link>
// //             <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
// //               Hon Kyobe Muhamad Foundation (HKMF) is a community-based organization 
// //               dedicated to empowering vulnerable communities in Uganda through education, 
// //               skills development, child protection, and climate action.
// //             </p>
// //             <p className="mt-4 text-sm text-slate-400">
// //               <span className="font-semibold text-white">Motto:</span> Empowering Communities, Transforming Lives.
// //             </p>
// //           </div>

// //           {/* Quick Links */}
// //           <div>
// //             <h3 className="font-semibold text-white">Quick Links</h3>
// //             <div className="mt-4 space-y-3 text-sm text-slate-400">
// //               <Link href="/about" className="block hover:text-teal-400">About Us</Link>
// //               <Link href="/programmes" className="block hover:text-teal-400">Programmes</Link>
// //               <Link href="/contact" className="block hover:text-teal-400">Contact</Link>
// //               <Link href="/#partner" className="block hover:text-teal-400">Partner With Us</Link>
// //             </div>
// //           </div>

// //           {/* Contact Info */}
// //           <div>
// //             <h3 className="font-semibold text-white">Get In Touch</h3>
// //             <div className="mt-4 space-y-3 text-sm text-slate-400">
// //               <p>📍 Kawempe Division, Kampala, Uganda</p>
// //               <p>📧 info@hkmf.org</p>
// //               <p>📞 +256 701 481024</p>
// //             </div>
// //           </div>

// //         </div>

// //         {/* Bottom */}
// //         <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
// //           <p>© {new Date().getFullYear()} Hon Kyobe Muhamad Foundation (HKMF). All rights reserved.</p>
// //           <p className="mt-1 text-xs text-slate-600">Empowering Communities, Transforming Lives.</p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }
// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   const socialLinks = [
//     { name: "Twitter", href: "https://twitter.com/hkmf", icon: "🐦" },
//     { name: "Facebook", href: "https://facebook.com/hkmf", icon: "📘" },
//     { name: "YouTube", href: "https://youtube.com/hkmf", icon: "▶️" },
//   ];

//   return (
//     <footer className="border-t border-slate-700 bg-slate-900">
//       <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
//         <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

//           {/* Brand - Column 1 */}
//           <div className="lg:col-span-1">
//             <Link href="/" className="flex items-center gap-3">
//               <Image
//                 src="/images/HKMF_logo.jpeg"
//                 alt="HKMF Logo"
//                 width={40}
//                 height={40}
//                 className="h-10 w-auto"
//               />
//               <span className="text-xl font-bold text-white">HKMF</span>
//             </Link>
//             <p className="mt-4 text-sm leading-6 text-slate-400">
//               Hon Kyobe Muhamad Foundation (HKMF) is a community-based organization 
//               dedicated to empowering vulnerable communities in Uganda.
//             </p>
//             <p className="mt-3 text-sm text-slate-400">
//               <span className="font-semibold text-white">Motto:</span> Empowering Communities, Transforming Lives.
//             </p>
//           </div>

//           {/* Quick Links - Column 2 */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
//               Quick Links
//             </h3>
//             <ul className="mt-4 space-y-3">
//               <li>
//                 <Link href="/about" className="text-sm text-slate-400 hover:text-teal-400 transition">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/programmes" className="text-sm text-slate-400 hover:text-teal-400 transition">
//                   Programmes
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/#partner" className="text-sm text-slate-400 hover:text-teal-400 transition">
//                   Partner With Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-sm text-slate-400 hover:text-teal-400 transition">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info - Column 3 */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
//               Get In Touch
//             </h3>
//             <ul className="mt-4 space-y-3">
//               <li className="flex items-start gap-3 text-sm text-slate-400">
//                 <span className="mt-0.5">📍</span>
//                 <span>Kawempe Division, Kampala, Uganda</span>
//               </li>
//               <li className="flex items-start gap-3 text-sm text-slate-400">
//                 <span className="mt-0.5">📧</span>
//                 <a href="mailto:info@hkmf.org" className="hover:text-teal-400 transition">
//                   info@hkmf.org
//                 </a>
//               </li>
//               <li className="flex items-start gap-3 text-sm text-slate-400">
//                 <span className="mt-0.5">📞</span>
//                 <a href="tel:+256701481024" className="hover:text-teal-400 transition">
//                   +256 701 481 024
//                 </a>
//               </li>
//               <li className="flex items-start gap-3 text-sm text-slate-400">
//                 <span className="mt-0.5">🕐</span>
//                 <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
//               </li>
//             </ul>
//           </div>

//           {/* Social & Newsletter - Column 4 */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
//               Connect With Us
//             </h3>
//             <div className="mt-4 flex gap-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-teal-600 hover:text-white"
//                   aria-label={social.name}
//                 >
//                   <span className="text-lg">{social.icon}</span>
//                 </a>
//               ))}
//             </div>
//             <p className="mt-4 text-sm text-slate-400">
//               Follow us for updates on our programmes and impact.
//             </p>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-12 border-t border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-center text-sm text-slate-500">
//             © {new Date().getFullYear()} Hon Kyobe Muhamad Foundation (HKMF). All rights reserved.
//           </p>
//           <p className="text-center text-xs text-slate-600">
//             Empowering Communities, Transforming Lives.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { 
      name: "Twitter", 
      href: "https://twitter.com/hkmf", 
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: "Facebook", 
      href: "https://facebook.com/hkmf", 
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: "YouTube", 
      href: "https://youtube.com/hkmf", 
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
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
                  {social.icon}
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