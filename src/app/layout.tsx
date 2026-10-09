import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://balkrishnainfotech.com"),
  title: "Balkrishna Infotech | Web, Mobile, SaaS & eCommerce Development",
  description:
    "Balkrishna Infotech designs and builds websites, mobile apps, SaaS platforms, eCommerce products, AI automations and scalable digital experiences for growing businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Balkrishna Infotech | Web, Mobile, SaaS & eCommerce Development",
    description:
      "We build digital products, SaaS platforms, commerce experiences and growth systems — from strategy and design through engineering, launch and scale.",
    url: "https://balkrishnainfotech.com",
    siteName: "Balkrishna Infotech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balkrishna Infotech | We Build What's Next.",
    description:
      "Digital products, SaaS platforms and growth experiences engineered for ambitious businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Balkrishna Infotech",
  url: "https://balkrishnainfotech.com",
  logo: "https://harsh1110.github.io/balkrishna-infotech/brand/logo-main.png",
  description:
    "Product engineering company building digital products, SaaS platforms, commerce experiences and growth systems.",
  email: "info@balkrishnainfotech.com",
  telephone: "+917041493634",
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "info@balkrishnainfotech.com",
      telephone: "+917041493634",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Balkrishna Infotech",
  url: "https://balkrishnainfotech.com",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
