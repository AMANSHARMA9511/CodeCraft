import { SITE } from "@/lib/constants";

export const metadata = {
  title: "Terms & Conditions",
  description: "CodeCraft Terms & Conditions — terms governing use of our services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By using CodeCraft's website and services, you agree to be bound by these Terms. If you do not agree, please do not use our services.",
  },
  {
    title: "2. Services",
    body: "CodeCraft provides web development, design and related digital services. Specific terms for each project are governed by a separate service agreement.",
  },
  {
    title: "3. Intellectual Property",
    body: "Upon full payment, clients receive ownership of the custom code developed for their project. CodeCraft retains rights to reuse general tools, frameworks and methodologies.",
  },
  {
    title: "4. Payments",
    body: "An upfront deposit is required before commencing work, with remaining payments tied to project milestones. All payments are non-refundable once work has commenced, unless otherwise agreed in writing.",
  },
  {
    title: "5. Client Responsibilities",
    body: "Clients are responsible for providing accurate requirements, timely feedback, required assets and payments. Delays caused by late client responses may affect agreed timelines.",
  },
  {
    title: "6. Limitation of Liability",
    body: "CodeCraft shall not be liable for indirect or consequential damages. Our total liability is limited to the amount paid for the specific service.",
  },
  {
    title: "7. Confidentiality",
    body: "Both parties agree to maintain the confidentiality of proprietary and sensitive information shared during the project engagement.",
  },
  {
    title: "8. Modifications",
    body: "We reserve the right to update these Terms at any time. Continued use of our services constitutes acceptance of the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      <div className="pt-28 pb-16 border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <h1 className="text-4xl font-extrabold text-[var(--text-primary)] mb-2">
            Terms & Conditions
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
            <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2">9. Contact</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              Questions about these Terms? Email us at{" "}
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
