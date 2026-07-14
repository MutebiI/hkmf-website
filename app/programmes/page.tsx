// // // // import Link from "next/link";

// // // // export default function ProgrammesPage() {
// // // //   const programmes = [
// // // //     {
// // // //       icon: "👦",
// // // //       title: "Youth Empowerment",
// // // //       items: [
// // // //         "Vocational skills training",
// // // //         "Entrepreneurship development",
// // // //         "Digital literacy",
// // // //         "Business incubation",
// // // //         "Financial literacy",
// // // //         "Career guidance",
// // // //         "Leadership development",
// // // //         "Sports and talent promotion"
// // // //       ]
// // // //     },
// // // //     {
// // // //       icon: "👩",
// // // //       title: "Women Empowerment",
// // // //       items: [
// // // //         "Women's entrepreneurship",
// // // //         "Savings and Loan Groups (VSLAs)",
// // // //         "Vocational skills",
// // // //         "Business management training",
// // // //         "Leadership development",
// // // //         "Gender equality advocacy",
// // // //         "Maternal health awareness",
// // // //         "Legal rights education"
// // // //       ]
// // // //     },
// // // //     {
// // // //       icon: "🧒",
// // // //       title: "Orphans & Street Children",
// // // //       items: [
// // // //         "Child rescue and rehabilitation",
// // // //         "Education sponsorship",
// // // //         "School supplies",
// // // //         "Feeding programmes",
// // // //         "Safe shelter support",
// // // //         "Psychosocial counselling",
// // // //         "Child protection",
// // // //         "Family reunification",
// // // //         "Life-skills development"
// // // //       ]
// // // //     },
// // // //     {
// // // //       icon: "📚",
// // // //       title: "Education",
// // // //       items: [
// // // //         "Scholarships",
// // // //         "School infrastructure support",
// // // //         "Adult literacy programmes",
// // // //         "Digital education",
// // // //         "Teacher support",
// // // //         "Library development"
// // // //       ]
// // // //     },
// // // //     {
// // // //       icon: "🏥",
// // // //       title: "Health",
// // // //       items: [
// // // //         "Community medical outreaches",
// // // //         "HIV/AIDS awareness",
// // // //         "Sexual and reproductive health education",
// // // //         "Nutrition programmes",
// // // //         "Mental health awareness",
// // // //         "Water, Sanitation and Hygiene (WASH)"
// // // //       ]
// // // //     },
// // // //     {
// // // //       icon: "🌿",
// // // //       title: "Climate Action",
// // // //       items: [
// // // //         "Tree planting",
// // // //         "Community clean-up campaigns",
// // // //         "Waste management",
// // // //         "Climate-smart agriculture",
// // // //         "Renewable energy promotion",
// // // //         "Environmental awareness"
// // // //       ]
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <div className="min-h-screen bg-white">
// // // //       {/* Hero */}
// // // //       <section className="relative isolate overflow-hidden bg-slate-900 py-24">
// // // //         <div className="absolute inset-0 -z-10">
// // // //           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/80" />
// // // //           <svg
// // // //             className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px]"
// // // //             viewBox="0 0 1440 320"
// // // //             preserveAspectRatio="none"
// // // //           >
// // // //             <path
// // // //               fill="rgba(255, 255, 255, 0.06)"
// // // //               d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
// // // //             />
// // // //           </svg>
// // // //         </div>

// // // //         <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
// // // //           <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
// // // //             Our Programmes
// // // //           </h1>
// // // //           <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
// // // //             We focus on empowering communities through sustainable, community-led initiatives.
// // // //           </p>
// // // //         </div>
// // // //       </section>

// // // //       {/* Programmes Grid */}
// // // //       <section className="py-16">
// // // //         <div className="mx-auto max-w-7xl px-5 lg:px-8">
// // // //           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
// // // //             {programmes.map((programme, i) => (
// // // //               <div
// // // //                 key={i}
// // // //                 className="rounded-2xl border border-slate-200 p-8 transition hover:shadow-lg hover:-translate-y-1"
// // // //               >
// // // //                 <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-3xl">
// // // //                   {programme.icon}
// // // //                 </div>
// // // //                 <h3 className="mt-4 text-xl font-bold text-slate-800">{programme.title}</h3>
// // // //                 <ul className="mt-4 space-y-2 text-sm text-slate-600">
// // // //                   {programme.items.map((item, j) => (
// // // //                     <li key={j} className="flex items-start gap-2">
// // // //                       <span className="text-teal-500">•</span>
// // // //                       {item}
// // // //                     </li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* CTA */}
// // // //       <section className="bg-teal-700 py-16">
// // // //         <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
// // // //           <h2 className="text-2xl font-bold text-white sm:text-3xl">
// // // //             Support Our Programmes
// // // //           </h2>
// // // //           <p className="mt-3 text-teal-100">
// // // //             Your support helps us reach more vulnerable communities.
// // // //           </p>
// // // //           <Link
// // // //             href="/contact"
// // // //             className="mt-6 inline-block rounded-lg bg-white px-8 py-3 font-medium text-teal-700 transition hover:bg-teal-50"
// // // //           >
// // // //             Partner With Us
// // // //           </Link>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }

// // // import Link from "next/link";

// // // // Minimal line icons — replace the emoji placeholders. Each is intentionally
// // // // simple/consistent (same stroke weight, same 24x24 grid) so the page reads
// // // // as one designed system rather than a grab-bag of symbols.
// // // function YouthIcon() {
// // //   return (
// // //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
// // //       <path d="M12 3 2 8l10 5 10-5-10-5Z" />
// // //       <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
// // //     </svg>
// // //   );
// // // }

// // // function WomenIcon() {
// // //   return (
// // //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
// // //       <circle cx="12" cy="8" r="3.25" />
// // //       <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
// // //     </svg>
// // //   );
// // // }

// // // function ChildProtectionIcon() {
// // //   return (
// // //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
// // //       <path d="M12 3 4 6v6c0 4.5 3.2 7.6 8 9 4.8-1.4 8-4.5 8-9V6l-8-3Z" />
// // //       <path d="m9.5 12 1.8 1.8L14.5 10" />
// // //     </svg>
// // //   );
// // // }

// // // function EducationIcon() {
// // //   return (
// // //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
// // //       <path d="M4 6.5 12 3l8 3.5-8 3.5-8-3.5Z" />
// // //       <path d="M7 8.7v5.3c0 1.4 2.2 3 5 3s5-1.6 5-3V8.7" />
// // //       <path d="M20 7v6" />
// // //     </svg>
// // //   );
// // // }

// // // function HealthIcon() {
// // //   return (
// // //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
// // //       <path d="M20 8.5c0 4.5-4.5 7.5-8 10.5-3.5-3-8-6-8-10.5a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 8 2.8Z" />
// // //       <path d="M9 11h2l1-2 2 4 1-2h2" />
// // //     </svg>
// // //   );
// // // }

// // // function ClimateIcon() {
// // //   return (
// // //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
// // //       <path d="M12 21c4-3 7-6.5 7-10.5A7 7 0 0 0 5 10.5C5 14.5 8 18 12 21Z" />
// // //       <path d="M12 21V9" />
// // //     </svg>
// // //   );
// // // }

// // // export default function ProgrammesPage() {
// // //   const programmes = [
// // //     {
// // //       Icon: YouthIcon,
// // //       title: "Youth Empowerment",
// // //       items: [
// // //         "Vocational skills training",
// // //         "Entrepreneurship development",
// // //         "Digital literacy",
// // //         "Business incubation",
// // //         "Financial literacy",
// // //         "Career guidance",
// // //         "Leadership development",
// // //         "Sports and talent promotion"
// // //       ]
// // //     },
// // //     {
// // //       Icon: WomenIcon,
// // //       title: "Women Empowerment",
// // //       items: [
// // //         "Women's entrepreneurship",
// // //         "Savings and Loan Groups (VSLAs)",
// // //         "Vocational skills",
// // //         "Business management training",
// // //         "Leadership development",
// // //         "Gender equality advocacy",
// // //         "Maternal health awareness",
// // //         "Legal rights education"
// // //       ]
// // //     },
// // //     {
// // //       Icon: ChildProtectionIcon,
// // //       title: "Orphans & Street Children",
// // //       items: [
// // //         "Child rescue and rehabilitation",
// // //         "Education sponsorship",
// // //         "School supplies",
// // //         "Feeding programmes",
// // //         "Safe shelter support",
// // //         "Psychosocial counselling",
// // //         "Child protection",
// // //         "Family reunification",
// // //         "Life-skills development"
// // //       ]
// // //     },
// // //     {
// // //       Icon: EducationIcon,
// // //       title: "Education",
// // //       items: [
// // //         "Scholarships",
// // //         "School infrastructure support",
// // //         "Adult literacy programmes",
// // //         "Digital education",
// // //         "Teacher support",
// // //         "Library development"
// // //       ]
// // //     },
// // //     {
// // //       Icon: HealthIcon,
// // //       title: "Health",
// // //       items: [
// // //         "Community medical outreaches",
// // //         "HIV/AIDS awareness",
// // //         "Sexual and reproductive health education",
// // //         "Nutrition programmes",
// // //         "Mental health awareness",
// // //         "Water, Sanitation and Hygiene (WASH)"
// // //       ]
// // //     },
// // //     {
// // //       Icon: ClimateIcon,
// // //       title: "Climate Action",
// // //       items: [
// // //         "Tree planting",
// // //         "Community clean-up campaigns",
// // //         "Waste management",
// // //         "Climate-smart agriculture",
// // //         "Renewable energy promotion",
// // //         "Environmental awareness"
// // //       ]
// // //     }
// // //   ];

