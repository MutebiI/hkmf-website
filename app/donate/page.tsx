// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function DonatePage() {
//   const [selectedAmount, setSelectedAmount] = useState("");
//   const [customAmount, setCustomAmount] = useState("");
//   const [givingType, setGivingType] = useState("one-time");

//   const presetAmounts = [
//     { value: "100000", label: "100,000 UGX", impact: "Supports entrepreneurship training for 5 women" },
//     { value: "250000", label: "250,000 UGX", impact: "Funds youth empowerment workshop for 20 young people" },
//     { value: "500000", label: "500,000 UGX", impact: "Provides financial literacy training for 30 community members" },
//     { value: "1000000", label: "1,000,000 UGX", impact: "Sponsors community outreach event reaching 50+ households" },
//     { value: "5000000", label: "5,000,000 UGX", impact: "Underwrites a full skills development programme for one community" },
//   ];

//   const paymentLinks = {
//     "100000": "https://wallet.wearemarz.com/p/donation-to-kyobe-muhamad-foundation-lecmdj",
//     "250000": "https://wallet.wearemarz.com/p/donation-to-kyobe-muhamad-foundation-biloui",
//     "500000": "https://wallet.wearemarz.com/p/donation-to-kyobe-muhamad-foundation-xbfucl",
//     "1000000": "https://wallet.wearemarz.com/p/donation-to-kyobe-muhammad-foundation-kvnvsd",
//     "5000000": "https://wallet.wearemarz.com/p/donation-to-kyobe-muhammad-foundation-ve9cer",
//     "custom": "https://wallet.wearemarz.com/pay/6b0f5985-ec65-4f76-9ef4-257b9deb7b6c",
//   };

//   const handleDonate = () => {
//     let link = "";
//     if (selectedAmount === "custom") {
//       link = paymentLinks.custom;
//     } else if (selectedAmount) {
//       link = paymentLinks[selectedAmount as keyof typeof paymentLinks] || "";
//     }
//     if (link) {
//       window.open(link, "_blank");
//     } else {
//       alert("Please select a donation amount.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* ===== HERO ===== */}
//       <section className="relative isolate overflow-hidden min-h-[35vh] flex items-center">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute inset-0 bg-gradient-to-b from-teal-900/90 via-teal-800/80 to-teal-700/85" />
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

//         <div className="mx-auto max-w-4xl px-5 py-16 lg:py-20 lg:px-8 relative z-10">
//           <div className="text-center">
//             <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-teal-200 border border-teal-500/20 mb-4">
//               <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
//               Give Today
//             </span>
//             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
//               Your Gift
//               <br />
//               <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
//                 Changes Lives
//               </span>
//             </h1>
//             <p className="mt-3 max-w-2xl mx-auto text-lg text-teal-100/80">
//               Every donation goes directly to programs that uplift individuals, strengthen families, and build brighter futures in our community.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ===== DONATION FORM ===== */}
//       <section className="py-16 bg-slate-50/50">
//         <div className="mx-auto max-w-3xl px-5 lg:px-8">
//           <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
//             {/* Giving Frequency */}
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-slate-800">Give Today</h2>
//               <p className="mt-1 text-sm text-slate-500">Choose your giving frequency</p>
//             </div>

//             <div className="mt-6 flex rounded-xl bg-slate-100 p-1 max-w-xs mx-auto">
//               <button
//                 onClick={() => setGivingType("one-time")}
//                 className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
//                   givingType === "one-time"
//                     ? "bg-white text-teal-700 shadow-sm"
//                     : "text-slate-600 hover:text-slate-800"
//                 }`}
//               >
//                 One-Time
//               </button>
//               <button
//                 onClick={() => setGivingType("monthly")}
//                 className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
//                   givingType === "monthly"
//                     ? "bg-white text-teal-700 shadow-sm"
//                     : "text-slate-600 hover:text-slate-800"
//                 }`}
//               >
//                 Monthly
//               </button>
//             </div>

//             {/* Preset Amounts */}
//             <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
//               {presetAmounts.map((amount) => (
//                 <button
//                   key={amount.value}
//                   onClick={() => {
//                     setSelectedAmount(amount.value);
//                     setCustomAmount("");
//                   }}
//                   className={`py-3 px-4 rounded-xl border-2 font-medium transition-all ${
//                     selectedAmount === amount.value
//                       ? "border-teal-600 bg-teal-50 text-teal-700"
//                       : "border-slate-200 hover:border-teal-300 hover:bg-teal-50/50"
//                   }`}
//                 >
//                   {amount.label}
//                 </button>
//               ))}
//             </div>

