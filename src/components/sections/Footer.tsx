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
    <footer className="site-footer border-t border-[var(--divider)] pt-10 md:pt-14">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:gap-10">
        <div>
          <Logo variant="lockup" size="footer" />
          <p className="mt-3 max-w-sm text-sm text-[var(--muted)] md:mt-4">
            Digital products, SaaS platforms and growth experiences engineered for ambitious
            businesses.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:contents">
          {columns.map((col) => (
            <div key={col.title} className={col.title === "Contact" ? "col-span-2 sm:col-span-1" : undefined}>
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{col.title}</p>
              <ul className="mt-3 space-y-2 md:mt-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="break-words text-sm text-[var(--text)] transition-colors hover:text-[var(--brand-cyan)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-8 flex flex-col gap-1 border-t border-[var(--divider)] pt-5 text-xs text-[var(--muted)] md:mt-10 md:flex-row md:items-center md:justify-between md:gap-2 md:pt-6">
        <p>© 2026 Balkrishna Infotech. All rights reserved.</p>
        <p>Privacy · Terms · balkrishnainfotech.com</p>
      </div>
    </footer>
  );
}
