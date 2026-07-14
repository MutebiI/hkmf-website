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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to partner, donate, or learn more.
          </p>
        </div>
      </section>

      {/* Contact Content */}
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
                  <p className="text-slate-600">info@hkmf.org</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">📞 Phone</h3>
                  <p className="text-slate-600">+256 701 481 024</p>
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
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
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
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
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
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
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
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-500 focus:outline-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-teal-600 px-6 py-3 font-medium text-white transition hover:bg-teal-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}