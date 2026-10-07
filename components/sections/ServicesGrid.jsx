"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, Code2, Palette, Zap, Shield } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { SERVICES, getWhatsAppUrl } from "@/lib/constants";

const ICONS = { Globe, ShoppingCart, Code2, Palette, Zap, Shield };

export default function ServicesGrid() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="services-heading">
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <StaggerContainer className="text-center mb-10">
          <StaggerItem>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
              border border-[var(--accent)]/30 bg-[var(--accent)]/8
              text-[var(--accent)] text-xs font-semibold mb-4">
              What We Build
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 id="services-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                tracking-tight text-[var(--text-primary)] mb-3">
              Services That{" "}
              <span className="gradient-text">Deliver Results</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-2xl mx-auto">
              From a simple business site to a full-scale web application —
              we build exactly what your business needs to grow online.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] || Globe;
            return (
              <StaggerItem key={service.id}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group h-full p-5 rounded-xl
                    bg-[var(--bg-primary)] border border-[var(--border)]
                    hover:border-[var(--border-accent)]
                    hover:shadow-[0_6px_30px_rgba(139,92,246,0.1)]
                    transition-all duration-300 flex flex-col"
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color}
                    border border-[var(--border)] flex items-center justify-center mb-3
                    ${service.iconColor} group-hover:scale-105 transition-transform duration-300`}>
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[var(--text-primary)] font-bold text-base mb-1.5
                    group-hover:text-[var(--accent)] transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] text-xs leading-relaxed mb-3 flex-1">
                    {service.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {service.features.map((f) => (
                      <span key={f}
                        className="text-xs px-2 py-0.5 rounded-full
                          bg-[var(--bg-secondary)] border border-[var(--border)]
                          text-[var(--text-secondary)] font-medium">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={getWhatsAppUrl(`Hi CodeCraft! I'm interested in ${service.title}. Let's discuss.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold
                      text-[var(--accent)] hover:gap-2.5 transition-all duration-200 mt-auto"
                  >
                    Get Quote
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
