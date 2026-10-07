"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { CLIENTS } from "@/lib/constants";

/* ── Single client card ── */
function ClientCard({ client }) {
  return (
    <div
      className="flex items-center gap-3 px-5 py-3.5 rounded-2xl
        bg-[var(--bg-primary)] border border-[var(--border)]
        hover:border-[var(--border-accent)]
        hover:shadow-[0_4px_20px_rgba(139,92,246,0.1)]
        transition-all duration-200 group cursor-default shrink-0 min-w-[180px]"
    >
      {/* Logo avatar */}
      <div
        className={`w-9 h-9 rounded-xl bg-gradient-to-br ${client.gradient}
          flex items-center justify-center flex-shrink-0 shadow-md
          group-hover:scale-105 transition-transform duration-200`}
      >
        <span className="text-white font-black text-xs leading-none tracking-tight">
          {client.initials}
        </span>
      </div>

      {/* Text */}
      <div className="min-w-0">
        <p className="text-xs font-bold text-[var(--text-primary)]
          group-hover:text-[var(--accent)] transition-colors leading-tight truncate">
          {client.name}
        </p>
        <p className="text-xs text-[var(--text-secondary)] leading-tight truncate">
          {client.category}
        </p>
      </div>
    </div>
  );
}

/* ── Marquee row ── */
function ClientMarqueeRow({ items, reverse = false, speed = 45 }) {
  const quadrupled = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden w-full" aria-hidden="true">
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg-secondary), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg-secondary), transparent)" }}
      />

      <div
        className={`flex gap-3 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {quadrupled.map((client, i) => (
          <ClientCard key={`${client.id}-${i}`} client={client} />
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  // Split into two halves for two rows
  const half = Math.ceil(CLIENTS.length / 2);
  const row1 = CLIENTS.slice(0, half);
  const row2 = CLIENTS.slice(half);

  return (
    <section
      className="section relative overflow-hidden"
      aria-labelledby="clients-heading"
    >
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" aria-hidden="true" />

      {/* Subtle orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[500px] h-[300px] rounded-full bg-[var(--accent)]/4 blur-[100px]
          pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Heading ── */}
        <StaggerContainer className="text-center mb-10">
          <StaggerItem>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
              border border-[var(--accent)]/30 bg-[var(--accent)]/8
              text-[var(--accent)] text-xs font-semibold mb-4">
              Trusted By
            </span>
          </StaggerItem>

          <StaggerItem>
            <h2
              id="clients-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                tracking-tight text-[var(--text-primary)] mb-3"
            >
              Companies We've{" "}
              <span className="gradient-text">Built For</span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-xl mx-auto">
              From startups to growing businesses — we've helped companies
              across industries build their digital products.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* ── Row 1 — forward ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-3"
        >
          <ClientMarqueeRow items={row1} reverse={false} speed={50} />
        </motion.div>

        {/* ── Row 2 — reverse ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
        >
          <ClientMarqueeRow items={row2} reverse={true} speed={42} />
        </motion.div>

        {/* ── Bottom note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs text-[var(--text-muted)] mt-6"
        >
          * Company names shown are representative projects. Real client names used with permission.
        </motion.p>
      </div>
    </section>
  );
}
