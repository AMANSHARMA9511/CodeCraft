"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { getWhatsAppUrl } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-[var(--bg-primary)]" aria-hidden="true" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[700px] h-[400px] rounded-full
          bg-gradient-to-r from-violet-600/12 via-purple-600/10 to-pink-600/8
          blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <StaggerContainer>
          <StaggerItem>
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                border border-[var(--accent)]/30 bg-[var(--accent)]/8
                text-[var(--accent)] text-xs font-semibold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              Ready to build something great?
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <h2 id="cta-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold
                tracking-tight leading-[1.1] mb-5 text-[var(--text-primary)]">
              Have an Idea?{" "}
              <span className="gradient-text">Let's Build It.</span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-[var(--text-secondary)] text-base md:text-lg
              max-w-2xl mx-auto mb-10 leading-relaxed">
              Tell us about your project and we'll turn your idea into a modern
              digital product that drives real business results.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full
                  text-sm font-bold text-white
                  bg-gradient-to-r from-violet-600 to-purple-600
                  hover:from-violet-500 hover:to-purple-500
                  shadow-2xl shadow-violet-500/35 hover:shadow-violet-500/50
                  transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                Start Your Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full
                  text-sm font-bold text-[#25D366]
                  border border-[#25D366]/30 bg-[#25D366]/8
                  hover:bg-[#25D366]/15 hover:border-[#25D366]/50
                  transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-7 text-xs text-[var(--text-muted)]">
              No commitment required · Free consultation · Response within 24 hours
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
