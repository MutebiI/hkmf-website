// // // "use client";

// // // import { useEffect, useRef, useState } from "react";
// // // import Link from "next/link";

// // // export default function Home() {
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const sectionRef = useRef(null);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           setIsVisible(true);
// // //         }
// // //       },
// // //       { threshold: 0.1 }
// // //     );

// // //     if (sectionRef.current) {
// // //       observer.observe(sectionRef.current);
// // //     }

// // //     return () => {
// // //       if (sectionRef.current) {
// // //         observer.unobserve(sectionRef.current);
// // //       }
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen">
// // //       {/* Hero Section */}
// // //       <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center">
// // //         <div className="absolute inset-0 -z-10">
// // //           {/* Replace with your image/video */}
// // //           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-800/80 to-slate-900/90" />
          
// // //           {/* U-shaped curves */}
// // //           <svg
// // //             className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 xl:-bottom-40 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[280px]"
// // //             viewBox="0 0 1440 320"
// // //             preserveAspectRatio="none"
// // //           >
// // //             <path
// // //               fill="rgba(255, 255, 255, 0.06)"
// // //               d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
// // //             />
// // //           </svg>
// // //         </div>

// // //         <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 relative z-10">
// // //           <div className="max-w-3xl">
// // //             <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-teal-300 border border-teal-500/30 mb-6">
// // //               🇺🇬 Community-Based Organization
// // //             </span>

// // //             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
// // //               Empowering Communities,
// // //               <br />
// // //               <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
// // //                 Transforming Lives.
// // //               </span>
// // //             </h1>

// // //             <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
// // //               Hon Kyobe Muhamad Foundation (HKMF) is dedicated to empowering youth, 
// // //               uplifting women, protecting orphans and street-connected children, and 
// // //               promoting sustainable community development in Uganda.
// // //             </p>

// // //             <div className="mt-10 flex flex-col gap-4 sm:flex-row">
// // //               <Link
// // //                 href="/#partner"
// // //                 className="rounded-lg bg-teal-600 px-8 py-3.5 font-medium text-white transition hover:bg-teal-700 hover:shadow-lg"
// // //               >
// // //                 Partner With Us
// // //               </Link>
// // //               <Link
// // //                 href="/programmes"
// // //                 className="rounded-lg border border-slate-600 px-8 py-3.5 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
// // //               >
// // //                 Our Programmes →
// // //               </Link>
// // //             </div>

// // //             <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-slate-400">
// // //               <span className="flex items-center gap-2">
// // //                 <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
// // //                 Registered CBO
// // //               </span>
// // //               <span className="flex items-center gap-2">
// // //                 <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
// // //                 Kawempe, Uganda
// // //               </span>
// // //               <span className="flex items-center gap-2">
// // //                 <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
// // //                 UN SDGs Aligned
// // //               </span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Vision & Mission Section */}
// // //       <section ref={sectionRef} className="bg-white py-24 border-t border-slate-200/50">
// // //         <div className="mx-auto max-w-7xl px-5 lg:px-8">
// // //           <div className="grid gap-8 md:grid-cols-2">
// // //             <div
// // //               className={`rounded-2xl border border-slate-200 p-8 transition-all duration-700 hover:shadow-lg ${
// // //                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// // //               }`}
// // //               style={{ transitionDelay: "0ms" }}
// // //             >
// // //               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
// // //                 👁️
// // //               </div>
// // //               <h3 className="mt-4 text-xl font-bold text-slate-800">Our Vision</h3>
// // //               <p className="mt-3 text-slate-600 leading-relaxed">
// // //                 A prosperous, inclusive, and empowered society where every youth, woman, 
// // //                 orphan, and vulnerable child has equal opportunities to thrive and contribute 
// // //                 to sustainable national development.
// // //               </p>
// // //             </div>

// // //             <div
// // //               className={`rounded-2xl border border-slate-200 p-8 transition-all duration-700 hover:shadow-lg ${
// // //                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// // //               }`}
// // //               style={{ transitionDelay: "100ms" }}
// // //             >
// // //               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl">
// // //                 🎯
// // //               </div>
// // //               <h3 className="mt-4 text-xl font-bold text-slate-800">Our Mission</h3>
// // //               <p className="mt-3 text-slate-600 leading-relaxed">
// // //                 To empower vulnerable youth, women, orphans, and street-connected children 
// // //                 through education, skills development, economic empowerment, child protection, 
// // //                 healthcare, environmental conservation, and strategic partnerships.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <div
// // //             className={`mt-16 transition-all duration-700 delay-200 ${
// // //               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// // //             }`}
// // //           >
// // //             <h2 className="text-center text-2xl font-bold text-slate-800 sm:text-3xl">
// // //               Our Core Values
// // //             </h2>
// // //             <div className="mt-8 flex flex-wrap justify-center gap-3">
// // //               {[
// // //                 "Integrity", "Accountability", "Transparency", "Professionalism",
// // //                 "Respect for Human Dignity", "Equity and Inclusion", "Innovation",
// // //                 "Community Participation", "Teamwork", "Sustainability"
// // //               ].map((value, i) => (
// // //                 <span
// // //                   key={i}
// // //                   className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
// // //                 >
// // //                   {value}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Programmes Section */}
// // //       <section id="programmes" className="bg-slate-50 py-24 border-t border-slate-200/50">
// // //         <div className="mx-auto max-w-7xl px-5 lg:px-8">
// // //           <div className="text-center max-w-3xl mx-auto">
// // //             <span className="inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700">
// // //               Our Programmes
// // //             </span>
// // //             <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
// // //               What We Do
// // //             </h2>
// // //             <p className="mt-4 text-lg text-slate-600">
// // //               We focus on empowering communities through sustainable, community-led initiatives.
// // //             </p>
// // //           </div>

