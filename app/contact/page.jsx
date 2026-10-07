import ContactForm from "@/components/sections/ContactForm";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { SITE, getWhatsAppUrl } from "@/lib/constants";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CodeCraft. Share your project requirements and we'll get back to you within 24 hours.",
};

const contactInfo = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "Chat with us directly",
    href: getWhatsAppUrl(),
    external: true,
    green: true,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "Working Hours",
    value: "Mon–Sat, 9AM – 7PM IST",
    href: null,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Location",
    value: "India (Remote & On-site)",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      {/* Header */}
      <div className="pt-28 pb-16 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full
          bg-violet-600/8 blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <StaggerContainer>
            <StaggerItem>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                border border-[var(--accent)]/30 bg-[var(--accent)]/8
                text-[var(--accent)] text-sm font-medium mb-5">
                Contact Us
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold
                tracking-tight text-[var(--text-primary)] mb-4 max-w-2xl">
                Let's Build Something{" "}
                <span className="gradient-text">Great Together</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-[var(--text-secondary)] text-lg max-w-xl">
                Share your project requirements and we'll get back to you within 24 hours.
                For immediate help, reach us on WhatsApp.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left sidebar — contact info */}
          <aside className="lg:col-span-2 space-y-8">
            <StaggerContainer>
              <StaggerItem>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Get in Touch
                </h2>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Whether you have a detailed brief or just an idea —
                  let's start the conversation.
                </p>
              </StaggerItem>

              {/* Contact details */}
              <div className="space-y-4 mt-6">
                {contactInfo.map((item) => (
                  <StaggerItem key={item.label}>
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center
                        flex-shrink-0 border transition-colors
                        ${item.green
                          ? "bg-[#25D366]/10 border-[#25D366]/20 text-[#25D366]"
                          : "bg-[var(--accent)]/10 border-[var(--accent)]/20 text-[var(--accent)]"
                        }`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide
                          text-[var(--text-muted)] mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            className="text-sm text-[var(--text-primary)]
                              hover:text-[var(--accent)] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-[var(--text-primary)]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>

              {/* Quick WhatsApp CTA */}
              <StaggerItem>
                <div className="mt-8 p-5 rounded-2xl bg-[#25D366]/8
                  border border-[#25D366]/20">
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                    Need a faster response?
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] mb-3">
                    WhatsApp us directly for immediate assistance.
                  </p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl
                      text-sm font-bold text-[#25D366]
                      bg-[#25D366]/12 border border-[#25D366]/25
                      hover:bg-[#25D366]/20 transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Open WhatsApp
                  </a>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </aside>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-7 sm:p-9 rounded-3xl
              bg-[var(--bg-secondary)] border border-[var(--border)]">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-1">
                Start Your Project
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mb-7">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
