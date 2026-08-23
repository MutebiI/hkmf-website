"use client";

import Link from "next/link";
// import Image from "next/image";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden min-h-[70vh] flex items-center">
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

        <div className="mx-auto max-w-3xl px-5 py-20 lg:py-28 lg:px-8 relative z-10 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <span className="text-4xl font-bold text-white">❤️</span>
            </div>
          </div>

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Thank You! 🙏
          </h1>

          <p className="mt-4 text-lg text-teal-100/80 max-w-2xl mx-auto">
            Your generous donation will help us empower communities and transform lives in Uganda.
          </p>

          {/* What Happens Next */}
          <div className="mt-10 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h2 className="text-xl font-semibold text-white">What Happens Next?</h2>
            <div className="mt-4 space-y-3 text-teal-100/80 text-sm">
              <p>📧 You will receive a receipt via email</p>
              <p>💰 Your donation goes directly to our programmes</p>
              <p>📊 We'll share updates on how your gift is making a difference</p>
            </div>
          </div>

          {/* Stay Connected */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/kyobemuhammadfoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-teal-700 transition-all hover:bg-teal-50 hover:shadow-lg"
            >
              📘 Follow us on Facebook
            </a>
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              🌍 See Our Programmes
            </Link>
          </div>

          {/* Home Link */}
          <div className="mt-12">
            <Link
              href="/"
              className="text-sm text-teal-200/70 hover:text-white transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-teal-700 py-12">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-sm text-teal-100/80">
            Your support makes a difference. Thank you for being part of our mission.
          </p>
          <p className="mt-2 text-xs text-teal-200/60">
            Kyobe Muhamad Foundation • Registered Community-Based Organization (CBO)
          </p>
        </div>
      </section>
    </div>
  );
}