// // //           <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// // //             {[
// // //               {
// // //                 icon: "👦",
// // //                 title: "Youth Empowerment",
// // //                 desc: "Vocational skills, entrepreneurship, digital literacy, business incubation, leadership development, and sports."
// // //               },
// // //               {
// // //                 icon: "👩",
// // //                 title: "Women Empowerment",
// // //                 desc: "Entrepreneurship, savings groups, skills training, leadership, gender equality advocacy, and maternal health."
// // //               },
// // //               {
// // //                 icon: "🧒",
// // //                 title: "Orphans & Street Children",
// // //                 desc: "Child rescue, education sponsorship, feeding programs, shelter, counseling, family reunification."
// // //               },
// // //               {
// // //                 icon: "📚",
// // //                 title: "Education",
// // //                 desc: "Scholarships, school support, adult literacy, digital education, teacher support, library development."
// // //               },
// // //               {
// // //                 icon: "🏥",
// // //                 title: "Health",
// // //                 desc: "Medical outreaches, HIV/AIDS awareness, reproductive health, nutrition, mental health, and WASH."
// // //               },
// // //               {
// // //                 icon: "🌿",
// // //                 title: "Climate Action",
// // //                 desc: "Tree planting, waste management, climate-smart agriculture, renewable energy, and environmental awareness."
// // //               }
// // //             ].map((programme, i) => (
// // //               <div
// // //                 key={i}
// // //                 className={`rounded-2xl bg-white p-8 shadow-sm border border-slate-200 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
// // //                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
// // //                 }`}
// // //                 style={{ transitionDelay: `${i * 100}ms` }}
// // //               >
// // //                 <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-3xl">
// // //                   {programme.icon}
// // //                 </div>
// // //                 <h3 className="mt-4 text-lg font-bold text-slate-800">{programme.title}</h3>
// // //                 <p className="mt-2 text-sm text-slate-600 leading-relaxed">{programme.desc}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Partner Section */}
// // //       <section id="partner" className="bg-white py-24 border-t border-slate-200/50">
// // //         <div className="mx-auto max-w-7xl px-5 lg:px-8">
// // //           <div className="grid gap-12 lg:grid-cols-2">
// // //             <div>
// // //               <span className="text-sm font-semibold text-teal-600">Why Partner With Us</span>
// // //               <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
// // //                 Join us in creating <br />
// // //                 lasting change.
// // //               </h2>
// // //               <p className="mt-4 text-lg text-slate-600 leading-relaxed">
// // //                 We welcome partnerships with international organizations, development agencies, 
// // //                 philanthropic foundations, corporate institutions, and individuals who share our 
// // //                 commitment to sustainable development.
// // //               </p>
// // //               <ul className="mt-6 space-y-3">
// // //                 {[
// // //                   "Transparency and accountability",
// // //                   "Responsible financial management",
// // //                   "Strong governance",
// // //                   "Child safeguarding and protection",
// // //                   "Gender equality and social inclusion",
// // //                   "Measurable and sustainable impact"
// // //                 ].map((item, i) => (
// // //                   <li key={i} className="flex items-start gap-3 text-slate-700">
// // //                     <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0" />
// // //                     {item}
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>

// // //             <div className="rounded-2xl bg-teal-700 p-8 text-white">
// // //               <h3 className="text-2xl font-bold">Become Our Partner</h3>
// // //               <p className="mt-3 text-teal-100 leading-relaxed">
// // //                 We are actively seeking international partnerships to expand our programmes 
// // //                 and improve lives across Uganda.
// // //               </p>
// // //               <div className="mt-6 space-y-2 text-sm text-teal-100">
// // //                 <p>✓ Grant funding</p>
// // //                 <p>✓ Project implementation</p>
// // //                 <p>✓ Technical assistance</p>
// // //                 <p>✓ Corporate Social Responsibility (CSR)</p>
// // //                 <p>✓ Climate action initiatives</p>
// // //                 <p>✓ Youth employment and entrepreneurship</p>
// // //               </div>
// // //               <Link
// // //                 href="/contact"
// // //                 className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-medium text-teal-700 transition hover:bg-teal-50"
// // //               >
// // //                 Contact Us Today →
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Impact Stats */}
// // //       <section className="bg-slate-900 py-24">
// // //         <div className="mx-auto max-w-7xl px-5 lg:px-8">
// // //           <div className="text-center max-w-3xl mx-auto">
// // //             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
// // //               Our Impact So Far
// // //             </h2>
// // //             <p className="mt-3 text-slate-400">
// // //               Every number represents a life transformed.
// // //             </p>
// // //           </div>

// // //           <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
// // //             {[
// // //               { number: "500+", label: "Youth Empowered" },
// // //               { number: "300+", label: "Women Supported" },
// // //               { number: "200+", label: "Children Protected" },
// // //               { number: "10,000+", label: "Trees Planted" }
// // //             ].map((stat, i) => (
// // //               <div key={i} className="text-center">
// // //                 <p className="text-4xl font-bold text-teal-400">{stat.number}</p>
// // //                 <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Contact Section */}
// // //       <section id="contact" className="bg-white py-24 border-t border-slate-200/50">
// // //         <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
// // //           <span className="inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700">
// // //             Get In Touch
// // //           </span>
// // //           <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
// // //             Together, We Can Build a Better Future
// // //           </h2>
// // //           <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
// // //             Ready to partner with us or support our mission? We'd love to hear from you.
// // //           </p>

// // //           <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
// // //             <Link
// // //               href="mailto:info@hkmf.org"
// // //               className="rounded-lg bg-teal-600 px-8 py-3.5 font-medium text-white transition hover:bg-teal-700 hover:shadow-lg"
// // //             >
// // //               Email Us
// // //             </Link>
// // //             <Link
// // //               href="/about"
// // //               className="rounded-lg border border-slate-300 px-8 py-3.5 font-medium text-slate-700 transition hover:bg-slate-50"
// // //             >
// // //               Learn More
// // //             </Link>
// // //           </div>

// // //           <p className="mt-6 text-sm text-slate-500">
// // //             📍 Kawempe Division, Kampala, Uganda
// // //           </p>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import Link from "next/link";

// // export default function Home() {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //         }
// //       },
// //       { threshold: 0.1 }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => {
// //       if (sectionRef.current) {
// //         observer.unobserve(sectionRef.current);
// //       }
// //     };
// //   }, []);

// //   // Blob shapes for decorative backgrounds
// //   const blobShapes = [
// //     "rounded-[62%_38%_34%_66%/45%_38%_62%_55%]",
// //     "rounded-[62%_38%_45%_55%/40%_45%_55%_60%]",
// //     "rounded-[45%_55%_38%_62%/55%_45%_60%_40%]",
// //     "rounded-[55%_45%_62%_38%/45%_60%_40%_55%]",
// //   ];

// //   // Soft shapes for small elements
// //   const softShapes = [
// //     "rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md",
// //     "rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounded-br-md",
// //   ];

// //   return (
// //     <div className="min-h-screen">
// //       {/* Hero Section */}
// //       <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center">
// //         <div className="absolute inset-0 -z-10">
// //           {/* Replace with your image/video */}
// //           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-800/80 to-slate-900/90" />
          
// //           {/* U-shaped curves */}
// //           <svg
// //             className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 xl:-bottom-40 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[280px]"
// //             viewBox="0 0 1440 320"
// //             preserveAspectRatio="none"
// //           >
// //             <path
// //               fill="rgba(255, 255, 255, 0.06)"
// //               d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
// //             />
// //           </svg>
// //         </div>

// //         <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 relative z-10">
// //           <div className="max-w-3xl">
// //             <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-teal-300 border border-teal-500/30 mb-6">
// //               🇺🇬 Community-Based Organization
// //             </span>

// //             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
// //               Empowering Communities,
// //               <br />
// //               <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
// //                 Transforming Lives.
// //               </span>
// //             </h1>

// //             <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
// //               Hon Kyobe Muhamad Foundation (HKMF) is dedicated to empowering youth, 
// //               uplifting women, protecting orphans and street-connected children, and 
// //               promoting sustainable community development in Uganda.
// //             </p>

// //             <div className="mt-10 flex flex-col gap-4 sm:flex-row">
// //               <Link
// //                 href="/#partner"
// //                 className="rounded-lg bg-teal-600 px-8 py-3.5 font-medium text-white transition hover:bg-teal-700 hover:shadow-lg"
// //               >
// //                 Partner With Us
// //               </Link>
// //               <Link
// //                 href="/programmes"
// //                 className="rounded-lg border border-slate-600 px-8 py-3.5 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
// //               >
// //                 Our Programmes →
// //               </Link>
// //             </div>

