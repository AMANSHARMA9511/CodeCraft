"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { TESTIMONIALS } from "@/lib/constants";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24"
          fill="#f59e0b" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full
        bg-violet-600/6 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <StaggerContainer className="text-center mb-10">
          <StaggerItem>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
              border border-[var(--accent)]/30 bg-[var(--accent)]/8
              text-[var(--accent)] text-xs font-semibold mb-4">
              Testimonials
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 id="testimonials-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                tracking-tight text-[var(--text-primary)] mb-3">
              What{" "}
              <span className="gradient-text">Clients Say</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-[var(--text-secondary)] text-sm md:text-base">
              Real experiences from businesses we've built for.
            </p>
            <div className="inline-flex items-center gap-2 mt-3 text-[var(--text-muted)] text-xs
              bg-[var(--bg-primary)] border border-[var(--border)] px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Demo testimonials — to be replaced with real client reviews
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <motion.figure
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="relative p-5 rounded-xl flex flex-col h-full
                  bg-[var(--bg-primary)] border border-[var(--border)]
                  hover:border-[var(--border-accent)]
                  hover:shadow-[0_6px_30px_rgba(139,92,246,0.1)]
                  transition-all duration-300"
              >
                {/* Quote icon */}
                <Quote size={22} className="text-[var(--accent)]/30 mb-3 flex-shrink-0" aria-hidden="true" />

                {/* Stars */}
                <div className="mb-3">
                  <Stars />
                </div>

                {/* Quote text */}
                <blockquote className="text-[var(--text-secondary)] text-xs leading-relaxed flex-1 mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <figcaption className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.gradient}
                    flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-xs text-[var(--text-primary)]">{t.name}</p>
                    <p className="text-xs text-[var(--text-muted)]">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
