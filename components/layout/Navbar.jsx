"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Globe, ShoppingCart, Code2, Palette, Zap, Shield } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NAV_LINKS, SERVICES, getWhatsAppUrl } from "@/lib/constants";

/* ── Icon map ── */
const ICONS = { Globe, ShoppingCart, Code2, Palette, Zap, Shield };

/* ── Services dropdown ── */
const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 340, damping: 24 },
  },
  exit: {
    opacity: 0, y: 6, scale: 0.97,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

function ServicesDropdown({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px]
            bg-[var(--bg-primary)] border border-[var(--border)]
            rounded-2xl shadow-2xl shadow-black/15
            backdrop-blur-xl overflow-hidden z-50"
          role="menu"
          aria-label="Services menu"
        >
          {/* Top stripe */}
          <div className="h-0.5 bg-gradient-to-r from-violet-500 via-pink-500 to-purple-500" />

          <div className="p-3 grid grid-cols-2 gap-1.5">
            {SERVICES.map((service) => {
              const Icon = ICONS[service.icon] || Globe;
              return (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  role="menuitem"
                  className="group flex items-start gap-3 px-3 py-3 rounded-xl
                    hover:bg-[var(--bg-secondary)] transition-all duration-150"
                >
                  {/* Icon */}
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color}
                    border border-[var(--border)] flex items-center justify-center
                    flex-shrink-0 ${service.iconColor}
                    group-hover:scale-105 transition-transform duration-200`}>
                    <Icon size={15} strokeWidth={1.8} />
                  </div>
                  {/* Text */}
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[var(--text-primary)]
                      group-hover:text-[var(--accent)] transition-colors leading-tight mb-0.5">
                      {service.title}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] leading-snug line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-3 pb-3">
            <Link
              href="/services"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl
                text-xs font-semibold text-white
                bg-gradient-to-r from-violet-600 to-purple-600
                hover:from-violet-500 hover:to-purple-500
                transition-all duration-200"
            >
              View All Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Main Navbar ── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const pathname = usePathname();

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close everything on route change */
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-[var(--bg-primary)]/85 border-b border-[var(--border)] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700
              flex items-center justify-center shadow-lg shadow-violet-500/25
              hover:shadow-violet-500/40 transition-all">
              <span className="text-white font-black text-xs tracking-tight">CC</span>
            </div>
            <span className="font-extrabold text-lg text-[var(--text-primary)] tracking-tight">
              Code<span className="text-[var(--accent)]">Craft</span>
            </span>
          </Link>

          {/* ── Desktop Links ── */}
          <ul className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const isServices = link.name === "Services";
              const isActive = pathname === link.href ||
                (isServices && pathname.startsWith("/services"));

              if (isServices) {
                return (
                  <li key={link.href} className="relative" ref={servicesRef}>
                    <button
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="menu"
                      className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium
                        rounded-lg transition-colors duration-200 cursor-pointer
                        ${isActive
                          ? "text-[var(--accent)]"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-0 bg-[var(--accent)]/10 rounded-lg"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      <span className="relative">Services</span>
                      <motion.span
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative"
                      >
                        <ChevronDown size={14} strokeWidth={2.5} />
                      </motion.span>
                    </button>

                    {/* Hover bridge — prevents gap between button and dropdown */}
                    {servicesOpen && (
                      <div
                        className="absolute top-full left-0 right-0 h-2"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        aria-hidden="true"
                      />
                    )}

                    {/* Dropdown */}
                    <div
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <ServicesDropdown open={servicesOpen} />
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg
                      transition-colors duration-200 block
                      ${isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-[var(--accent)]/10 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold
                text-[var(--text-secondary)] hover:text-[#25D366]
                border border-[var(--border)] hover:border-[#25D366]/40
                hover:bg-[#25D366]/5 transition-all duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white
                bg-gradient-to-r from-violet-600 to-purple-600
                hover:from-violet-500 hover:to-purple-500
                shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35
                transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Quote
            </Link>
          </div>

          {/* ── Mobile controls ── */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl
                text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]
                transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <span className={`w-5 h-0.5 bg-current rounded transition-all duration-300
                ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-5 h-0.5 bg-current rounded transition-all duration-300
                ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`w-5 h-0.5 bg-current rounded transition-all duration-300
                ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full
                bg-[var(--bg-primary)] border-l border-[var(--border)]
                shadow-2xl flex flex-col md:hidden overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-purple-700
                    flex items-center justify-center">
                    <span className="text-white font-black text-xs">CC</span>
                  </div>
                  <span className="font-extrabold text-[var(--text-primary)]">
                    Code<span className="text-[var(--accent)]">Craft</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 flex items-center justify-center rounded-lg
                    text-[var(--text-secondary)] hover:text-[var(--text-primary)]
                    hover:bg-[var(--bg-secondary)] transition-all"
                >
                  <X size={17} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-4 py-4 space-y-1">
                {NAV_LINKS.map((link) => {
                  const isServices = link.name === "Services";
                  const isActive = pathname === link.href ||
                    (isServices && pathname.startsWith("/services"));

                  if (isServices) {
                    return (
                      <div key={link.href}>
                        {/* Services toggle */}
                        <button
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          aria-expanded={mobileServicesOpen}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl
                            text-sm font-medium transition-all
                            ${isActive
                              ? "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                            }`}
                        >
                          <span className="flex items-center gap-2">
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                            )}
                            Services
                          </span>
                          <motion.span
                            animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={15} />
                          </motion.span>
                        </button>

                        {/* Mobile services sub-list */}
                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
                              className="overflow-hidden ml-2 mt-1 space-y-0.5"
                            >
                              {SERVICES.map((service) => {
                                const Icon = ICONS[service.icon] || Globe;
                                return (
                                  <Link
                                    key={service.id}
                                    href={`/services#${service.id}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                                      text-sm text-[var(--text-secondary)]
                                      hover:text-[var(--text-primary)]
                                      hover:bg-[var(--bg-secondary)] transition-all"
                                  >
                                    <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${service.color}
                                      border border-[var(--border)] flex items-center justify-center
                                      flex-shrink-0 ${service.iconColor}`}>
                                      <Icon size={13} strokeWidth={1.8} />
                                    </div>
                                    <span className="font-medium text-xs">{service.title}</span>
                                  </Link>
                                );
                              })}
                              <Link
                                href="/services"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-1.5 px-3 py-2 text-xs
                                  font-semibold text-[var(--accent)]
                                  hover:underline underline-offset-2 transition-all"
                              >
                                View all services →
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl
                        text-sm font-medium transition-all
                        ${isActive
                          ? "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                        }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      )}
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Bottom CTAs */}
              <div className="px-4 py-5 border-t border-[var(--border)] space-y-2.5">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3 rounded-xl
                    text-sm font-semibold text-white
                    bg-gradient-to-r from-violet-600 to-purple-600
                    hover:from-violet-500 hover:to-purple-500 transition-all"
                >
                  Get a Free Quote
                </Link>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl
                    text-sm font-semibold text-[#25D366]
                    bg-[#25D366]/10 border border-[#25D366]/25
                    hover:bg-[#25D366]/15 transition-all"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
