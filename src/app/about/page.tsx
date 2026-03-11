import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-3xl px-6 py-20 sm:px-8">

        {/* Intro */}
        <section className="mb-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <Image
              src="/IMG_2878.jpg"
              alt="Rebecca Huang"
              width={915}
              height={1339}
              className="w-[150px] h-[200px] rounded-2xl object-cover shadow-md flex-shrink-0"
              priority
            />
            <div>
              <h1 className="mb-4 text-[32px] font-bold tracking-tight text-gray-900 leading-tight">
                Hi, I&apos;m Rebecca
              </h1>
              <p className="text-[16px] leading-relaxed text-gray-500">
                I grew up in Shanghai, China, and lived in downtown Brooklyn when I moved to New York to study Integrated Design &amp; Media at NYU. That&apos;s where my UX journey began. After graduating I came to Seattle to pursue my master&apos;s in Innovation Technology at UW.
              </p>
              <p className="mt-3 text-[16px] leading-relaxed text-gray-500">
                Design wasn&apos;t my first instinct. I almost went into data science. I had a real passion for statistics, and that analytical side still shapes how I work. I treat design decisions like hypotheses: tested, iterated, and grounded in data.
              </p>
              <p className="mt-3 text-[16px] leading-relaxed text-gray-500">
                Outside of work I&apos;m usually on a tennis court, chasing a dark roast, or planning a trip somewhere warm. Hawaii, Puerto Rico, anywhere with a good beach. I&apos;m an INTJ, currently on a 784-day Duolingo streak learning Spanish. 🎾☕🌊
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[20px] font-bold text-gray-900">Experience</h2>
            <a
              href="/v1%20(3).pdf"
              className="border border-gray-200 text-gray-600 px-5 py-2 rounded-full text-[13px] font-medium hover:border-gray-400 hover:text-gray-900 transition-colors"
            >
              Download CV
            </a>
          </div>
          <div className="border-t border-gray-200">
            {[
              {
                period: "Sep 2025 – Present",
                company: "OpenPromo",
                role: "Product Designer",
                description: "Leading end-to-end product design for a multi-tenant social content management platform, working closely with engineering and growth teams to ship a scalable B2B SaaS experience.",
              },
              {
                period: "Sep 2025 – Mar 2026",
                company: "Amazon Web Services",
                role: "Product Designer",
                description: "Designed complex enterprise tooling for internal AWS teams, translating dense technical workflows into clear, usable interfaces grounded in user research and systems thinking.",
              },
              {
                period: "Jun 2025 – Aug 2025",
                company: "AISPIRE",
                role: "UX Design Intern",
                description: "Conducted user research and prototyped AI-assisted features, collaborating with product managers and engineers to validate concepts through rapid iterative testing.",
              },
              {
                period: "Nov 2024 – Mar 2025",
                company: "OfferPlz",
                role: "Product Designer",
                description: "Redesigned the core hiring flow from offer creation to candidate acceptance, reducing friction across both employer and candidate journeys through research-backed design decisions.",
              },
              {
                period: "Feb 2023 – Aug 2024",
                company: "FileGPT",
                role: "Product Designer",
                description: "Shaped the UX of an AI-powered document analysis platform from early-stage MVP to a polished product, driving adoption through clear information architecture and interaction design.",
              },
            ].map(({ period, company, role, description }) => (
              <div key={company} className="grid grid-cols-[200px_1fr] gap-8 border-b border-gray-200 py-8">
                <p className="text-[14px] text-gray-400 pt-0.5">{period}</p>
                <div>
                  <p className="font-semibold text-gray-900 text-[15px]">{company}</p>
                  <p className="text-[14px] text-gray-500 mb-3">{role}</p>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-24">
          <h2 className="text-[20px] font-bold text-gray-900 mb-8">Education</h2>
          <div className="border-t border-gray-200">
            {[
              {
                period: "2024 – 2026",
                school: "University of Washington",
                degree: "MS Innovation Technology",
                description: "Focusing on human-computer interaction, AI product design, and design systems. Coursework bridges technical depth with user-centered practice.",
              },
              {
                period: "2021 – 2024",
                school: "New York University",
                degree: "BS Integrated Design & Media",
                description: "Interdisciplinary program spanning UX, visual design, and media technology. Where I discovered the intersection of design and data that still defines how I work.",
              },
            ].map(({ period, school, degree, description }) => (
              <div key={school} className="grid grid-cols-[200px_1fr] gap-8 border-b border-gray-200 py-8">
                <p className="text-[14px] text-gray-400 pt-0.5">{period}</p>
                <div>
                  <p className="font-semibold text-gray-900 text-[15px]">{school}</p>
                  <p className="text-[14px] text-gray-500 mb-3">{degree}</p>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