// //             <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-slate-400">
// //               <span className="flex items-center gap-2">
// //                 <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
// //                 Registered CBO
// //               </span>
// //               <span className="flex items-center gap-2">
// //                 <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
// //                 Kawempe, Uganda
// //               </span>
// //               <span className="flex items-center gap-2">
// //                 <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
// //                 UN SDGs Aligned
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Vision & Mission Section */}
// //       <section ref={sectionRef} className="relative overflow-hidden bg-white py-28 border-t border-slate-200/50">
// //         {/* Ambient background blobs */}
// //         <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-teal-50 blur-2xl" />
// //         <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-50 blur-2xl" />

// //         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
// //           <div className="grid gap-8 md:grid-cols-2">
// //             <div
// //               className={`relative rounded-[42%_58%_38%_62%/42%_45%_55%_58%] border border-slate-200 bg-white p-10 sm:p-12 shadow-sm transition-all duration-700 hover:shadow-xl ${
// //                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// //               }`}
// //               style={{ transitionDelay: "0ms" }}
// //             >
// //               <div className="flex h-12 w-12 items-center justify-center rounded-[60%_40%_30%_70%/50%_60%_40%_50%] bg-gradient-to-br from-blue-50 to-teal-50 text-2xl">
// //                 👁️
// //               </div>
// //               <h3 className="mt-4 text-xl font-bold text-slate-800">Our Vision</h3>
// //               <p className="mt-3 text-slate-600 leading-relaxed">
// //                 A prosperous, inclusive, and empowered society where every youth, woman, 
// //                 orphan, and vulnerable child has equal opportunities to thrive and contribute 
// //                 to sustainable national development.
// //               </p>
// //             </div>

// //             <div
// //               className={`relative rounded-[58%_42%_42%_58%/58%_52%_48%_42%] border border-slate-200 bg-white p-10 sm:p-12 shadow-sm transition-all duration-700 hover:shadow-xl ${
// //                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// //               }`}
// //               style={{ transitionDelay: "100ms" }}
// //             >
// //               <div className="flex h-12 w-12 items-center justify-center rounded-[40%_60%_70%_30%/50%_40%_60%_50%] bg-gradient-to-br from-teal-50 to-emerald-50 text-2xl">
// //                 🎯
// //               </div>
// //               <h3 className="mt-4 text-xl font-bold text-slate-800">Our Mission</h3>
// //               <p className="mt-3 text-slate-600 leading-relaxed">
// //                 To empower vulnerable youth, women, orphans, and street-connected children 
// //                 through education, skills development, economic empowerment, child protection, 
// //                 healthcare, environmental conservation, and strategic partnerships.
// //               </p>
// //             </div>
// //           </div>

// //           <div
// //             className={`mt-16 transition-all duration-700 delay-200 ${
// //               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// //             }`}
// //           >
// //             <h2 className="text-center text-2xl font-bold text-slate-800 sm:text-3xl">
// //               Our Core Values
// //             </h2>
// //             <div className="mt-8 flex flex-wrap justify-center gap-3">
// //               {[
// //                 "Integrity", "Accountability", "Transparency", "Professionalism",
// //                 "Respect for Human Dignity", "Equity and Inclusion", "Innovation",
// //                 "Community Participation", "Teamwork", "Sustainability"
// //               ].map((value, i) => (
// //                 <span
// //                   key={i}
// //                   className={`px-5 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-teal-50 hover:text-teal-700 transition-colors whitespace-nowrap ${
// //                     softShapes[i % softShapes.length]
// //                   }`}
// //                 >
// //                   {value}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Wave divider */}
// //         <svg
// //           className="absolute -bottom-1 left-0 w-full h-16 sm:h-24"
// //           viewBox="0 0 1440 200"
// //           preserveAspectRatio="none"
// //         >
// //           <path
// //             fill="rgb(248 250 252)"
// //             d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
// //           />
// //         </svg>
// //       </section>

// //       {/* Programmes Section */}
// //       <section id="programmes" className="relative overflow-hidden bg-slate-50 py-28">
// //         <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-emerald-100/40 blur-3xl" />

// //         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
// //           <div className="text-center max-w-3xl mx-auto">
// //             <span className={`inline-block bg-teal-50 px-5 py-1.5 text-sm font-semibold text-teal-700 ${softShapes[0]}`}>
// //               Our Programmes
// //             </span>
// //             <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
// //               What We Do
// //             </h2>
// //             <p className="mt-4 text-lg text-slate-600">
// //               We focus on empowering communities through sustainable, community-led initiatives.
// //             </p>
// //           </div>

// //           <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
// //             {[
// //               {
// //                 icon: "👦",
// //                 title: "Youth Empowerment",
// //                 desc: "Vocational skills, entrepreneurship, digital literacy, business incubation, leadership development, and sports."
// //               },
// //               {
// //                 icon: "👩",
// //                 title: "Women Empowerment",
// //                 desc: "Entrepreneurship, savings groups, skills training, leadership, gender equality advocacy, and maternal health."
// //               },
// //               {
// //                 icon: "🧒",
// //                 title: "Orphans & Street Children",
// //                 desc: "Child rescue, education sponsorship, feeding programs, shelter, counseling, family reunification."
// //               },
// //               {
// //                 icon: "📚",
// //                 title: "Education",
// //                 desc: "Scholarships, school support, adult literacy, digital education, teacher support, library development."
// //               },
// //               {
// //                 icon: "🏥",
// //                 title: "Health",
// //                 desc: "Medical outreaches, HIV/AIDS awareness, reproductive health, nutrition, mental health, and WASH."
// //               },
// //               {
// //                 icon: "🌿",
// //                 title: "Climate Action",
// //                 desc: "Tree planting, waste management, climate-smart agriculture, renewable energy, and environmental awareness."
// //               }
// //             ].map((programme, i) => (
// //               <div
// //                 key={i}
// //                 className={`group relative bg-white p-9 sm:p-10 shadow-sm border border-slate-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
// //                   blobShapes[i % blobShapes.length]
// //                 } ${
// //                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
// //                 }`}
// //                 style={{ transitionDelay: `${i * 100}ms` }}
// //               >
// //                 <div className="flex h-14 w-14 items-center justify-center rounded-[60%_40%_40%_60%/40%_60%_40%_60%] bg-teal-50 text-3xl transition-transform duration-500 group-hover:scale-110">
// //                   {programme.icon}
// //                 </div>
// //                 <h3 className="mt-5 text-lg font-bold text-slate-800">{programme.title}</h3>
// //                 <p className="mt-2 text-sm text-slate-600 leading-relaxed">{programme.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Partner Section */}
// //       <section id="partner" className="relative overflow-hidden bg-white py-28">
// //         <div className="mx-auto max-w-7xl px-5 lg:px-8">
// //           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
// //             <div>
// //               <span className="text-sm font-semibold text-teal-600">Why Partner With Us</span>
// //               <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
// //                 Join us in creating <br />
// //                 lasting change.
// //               </h2>
// //               <p className="mt-4 text-lg text-slate-600 leading-relaxed">
// //                 We welcome partnerships with international organizations, development agencies, 
// //                 philanthropic foundations, corporate institutions, and individuals who share our 
// //                 commitment to sustainable development.
// //               </p>
// //               <ul className="mt-6 space-y-3">
// //                 {[
// //                   "Transparency and accountability",
// //                   "Responsible financial management",
// //                   "Strong governance",
// //                   "Child safeguarding and protection",
// //                   "Gender equality and social inclusion",
// //                   "Measurable and sustainable impact"
// //                 ].map((item, i) => (
// //                   <li key={i} className="flex items-start gap-3 text-slate-700">
// //                     <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0" />
// //                     {item}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             <div className="relative rounded-[42%_58%_55%_45%/42%_45%_55%_58%] bg-teal-700 p-10 sm:p-12 text-white overflow-hidden">
// //               <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-[50%_50%_40%_60%/60%_40%_50%_50%] bg-white/5" />
// //               <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-[40%_60%_50%_50%/50%_50%_60%_40%] bg-emerald-400/10" />

