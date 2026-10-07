"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { TECH_STACK_ROW1, TECH_STACK_ROW2 } from "@/lib/constants";

/* ── Single pill chip ── */
function TechChip({ tech, dim = false }) {
  return (
    <div
      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl
        bg-[var(--bg-primary)] border border-[var(--border)]
        hover:border-[var(--border-accent)]
        hover:shadow-[0_4px_20px_rgba(139,92,246,0.12)]
        transition-all duration-200 group cursor-default shrink-0
        ${dim ? "opacity-80" : ""}`}
    >
      <span
        className="text-lg leading-none select-none
          group-hover:scale-110 transition-transform duration-200"
        aria-hidden="true"
      >
        {tech.icon}
      </span>
      <span
        className="text-xs font-semibold whitespace-nowrap
          text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]
          transition-colors duration-200"
      >
        {tech.name}
      </span>
    </div>
  );
}

/* ── Marquee row (forward or reverse) ── */
function MarqueeRow({ items, reverse = false, speed = 30 }) {
  // Quadruple the items so the loop is seamless at any screen width
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden w-full" aria-hidden="true">
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--bg-secondary), transparent)",
        }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, var(--bg-secondary), transparent)",
        }}
      />

      <div
        className={`flex gap-3 w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((tech, i) => (
          <TechChip key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      className="section relative overflow-hidden"
      aria-labelledby="tech-heading"
    >
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" aria-hidden="true" />

      {/* Subtle orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[500px] h-[300px] rounded-full bg-[var(--accent)]/5 blur-[100px]
          pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* ── Heading ── */}
        <StaggerContainer className="text-center mb-10">
          <StaggerItem>
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                border border-[var(--accent)]/30 bg-[var(--accent)]/8
                text-[var(--accent)] text-xs font-semibold mb-4"
            >
              Technologies
            </span>
          </StaggerItem>

          <StaggerItem>
            <h2
              id="tech-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                tracking-tight text-[var(--text-primary)] mb-3"
            >
              Built With{" "}
              <span className="gradient-text">Modern Tech</span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-xl mx-auto">
              We use industry-leading, production-proven technologies to build
              fast, scalable and maintainable digital products.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* ── Row 1 — forward ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-3"
        >
          <MarqueeRow items={TECH_STACK_ROW1} reverse={false} speed={60} />
        </motion.div>

        {/* ── Row 2 — reverse ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          <MarqueeRow items={TECH_STACK_ROW2} reverse={true} speed={50} />
        </motion.div>
      </div>
    </section>
  );
}