//             {/* Custom Amount */}
//             <div className="mt-4">
//               <label className="block text-sm font-medium text-slate-700">
//                 Or enter custom amount (UGX)
//               </label>
//               <div className="mt-1 flex">
//                 <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 text-slate-500">
//                   UGX
//                 </span>
//                 <input
//                   type="number"
//                   value={customAmount}
//                   onChange={(e) => {
//                     setCustomAmount(e.target.value);
//                     setSelectedAmount("custom");
//                   }}
//                   placeholder="Enter amount"
//                   className="flex-1 w-full rounded-r-xl border border-slate-300 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition"
//                   min="1000"
//                 />
//               </div>
//               <p className="mt-1 text-xs text-slate-400">Minimum amount: 1,000 UGX</p>
//             </div>

//             {/* Impact Display */}
//             {selectedAmount && selectedAmount !== "custom" && (
//               <div className="mt-4 p-4 rounded-xl bg-teal-50 border border-teal-200/50">
//                 <p className="text-sm text-teal-700">
//                   <span className="font-semibold">Your impact:</span>{" "}
//                   {presetAmounts.find((a) => a.value === selectedAmount)?.impact}
//                 </p>
//               </div>
//             )}

//             {/* Donate Button */}
//             <button
//               onClick={handleDonate}
//               className="mt-6 w-full rounded-full bg-teal-600 px-8 py-4 font-semibold text-white transition-all hover:bg-teal-700 hover:shadow-lg"
//             >
//               Donate Now
//             </button>

//             <p className="mt-3 text-center text-xs text-slate-500">
//               🔒 Secure payment via MarzPay • Mobile Money (MTN/Airtel) & Card accepted
//             </p>
//           </div>

//           {/* ===== OTHER WAYS TO GIVE ===== */}
//           <div className="mt-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
//             <h3 className="text-lg font-bold text-slate-800 text-center">
//               Other Ways to Give
//             </h3>
//             <div className="mt-6 grid gap-4 sm:grid-cols-2">
//               {/* Bank Transfer */}
//               <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
//                 <h4 className="font-semibold text-slate-800">🏦 Bank Transfer</h4>
//                 <p className="mt-2 text-sm text-slate-600">
//                   <span className="font-medium">Bank:</span> Tropical Bank Uganda
//                 </p>
//                 <p className="text-sm text-slate-600">
//                   <span className="font-medium">Account Name:</span> Kyobe Muhamad Foundation (KMF)
//                 </p>
//                 <p className="text-sm text-slate-600">
//                   <span className="font-medium">Account Number:</span> 2002367737
//                 </p>
//                 <p className="text-sm text-slate-600">
//                   <span className="font-medium">Currency:</span> UGX
//                 </p>
//                 <p className="mt-2 text-xs text-slate-500">
//                   After transfer, email us at info@hkmf.org to confirm your donation.
//                 </p>
//               </div>

//               {/* Mobile Money */}
//               <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
//                 <h4 className="font-semibold text-slate-800">📱 Mobile Money</h4>
//                 <p className="mt-2 text-sm text-slate-600">
//                   <span className="font-medium">MTN:</span> [Insert Number]
//                 </p>
//                 <p className="text-sm text-slate-600">
//                   <span className="font-medium">Airtel:</span> [Insert Number]
//                 </p>
//                 <p className="mt-2 text-xs text-slate-500">
//                   Dial *165# (MTN) or *185# (Airtel) and follow the prompts.
//                 </p>
//               </div>
//             </div>