// // //   // Fixed-pixel asymmetric corners for content cards — constant size
// // //   // regardless of card width, so text never collides with the curve.
// // //   const cardShapes = [
// // //     "rounded-tl-[3rem] rounded-tr-xl rounded-br-[3rem] rounded-bl-xl",
// // //     "rounded-tr-[3rem] rounded-tl-xl rounded-bl-[3rem] rounded-br-xl",
// // //     "rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl",
// // //     "rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-xl rounded-br-xl",
// // //     "rounded-t-[2.5rem] rounded-bl-xl rounded-br-xl",
// // //     "rounded-b-[2.5rem] rounded-tl-xl rounded-tr-xl",
// // //   ];

// // //   // Decorative blurred blobs sitting behind each card — free to use
// // //   // aggressive percentage radii since they hold no text.
// // //   const bleedBlobs = [
// // //     "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
// // //     "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
// // //     "rounded-[70%_30%_50%_50%/40%_60%_40%_60%]",
// // //     "rounded-[40%_60%_60%_40%/60%_40%_60%_40%]",
// // //     "rounded-[55%_45%_65%_35%/35%_65%_35%_65%]",
// // //     "rounded-[35%_65%_40%_60%/65%_35%_65%_35%]",
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-white">
// // //       {/* Hero */}
// // //       <section className="relative isolate overflow-hidden bg-slate-900 py-24">
// // //         <div className="absolute inset-0 -z-10">
// // //           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/80" />
// // //           <svg
// // //             className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px]"
// // //             viewBox="0 0 1440 320"
// // //             preserveAspectRatio="none"
// // //           >
// // //             <path
// // //               fill="rgba(255, 255, 255, 0.06)"
// // //               d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
// // //             />
// // //           </svg>
// // //         </div>

// // //         <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
// // //           <span className="inline-flex items-center rounded-full bg-teal-500/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-teal-300 border border-teal-500/30 mb-6">
// // //             Six focus areas, one shared mission
// // //           </span>
// // //           <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
// // //             Our Programmes
// // //           </h1>
// // //           <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
// // //             Practical, community-led work designed to give young people, women,
// // //             and vulnerable children the tools to build lasting stability.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* Programmes Grid */}
// // //       <section className="relative overflow-hidden bg-white py-24">
// // //         <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-teal-50 blur-2xl" />
// // //         <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-50 blur-2xl" />

// // //         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
// // //           <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
// // //             {programmes.map((programme, i) => (
// // //               <div key={i} className="relative">
// // //                 <div
// // //                   className={`pointer-events-none absolute -inset-2.5 bg-teal-50/60 blur-sm ${
// // //                     bleedBlobs[i % bleedBlobs.length]
// // //                   }`}
// // //                 />
// // //                 <div
// // //                   className={`group relative h-full bg-white p-8 sm:p-9 border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
// // //                     cardShapes[i % cardShapes.length]
// // //                   }`}
// // //                 >
// // //                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition-transform duration-300 group-hover:scale-105">
// // //                     <programme.Icon />
// // //                   </div>
// // //                   <h3 className="mt-5 text-lg font-bold text-slate-800">{programme.title}</h3>
// // //                   <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
// // //                     {programme.items.map((item, j) => (
// // //                       <li key={j} className="flex items-start gap-2.5">
// // //                         <span className="mt-1.5 h-1 w-1 rounded-full bg-teal-500 flex-shrink-0" />
// // //                         {item}
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Wave divider into CTA */}
// // //         <svg
// // //           className="absolute -bottom-1 left-0 w-full h-16 sm:h-20"
// // //           viewBox="0 0 1440 200"
// // //           preserveAspectRatio="none"
// // //         >
// // //           <path
// // //             fill="rgb(15 118 110)"
// // //             d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
// // //           />
// // //         </svg>
// // //       </section>

// // //       {/* CTA */}
// // //       <section className="relative overflow-hidden bg-teal-700 py-20">
// // //         <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-white/5 blur-3xl" />

// // //         <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
// // //           <h2 className="text-2xl font-bold text-white sm:text-3xl">
// // //             Support Our Programmes
// // //           </h2>
// // //           <p className="mt-3 text-teal-100 max-w-xl mx-auto">
// // //             Every contribution helps us reach more young people, women, and
// // //             children who are ready to change their circumstances — they just
// // //             need the opportunity.
// // //           </p>
// // //           <Link
// // //             href="/contact"
// // //             className="mt-8 inline-block rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg bg-white px-8 py-3.5 font-medium text-teal-700 transition hover:bg-teal-50"
// // //           >
// // //             Partner With Us
// // //           </Link>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }
// // import Link from "next/link";

