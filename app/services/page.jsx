import {
  Globe, ShoppingCart, Code2, Palette, Zap, Shield,
} from "lucide-react";
import Link from "next/link";
import { SERVICES, getWhatsAppUrl } from "@/lib/constants";
import CTA from "@/components/sections/CTA";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export const metadata = {
  title: "Services",
  description:
    "Explore all CodeCraft services — business websites, e-commerce, web applications, UI/UX design, APIs and maintenance.",
};

const ICONS = { Globe, ShoppingCart, Code2, Palette, Zap, Shield };

export default function ServicesPage() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      {/* Page Header */}
      <div className="pt-28 pb-16 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full
            bg-violet-600/8 blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <StaggerContainer>
            <StaggerItem>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                border border-[var(--accent)]/30 bg-[var(--accent)]/8
                text-[var(--accent)] text-sm font-medium mb-5">
                Services
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold
                tracking-tight text-[var(--text-primary)] mb-4 max-w-2xl">
                Everything You Need to{" "}
                <span className="gradient-text">Go Digital</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-[var(--text-secondary)] text-lg max-w-xl">
                From simple business websites to complex web applications —
                we design and build digital products that deliver results.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* Services detail */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 space-y-24">
        {SERVICES.map((service, index) => {
          const Icon = ICONS[service.icon] || Globe;
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.id}
              aria-labelledby={`service-title-${service.id}`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center
                ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}>

                {/* Text side */}
                <StaggerContainer>
                  <StaggerItem>
                    <div className={`inline-flex items-center gap-3 mb-5`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color}
                        border border-white/5 flex items-center justify-center ${service.iconColor}`}>
                        <Icon size={24} strokeWidth={1.8} />
                      </div>
                      <span className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-widest">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <h2 id={`service-title-${service.id}`}
                      className="text-3xl md:text-4xl font-extrabold
                        text-[var(--text-primary)] tracking-tight mb-3">
                      {service.title}
                    </h2>
                  </StaggerItem>

                  <StaggerItem>
                    <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.features.map((f) => (
                        <span key={f}
                          className="inline-flex items-center gap-1.5 text-sm px-3.5 py-1.5
                            rounded-full bg-[var(--bg-secondary)] border border-[var(--border)]
                            text-[var(--text-secondary)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                          text-sm font-semibold text-white
                          bg-gradient-to-r from-violet-600 to-purple-600
                          hover:from-violet-500 hover:to-purple-500
                          shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35
                          transition-all duration-300 hover:-translate-y-0.5"
                      >
                        Get a Quote
                      </Link>
                      <a
                        href={getWhatsAppUrl(`Hi CodeCraft! I'm interested in ${service.title}. Let's discuss.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                          text-sm font-semibold text-[#25D366]
                          border border-[#25D366]/30 bg-[#25D366]/8
                          hover:bg-[#25D366]/15 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        WhatsApp Us
                      </a>
                    </div>
                  </StaggerItem>
                </StaggerContainer>

                {/* Visual card side */}
                <div className={`${!isEven ? "order-first lg:order-none" : ""}`}>
                  <div className={`p-8 rounded-3xl bg-gradient-to-br ${service.color}
                    border border-[var(--border)] backdrop-blur-sm`}>
                    <h3 className="font-bold text-sm uppercase tracking-widest
                      text-[var(--text-primary)] mb-5">
                      What's Included
                    </h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature}
                          className="flex items-center gap-2.5 p-3.5 rounded-xl
                            bg-[var(--bg-primary)]/60 backdrop-blur-sm
                            border border-[var(--border)]">
                          <span className="w-5 h-5 rounded-full bg-[var(--accent)]/15
                            border border-[var(--accent)]/30
                            flex items-center justify-center flex-shrink-0">
                            <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round"
                                className="text-[var(--accent)]"/>
                            </svg>
                          </span>
                          <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < SERVICES.length - 1 && (
                <div className="border-t border-[var(--border)] mt-24" />
              )}
            </section>
          );
        })}
      </div>

      <CTA />
    </div>
  );
}