//             {/* Trust Badge */}
//             <div className="mt-6 text-center">
//               <p className="text-xs text-slate-500">
//                 ✅ Registered Community-Based Organization (CBO) • All donations go directly to our programmes
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== CTA ===== */}
//       <section className="bg-teal-700 py-16">
//         <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
//           <h2 className="text-3xl font-bold text-white sm:text-4xl">
//             Every Contribution Counts
//           </h2>
//           <p className="mt-4 text-lg text-teal-100/80 max-w-2xl mx-auto">
//             Your donation helps us reach more communities and transform more lives in Uganda.
//           </p>
//           <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
//             <Link
//               href="/programmes"
//               className="rounded-full bg-white px-8 py-3.5 font-medium text-teal-700 transition-all hover:bg-teal-50 hover:shadow-lg"
//             >
//               Our Programmes
//             </Link>
//             <Link
//               href="/contact"
//               className="rounded-full border border-teal-400/30 px-8 py-3.5 font-medium text-white transition-all hover:bg-teal-800/30"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [givingType, setGivingType] = useState("one-time");
  const [currency, setCurrency] = useState("UGX");

  const exchangeRate = 3700; // 1 USD = 3700 UGX

  const presetAmounts = {
    UGX: [
      { value: "100000", label: "100,000 UGX", impact: "Supports entrepreneurship training for 5 women" },
      { value: "250000", label: "250,000 UGX", impact: "Funds youth empowerment workshop for 20 young people" },
      { value: "500000", label: "500,000 UGX", impact: "Provides financial literacy training for 30 community members" },
      { value: "1000000", label: "1,000,000 UGX", impact: "Sponsors community outreach event reaching 50+ households" },
      { value: "5000000", label: "5,000,000 UGX", impact: "Underwrites a full skills development programme for one community" },
    ],
    USD: [
      { value: "27", label: "$27", impact: "Supports entrepreneurship training for 5 women" },
      { value: "68", label: "$68", impact: "Funds youth empowerment workshop for 20 young people" },
      { value: "135", label: "$135", impact: "Provides financial literacy training for 30 community members" },
      { value: "270", label: "$270", impact: "Sponsors community outreach event reaching 50+ households" },
      { value: "1351", label: "$1,351", impact: "Underwrites a full skills development programme for one community" },
    ]
  };

  const paymentLinks = {
    "100000": "https://wallet.wearemarz.com/p/donation-to-kyobe-muhamad-foundation-lecmdj",
    "250000": "https://wallet.wearemarz.com/p/donation-to-kyobe-muhamad-foundation-biloui",
    "500000": "https://wallet.wearemarz.com/p/donation-to-kyobe-muhamad-foundation-xbfucl",
    "1000000": "https://wallet.wearemarz.com/p/donation-to-kyobe-muhammad-foundation-kvnvsd",
    "5000000": "https://wallet.wearemarz.com/p/donation-to-kyobe-muhammad-foundation-ve9cer",
    "custom": "https://wallet.wearemarz.com/pay/6b0f5985-ec65-4f76-9ef4-257b9deb7b6c",
  };

  const handleDonate = () => {
    let link = "";
    if (selectedAmount === "custom") {
      link = paymentLinks.custom;
    } else if (selectedAmount) {
      link = paymentLinks[selectedAmount as keyof typeof paymentLinks] || "";
    }
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("Please select a donation amount.");
    }
  };

  const currentAmounts = currency === "UGX" ? presetAmounts.UGX : presetAmounts.USD;

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden min-h-[30vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/90 via-teal-800/80 to-teal-700/85" />
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

        <div className="mx-auto max-w-4xl px-5 py-12 lg:py-16 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Logo on hero */}
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <span className="text-3xl font-bold text-white">HKMF</span>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-teal-200 border border-teal-500/20 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
              Give Today
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Gift
              <br />
              <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                Changes Lives
              </span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-teal-100/80">
              Every donation goes directly to programs that uplift individuals, strengthen families, and build brighter futures in our community.
            </p>
          </div>
        </div>
      </section>

      {/* ===== DONATION FORM ===== */}
      <section className="py-16 bg-slate-50/50">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-800">Give Today</h2>
              <p className="mt-1 text-sm text-slate-500">Choose your giving frequency</p>
            </div>

            {/* Giving Frequency */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <div className="flex rounded-xl bg-slate-100 p-1 flex-1">
                <button
                  onClick={() => setGivingType("one-time")}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                    givingType === "one-time"
                      ? "bg-white text-teal-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-800"
                  }`}
                >
                  One-Time
                </button>
                <button
                  onClick={() => setGivingType("monthly")}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                    givingType === "monthly"
                      ? "bg-white text-teal-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-800"
                  }`}
                >
                  Monthly
                </button>
              </div>

              {/* Currency Toggle */}
              <div className="flex rounded-xl bg-slate-100 p-1">
                <button
                  onClick={() => setCurrency("UGX")}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                    currency === "UGX"
                      ? "bg-white text-teal-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-800"
                  }`}
                >
                  UGX
                </button>
                <button
                  onClick={() => setCurrency("USD")}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                    currency === "USD"
                      ? "bg-white text-teal-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-800"
                  }`}
                >
                  USD
                </button>
              </div>
            </div>

            {/* Preset Amounts */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {currentAmounts.map((amount) => (
                <button
                  key={amount.value}
                  onClick={() => {
                    setSelectedAmount(amount.value);
                    setCustomAmount("");
                  }}
                  className={`py-3 px-4 rounded-xl border-2 font-medium transition-all ${
                    selectedAmount === amount.value
                      ? "border-teal-600 bg-teal-50 text-teal-700"
                      : "border-slate-200 hover:border-teal-300 hover:bg-teal-50/50"
                  }`}
                >
                  {amount.label}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">
                Or enter custom amount ({currency})
              </label>
              <div className="mt-1 flex">
                <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 text-slate-500">
                  {currency}
                </span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount("custom");
                  }}
                  placeholder={`Enter amount in ${currency}`}
                  className="flex-1 w-full rounded-r-xl border border-slate-300 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition"
                  min={currency === "UGX" ? "50000" : "14"}
                />
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Minimum amount: {currency === "UGX" ? "50,000 UGX" : "$14"}
              </p>
            </div>

            {/* Impact Display */}
            {selectedAmount && selectedAmount !== "custom" && (
              <div className="mt-4 p-4 rounded-xl bg-teal-50 border border-teal-200/50">
                <p className="text-sm text-teal-700">
                  <span className="font-semibold">Your impact:</span>{" "}
                  {currentAmounts.find((a) => a.value === selectedAmount)?.impact}
                </p>
              </div>
            )}

            {/* Foundation Logo & Trust Info */}
            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  HKMF
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Kyobe Muhamad Foundation</p>
                  <p className="text-xs text-slate-500">Registered Community-Based Organization (CBO)</p>
                </div>
              </div>
            </div>

            {/* MarzPay Security Info */}
            <div className="mt-4 p-4 rounded-xl bg-blue-50 border border-blue-200/50">
              <div className="flex items-start gap-3">
                <span className="text-lg">🔒</span>
                <div>
                  <p className="text-sm font-medium text-blue-800">Secure Payment via MarzPay</p>
                  <p className="text-xs text-blue-600/80">
                    Kyobe Muhamad Foundation uses MarzPay, a secure payment platform. All payments made through MarzPay are guaranteed to reach the foundation. You will receive a confirmation receipt via email after your donation.
                  </p>
                </div>
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              className="mt-6 w-full rounded-full bg-teal-600 px-8 py-4 font-semibold text-white transition-all hover:bg-teal-700 hover:shadow-lg"
            >
              Donate Now
            </button>

            <p className="mt-3 text-center text-xs text-slate-500">
              🔒 Secure payment via MarzPay • Mobile Money (MTN/Airtel) & Card accepted
            </p>
          </div>

          {/* ===== OTHER WAYS TO GIVE ===== */}
          <div className="mt-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 text-center">
              Other Ways to Give
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* Bank Transfer */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-semibold text-slate-800">🏦 Bank Transfer</h4>
                <p className="mt-2 text-sm text-slate-600">
                  <span className="font-medium">Bank:</span> Tropical Bank Uganda
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Account Name:</span> Kyobe Muhamad Foundation (KMF)
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Account Number:</span> 2002367737
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Currency:</span> UGX
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  After transfer, email us at info@hkmf.org to confirm your donation.
                </p>
              </div>

              {/* Mobile Money */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-semibold text-slate-800">📱 Mobile Money</h4>
                <p className="mt-2 text-sm text-slate-600">
                  <span className="font-medium">MTN:</span> +256 781932019
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Airtel:</span>+256 701 481024
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Dial *165# (MTN) or *185# (Airtel) and follow the prompts.
                </p>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-6 text-center">
              <p className="text-xs text-slate-500">
                ✅ Registered Community-Based Organization (CBO) • All donations go directly to our programmes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-teal-700 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Every Contribution Counts
          </h2>
          <p className="mt-4 text-lg text-teal-100/80 max-w-2xl mx-auto">
            Your donation helps us reach more communities and transform more lives in Uganda.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/programmes"
              className="rounded-full bg-white px-8 py-3.5 font-medium text-teal-700 transition-all hover:bg-teal-50 hover:shadow-lg"
            >
              Our Programmes
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-teal-400/30 px-8 py-3.5 font-medium text-white transition-all hover:bg-teal-800/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}