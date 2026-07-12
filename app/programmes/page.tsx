import Link from "next/link";

export default function ProgrammesPage() {
  const programmes = [
    {
      icon: "👦",
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
      icon: "👩",
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
      icon: "🧒",
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
      icon: "📚",
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
      icon: "🏥",
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
      icon: "🌿",
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
            Our Programmes
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            We focus on empowering communities through sustainable, community-led initiatives.
          </p>
        </div>
      </section>

      {/* Programmes Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((programme, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 p-8 transition hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-3xl">
                  {programme.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-800">{programme.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {programme.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-teal-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Support Our Programmes
          </h2>
          <p className="mt-3 text-teal-100">
            Your support helps us reach more vulnerable communities.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-white px-8 py-3 font-medium text-teal-700 transition hover:bg-teal-50"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  );
}