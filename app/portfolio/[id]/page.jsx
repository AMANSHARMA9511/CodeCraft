import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS, getWhatsAppUrl } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import CTA from "@/components/sections/CTA";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }) {
  const project = PROJECTS.find((p) => p.id === params.id);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default function CaseStudyPage({ params }) {
  const project = PROJECTS.find((p) => p.id === params.id);
  if (!project) notFound();

  const others = PROJECTS.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      {/* Hero */}
      <div
        className="pt-28 pb-16 border-b border-[var(--border)] relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}10 0%, transparent 60%)` }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Back */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)]
              hover:text-[var(--text-primary)] mb-8 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Portfolio
          </Link>

          <StaggerContainer>
            <StaggerItem>
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center mb-8">
                {/* Big letter */}
                <div
                  className="w-20 h-20 rounded-3xl flex items-center justify-center
                    text-4xl font-black text-white shadow-2xl flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}99)` }}
                  aria-hidden="true"
                >
                  {project.title.charAt(0)}
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs px-3 py-1 rounded-full
                      bg-[var(--bg-secondary)] border border-[var(--border)]
                      text-[var(--text-secondary)]">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-xs px-3 py-1 rounded-full
                        bg-[var(--accent)]/15 border border-[var(--accent)]/25
                        text-[var(--accent)]">
                        Featured Project
                      </span>
                    )}
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                    tracking-tight text-[var(--text-primary)] leading-tight">
                    {project.title}
                  </h1>
                  <p className="text-lg text-[var(--text-secondary)] mt-1">{project.subtitle}</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Main */}
          <main className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <StaggerContainer>
              <StaggerItem>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                  Project Overview
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>
              </StaggerItem>
            </StaggerContainer>

            {/* Challenge */}
            <StaggerContainer>
              <StaggerItem>
                <div className="p-7 rounded-2xl bg-rose-500/5 border border-rose-500/15">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl" aria-hidden="true">⚡</span>
                    <h2 className="text-xl font-bold text-[var(--text-primary)]">The Challenge</h2>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    The client needed a modern, scalable digital solution to replace their
                    fragmented manual systems. Multiple disconnected tools were causing
                    operational inefficiency, data inconsistencies and poor user experience.
                    They needed everything centralized in one fast, reliable platform.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Solution */}
            <StaggerContainer>
              <StaggerItem>
                <div className="p-7 rounded-2xl bg-emerald-500/5 border border-emerald-500/15">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl" aria-hidden="true">✅</span>
                    <h2 className="text-xl font-bold text-[var(--text-primary)]">The Solution</h2>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    We built a fully custom web platform tailored precisely to their workflows —
                    with a clean, intuitive interface for daily users and a powerful admin
                    dashboard giving management complete visibility and control over all
                    operations in real time.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Tech Stack */}
            <StaggerContainer>
              <StaggerItem>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag}
                      className="px-4 py-2 rounded-xl text-sm font-medium
                        bg-[var(--accent)]/10 border border-[var(--accent)]/20
                        text-[var(--accent)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Process */}
            <StaggerContainer>
              <StaggerItem>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-5">
                  Development Process
                </h2>
                <ol className="space-y-3">
                  {[
                    "Requirements gathering and stakeholder interviews",
                    "UI/UX wireframes and high-fidelity design in Figma",
                    "Database schema design and API architecture",
                    "Frontend development with Next.js / React",
                    "Backend API development and third-party integrations",
                    "Thorough testing across devices and browsers",
                    "Deployment, training and post-launch support",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center
                          text-xs font-bold text-white flex-shrink-0 mt-0.5"
                        style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}99)` }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </StaggerItem>
            </StaggerContainer>
          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Details card */}
            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] sticky top-24">
              <h3 className="text-sm font-bold uppercase tracking-widest
                text-[var(--text-primary)] mb-5">
                Project Details
              </h3>
              <dl className="space-y-4">
                {[
                  { label: "Type", value: project.category },
                  { label: "Status", value: "Completed" },
                  { label: "Stack", value: project.tags.join(", ") },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-xs text-[var(--text-muted)] mb-0.5">{label}</dt>
                    <dd className="text-sm font-semibold text-[var(--text-primary)]">{value}</dd>
                  </div>
                ))}
              </dl>

              {/* CTA */}
              <div className="mt-6 pt-5 border-t border-[var(--border)] space-y-3">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  Want something like this?
                </p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full py-3 px-4 rounded-xl
                    text-sm font-semibold text-white
                    bg-gradient-to-r from-violet-600 to-purple-600
                    hover:from-violet-500 hover:to-purple-500
                    shadow-lg shadow-violet-500/20 transition-all"
                >
                  Get a Quote
                </Link>
                <a
                  href={getWhatsAppUrl(`Hi CodeCraft! I saw the ${project.title} case study and want to discuss a similar project.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 px-4 rounded-xl
                    text-sm font-semibold text-[#25D366]
                    bg-[#25D366]/10 border border-[#25D366]/25
                    hover:bg-[#25D366]/15 transition-all"
                >
                  Discuss on WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Other Projects */}
        {others.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[var(--border)]">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              More Projects
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {others.map((p) => (
                <Link
                  key={p.id}
                  href={`/portfolio/${p.id}`}
                  className="group flex gap-4 p-5 rounded-2xl
                    bg-[var(--bg-secondary)] border border-[var(--border)]
                    hover:border-[var(--border-accent)]
                    hover:shadow-[0_8px_32px_rgba(139,92,246,0.08)]
                    transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center
                      text-2xl font-black text-white flex-shrink-0
                      group-hover:scale-105 transition-transform"
                    style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}99)` }}
                  >
                    {p.title.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[var(--text-primary)]
                      group-hover:text-[var(--accent)] transition-colors">
                      {p.title}
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">{p.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <CTA />
    </div>
  );
}