// //               <h3 className="relative text-2xl font-bold">
// //                 <span className="text-teal-300">B</span>ecome Our Partner
// //               </h3>
// //               <p className="relative mt-3 text-teal-100 leading-relaxed">
// //                 We are actively seeking international partnerships to expand our programmes 
// //                 and improve lives across Uganda.
// //               </p>
// //               <div className="relative mt-6 space-y-2 text-sm text-teal-100">
// //                 <p>✓ Grant funding</p>
// //                 <p>✓ Project implementation</p>
// //                 <p>✓ Technical assistance</p>
// //                 <p>✓ Corporate Social Responsibility (CSR)</p>
// //                 <p>✓ Climate action initiatives</p>
// //                 <p>✓ Youth employment and entrepreneurship</p>
// //               </div>
// //               <Link
// //                 href="/contact"
// //                 className={`relative mt-8 inline-block bg-white px-7 py-3 font-medium text-teal-700 transition hover:bg-teal-50 whitespace-nowrap ${softShapes[1]}`}
// //               >
// //                 Contact Us Today →
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Impact Stats */}
// //       <section className="relative overflow-hidden bg-slate-900 py-28">
// //         <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-teal-500/5 blur-3xl" />

// //         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
// //           <div className="text-center max-w-3xl mx-auto">
// //             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
// //               Our Impact So Far
// //             </h2>
// //             <p className="mt-3 text-slate-400">
// //               Every number represents a life transformed.
// //             </p>
// //           </div>

// //           <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
// //             {[
// //               { number: "500+", label: "Youth Empowered" },
// //               { number: "300+", label: "Women Supported" },
// //               { number: "200+", label: "Children Protected" },
// //               { number: "10,000+", label: "Trees Planted" }
// //             ].map((stat, i) => (
// //               <div
// //                 key={i}
// //                 className={`flex flex-col items-center justify-center text-center px-4 py-8 min-h-[150px] sm:min-h-[170px] bg-white/[0.03] border border-white/10 transition-colors hover:bg-white/[0.06] ${
// //                   softShapes[i % softShapes.length]
// //                 }`}
// //               >
// //                 <p className="text-2xl sm:text-4xl font-bold text-teal-400">{stat.number}</p>
// //                 <p className="mt-2 text-xs sm:text-sm text-slate-400">{stat.label}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Section */}
// //       <section id="contact" className="relative overflow-hidden bg-white py-28">
// //         <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-[55%_45%_35%_65%/60%_55%_45%_40%] bg-teal-50 blur-2xl" />
// //         <div className="pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-[35%_65%_55%_45%/45%_35%_65%_55%] bg-emerald-50 blur-2xl" />

// //         <div className="relative mx-auto max-w-4xl px-5 lg:px-8 text-center">
// //           <span className={`inline-block bg-teal-50 px-5 py-1.5 text-sm font-semibold text-teal-700 ${softShapes[0]}`}>
// //             Get In Touch
// //           </span>
// //           <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
// //             Together, We Can Build a Better Future
// //           </h2>
// //           <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
// //             Ready to partner with us or support our mission? We'd love to hear from you.
// //           </p>

// //           <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
// //             <Link
// //               href="mailto:info@hkmf.org"
// //               className={`bg-teal-600 px-8 py-3.5 font-medium text-white transition hover:bg-teal-700 hover:shadow-lg whitespace-nowrap ${softShapes[0]}`}
// //             >
// //               Email Us
// //             </Link>
// //             <Link
// //               href="/about"
// //               className={`border border-slate-300 px-8 py-3.5 font-medium text-slate-700 transition hover:bg-slate-50 whitespace-nowrap ${softShapes[1]}`}
// //             >
// //               Learn More
// //             </Link>
// //           </div>

// //           <p className="mt-6 text-sm text-slate-500">
// //             📍 Kawempe Division, Kampala, Uganda
// //           </p>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }
// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// export default function Home() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   // Blob shapes for decorative backgrounds behind cards
//   const blobShapes = [
//     "rounded-[62%_38%_34%_66%/45%_38%_62%_55%]",
//     "rounded-[62%_38%_45%_55%/40%_45%_55%_60%]",
//     "rounded-[45%_55%_38%_62%/55%_45%_60%_40%]",
//     "rounded-[55%_45%_62%_38%/45%_60%_40%_55%]",
//     "rounded-[42%_58%_45%_55%/50%_42%_58%_50%]",
//     "rounded-[58%_42%_55%_45%/42%_50%_50%_58%]",
//   ];

//   // Soft shapes for small elements
//   const softShapes = [
//     "rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md",
//     "rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounded-br-md",
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-800/80 to-slate-900/90" />
          
//           <svg
//             className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 xl:-bottom-40 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[280px]"
//             viewBox="0 0 1440 320"
//             preserveAspectRatio="none"
//           >
//             <path
//               fill="rgba(255, 255, 255, 0.06)"
//               d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             />
//           </svg>
//         </div>

//         <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 relative z-10">
//           <div className="max-w-3xl">
//             <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-teal-300 border border-teal-500/30 mb-6">
//               🇺🇬 Community-Based Organization
//             </span>

//             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
//               Empowering Communities,
//               <br />
//               <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
//                 Transforming Lives.
//               </span>
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
//               Hon Kyobe Muhamad Foundation (HKMF) is dedicated to empowering youth, 
//               uplifting women, protecting orphans and street-connected children, and 
//               promoting sustainable community development in Uganda.
//             </p>

//             <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//               <Link
//                 href="/#partner"
//                 className="rounded-lg bg-teal-600 px-8 py-3.5 font-medium text-white transition hover:bg-teal-700 hover:shadow-lg"
//               >
//                 Partner With Us
//               </Link>
//               <Link
//                 href="/programmes"
//                 className="rounded-lg border border-slate-600 px-8 py-3.5 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
//               >
//                 Our Programmes →
//               </Link>
//             </div>

