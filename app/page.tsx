"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero images - replace with your actual image names
  const heroImages = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

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

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel Background */}
      <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center">
        {/* Carousel Background */}
        <div className="absolute inset-0 -z-10">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`HKMF Community ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          
          {/* Dark overlay with gradient - gives opacity effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/75 to-slate-900/85" />
          
          {/* U-shaped curves */}
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

          {/* Slide Indicators - dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-teal-400 w-6"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-teal-300 border border-teal-500/30 mb-6">
              🇺🇬 Community-Based Organization
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Empowering Communities,
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Transforming Lives.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Hon Kyobe Muhamad Foundation (HKMF) is dedicated to empowering youth, 
              uplifting women, protecting orphans and street-connected children, and 
              promoting sustainable community development in Uganda.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#partner"
                className="rounded-lg bg-teal-600 px-8 py-3.5 font-medium text-white transition hover:bg-teal-700 hover:shadow-lg"
              >
                Partner With Us
              </Link>
              <Link
                href="/programmes"
                className="rounded-lg border border-slate-600 px-8 py-3.5 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Our Programmes →
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                Registered CBO
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                Kawempe, Uganda
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                UN SDGs Aligned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section ref={sectionRef} className="bg-white py-24 border-t border-slate-200/50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div
              className={`rounded-2xl border border-slate-200 p-8 transition-all duration-700 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                👁️
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-800">Our Vision</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                A prosperous, inclusive, and empowered society where every youth, woman, 
                orphan, and vulnerable child has equal opportunities to thrive and contribute 
                to sustainable national development.
              </p>
            </div>

            <div
              className={`rounded-2xl border border-slate-200 p-8 transition-all duration-700 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl">
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

          <div
            className={`mt-16 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-center text-2xl font-bold text-slate-800 sm:text-3xl">
              Our Core Values
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                "Integrity", "Accountability", "Transparency", "Professionalism",
                "Respect for Human Dignity", "Equity and Inclusion", "Innovation",
                "Community Participation", "Teamwork", "Sustainability"
              ].map((value, i) => (
                <span
                  key={i}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section id="programmes" className="bg-slate-50 py-24 border-t border-slate-200/50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700">
              Our Programmes
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We focus on empowering communities through sustainable, community-led initiatives.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "👦",
                title: "Youth Empowerment",
                desc: "Vocational skills, entrepreneurship, digital literacy, business incubation, leadership development, and sports."
              },
              {
                icon: "👩",
                title: "Women Empowerment",
                desc: "Entrepreneurship, savings groups, skills training, leadership, gender equality advocacy, and maternal health."
              },
              {
                icon: "🧒",
                title: "Orphans & Street Children",
                desc: "Child rescue, education sponsorship, feeding programs, shelter, counseling, family reunification."
              },
              {
                icon: "📚",
                title: "Education",
                desc: "Scholarships, school support, adult literacy, digital education, teacher support, library development."
              },
              {
                icon: "🏥",
                title: "Health",
                desc: "Medical outreaches, HIV/AIDS awareness, reproductive health, nutrition, mental health, and WASH."
              },
              {
                icon: "🌿",
                title: "Climate Action",
                desc: "Tree planting, waste management, climate-smart agriculture, renewable energy, and environmental awareness."
              }
            ].map((programme, i) => (
              <div
                key={i}
                className={`rounded-2xl bg-white p-8 shadow-sm border border-slate-200 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-3xl">
                  {programme.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-800">{programme.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{programme.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="bg-white py-24 border-t border-slate-200/50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold text-teal-600">Why Partner With Us</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                Join us in creating <br />
                lasting change.
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                We welcome partnerships with international organizations, development agencies, 
                philanthropic foundations, corporate institutions, and individuals who share our 
                commitment to sustainable development.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Transparency and accountability",
                  "Responsible financial management",
                  "Strong governance",
                  "Child safeguarding and protection",
                  "Gender equality and social inclusion",
                  "Measurable and sustainable impact"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-teal-700 p-8 text-white">
              <h3 className="text-2xl font-bold">Become Our Partner</h3>
              <p className="mt-3 text-teal-100 leading-relaxed">
                We are actively seeking international partnerships to expand our programmes 
                and improve lives across Uganda.
              </p>
              <div className="mt-6 space-y-2 text-sm text-teal-100">
                <p>✓ Grant funding</p>
                <p>✓ Project implementation</p>
                <p>✓ Technical assistance</p>
                <p>✓ Corporate Social Responsibility (CSR)</p>
                <p>✓ Climate action initiatives</p>
                <p>✓ Youth employment and entrepreneurship</p>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-medium text-teal-700 transition hover:bg-teal-50"
              >
                Contact Us Today →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
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
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-teal-400">{stat.number}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-24 border-t border-slate-200/50">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700">
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Together, We Can Build a Better Future
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to partner with us or support our mission? We'd love to hear from you.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="mailto:info@hkmf.org"
              className="rounded-lg bg-teal-600 px-8 py-3.5 font-medium text-white transition hover:bg-teal-700 hover:shadow-lg"
            >
              Email Us
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-slate-300 px-8 py-3.5 font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Learn More
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            📍 Kawempe Division, Kampala, Uganda
          </p>
        </div>
      </section>
    </div>
  );
} 