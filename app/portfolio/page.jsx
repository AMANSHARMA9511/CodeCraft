import Link from "next/link";
import { PROJECTS, getWhatsAppUrl } from "@/lib/constants";
import CTA from "@/components/sections/CTA";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export const metadata = {
  title: "Portfolio",
  description:
    "Explore CodeCraft's portfolio of web development projects — gym platforms, e-commerce stores, restaurant systems and more.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      {/* Header */}
      <div className="pt-28 pb-16 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full
          bg-violet-600/8 blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <StaggerContainer>
            <StaggerItem>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                border border-[var(--accent)]/30 bg-[var(--accent)]/8
                text-[var(--accent)] text-sm font-medium mb-5">
                Portfolio
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold
                tracking-tight text-[var(--text-primary)] mb-4 max-w-2xl">
                Work We're{" "}
                <span className="gradient-text">Proud Of</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-[var(--text-secondary)] text-lg max-w-xl">
                A showcase of the digital products we've designed and built for our clients.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {PROJECTS.map((project) => (
            <StaggerItem key={project.id}>
              <article className="group rounded-3xl overflow-hidden
                bg-[var(--bg-secondary)] border border-[var(--border)]
                hover:border-[var(--border-accent)]
                hover:shadow-[0_16px_56px_rgba(139,92,246,0.12)]
                transition-all duration-400"
                aria-label={`${project.title} — ${project.subtitle}`}>

                {/* Visual */}
                <div
                  className="relative h-56 flex items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}10)` }}
                  aria-hidden="true"
                >
                  <div
                    className="w-28 h-28 rounded-3xl flex items-center justify-center
                      text-6xl font-black text-white shadow-2xl
                      group-hover:scale-105 transition-transform duration-500"
                    style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}aa)` }}
                  >
                    {project.title.charAt(0)}
                  </div>

                  {/* Category + Featured badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full
                      bg-black/25 text-white/85 backdrop-blur-sm border border-white/10">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-xs font-medium px-3 py-1 rounded-full
                        bg-[var(--accent)]/80 text-white backdrop-blur-sm">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h2 className="font-bold text-2xl text-[var(--text-primary)] mb-1
                    group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm font-medium text-[var(--text-muted)] mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag}
                        className="text-xs px-3 py-1 rounded-full
                          bg-[var(--bg-primary)] border border-[var(--border)]
                          text-[var(--text-secondary)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-5 border-t border-[var(--border)]">
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="flex-1 text-center py-3 px-4 rounded-xl text-sm font-semibold
                        text-[var(--accent)] bg-[var(--accent)]/10
                        hover:bg-[var(--accent)]/18 border border-[var(--accent)]/20
                        hover:border-[var(--accent)]/40 transition-all"
                    >
                      View Case Study
                    </Link>
                    <a
                      href={getWhatsAppUrl(`Hi CodeCraft! I saw the ${project.title} project and want to build something similar.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 px-4 rounded-xl text-sm font-semibold
                        text-[var(--text-secondary)] hover:text-[var(--text-primary)]
                        border border-[var(--border)] hover:border-[var(--border-accent)]
                        hover:bg-[var(--bg-primary)] transition-all"
                    >
                      Build Similar
                    </a>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <CTA />
    </div>
  );
}