// // function YouthIcon() {
// //   return (
// //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
// //       <path d="M12 3 2 8l10 5 10-5-10-5Z" />
// //       <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
// //     </svg>
// //   );
// // }

// // function WomenIcon() {
// //   return (
// //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
// //       <circle cx="12" cy="8" r="3.25" />
// //       <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
// //     </svg>
// //   );
// // }

// // function ChildProtectionIcon() {
// //   return (
// //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
// //       <path d="M12 3 4 6v6c0 4.5 3.2 7.6 8 9 4.8-1.4 8-4.5 8-9V6l-8-3Z" />
// //       <path d="m9.5 12 1.8 1.8L14.5 10" />
// //     </svg>
// //   );
// // }

// // function EducationIcon() {
// //   return (
// //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
// //       <path d="M4 6.5 12 3l8 3.5-8 3.5-8-3.5Z" />
// //       <path d="M7 8.7v5.3c0 1.4 2.2 3 5 3s5-1.6 5-3V8.7" />
// //       <path d="M20 7v6" />
// //     </svg>
// //   );
// // }

// // function HealthIcon() {
// //   return (
// //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
// //       <path d="M20 8.5c0 4.5-4.5 7.5-8 10.5-3.5-3-8-6-8-10.5a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 8 2.8Z" />
// //       <path d="M9 11h2l1-2 2 4 1-2h2" />
// //     </svg>
// //   );
// // }

// // function ClimateIcon() {
// //   return (
// //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
// //       <path d="M12 21c4-3 7-6.5 7-10.5A7 7 0 0 0 5 10.5C5 14.5 8 18 12 21Z" />
// //       <path d="M12 21V9" />
// //     </svg>
// //   );
// // }

// // export default function ProgrammesPage() {
// //   const programmes = [
// //     {
// //       Icon: YouthIcon,
// //       title: "Youth Empowerment",
// //       items: [
// //         "Vocational skills training",
// //         "Entrepreneurship development",
// //         "Digital literacy",
// //         "Business incubation",
// //         "Financial literacy",
// //         "Career guidance",
// //         "Leadership development",
// //         "Sports and talent promotion"
// //       ]
// //     },
// //     {
// //       Icon: WomenIcon,
// //       title: "Women Empowerment",
// //       items: [
// //         "Women's entrepreneurship",
// //         "Savings and Loan Groups (VSLAs)",
// //         "Vocational skills",
// //         "Business management training",
// //         "Leadership development",
// //         "Gender equality advocacy",
// //         "Maternal health awareness",
// //         "Legal rights education"
// //       ]
// //     },
// //     {
// //       Icon: ChildProtectionIcon,
// //       title: "Orphans & Street Children",
// //       items: [
// //         "Child rescue and rehabilitation",
// //         "Education sponsorship",
// //         "School supplies",
// //         "Feeding programmes",
// //         "Safe shelter support",
// //         "Psychosocial counselling",
// //         "Child protection",
// //         "Family reunification",
// //         "Life-skills development"
// //       ]
// //     },
// //     {
// //       Icon: EducationIcon,
// //       title: "Education",
// //       items: [
// //         "Scholarships",
// //         "School infrastructure support",
// //         "Adult literacy programmes",
// //         "Digital education",
// //         "Teacher support",
// //         "Library development"
// //       ]
// //     },
// //     {
// //       Icon: HealthIcon,
// //       title: "Health",
// //       items: [
// //         "Community medical outreaches",
// //         "HIV/AIDS awareness",
// //         "Sexual and reproductive health education",
// //         "Nutrition programmes",
// //         "Mental health awareness",
// //         "Water, Sanitation and Hygiene (WASH)"
// //       ]
// //     },
// //     {
// //       Icon: ClimateIcon,
// //       title: "Climate Action",
// //       items: [
// //         "Tree planting",
// //         "Community clean-up campaigns",
// //         "Waste management",
// //         "Climate-smart agriculture",
// //         "Renewable energy promotion",
// //         "Environmental awareness"
// //       ]
// //     }
// //   ];

