"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { FAQS } from "@/lib/constants";

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      className="border border-[var(--border)] rounded-xl overflow-hidden
        hover:border-[var(--border-accent)] transition-colors duration-200"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4
          px-5 py-3.5 text-left
          bg-[var(--bg-secondary)] hover:bg-[var(--bg-card)]
          transition-colors duration-200
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-[var(--accent)] focus-visible:ring-inset"
      >
        <span className="font-semibold text-sm text-[var(--text-primary)] leading-snug pr-2">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0
            border transition-colors duration-200
            ${open
              ? "bg-[var(--accent)]/15 border-[var(--accent)]/30 text-[var(--accent)]"
              : "bg-[var(--bg-primary)] border-[var(--border)] text-[var(--text-secondary)]"
            }`}
        >
          <Plus size={13} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 pt-1 text-xs text-[var(--text-secondary)]
              leading-relaxed bg-[var(--bg-secondary)] border-t border-[var(--border)]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="faq-heading">
      <div className="absolute inset-0 bg-[var(--bg-primary)]" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
        <StaggerContainer className="text-center mb-10">
          <StaggerItem>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
              border border-[var(--accent)]/30 bg-[var(--accent)]/8
              text-[var(--accent)] text-xs font-semibold mb-4">
              FAQ
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 id="faq-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                tracking-tight text-[var(--text-primary)] mb-3">
              Common{" "}
              <span className="gradient-text">Questions</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-[var(--text-secondary)] text-sm md:text-base">
              Everything you need to know about working with CodeCraft.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <div className="space-y-2.5">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
