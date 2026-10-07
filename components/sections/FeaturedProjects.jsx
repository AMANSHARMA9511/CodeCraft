"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { PROJECTS } from "@/lib/constants";

export default function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="section relative overflow-hidden" aria-labelledby="projects-heading">
      <div className="absolute inset-0 bg-[var(--bg-primary)]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <StaggerContainer className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <StaggerItem>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                border border-[var(--accent)]/30 bg-[var(--accent)]/8
                text-[var(--accent)] text-sm font-medium mb-5">
                Selected Work
              </span>
            </StaggerItem>
            <StaggerItem>
              <h2 id="projects-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                  tracking-tight text-[var(--text-primary)]">
                Projects We've{" "}
                <span className="gradient-text">Built</span>
              </h2>
            </StaggerItem>
          </div>
          <StaggerItem>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium
                text-[var(--accent)] hover:gap-3 transition-all duration-200 shrink-0"
            >
              View All Projects
              <ArrowRight size={14} />
            </Link>
          </StaggerItem>
        </StaggerContainer>

        {/* Projects grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <StaggerItem key={project.id}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="group relative rounded-2xl overflow-hidden
                  bg-[var(--bg-secondary)] border border-[var(--border)]
                  hover:border-[var(--border-accent)]
                  hover:shadow-[0_12px_48px_rgba(139,92,246,0.12)]
                  transition-all duration-300 flex flex-col"
              >
                {/* Visual header */}
                <div
                  className="relative h-36 flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}10 100%)`,
                  }}
                  aria-hidden="true"
                >
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 text-xs font-medium px-2.5 py-0.5 rounded-full
                    bg-black/20 text-white/80 backdrop-blur-sm border border-white/10">
                    {project.category}
                  </span>

                  {/* Big letter */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center
                      text-3xl font-black text-white shadow-2xl"
                    style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}99)` }}
                  >
                    {project.title.charAt(0)}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-base text-[var(--text-primary)] mb-0.5
                    group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-[var(--text-muted)] mb-2">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag}
                        className="text-xs px-2 py-0.5 rounded-full
                          bg-[var(--bg-primary)] border border-[var(--border)]
                          text-[var(--text-secondary)] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 pt-3 border-t border-[var(--border)] mt-auto">
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="flex-1 text-center text-xs font-semibold py-2 px-3 rounded-lg
                        text-[var(--accent)] bg-[var(--accent)]/10
                        hover:bg-[var(--accent)]/18 border border-[var(--accent)]/20
                        hover:border-[var(--accent)]/40 transition-all"
                    >
                      Case Study
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 text-center text-xs font-semibold py-2 px-3 rounded-lg
                        text-[var(--text-secondary)] hover:text-[var(--text-primary)]
                        border border-[var(--border)] hover:border-[var(--border-accent)]
                        hover:bg-[var(--bg-secondary)] transition-all"
                    >
                      Build Similar
                    </Link>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