// //   // True organic "blob" shapes — each corner has a DIFFERENT horizontal vs.
// //   // vertical radius (the border-radius "h1 h2 h3 h4 / v1 v2 v3 v4" syntax).
// //   // That asymmetry is what makes it read as an organic silhouette rather
// //   // than "a rectangle with rounded corners." Every value is a fixed rem
// //   // (never %), and the largest value (3rem = 48px) stays smaller than the
// //   // card's own padding (48–56px) — so however the edge curves, it never
// //   // curves further in than where the text starts. That's what keeps this
// //   // safe on narrow mobile cards while previous versions still overflowed.
// //   const blobRadii = [
// //     "3rem 1rem 1.5rem 2.5rem / 1.5rem 3rem 2.5rem 1rem",
// //     "1rem 3rem 2.5rem 1.5rem / 3rem 1.5rem 1rem 2.5rem",
// //     "2.5rem 1.5rem 3rem 1rem / 1rem 2.5rem 1.5rem 3rem",
// //     "1.5rem 2.5rem 1rem 3rem / 2.5rem 1rem 3rem 1.5rem",
// //     "2rem 3rem 1rem 2rem / 3rem 1rem 2rem 2.5rem",
// //     "3rem 2rem 2.5rem 1rem / 1rem 2.5rem 2rem 3rem",
// //   ];

// //   // Same blob logic scaled down, for the icon badges.
// //   const badgeRadii = [
// //     "1.1rem 0.4rem 0.6rem 0.9rem / 0.6rem 1.1rem 0.9rem 0.4rem",
// //     "0.4rem 1.1rem 0.9rem 0.6rem / 1.1rem 0.6rem 0.4rem 0.9rem",
// //     "0.9rem 0.6rem 1.1rem 0.4rem / 0.4rem 0.9rem 0.6rem 1.1rem",
// //     "0.6rem 0.9rem 0.4rem 1.1rem / 0.9rem 0.4rem 1.1rem 0.6rem",
// //     "0.75rem 1.1rem 0.4rem 0.75rem / 1.1rem 0.4rem 0.75rem 0.9rem",
// //     "1.1rem 0.75rem 0.9rem 0.4rem / 0.4rem 0.9rem 0.75rem 1.1rem",
// //   ];

// //   return (
// //     <div className="min-h-screen bg-white">
// //       {/* Hero */}
// //       <section className="relative isolate overflow-hidden bg-slate-900 py-24">
// //         <div className="absolute inset-0 -z-10">
// //           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/80" />
// //           <svg
// //             className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px]"
// //             viewBox="0 0 1440 320"
// //             preserveAspectRatio="none"
// //           >
// //             <path
// //               fill="rgba(255, 255, 255, 0.06)"
// //               d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
// //             />
// //           </svg>
// //         </div>

// //         <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
// //           <span className="inline-flex items-center rounded-full bg-teal-500/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-teal-300 border border-teal-500/30 mb-6">
// //             Six focus areas, one shared mission
// //           </span>
// //           <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
// //             Our Programmes
// //           </h1>
// //           <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
// //             Practical, community-led work designed to give young people, women,
// //             and vulnerable children the tools to build lasting stability.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Programmes Grid */}
// //       <section className="relative overflow-hidden bg-white py-24">
// //         <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-teal-50 blur-2xl" />
// //         <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-50 blur-2xl" />

// //         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
// //           <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
// //             {programmes.map((programme, i) => (
// //               <div
// //                 key={i}
// //                 className="group h-full bg-white p-12 sm:p-14 border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
// //                 style={{ borderRadius: blobRadii[i % blobRadii.length] }}
// //               >
// //                 <div
// //                   className="flex h-14 w-14 items-center justify-center bg-teal-50 text-teal-700 transition-transform duration-300 group-hover:scale-105"
// //                   style={{ borderRadius: badgeRadii[i % badgeRadii.length] }}
// //                 >
// //                   <programme.Icon />
// //                 </div>
// //                 <h3 className="mt-5 text-lg font-bold text-slate-800">{programme.title}</h3>
// //                 <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
// //                   {programme.items.map((item, j) => (
// //                     <li key={j} className="flex items-start gap-2.5">
// //                       <span className="mt-1.5 h-1 w-1 rounded-full bg-teal-500 flex-shrink-0" />
// //                       {item}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Wave divider into CTA */}
// //         <svg
// //           className="absolute -bottom-1 left-0 w-full h-16 sm:h-20"
// //           viewBox="0 0 1440 200"
// //           preserveAspectRatio="none"
// //         >
// //           <path
// //             fill="rgb(15 118 110)"
// //             d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
// //           />
// //         </svg>
// //       </section>

// //       {/* CTA */}
// //       <section className="relative overflow-hidden bg-teal-700 py-20">
// //         <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-white/5 blur-3xl" />

