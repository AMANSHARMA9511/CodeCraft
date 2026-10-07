import Link from "next/link";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import CTA from "@/components/sections/CTA";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export const metadata = {
  title: "About Us",
  description:
    "Learn about CodeCraft — who we are, what we value and how we build modern digital products for ambitious businesses.",
};

const values = [
  {
    icon: "🎯",
    title: "Business First",
    desc: "Every technical decision is made with your business goals in mind — not just what's technically interesting.",
    color: "bg-violet-500/10 border-violet-500/15",
  },
  {
    icon: "🔍",
    title: "Attention to Detail",
    desc: "We care deeply about quality — in design, in code, in communication and in everything we deliver.",
    color: "bg-pink-500/10 border-pink-500/15",
  },
  {
    icon: "🤝",
    title: "Transparent Communication",
    desc: "We tell you what's possible, what's realistic and the best approach — no fluff, no overselling.",
    color: "bg-blue-500/10 border-blue-500/15",
  },
  {
    icon: "🚀",
    title: "Modern Technology",
    desc: "We stay current so your products are built with modern, scalable and future-proof technologies.",
    color: "bg-emerald-500/10 border-emerald-500/15",
  },
];

const stats = [
  { value: "Custom", label: "Built Solutions", sub: "No templates, ever" },
  { value: "Modern", label: "Tech Stack", sub: "Next.js, React, Node.js" },
  { value: "Mobile", label: "First Design", sub: "Tested on all devices" },
  { value: "Support", label: "After Launch", sub: "We stay with you" },
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      {/* Header */}
      <div className="pt-28 pb-16 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full
          bg-violet-600/8 blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <StaggerContainer>
            <StaggerItem>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                border border-[var(--accent)]/30 bg-[var(--accent)]/8
                text-[var(--accent)] text-sm font-medium mb-5">
                About Us
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold
                tracking-tight text-[var(--text-primary)] mb-4 max-w-3xl">
                We Build{" "}
                <span className="gradient-text">Digital Products</span>{" "}
                That Work
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-[var(--text-secondary)] text-lg max-w-xl leading-relaxed">
                CodeCraft is a web development studio focused on building
                modern, performant and scalable digital solutions for businesses
                that want to grow online.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* Story Section */}
      <section className="section" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <StaggerContainer>
              <StaggerItem>
                <h2 id="story-heading"
                  className="text-3xl md:text-4xl font-extrabold
                    text-[var(--text-primary)] tracking-tight mb-5">
                  Our Story
                </h2>
              </StaggerItem>
              <StaggerItem>
                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    CodeCraft was founded with a single belief: businesses deserve
                    custom digital solutions built specifically for them — not
                    generic templates, not overcomplicated enterprise systems,
                    but clean, modern and focused products.
                  </p>
                  <p>
                    We work with startups, small businesses and growing organizations
                    across industries — helping them build websites, web applications,
                    e-commerce platforms and custom software that supports real
                    business operations.
                  </p>
                  <p>
                    Every project we take on is treated as a long-term partnership.
                    We're not here to deliver code and disappear — we're here to help
                    your business grow digitally.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex flex-wrap gap-3 mt-7">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full text-sm font-semibold text-white
                      bg-gradient-to-r from-violet-600 to-purple-600
                      hover:from-violet-500 hover:to-purple-500
                      shadow-lg shadow-violet-500/20 transition-all hover:-translate-y-0.5"
                  >
                    Work With Us
                  </Link>
                  <Link
                    href="/portfolio"
                    className="px-6 py-3 rounded-full text-sm font-semibold
                      text-[var(--text-secondary)] border border-[var(--border)]
                      hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]
                      transition-all hover:-translate-y-0.5"
                  >
                    See Our Work
                  </Link>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]
                    border border-[var(--border)] hover:border-[var(--border-accent)]
                    transition-all duration-300 text-center">
                    <p className="text-2xl font-extrabold gradient-text mb-1">
                      {stat.value}
                    </p>
                    <p className="font-semibold text-sm text-[var(--text-primary)] mb-0.5">
                      {stat.label}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">{stat.sub}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-[var(--bg-secondary)]" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <StaggerContainer className="text-center mb-14">
            <StaggerItem>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                border border-[var(--accent)]/30 bg-[var(--accent)]/8
                text-[var(--accent)] text-sm font-medium mb-5">
                Our Values
              </span>
            </StaggerItem>
            <StaggerItem>
              <h2 id="values-heading"
                className="text-3xl sm:text-4xl font-extrabold
                  text-[var(--text-primary)] tracking-tight">
                What We Stand For
              </h2>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className={`p-6 rounded-2xl border ${v.color}
                  hover:border-[var(--border-accent)] transition-all duration-300 h-full`}>
                  <span className="text-4xl mb-4 block" aria-hidden="true">{v.icon}</span>
                  <h3 className="font-bold text-base text-[var(--text-primary)] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Reuse Process section */}
      <div id="process">
        <Process />
      </div>

      <TechStack />
      <CTA />
    </div>
  );
}
