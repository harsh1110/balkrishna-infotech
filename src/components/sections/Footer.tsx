import { Logo } from "@/components/Logo";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Products", href: "#products" },
      { label: "Work", href: "#work" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "#insights" },
      { label: "Project builder", href: "#project-builder" },
      { label: "Technology", href: "#tech-heading" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "info@balkrishnainfotech.com", href: "mailto:info@balkrishnainfotech.com" },
      { label: "+91 70414 93634", href: "tel:+917041493634" },
      { label: "Let's Talk", href: "#project-builder" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--divider)] pb-10 pt-14">
      <div className="container grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Logo variant="lockup" size="footer" />
          <p className="mt-4 max-w-sm text-sm text-[var(--muted)]">
            Digital products, SaaS platforms and growth experiences engineered for ambitious
            businesses.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{col.title}</p>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text)] transition-colors hover:text-[var(--brand-cyan)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mt-10 flex flex-col gap-2 border-t border-[var(--divider)] pt-6 text-xs text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>© 2026 Balkrishna Infotech. All rights reserved.</p>
        <p>Privacy · Terms · balkrishnainfotech.com</p>
      </div>
    </footer>
  );
}