//             <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-slate-400">
//               <span className="flex items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
//                 Registered CBO
//               </span>
//               <span className="flex items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
//                 Kawempe, Uganda
//               </span>
//               <span className="flex items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
//                 UN SDGs Aligned
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vision & Mission Section */}
//       <section ref={sectionRef} className="relative overflow-hidden bg-white py-28 border-t border-slate-200/50">
//         <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-teal-50 blur-2xl" />
//         <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-50 blur-2xl" />

//         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="grid gap-8 md:grid-cols-2">
//             {/* Vision Card - with blob behind */}
//             <div className="relative">
//               <div
//                 className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-blue-100/60 to-teal-100/60 ${
//                   blobShapes[0]
//                 }`}
//               />
//               <div
//                 className={`relative bg-white p-10 sm:p-12 rounded-2xl border border-slate-200 shadow-sm transition-all duration-700 hover:shadow-xl ${
//                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                 }`}
//                 style={{ transitionDelay: "0ms" }}
//               >
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-teal-50 text-2xl">
//                   👁️
//                 </div>
//                 <h3 className="mt-4 text-xl font-bold text-slate-800">Our Vision</h3>
//                 <p className="mt-3 text-slate-600 leading-relaxed">
//                   A prosperous, inclusive, and empowered society where every youth, woman, 
//                   orphan, and vulnerable child has equal opportunities to thrive and contribute 
//                   to sustainable national development.
//                 </p>
//               </div>
//             </div>

//             {/* Mission Card - with blob behind */}
//             <div className="relative">
//               <div
//                 className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-teal-100/60 to-emerald-100/60 ${
//                   blobShapes[1]
//                 }`}
//               />
//               <div
//                 className={`relative bg-white p-10 sm:p-12 rounded-2xl border border-slate-200 shadow-sm transition-all duration-700 hover:shadow-xl ${
//                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                 }`}
//                 style={{ transitionDelay: "100ms" }}
//               >
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 text-2xl">
//                   🎯
//                 </div>
//                 <h3 className="mt-4 text-xl font-bold text-slate-800">Our Mission</h3>
//                 <p className="mt-3 text-slate-600 leading-relaxed">
//                   To empower vulnerable youth, women, orphans, and street-connected children 
//                   through education, skills development, economic empowerment, child protection, 
//                   healthcare, environmental conservation, and strategic partnerships.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div
//             className={`mt-16 transition-all duration-700 delay-200 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             <h2 className="text-center text-2xl font-bold text-slate-800 sm:text-3xl">
//               Our Core Values
//             </h2>
//             <div className="mt-8 flex flex-wrap justify-center gap-3">
//               {[
//                 "Integrity", "Accountability", "Transparency", "Professionalism",
//                 "Respect for Human Dignity", "Equity and Inclusion", "Innovation",
//                 "Community Participation", "Teamwork", "Sustainability"
//               ].map((value, i) => (
//                 <span
//                   key={i}
//                   className={`px-5 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-teal-50 hover:text-teal-700 transition-colors whitespace-nowrap ${
//                     softShapes[i % softShapes.length]
//                   }`}
//                 >
//                   {value}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         <svg
//           className="absolute -bottom-1 left-0 w-full h-16 sm:h-24"
//           viewBox="0 0 1440 200"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="rgb(248 250 252)"
//             d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
//           />
//         </svg>
//       </section>

//       {/* Programmes Section */}
//       <section id="programmes" className="relative overflow-hidden bg-slate-50 py-28">
//         <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-emerald-100/40 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto">
//             <span className={`inline-block bg-teal-50 px-5 py-1.5 text-sm font-semibold text-teal-700 ${softShapes[0]}`}>
//               Our Programmes
//             </span>
//             <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
//               What We Do
//             </h2>
//             <p className="mt-4 text-lg text-slate-600">
//               We focus on empowering communities through sustainable, community-led initiatives.
//             </p>
//           </div>

//           <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 icon: "👦",
//                 title: "Youth Empowerment",
//                 desc: "Vocational skills, entrepreneurship, digital literacy, business incubation, leadership development, and sports."
//               },
//               {
//                 icon: "👩",
//                 title: "Women Empowerment",
//                 desc: "Entrepreneurship, savings groups, skills training, leadership, gender equality advocacy, and maternal health."
//               },
//               {
//                 icon: "🧒",
//                 title: "Orphans & Street Children",
//                 desc: "Child rescue, education sponsorship, feeding programs, shelter, counseling, family reunification."
//               },
//               {
//                 icon: "📚",
//                 title: "Education",
//                 desc: "Scholarships, school support, adult literacy, digital education, teacher support, library development."
//               },
//               {
//                 icon: "🏥",
//                 title: "Health",
//                 desc: "Medical outreaches, HIV/AIDS awareness, reproductive health, nutrition, mental health, and WASH."
//               },
//               {
//                 icon: "🌿",
//                 title: "Climate Action",
//                 desc: "Tree planting, waste management, climate-smart agriculture, renewable energy, and environmental awareness."
//               }
//             ].map((programme, i) => (
//               <div
//                 key={i}
//                 className={`relative ${
//                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//                 }`}
//                 style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 {/* Blob behind card */}
//                 <div
//                   className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-teal-100/60 to-emerald-100/60 ${
//                     blobShapes[i % blobShapes.length]
//                   }`}
//                 />
//                 {/* Rectangular card on top */}
//                 <div className="relative bg-white p-9 sm:p-10 rounded-2xl border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-3xl transition-transform duration-500 group-hover:scale-110">
//                     {programme.icon}
//                   </div>
//                   <h3 className="mt-5 text-lg font-bold text-slate-800">{programme.title}</h3>
//                   <p className="mt-2 text-sm text-slate-600 leading-relaxed">{programme.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partner Section */}
//       <section id="partner" className="relative overflow-hidden bg-white py-28">
//         <div className="mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
//             <div>
//               <span className="text-sm font-semibold text-teal-600">Why Partner With Us</span>
//               <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
//                 Join us in creating <br />
//                 lasting change.
//               </h2>
//               <p className="mt-4 text-lg text-slate-600 leading-relaxed">
//                 We welcome partnerships with international organizations, development agencies, 
//                 philanthropic foundations, corporate institutions, and individuals who share our 
//                 commitment to sustainable development.
//               </p>
//               <ul className="mt-6 space-y-3">
//                 {[
//                   "Transparency and accountability",
//                   "Responsible financial management",
//                   "Strong governance",
//                   "Child safeguarding and protection",
//                   "Gender equality and social inclusion",
//                   "Measurable and sustainable impact"
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3 text-slate-700">
//                     <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="relative rounded-2xl bg-teal-700 p-10 sm:p-12 text-white overflow-hidden">
//               <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-[50%_50%_40%_60%/60%_40%_50%_50%] bg-white/5" />
//               <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-[40%_60%_50%_50%/50%_50%_60%_40%] bg-emerald-400/10" />

