"use client";

import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { TECH_STACK } from "@/lib/constants";

export default function TechStack() {
  const doubled = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="section relative overflow-hidden" aria-labelledby="tech-heading">
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <StaggerContainer className="text-center mb-10">
          <StaggerItem>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
              border border-[var(--accent)]/30 bg-[var(--accent)]/8
              text-[var(--accent)] text-xs font-semibold mb-4">
              Technologies
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 id="tech-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                tracking-tight text-[var(--text-primary)] mb-3">
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

        {/* Marquee */}
        <div className="relative overflow-hidden" aria-hidden="true">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10
            bg-gradient-to-r from-[var(--bg-secondary)] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10
            bg-gradient-to-l from-[var(--bg-secondary)] to-transparent pointer-events-none" />

          <div
            className="flex gap-3 w-max animate-marquee"
            style={{ animationDuration: "28s" }}
          >
            {doubled.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl
                  bg-[var(--bg-primary)] border border-[var(--border)]
                  hover:border-[var(--border-accent)] transition-all duration-200
                  group cursor-default shrink-0"
              >
                <span className="text-lg leading-none group-hover:scale-110 transition-transform">
                  {tech.icon}
                </span>
                <span className="text-xs font-semibold text-[var(--text-secondary)]
                  group-hover:text-[var(--text-primary)] transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
