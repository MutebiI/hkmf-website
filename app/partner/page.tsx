// app/partner/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PartnerPage() {
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

  const partnerTypes = [
    {
      icon: "🏛️",
      title: "Government & Ministries",
      description: "Partner with us to implement community development programmes aligned with national development goals.",
      benefits: [
        "Policy implementation support",
        "Community outreach expertise",
        "Grassroots mobilization",
        "Monitoring & evaluation capacity"
      ]
    },
    {
      icon: "🤝",
      title: "International NGOs",
      description: "Collaborate with us to expand your reach and impact in Ugandan communities.",
      benefits: [
        "Local knowledge & networks",
        "Community trust & access",
        "Programme implementation",
        "Cultural competency"
      ]
    },
    {
      icon: "🏢",
      title: "Corporate Partners",
      description: "Fulfill your Corporate Social Responsibility (CSR) goals through meaningful community impact.",
      benefits: [
        "CSR programme implementation",
        "Brand visibility & recognition",
        "Employee volunteering",
        "Community engagement"
      ]
    },
    {
      icon: "🌍",
      title: "United Nations Agencies",
      description: "Work with us to achieve the Sustainable Development Goals (SDGs) at the community level.",
      benefits: [
        "SDG alignment & reporting",
        "Community-level delivery",
        "Local partnerships",
        "Impact documentation"
      ]
    },
    {
      icon: "🎓",
      title: "Academic Institutions",
      description: "Partner with us for research, student internships, and community-based learning opportunities.",
      benefits: [
        "Research collaboration",
        "Student placements",
        "Community-based learning",
        "Impact assessment"
      ]
    },
    {
      icon: "🙏",
      title: "Faith-Based Organizations",
      description: "Join us in serving communities through shared values and collaborative outreach.",
      benefits: [
        "Community mobilization",
        "Shared values & trust",
        "Wide community reach",
        "Sustainable partnerships"
      ]
    }
  ];

  const partnerBenefits = [
    {
      icon: "✅",
      title: "Transparency & Accountability",
      description: "We maintain transparent financial practices and regular reporting to all partners."
    },
    {
      icon: "📊",
      title: "Measurable Impact",
      description: "We provide clear data and evidence of the impact your partnership creates."
    },
    {
      icon: "🤝",
      title: "Strong Governance",
      description: "Our governance structure ensures responsible management of resources and partnerships."
    },
    {
      icon: "🛡️",
      title: "Child Safeguarding",
      description: "We adhere to strict child protection policies in all our programmes."
    },
    {
      icon: "⚖️",
      title: "Gender Equality",
      description: "We promote gender equality and social inclusion in all our work."
    },
    {
      icon: "🌱",
      title: "Sustainable Impact",
      description: "We design programmes for lasting change, not temporary relief."
    }
  ];
//This a person, terminal, terminal, terminal
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative isolate overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/partnership-hero.jpg"
            alt="Partnership Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-800/80 to-slate-900/90" />
          
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
              🤝 Partner With Us
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Join Us in
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Creating Lasting Change
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We welcome partnerships with organizations, institutions, and individuals who 
              share our commitment to sustainable community development. Together, we can 
              transform lives and build stronger communities across Uganda.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#partner-types"
                className="rounded-lg bg-teal-600 px-8 py-3.5 font-medium text-white transition hover:bg-teal-700 hover:shadow-lg"
              >
                Explore Partnerships →
              </Link>
              <Link
                href="#contact"
                className="rounded-lg border border-slate-600 px-8 py-3.5 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                Trusted Partner
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                Community-Led
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                Impact Focused
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section ref={sectionRef} className="relative overflow-hidden bg-white py-28 border-t border-slate-200/50">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-teal-50 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-50 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className={`inline-block bg-teal-50 px-5 py-1.5 text-sm font-semibold text-teal-700 ${softShapes[0]}`}>
              Why Partner With Us
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Together, We Can
              <br />
              <span className="text-teal-600">Achieve More</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We offer meaningful partnership opportunities that create real impact in communities.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partnerBenefits.map((benefit, i) => (
              <div
                key={i}
                className={`relative ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-teal-100/60 to-emerald-100/60 ${blobShapes[i % blobShapes.length]}`} />
                <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-3xl transition-transform duration-500 group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-800">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <svg className="absolute -bottom-1 left-0 w-full h-16 sm:h-24" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            fill="rgb(248 250 252)"
            d="M0,120L60,110C120,100,240,80,360,85C480,90,600,120,720,130C840,140,960,130,1080,110C1200,90,1320,60,1380,45L1440,30L1440,200L0,200Z"
          />
        </svg>
      </section>

      {/* Partner Types */}
      <section id="partner-types" className="relative overflow-hidden bg-slate-50 py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] bg-emerald-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className={`inline-block bg-teal-50 px-5 py-1.5 text-sm font-semibold text-teal-700 ${softShapes[0]}`}>
              Who We Partner With
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Partnership
              <br />
              <span className="text-teal-600">Opportunities</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We collaborate with diverse organizations to maximize community impact.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((partner, i) => (
              <div
                key={i}
                className={`relative ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`pointer-events-none absolute -inset-4 bg-gradient-to-br from-teal-100/60 to-emerald-100/60 ${blobShapes[i % blobShapes.length]}`} />
                <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-3xl transition-transform duration-500 group-hover:scale-110">
                    {partner.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-800">{partner.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{partner.description}</p>
                  <ul className="mt-4 space-y-1.5">
                    {partner.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-teal-500 mt-0.5">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Partner Section */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-teal-50 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-emerald-50 blur-2xl" />

        <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className={`inline-block bg-teal-50 px-5 py-1.5 text-sm font-semibold text-teal-700 ${softShapes[0]}`}>
              How It Works
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Simple Steps to
              <br />
              <span className="text-teal-600">Partner With Us</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Reach Out",
                description: "Contact us to express your interest in partnering with HKMF."
              },
              {
                number: "02",
                title: "Discussion",
                description: "We'll discuss your goals and explore how we can collaborate."
              },
              {
                number: "03",
                title: "Partnership",
                description: "Formalize the partnership and begin working together."
              }
            ].map((step, i) => (
              <div
                key={i}
                className={`text-center ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-50 text-3xl font-bold text-teal-600">
                  {step.number}
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-800">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.description}</p>
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
            Ready to Partner With Us?
          </h2>
          <p className="mt-4 text-lg text-teal-100 max-w-2xl mx-auto">
            Let's work together to create lasting change in communities across Uganda.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className={`bg-white px-8 py-3.5 font-medium text-teal-700 transition hover:bg-teal-50 hover:shadow-lg whitespace-nowrap ${softShapes[0]}`}
            >
              Contact Us Today
            </Link>
            <Link
              href="/programmes"
              className={`border border-white/30 px-8 py-3.5 font-medium text-white transition hover:bg-white/10 whitespace-nowrap ${softShapes[1]}`}
            >
              Our Programmes →
            </Link>
          </div>
          <p className="mt-6 text-sm text-teal-200">
            📧 partnership@hkmf.org • 📞 +256 701 481 024
          </p>
        </div>
      </section>
    </div>
  );
}