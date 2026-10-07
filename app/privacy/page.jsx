import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy",
  description: "CodeCraft Privacy Policy — how we handle your information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: "When you contact us or use our services, we may collect your name, email address, phone number and project details that you voluntarily provide through our contact forms or direct communication.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information you provide to respond to your enquiries, provide our web development services, send project-related updates and improve our services.",
  },
  {
    title: "3. Information Sharing",
    body: "We do not sell, trade or share your personal information with third parties without your explicit consent, except where required by law or necessary to provide our services.",
  },
  {
    title: "4. Data Security",
    body: "We implement appropriate technical measures to protect your personal information against unauthorized access, alteration, disclosure or destruction.",
  },
  {
    title: "5. Cookies",
    body: "Our website may use cookies to improve your browsing experience. You can disable cookies through your browser settings.",
  },
  {
    title: "6. Your Rights",
    body: "You have the right to access, correct or delete any personal information we hold. Contact us at the email below to exercise these rights.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      <div className="pt-28 pb-16 border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h1 className="text-4xl font-extrabold text-[var(--text-primary)] mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-[var(--text-muted)]">Last updated: January 2025</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2">{s.title}</h2>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{s.body}</p>
            </section>
          ))}

          <section>
            <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2">7. Contact</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              Questions about this policy? Email us at{" "}
              <a href={`mailto:${SITE.email}`}
                className="text-[var(--accent)] hover:underline underline-offset-2">
                {SITE.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