//               <h3 className="relative text-2xl font-bold">
//                 <span className="text-teal-300">B</span>ecome Our Partner
//               </h3>
//               <p className="relative mt-3 text-teal-100 leading-relaxed">
//                 We are actively seeking international partnerships to expand our programmes 
//                 and improve lives across Uganda.
//               </p>
//               <div className="relative mt-6 space-y-2 text-sm text-teal-100">
//                 <p>✓ Grant funding</p>
//                 <p>✓ Project implementation</p>
//                 <p>✓ Technical assistance</p>
//                 <p>✓ Corporate Social Responsibility (CSR)</p>
//                 <p>✓ Climate action initiatives</p>
//                 <p>✓ Youth employment and entrepreneurship</p>
//               </div>
//               <Link
//                 href="/contact"
//                 className={`relative mt-8 inline-block bg-white px-7 py-3 font-medium text-teal-700 transition hover:bg-teal-50 whitespace-nowrap ${softShapes[1]}`}
//               >
//                 Contact Us Today →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Impact Stats */}
//       <section className="relative overflow-hidden bg-slate-900 py-28">
//         <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-teal-500/5 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//               Our Impact So Far
//             </h2>
//             <p className="mt-3 text-slate-400">
//               Every number represents a life transformed.
//             </p>
//           </div>

//           <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
//             {[
//               { number: "500+", label: "Youth Empowered" },
//               { number: "300+", label: "Women Supported" },
//               { number: "200+", label: "Children Protected" },
//               { number: "10,000+", label: "Trees Planted" }
//             ].map((stat, i) => (
//               <div
//                 key={i}
//                 className={`flex flex-col items-center justify-center text-center px-4 py-8 min-h-[150px] sm:min-h-[170px] bg-white/[0.03] border border-white/10 transition-colors hover:bg-white/[0.06] ${
//                   softShapes[i % softShapes.length]
//                 }`}
//               >
//                 <p className="text-2xl sm:text-4xl font-bold text-teal-400">{stat.number}</p>
//                 <p className="mt-2 text-xs sm:text-sm text-slate-400">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="relative overflow-hidden bg-white py-28">
//         <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-[55%_45%_35%_65%/60%_55%_45%_40%] bg-teal-50 blur-2xl" />
//         <div className="pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-[35%_65%_55%_45%/45%_35%_65%_55%] bg-emerald-50 blur-2xl" />

//         <div className="relative mx-auto max-w-4xl px-5 lg:px-8 text-center">
//           <span className={`inline-block bg-teal-50 px-5 py-1.5 text-sm font-semibold text-teal-700 ${softShapes[0]}`}>
//             Get In Touch
//           </span>
//           <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
//             Together, We Can Build a Better Future
//           </h2>
//           <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
//             Ready to partner with us or support our mission? We'd love to hear from you.
//           </p>

//           <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
//             <Link
//               href="mailto:info@hkmf.org"
//               className={`bg-teal-600 px-8 py-3.5 font-medium text-white transition hover:bg-teal-700 hover:shadow-lg whitespace-nowrap ${softShapes[0]}`}
//             >
//               Email Us
//             </Link>
//             <Link
//               href="/about"
//               className={`border border-slate-300 px-8 py-3.5 font-medium text-slate-700 transition hover:bg-slate-50 whitespace-nowrap ${softShapes[1]}`}
//             >
//               Learn More
//             </Link>
//           </div>

//           <p className="mt-6 text-sm text-slate-500">
//             📍 Kawempe Division, Kampala, Uganda
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }
// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function AboutPage() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const blobShapes = [
//     "rounded-[62%_38%_34%_66%/45%_38%_62%_55%]",
//     "rounded-[62%_38%_45%_55%/40%_45%_55%_60%]",
//     "rounded-[45%_55%_38%_62%/55%_45%_60%_40%]",
//     "rounded-[55%_45%_62%_38%/45%_60%_40%_55%]",
//   ];

//   const softShapes = [
//     "rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md",
//     "rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounded-br-md",
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section - About specific */}
//       <section className="relative isolate overflow-hidden min-h-[80vh] flex items-center">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-800/80 to-slate-900/90" />
          
//           <svg
//             className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 xl:-bottom-40 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[280px]"
//             viewBox="0 0 1440 320"
//             preserveAspectRatio="none"
//           >
//             <path
//               fill="rgba(255, 255, 255, 0.06)"
//               d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             />
//           </svg>
//         </div>

//         <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 relative z-10">
//           <div className="max-w-3xl">
//             <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-teal-300 border border-teal-500/30 mb-6">
//               📖 About HKMF
//             </span>

//             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
//               A Community-Based
//               <br />
//               <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
//                 Organization with Heart
//               </span>
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
//               Hon Kyobe Muhamad Foundation (HKMF) was established to improve the quality 
//               of life of vulnerable communities in Uganda. We are a non-profit, non-political, 
//               non-religious organization dedicated to sustainable community development.
//             </p>

//             <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//               <Link
//                 href="#mission"
//                 className="rounded-lg bg-teal-600 px-8 py-3.5 font-medium text-white transition hover:bg-teal-700 hover:shadow-lg"
//               >
//                 Our Mission
//               </Link>
//               <Link
//                 href="/contact"
//                 className="rounded-lg border border-slate-600 px-8 py-3.5 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
//               >
//                 Contact Us →
//               </Link>
//             </div>

//             <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-slate-400">
//               <span className="flex items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
//                 Founded 2024
//               </span>
//               <span className="flex items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
//                 Kawempe, Uganda
//               </span>
//               <span className="flex items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
//                 Community-Led
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Who We Are Section */}
//       <section id="mission" className="relative overflow-hidden bg-white py-28 border-t border-slate-200/50">
//         <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-teal-50 blur-2xl" />
//         <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-50 blur-2xl" />

//         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <span className={`inline-block bg-teal-50 px-5 py-1.5 text-sm font-semibold text-teal-700 ${softShapes[0]}`}>
//               Who We Are
//             </span>
//             <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
//               More Than an Organization — <br />
//               <span className="text-teal-600">A Movement for Change</span>
//             </h2>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2">
//             {/* Vision Card */}
//             <div className="relative">
//               <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-blue-100/60 to-teal-100/60 ${blobShapes[0]}`} />
//               <div className="relative bg-white p-10 sm:p-12 rounded-2xl border border-slate-200 shadow-sm transition-all duration-700 hover:shadow-xl">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-teal-50 text-3xl">
//                   👁️
//                 </div>
//                 <h3 className="mt-4 text-xl font-bold text-slate-800">Our Vision</h3>
//                 <p className="mt-3 text-slate-600 leading-relaxed">
//                   A prosperous, inclusive, and empowered society where every youth, woman, 
//                   orphan, and vulnerable child has equal opportunities to thrive and contribute 
//                   to sustainable national development.
//                 </p>
//               </div>
//             </div>

