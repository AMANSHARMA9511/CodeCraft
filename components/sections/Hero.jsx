"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { getWhatsAppUrl } from "@/lib/constants";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-[var(--bg-primary)]" />
        {/* Blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full
          bg-gradient-to-br from-violet-600/20 to-purple-600/10
          blur-[80px] md:blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-[400px] md:h-[400px] rounded-full
          bg-gradient-to-br from-pink-600/15 to-rose-600/10
          blur-[80px] md:blur-[120px] animate-blob"
          style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-48 h-48 md:w-[300px] md:h-[300px] rounded-full
          bg-gradient-to-br from-indigo-600/10 to-violet-600/5
          blur-[60px] md:blur-[100px] animate-blob"
          style={{ animationDelay: "4s" }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-28 pb-20 text-center"
      >
        <StaggerContainer>
          {/* Badge */}
          <StaggerItem>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              border border-[var(--accent)]/30 bg-[var(--accent)]/8
              text-[var(--accent)] text-sm font-medium mb-8">
              <Sparkles size={14} />
              Web Development Agency
            </div>
          </StaggerItem>

          {/* Headline */}
          <StaggerItem>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold
              tracking-tight leading-[1.08] mb-6">
              We Craft{" "}
              <span className="gradient-text">Digital Experiences</span>
              <br className="hidden sm:block" />
              {" "}That Drive Growth
            </h1>
          </StaggerItem>

          {/* Subheading */}
          <StaggerItem>
            <p className="text-base sm:text-lg text-[var(--text-secondary)]
              max-w-2xl mx-auto mb-10 leading-relaxed">
              From bold business websites to complex web applications —
              we design and build digital products that look great, perform fast
              and generate real results for your business.
            </p>
          </StaggerItem>

          {/* CTA Buttons */}
          <StaggerItem>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full
                  text-sm font-semibold text-white
                  bg-gradient-to-r from-violet-600 to-purple-600
                  hover:from-violet-500 hover:to-purple-500
                  shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50
                  transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                Start Your Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full
                  text-sm font-semibold text-[var(--text-primary)]
                  border border-[var(--border)] hover:border-[var(--accent)]/50
                  hover:bg-[var(--accent)]/5 hover:-translate-y-1
                  transition-all duration-300"
              >
                View Our Work
              </Link>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full
                  text-sm font-semibold text-[#25D366]
                  border border-[#25D366]/30 bg-[#25D366]/8
                  hover:bg-[#25D366]/15 hover:-translate-y-1
                  transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </StaggerItem>

          {/* Trust strip */}
          <StaggerItem>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--text-muted)]">
              {[
                "✓ Custom Built",
                "✓ Mobile First",
                "✓ SEO Optimized",
                "✓ Post-Launch Support",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1">
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
        text-[var(--text-muted)] text-xs tracking-widest uppercase" aria-hidden="true">
        <span>Scroll</span>
        <div className="w-5 h-8 rounded-full border border-current flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="w-1 h-2 bg-current rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
