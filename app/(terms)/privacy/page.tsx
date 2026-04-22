import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/homecomps/Header";
import Footer from "@/app/homecomps/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Libstackz",
  description:
    "Learn how Libstackz collects, uses, and protects your personal and library data. Our commitment to privacy, security, and data transparency.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "April 22, 2026";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    body: (
      <>
        <p>
          We collect information that helps us operate and improve Libstackz.
          The categories of information include:
        </p>
        <ul>
          <li>
            <strong>Account information</strong> such as name, email address,
            institution name, role, and password (stored in hashed form).
          </li>
          <li>
            <strong>Library data</strong> you upload or create, including
            catalog records, member details, circulation history, and
            transaction logs.
          </li>
          <li>
            <strong>Usage data</strong> like pages viewed, features used, device
            type, browser, IP address, and approximate location.
          </li>
          <li>
            <strong>Communications</strong> you send to our support team,
            including the content of emails and attachments.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and secure the Libstackz service.</li>
          <li>
            Authenticate users, prevent abuse, and detect fraudulent activity.
          </li>
          <li>Deliver customer support and respond to requests or feedback.</li>
          <li>
            Improve existing features, develop new ones, and understand how
            Libstackz is used.
          </li>
          <li>
            Send essential service notifications, and — only with your consent —
            product updates.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "3. Legal Basis for Processing",
    body: (
      <p>
        We process your data under the following lawful bases: performance of
        the contract you have with us, compliance with legal obligations, our
        legitimate interest in operating and improving Libstackz, and, where
        applicable, your explicit consent. You may withdraw consent at any time
        without affecting prior processing.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "4. How We Share Information",
    body: (
      <>
        <p>
          We do not sell your personal information. We share data only in
          limited circumstances:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> that host our infrastructure,
            send transactional email, or process payments — all bound by
            confidentiality and data protection agreements.
          </li>
          <li>
            <strong>Within your institution</strong>, where your librarians or
            administrators may view library records you create.
          </li>
          <li>
            <strong>Legal compliance</strong>, when required by law, court
            order, or to protect rights, safety, and property.
          </li>
          <li>
            <strong>Business transfers</strong>, in the event of a merger,
            acquisition, or sale of assets — you will be notified in advance.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "5. Data Security",
    body: (
      <p>
        We protect your information using industry-standard measures, including
        TLS encryption in transit, encryption at rest for sensitive fields,
        access controls, and regular security reviews. While no system can be
        guaranteed 100% secure, we work continuously to reduce risk and respond
        quickly to any incident.
      </p>
    ),
  },
  {
    id: "retention",
    title: "6. Data Retention",
    body: (
      <p>
        We retain your account and library data for as long as your subscription
        is active. On cancellation, we keep data for up to 90 days to allow
        recovery, after which it is permanently deleted from our active systems.
        Backups are rotated and purged within 180 days.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    body: (
      <>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access, correct, or download a copy of your personal data.</li>
          <li>Request deletion of your data, subject to legal retention.</li>
          <li>Object to or restrict certain types of processing.</li>
          <li>Withdraw consent where processing is based on consent.</li>
          <li>Lodge a complaint with your local data protection authority.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:libstackz@ziqx.cc">libstackz@ziqx.cc</a>.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "8. Cookies & Tracking",
    body: (
      <p>
        Libstackz uses essential cookies to keep you signed in and to remember
        your preferences. We use a limited set of analytics cookies — only where
        allowed by your cookie settings — to understand feature usage. We do not
        use third-party advertising cookies.
      </p>
    ),
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    body: (
      <p>
        Libstackz is intended for use by institutions and their authorized
        members. We do not knowingly collect personal data from children under
        13 without verifiable parental or institutional consent. If you believe
        a child has provided us information without authorization, contact us
        and we will take steps to remove it.
      </p>
    ),
  },
  {
    id: "international",
    title: "10. International Data Transfers",
    body: (
      <p>
        Libstackz is operated from India and may be hosted on servers in
        multiple regions for reliability. When we transfer data across borders,
        we use appropriate safeguards such as standard contractual clauses to
        protect your information.
      </p>
    ),
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. When changes are
        material, we will notify you by email or through the dashboard before
        the changes take effect. The &ldquo;Last updated&rdquo; date at the top
        reflects the most recent revision.
      </p>
    ),
  },
  {
    id: "contact",
    title: "12. Contact Us",
    body: (
      <>
        <p>
          If you have questions about this Privacy Policy or how we handle your
          data, reach out at:
        </p>
        <ul>
          <li>
            Email: <a href="mailto:libstackz@ziqx.cc">libstackz@ziqx.cc</a>
          </li>
          <li>
            Website: <a href="https://ziqx.in">ziqx.in</a>
          </li>
          <li>Ziqx CC LLP, India</li>
        </ul>
      </>
    ),
  },
];

const PrivacyPage = () => {
  return (
    <main className="min-h-screen bg-surface">
      <Header />

      <section className="pt-36 pb-16 border-b border-outline-variant/60">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-5">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            This policy explains how Libstackz collects, uses, and safeguards
            your information when you use our library management platform.
          </p>
          <p className="mt-6 text-sm text-on-surface-variant/80">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-semibold tracking-widest uppercase text-on-surface mb-4">
                Contents
              </p>
              <nav>
                <ul className="space-y-3">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-300"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          <article className="space-y-12">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-semibold text-on-surface mb-4">
                  {s.title}
                </h2>
                <div className="prose-content text-[15px] leading-7 text-on-surface-variant space-y-4">
                  {s.body}
                </div>
              </div>
            ))}

            <div className="mt-16 p-8 rounded-2xl bg-surface-low border border-outline-variant/60">
              <h3 className="text-lg font-semibold text-on-surface mb-2">
                Questions about your data?
              </h3>
              <p className="text-sm text-on-surface-variant mb-5 leading-relaxed">
                We&apos;re happy to help. Reach out and our team will get back
                to you within two business days.
              </p>
              <Link
                href="mailto:libstackz@ziqx.cc"
                className="inline-block px-6 py-2.5 text-sm font-semibold text-on-primary rounded-full transition-all duration-300 hover:brightness-110"
                style={{
                  background:
                    "linear-gradient(180deg, var(--primary) 0%, var(--primary-container) 100%)",
                }}
              >
                Contact Us
              </Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />

      <style>{`
        .prose-content a { color: var(--primary); text-decoration: underline; text-underline-offset: 2px; }
        .prose-content a:hover { color: var(--primary-container); }
        .prose-content strong { color: var(--on-surface); font-weight: 600; }
        .prose-content ul { list-style: disc; padding-left: 1.25rem; }
        .prose-content ul li { padding-left: 0.25rem; }
      `}</style>
    </main>
  );
};

export default PrivacyPage;
