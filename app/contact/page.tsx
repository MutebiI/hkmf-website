"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xnpaygob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setShowModal(true);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
//this is a return state 
  return (
    <div className="min-h-screen bg-white">
      {/* ===== FULL SCREEN SUCCESS MODAL ===== */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition text-2xl"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800">Thank You! 🙏</h3>
            <p className="mt-2 text-slate-600">
              Your message has been sent successfully.
            </p>
            <p className="mt-1 text-sm text-slate-500">
              We'll get back to you as soon as possible.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full rounded-full bg-teal-600 px-6 py-3 font-medium text-white transition hover:bg-teal-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ===== HERO ===== */}
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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to partner, donate, or learn more.
          </p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Contact Information</h2>
              <p className="mt-3 text-slate-600">
                We welcome your inquiries, partnership proposals, and support.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-800">📍 Address</h3>
                  <p className="text-slate-600">Kawempe Division, Kampala, Uganda</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">📧 Email</h3>
                  <a
                    href="mailto:info@kyobemuhammadfoundation.org"
                    className="text-slate-600 hover:text-teal-600 transition"
                  >
                    info@kyobemuhammadfoundation.org
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">📞 Phone</h3>
                  <a
                    href="tel:+256701481024"
                    className="text-slate-600 hover:text-teal-600 transition"
                  >
                    +256 701 481 024
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">🕐 Office Hours</h3>
                  <p className="text-slate-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-teal-50 p-6 border border-teal-200">
                <h3 className="font-bold text-teal-800">Want to Partner?</h3>
                <p className="mt-2 text-sm text-teal-700">
                  We are actively seeking international partnerships. Reach out to discuss 
                  collaboration opportunities.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-2xl font-bold text-slate-800">Send Us a Message</h2>

              {status === "error" && (
                <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700">
                  ❌ Something went wrong. Please try again or email us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 transition resize-none"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-lg bg-teal-600 px-6 py-3 font-medium text-white transition hover:bg-teal-700 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}