//             {/* Mission Card */}
//             <div className="relative">
//               <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-teal-100/60 to-emerald-100/60 ${blobShapes[1]}`} />
//               <div className="relative bg-white p-10 sm:p-12 rounded-2xl border border-slate-200 shadow-sm transition-all duration-700 hover:shadow-xl">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 text-3xl">
//                   🎯
//                 </div>
//                 <h3 className="mt-4 text-xl font-bold text-slate-800">Our Mission</h3>
//                 <p className="mt-3 text-slate-600 leading-relaxed">
//                   To empower vulnerable youth, women, orphans, and street-connected children 
//                   through education, skills development, economic empowerment, child protection, 
//                   healthcare, environmental conservation, and strategic partnerships.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 text-center">
//             <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               HKMF is built on the belief that empowered people create stronger communities. 
//               Through partnerships, education, skills development, entrepreneurship, advocacy, 
//               and humanitarian interventions, we provide lasting solutions that promote dignity, 
//               self-reliance, and equal opportunities for all.
//             </p>
//           </div>
//         </div>

//         <svg className="absolute -bottom-1 left-0 w-full h-16 sm:h-24" viewBox="0 0 1440 200" preserveAspectRatio="none">
//           <path
//             fill="rgb(248 250 252)"
//             d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
//           />
//         </svg>
//       </section>

//       {/* Director / Founder Section */}
//       <section className="relative overflow-hidden bg-slate-50 py-28">
//         <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-emerald-100/40 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
//             {/* Director Photo */}
//             <div className="relative order-2 lg:order-1">
//               <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-teal-100/60 to-emerald-100/60 ${blobShapes[2]}`} />
//               <div className="relative overflow-hidden rounded-2xl bg-white p-4 border border-slate-200 shadow-sm">
//                 <div className="aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl flex items-center justify-center">
//                   {
                  
//                     <Image
//                       src="/images/director.jpg"
//                       alt="Director Name"
//                       width={400}
//                       height={400}
//                       className="object-cover rounded-2xl"
//                     />
//                   }
                 
                  
//                 </div>
//               </div>
//             </div>

//             {/* Director Info */}
//             <div className="order-1 lg:order-2">
//               <span className={`inline-block bg-teal-50 px-5 py-1.5 text-sm font-semibold text-teal-700 ${softShapes[0]}`}>
//                 Leadership
//               </span>
//               <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
//                 Meet the Founder
//               </h2>
//               <p className="mt-4 text-lg text-slate-600 leading-relaxed">
//                 Hon Kyobe Muhamad Foundation was founded by a passionate community leader 
//                 who saw the need for sustainable development in vulnerable communities.
//               </p>
//               <div className="mt-6 space-y-4 text-slate-600">
//                 <p className="leading-relaxed">
//                   <span className="font-semibold text-slate-800">Hon. Kyobe Muhamad</span> 
//                   <span className="font-semibold text-white">|</span> 
//                   established HKMF with a clear vision: to create lasting change in communities 
//                   by empowering the most vulnerable members of society.
//                 </p>
//                 <p className="leading-relaxed">
//                   With a background in community development and a deep commitment to social 
//                   justice, the foundation has grown to become a trusted organization serving 
//                   thousands of beneficiaries across Uganda.
//                 </p>
//               </div>
//               <div className="mt-6 flex flex-wrap gap-3">
//                 <span className="inline-flex items-center gap-2 text-sm text-slate-600 bg-slate-100 px-4 py-2 rounded-full">
//                   <span className="h-2 w-2 rounded-full bg-teal-500" />
//                   15+ Years Experience
//                 </span>
//                 <span className="inline-flex items-center gap-2 text-sm text-slate-600 bg-slate-100 px-4 py-2 rounded-full">
//                   <span className="h-2 w-2 rounded-full bg-teal-500" />
//                   Community Leader
//                 </span>
//                 <span className="inline-flex items-center gap-2 text-sm text-slate-600 bg-slate-100 px-4 py-2 rounded-full">
//                   <span className="h-2 w-2 rounded-full bg-teal-500" />
//                   Social Advocate
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values Section */}
//       <section className="relative overflow-hidden bg-white py-28">
//         <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-teal-50 blur-2xl" />
//         <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-50 blur-2xl" />

//         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto">
//             <span className={`inline-block bg-teal-50 px-5 py-1.5 text-sm font-semibold text-teal-700 ${softShapes[0]}`}>
//               What We Stand For
//             </span>
//             <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
//               Our Core Values
//             </h2>
//             <p className="mt-4 text-lg text-slate-600">
//               These principles guide everything we do at HKMF.
//             </p>
//           </div>

//           <div className="mt-16 flex flex-wrap justify-center gap-3">
//             {[
//               "Integrity", "Accountability", "Transparency", "Professionalism",
//               "Respect for Human Dignity", "Equity and Inclusion", "Innovation",
//               "Community Participation", "Teamwork", "Sustainability"
//             ].map((value, i) => (
//               <span
//                 key={i}
//                 className={`px-6 py-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-teal-50 hover:text-teal-700 hover:shadow-md transition-all cursor-default ${
//                   softShapes[i % softShapes.length]
//                 }`}
//               >
//                 {value}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Impact Stats */}
//       <section className="relative overflow-hidden bg-slate-900 py-28">
//         <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-teal-500/5 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//               Our Impact So Far
//             </h2>
//             <p className="mt-3 text-slate-400">
//               Every number represents a life transformed.
//             </p>
//           </div>

//           <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
//             {[
//               { number: "500+", label: "Youth Empowered" },
//               { number: "300+", label: "Women Supported" },
//               { number: "200+", label: "Children Protected" },
//               { number: "10,000+", label: "Trees Planted" }
//             ].map((stat, i) => (
//               <div
//                 key={i}
//                 className={`flex flex-col items-center justify-center text-center px-4 py-8 min-h-[150px] sm:min-h-[170px] bg-white/[0.03] border border-white/10 transition-colors hover:bg-white/[0.06] ${
//                   softShapes[i % softShapes.length]
//                 }`}
//               >
//                 <p className="text-2xl sm:text-4xl font-bold text-teal-400">{stat.number}</p>
//                 <p className="mt-2 text-xs sm:text-sm text-slate-400">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section id="contact" className="relative overflow-hidden bg-teal-700 py-20">
//         <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-white/5 blur-3xl" />

