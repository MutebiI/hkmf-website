// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "About", href: "/about" },
//     { name: "Programmes", href: "/programmes" },
//     { name: "Partner", href: "/#partner" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/95 backdrop-blur">
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-3">
//           <Image
//             src="/images/HKMF_logo.jpg"
//             alt="HKMF Logo"
//             width={48}
//             height={48}
//             className="h-12 w-auto"
//             priority
//           />
//           <span className="text-xl font-bold tracking-tight text-white">
//             HKMF
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden items-center gap-8 md:flex">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={`relative font-medium transition-colors duration-200
//               ${
//                 pathname === link.href
//                   ? "text-teal-400"
//                   : "text-slate-300 hover:text-white"
//               }`}
//             >
//               {link.name}
//               {pathname === link.href && (
//                 <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-teal-400"></span>
//               )}
//             </Link>
//           ))}
//         </div>

//         {/* Donate Button */}
//         <div className="hidden md:block">
//           <Link
//             href="/#contact"
//             className="rounded-lg bg-teal-600 px-5 py-2.5 font-medium text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg"
//           >
//             Donate
//           </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="rounded-md p-2 text-white transition hover:bg-slate-800 md:hidden"
//           aria-label="Toggle menu"
//         >
//           <span className="text-2xl font-light">
//             {open ? "✕" : "☰"}
//           </span>
//         </button>

//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`overflow-hidden transition-all duration-300 md:hidden ${
//           open ? "max-h-96 border-t border-slate-700" : "max-h-0"
//         }`}
//       >
//         <div className="space-y-1 bg-slate-900 px-5 py-4">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               onClick={() => setOpen(false)}
//               className={`block rounded-lg px-4 py-3 transition-all duration-200
//               ${
//                 pathname === link.href
//                   ? "bg-slate-800 font-semibold text-teal-400"
//                   : "text-slate-300 hover:bg-slate-800 hover:text-white"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Link
//             href="/#contact"
//             onClick={() => setOpen(false)}
//             className="mt-4 block rounded-lg bg-teal-600 px-4 py-3 text-center font-medium text-white transition hover:bg-teal-700"
//           >
//             Donate
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Programmes", href: "/programmes" },
    { name: "Partner", href: "/partner" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/HKMF_logo.jpeg"
            alt="HKMF Logo"
            width={48}
            height={48}
            className="h-12 w-auto"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-white">
            HKMF
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-medium transition-colors duration-200
              ${
                pathname === link.href
                  ? "text-teal-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-teal-400"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Donate Button */}
        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="rounded-lg bg-teal-600 px-5 py-2.5 font-medium text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-white transition hover:bg-slate-800 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-2xl font-light">
            {open ? "✕" : "☰"}
          </span>
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96 border-t border-slate-700" : "max-h-0"
        }`}
      >
        <div className="space-y-1 bg-slate-900 px-5 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 transition-all duration-200
              ${
                pathname === link.href
                  ? "bg-slate-800 font-semibold text-teal-400"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-lg bg-teal-600 px-4 py-3 text-center font-medium text-white transition hover:bg-teal-700"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}