// //         <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
// //           <h2 className="text-2xl font-bold text-white sm:text-3xl">
// //             Support Our Programmes
// //           </h2>
// //           <p className="mt-3 text-teal-100 max-w-xl mx-auto">
// //             Every contribution helps us reach more young people, women, and
// //             children who are ready to change their circumstances — they just
// //             need the opportunity.
// //           </p>
// //           <Link
// //             href="/contact"
// //             className="mt-8 inline-block rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg bg-white px-8 py-3.5 font-medium text-teal-700 transition hover:bg-teal-50"
// //           >
// //             Partner With Us
// //           </Link>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }
// import Link from "next/link";

// function YouthIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
//       <path d="M12 3 2 8l10 5 10-5-10-5Z" />
//       <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
//     </svg>
//   );
// }

// function WomenIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
//       <circle cx="12" cy="8" r="3.25" />
//       <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
//     </svg>
//   );
// }

// function ChildProtectionIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
//       <path d="M12 3 4 6v6c0 4.5 3.2 7.6 8 9 4.8-1.4 8-4.5 8-9V6l-8-3Z" />
//       <path d="m9.5 12 1.8 1.8L14.5 10" />
//     </svg>
//   );
// }

// function EducationIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
//       <path d="M4 6.5 12 3l8 3.5-8 3.5-8-3.5Z" />
//       <path d="M7 8.7v5.3c0 1.4 2.2 3 5 3s5-1.6 5-3V8.7" />
//       <path d="M20 7v6" />
//     </svg>
//   );
// }

// function HealthIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-shrink-0">
//       <path d="M20 8.5c0 4.5-4.5 7.5-8 10.5-3.5-3-8-6-8-10.5a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 8 2.8Z" />
//       <path d="M9 11h2l1-2 2 4 1-2h2" />
//     </svg>
//   );
// }

// function ClimateIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
//       <path d="M12 21c4-3 7-6.5 7-10.5A7 7 0 0 0 5 10.5C5 14.5 8 18 12 21Z" />
//       <path d="M12 21V9" />
//     </svg>
//   );
// }

// export default function ProgrammesPage() {
//   const programmes = [
//     {
//       Icon: YouthIcon,
//       title: "Youth Empowerment",
//       items: [
//         "Vocational skills training",
//         "Entrepreneurship development",
//         "Digital literacy",
//         "Business incubation",
//         "Financial literacy",
//         "Career guidance",
//         "Leadership development",
//         "Sports and talent promotion"
//       ]
//     },
//     {
//       Icon: WomenIcon,
//       title: "Women Empowerment",
//       items: [
//         "Women's entrepreneurship",
//         "Savings and Loan Groups (VSLAs)",
//         "Vocational skills",
//         "Business management training",
//         "Leadership development",
//         "Gender equality advocacy",
//         "Maternal health awareness",
//         "Legal rights education"
//       ]
//     },
//     {
//       Icon: ChildProtectionIcon,
//       title: "Orphans & Street Children",
//       items: [
//         "Child rescue and rehabilitation",
//         "Education sponsorship",
//         "School supplies",
//         "Feeding programmes",
//         "Safe shelter support",
//         "Psychosocial counselling",
//         "Child protection",
//         "Family reunification",
//         "Life-skills development"
//       ]
//     },
//     {
//       Icon: EducationIcon,
//       title: "Education",
//       items: [
//         "Scholarships",
//         "School infrastructure support",
//         "Adult literacy programmes",
//         "Digital education",
//         "Teacher support",
//         "Library development"
//       ]
//     },
//     {
//       Icon: HealthIcon,
//       title: "Health",
//       items: [
//         "Community medical outreaches",
//         "HIV/AIDS awareness",
//         "Sexual and reproductive health education",
//         "Nutrition programmes",
//         "Mental health awareness",
//         "Water, Sanitation and Hygiene (WASH)"
//       ]
//     },
//     {
//       Icon: ClimateIcon,
//       title: "Climate Action",
//       items: [
//         "Tree planting",
//         "Community clean-up campaigns",
//         "Waste management",
//         "Climate-smart agriculture",
//         "Renewable energy promotion",
//         "Environmental awareness"
//       ]
//     }
//   ];

//   // Large, visibly dramatic blob shapes for the DECORATIVE layer behind each
//   // card. This layer holds no text, so the radius can be big and obvious —
//   // that's what actually reads as "organic" from a normal viewing distance.
//   const bleedBlobs = [
//     "rounded-[62%_38%_31%_69%/58%_35%_65%_42%]",
//     "rounded-[35%_65%_68%_32%/32%_60%_40%_68%]",
//     "rounded-[68%_32%_45%_55%/40%_62%_38%_60%]",
//     "rounded-[40%_60%_65%_35%/62%_38%_60%_40%]",
//     "rounded-[55%_45%_35%_65%/35%_60%_45%_65%]",
//     "rounded-[45%_55%_60%_40%/65%_40%_55%_35%]",
//   ];