//         <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
//           <h2 className="text-3xl font-bold text-white sm:text-4xl">
//             Join Us in Making a Difference
//           </h2>
//           <p className="mt-4 text-lg text-teal-100 max-w-2xl mx-auto">
//             Whether you're a partner, donor, or volunteer, your support helps us reach more 
//             communities and transform more lives.
//           </p>
//           <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
//             <Link
//               href="/contact"
//               className={`bg-white px-8 py-3.5 font-medium text-teal-700 transition hover:bg-teal-50 hover:shadow-lg whitespace-nowrap ${softShapes[0]}`}
//             >
//               Partner With Us
//             </Link>
//             <Link
//               href="/programmes"
//               className={`border border-white/30 px-8 py-3.5 font-medium text-white transition hover:bg-white/10 whitespace-nowrap ${softShapes[1]}`}
//             >
//               Our Programmes →
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const blobShapes = [
    "rounded-[62%_38%_34%_66%/45%_38%_62%_55%]",
    "rounded-[62%_38%_45%_55%/40%_45%_55%_60%]",
    "rounded-[45%_55%_38%_62%/55%_45%_60%_40%]",
    "rounded-[55%_45%_62%_38%/45%_60%_40%_55%]",
  ];

  const softShapes = [
    "rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md",
    "rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounded-br-md",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - About specific */}
      <section className="relative isolate overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-800/80 to-slate-900/90" />
          
          <svg
            className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 xl:-bottom-40 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[280px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255, 255, 255, 0.06)"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-teal-300 border border-teal-500/30 mb-6">
              📖 About HKMF
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A Community-Based Organization
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Committed to Sustainable Development
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Hon Kyobe Muhamad Foundation (HKMF) was established to improve the quality 
              of life of vulnerable communities in Uganda. We are a non-profit, non-political, 
              non-religious organization dedicated to sustainable community development.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#mission"
                className="rounded-lg bg-teal-600 px-8 py-3.5 font-medium text-white transition hover:bg-teal-700 hover:shadow-lg"
              >
                Our Mission
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-slate-600 px-8 py-3.5 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Contact Us →
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                Founded 2024
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                Kawempe, Uganda
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                Community-Led
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="mission" className="relative overflow-hidden bg-white py-28 border-t border-slate-200/50">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-teal-50 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-50 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`inline-block bg-teal-50 px-5 py-1.5 text-sm font-semibold text-teal-700 ${softShapes[0]}`}>
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              More Than an Organization — <br />
              <span className="text-teal-600">A Movement for Change</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Vision Card */}
            <div className="relative">
              <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-blue-100/60 to-teal-100/60 ${blobShapes[0]}`} />
              <div className="relative bg-white p-10 sm:p-12 rounded-2xl border border-slate-200 shadow-sm transition-all duration-700 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-teal-50 text-3xl">
                  👁️
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-800">Our Vision</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  A prosperous, inclusive, and empowered society where every youth, woman, 
                  orphan, and vulnerable child has equal opportunities to thrive and contribute 
                  to sustainable national development.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative">
              <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-teal-100/60 to-emerald-100/60 ${blobShapes[1]}`} />
              <div className="relative bg-white p-10 sm:p-12 rounded-2xl border border-slate-200 shadow-sm transition-all duration-700 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 text-3xl">
                  🎯
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-800">Our Mission</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  To empower vulnerable youth, women, orphans, and street-connected children 
                  through education, skills development, economic empowerment, child protection, 
                  healthcare, environmental conservation, and strategic partnerships.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              HKMF is built on the belief that empowered people create stronger communities. 
              Through partnerships, education, skills development, entrepreneurship, advocacy, 
              and humanitarian interventions, we provide lasting solutions that promote dignity, 
              self-reliance, and equal opportunities for all.
            </p>
          </div>
        </div>

        <svg className="absolute -bottom-1 left-0 w-full h-16 sm:h-24" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            fill="rgb(248 250 252)"
            d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
          />
        </svg>
      </section>

      {/* Director / Founder Section */}
      <section className="relative overflow-hidden bg-slate-50 py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-emerald-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Director Photo */}
            <div className="relative order-2 lg:order-1">
              <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-teal-100/60 to-emerald-100/60 ${blobShapes[2]}`} />
              <div className="relative overflow-hidden rounded-2xl bg-white p-4 border border-slate-200 shadow-sm">
                <div className="aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl flex items-center justify-center">
                  {
                  
                    <Image
                      src="/images/director.jpg"
                      alt="Director Name"
                      width={400}
                      height={400}
                      className="object-cover rounded-2xl"
                    />
                  }
                 
                  
                </div>
              </div>
            </div>

            {/* Director Info */}
            <div className="order-1 lg:order-2">
              <span className={`inline-block bg-teal-50 px-5 py-1.5 text-sm font-semibold text-teal-700 ${softShapes[0]}`}>
                Leadership
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                Meet the Founder
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Hon Kyobe Muhamad Foundation was founded by a passionate community leader 
                who saw the need for sustainable development in vulnerable communities.
              </p>
              <div className="mt-6 space-y-4 text-slate-600">
                <p className="leading-relaxed">
                  <span className="font-semibold text-slate-800">Hon. Kyobe Muhamad</span> 
                  <span className="font-semibold text-white">|</span> 
                  established HKMF with a clear vision: to create lasting change in communities 
                  by empowering the most vulnerable members of society.
                </p>
                <p className="leading-relaxed">
                  With a background in community development and a deep commitment to social 
                  justice, the foundation has grown to become a trusted organization serving 
                  thousands of beneficiaries across Uganda.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 text-sm text-slate-600 bg-slate-100 px-4 py-2 rounded-full">
                  <span className="h-2 w-2 rounded-full bg-teal-500" />
                  15+ Years Experience
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-slate-600 bg-slate-100 px-4 py-2 rounded-full">
                  <span className="h-2 w-2 rounded-full bg-teal-500" />
                  Community Leader
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-slate-600 bg-slate-100 px-4 py-2 rounded-full">
                  <span className="h-2 w-2 rounded-full bg-teal-500" />
                  Social Advocate
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-teal-50 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-50 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className={`inline-block bg-teal-50 px-5 py-1.5 text-sm font-semibold text-teal-700 ${softShapes[0]}`}>
              What We Stand For
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              These principles guide everything we do at HKMF.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {[
              "Integrity", "Accountability", "Transparency", "Professionalism",
              "Respect for Human Dignity", "Equity and Inclusion", "Innovation",
              "Community Participation", "Teamwork", "Sustainability"
            ].map((value, i) => (
              <span
                key={i}
                className={`px-6 py-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-teal-50 hover:text-teal-700 hover:shadow-md transition-all cursor-default ${
                  softShapes[i % softShapes.length]
                }`}
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative overflow-hidden bg-slate-900 py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-teal-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Impact So Far
            </h2>
            <p className="mt-3 text-slate-400">
              Every number represents a life transformed.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { number: "500+", label: "Youth Empowered" },
              { number: "300+", label: "Women Supported" },
              { number: "200+", label: "Children Protected" },
              { number: "10,000+", label: "Trees Planted" }
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center text-center px-4 py-8 min-h-[150px] sm:min-h-[170px] bg-white/[0.03] border border-white/10 transition-colors hover:bg-white/[0.06] ${
                  softShapes[i % softShapes.length]
                }`}
              >
                <p className="text-2xl sm:text-4xl font-bold text-teal-400">{stat.number}</p>
                <p className="mt-2 text-xs sm:text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative overflow-hidden bg-teal-700 py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Join Us in Making a Difference
          </h2>
          <p className="mt-4 text-lg text-teal-100 max-w-2xl mx-auto">
            Whether you're a partner, donor, or volunteer, your support helps us reach more 
            communities and transform more lives.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className={`bg-white px-8 py-3.5 font-medium text-teal-700 transition hover:bg-teal-50 hover:shadow-lg whitespace-nowrap ${softShapes[0]}`}
            >
              Partner With Us
            </Link>
            <Link
              href="/programmes"
              className={`border border-white/30 px-8 py-3.5 font-medium text-white transition hover:bg-white/10 whitespace-nowrap ${softShapes[1]}`}
            >
              Our Programmes →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}