//   // The content card itself: just TWO opposite corners get a confident,
//   // fixed-rem curve; the other two stay near-square. Two clear curves read
//   // as intentional and organic without needing the whole outline to wave —
//   // and because only 2 corners move, there's no risk of the curve meeting
//   // itself or the text from both sides at once.
//   const cardCorners = [
//     "rounded-tl-[3.5rem] rounded-br-[3.5rem]",
//     "rounded-tr-[3.5rem] rounded-bl-[3.5rem]",
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero */}
//       <section className="relative isolate overflow-hidden bg-slate-900 py-24">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/80" />
//           <svg
//             className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px]"
//             viewBox="0 0 1440 320"
//             preserveAspectRatio="none"
//           >
//             <path
//               fill="rgba(255, 255, 255, 0.06)"
//               d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             />
//           </svg>
//         </div>

//         <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
//           <span className="inline-flex items-center rounded-full bg-teal-500/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-teal-300 border border-teal-500/30 mb-6">
//             Six focus areas, one shared mission
//           </span>
//           <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
//             Our Programmes
//           </h1>
//           <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
//             Practical, community-led work designed to give young people, women,
//             and vulnerable children the tools to build lasting stability.
//           </p>
//         </div>
//       </section>

//       {/* Programmes Grid */}
//       <section className="relative overflow-hidden bg-white py-24">
//         <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-teal-50 blur-2xl" />
//         <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-50 blur-2xl" />

//         <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
//           <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
//             {programmes.map((programme, i) => (
//               <div key={i} className="relative pt-4 pl-4">
//                 {/* Decorative blob — sized bigger than the card and offset,
//                     so a visible edge of color peeks out around it. This is
//                     where the "organic, not rectangular" feeling comes from. */}
//                 <div
//                   className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-teal-100/80 to-emerald-50/80 ${
//                     bleedBlobs[i % bleedBlobs.length]
//                   }`}
//                 />
//                 {/* Content card — mostly square with two confident curved
//                     corners. Safe at any width; the wow-factor comes from
//                     the blob showing behind it, not from the card itself. */}
//                 <div
//                   className={`group relative h-full bg-white p-9 sm:p-10 border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
//                     cardCorners[i % cardCorners.length]
//                   }`}
//                 >
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition-transform duration-300 group-hover:scale-105">
//                     <programme.Icon />
//                   </div>
//                   <h3 className="mt-5 text-lg font-bold text-slate-800">{programme.title}</h3>
//                   <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
//                     {programme.items.map((item, j) => (
//                       <li key={j} className="flex items-start gap-2.5">
//                         <span className="mt-1.5 h-1 w-1 rounded-full bg-teal-500 flex-shrink-0" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Wave divider into CTA */}
//         <svg
//           className="absolute -bottom-1 left-0 w-full h-16 sm:h-20"
//           viewBox="0 0 1440 200"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="rgb(15 118 110)"
//             d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
//           />
//         </svg>
//       </section>

//       {/* CTA */}
//       <section className="relative overflow-hidden bg-teal-700 py-20">
//         <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-white/5 blur-3xl" />

//         <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
//           <h2 className="text-2xl font-bold text-white sm:text-3xl">
//             Support Our Programmes
//           </h2>
//           <p className="mt-3 text-teal-100 max-w-xl mx-auto">
//             Every contribution helps us reach more young people, women, and
//             children who are ready to change their circumstances — they just
//             need the opportunity.
//           </p>
//           <Link
//             href="/contact"
//             className="mt-8 inline-block rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg bg-white px-8 py-3.5 font-medium text-teal-700 transition hover:bg-teal-50"
//           >
//             Partner With Us
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }
import Link from "next/link";

function YouthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-shrink-0">
      <path d="M12 3L2 8l10 5 10-5-10-5Z" />
      <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
    </svg>
  );
}

function WomenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-shrink-0">
      <circle cx="12" cy="9" r="3.5" />
      <path d="M6 21v-3a6 6 0 0 1 12 0v3" />
    </svg>
  );
}

function ChildProtectionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-shrink-0">
      <path d="M12 3L4 6v6c0 4.5 3.2 7.6 8 9 4.8-1.4 8-4.5 8-9V6l-8-3Z" />
      <path d="M9.5 12l1.8 1.8L14.5 10" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-shrink-0">
      <path d="M4 6.5L12 3l8 3.5-8 3.5-8-3.5Z" />
      <path d="M7 8.7v5.3c0 1.4 2.2 3 5 3s5-1.6 5-3V8.7" />
      <path d="M20 7v6" />
    </svg>
  );
}

function HealthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-shrink-0">
      <path d="M20 8.5c0 4.5-4.5 7.5-8 10.5-3.5-3-8-6-8-10.5a4.5 4.5 0 0 1 8-2.8 4.5 4.5 0 0 1 8 2.8Z" />
      <path d="M9 11h2l1-2 2 4 1-2h2" />
    </svg>
  );
}

function ClimateIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-shrink-0">
      <path d="M12 21c4-3 7-6.5 7-10.5A7 7 0 0 0 5 10.5C5 14.5 8 18 12 21Z" />
      <path d="M12 21V9" />
    </svg>
  );
}

export default function ProgrammesPage() {
  const programmes = [
    {
      Icon: YouthIcon,
      title: "Youth Empowerment",
      items: [
        "Vocational skills training",
        "Entrepreneurship development",
        "Digital literacy",
        "Business incubation",
        "Financial literacy",
        "Career guidance",
        "Leadership development",
        "Sports and talent promotion"
      ]
    },
    {
      Icon: WomenIcon,
      title: "Women Empowerment",
      items: [
        "Women's entrepreneurship",
        "Savings and Loan Groups (VSLAs)",
        "Vocational skills",
        "Business management training",
        "Leadership development",
        "Gender equality advocacy",
        "Maternal health awareness",
        "Legal rights education"
      ]
    },
    {
      Icon: ChildProtectionIcon,
      title: "Orphans & Street Children",
      items: [
        "Child rescue and rehabilitation",
        "Education sponsorship",
        "School supplies",
        "Feeding programmes",
        "Safe shelter support",
        "Psychosocial counselling",
        "Child protection",
        "Family reunification",
        "Life-skills development"
      ]
    },
    {
      Icon: EducationIcon,
      title: "Education",
      items: [
        "Scholarships",
        "School infrastructure support",
        "Adult literacy programmes",
        "Digital education",
        "Teacher support",
        "Library development"
      ]
    },
    {
      Icon: HealthIcon,
      title: "Health",
      items: [
        "Community medical outreaches",
        "HIV/AIDS awareness",
        "Sexual and reproductive health education",
        "Nutrition programmes",
        "Mental health awareness",
        "Water, Sanitation and Hygiene (WASH)"
      ]
    },
    {
      Icon: ClimateIcon,
      title: "Climate Action",
      items: [
        "Tree planting",
        "Community clean-up campaigns",
        "Waste management",
        "Climate-smart agriculture",
        "Renewable energy promotion",
        "Environmental awareness"
      ]
    }
  ];

  const bleedBlobs = [
    "rounded-[62%_38%_31%_69%/58%_35%_65%_42%]",
    "rounded-[35%_65%_68%_32%/32%_60%_40%_68%]",
    "rounded-[68%_32%_45%_55%/40%_62%_38%_60%]",
    "rounded-[40%_60%_65%_35%/62%_38%_60%_40%]",
    "rounded-[55%_45%_35%_65%/35%_60%_45%_65%]",
    "rounded-[45%_55%_60%_40%/65%_40%_55%_35%]",
  ];

  const cardCorners = [
    "rounded-tl-[3.5rem] rounded-br-[3.5rem]",
    "rounded-tr-[3.5rem] rounded-bl-[3.5rem]",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-900 py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/80" />
          <svg
            className="absolute left-0 w-full -bottom-8 sm:-bottom-12 md:-bottom-20 lg:-bottom-32 h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255, 255, 255, 0.06)"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,256C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <span className="inline-flex items-center rounded-full bg-teal-500/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-teal-300 border border-teal-500/30 mb-6">
            Six focus areas, one shared mission
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Programmes
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Practical, community-led work designed to give young people, women,
            and vulnerable children the tools to build lasting stability.
          </p>
        </div>
      </section>

      {/* Programmes Grid */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-teal-50 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-50 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((programme, i) => (
              <div key={i} className="relative pt-4 pl-4">
                <div
                  className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-teal-100/80 to-emerald-50/80 ${
                    bleedBlobs[i % bleedBlobs.length]
                  }`}
                />
                <div
                  className={`group relative h-full bg-white p-9 sm:p-10 border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    cardCorners[i % cardCorners.length]
                  }`}
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition-transform duration-300 group-hover:scale-105">
                    <programme.Icon />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-800">{programme.title}</h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                    {programme.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-teal-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <svg
          className="absolute -bottom-1 left-0 w-full h-16 sm:h-20"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            fill="rgb(15 118 110)"
            d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
          />
        </svg>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-teal-700 py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Support Our Programmes
          </h2>
          <p className="mt-3 text-teal-100 max-w-xl mx-auto">
            Every contribution helps us reach more young people, women, and
            children who are ready to change their circumstances — they just
            need the opportunity.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg bg-white px-8 py-3.5 font-medium text-teal-700 transition hover:bg-teal-50"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  );
}