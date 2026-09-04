import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

import { MotionProvider } from "@/providers/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-DVXQQ2PJ02";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Purple",
  legalName: "PRP İletişim ve Reklam Hiz. Tic. Ltd. Şti.",
  alternateName: ["PRP", "purple.ist"],
  url: "https://purple.ist",
  logo: "https://purple.ist/images/purple-logo.png",
  telephone: "+90 216 514 24 79",
  email: "hello@purple.ist",
  slogan: "Markaların görünürlüğünü değil, etkisini büyütüyoruz.",
  description:
    "Purple stratejik iletişim, kurumsal PR, CEO iletişimi, marka stratejisi ve marka deneyimi alanlarında iletişim danışmanlığı sunar.",
  knowsAbout: [
    "Stratejik iletişim",
    "Kurumsal PR",
    "CEO iletişimi",
    "Savunma sanayi iletişimi",
    "Fuar iletişimi",
    "Marka stratejisi",
    "Dijital büyüme",
    "Marka deneyimi",
  ],
  areaServed: ["TR", "İstanbul"],
  sameAs: [
    "https://www.linkedin.com/company/71548333",
    "https://www.instagram.com/purple.ist1/",
    "https://www.youtube.com/@purplecreative1378",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+90 216 514 24 79",
      email: "hello@purple.ist",
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["tr"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ömerli Mah. Kadirova Cad. Dekar Kıyıbahçe Sitesi No: 36 B Blok Daire 27/B",
    addressLocality: "Çekmeköy",
    addressRegion: "İstanbul",
    postalCode: "34782",
    addressCountry: "TR",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Purple",
  url: "https://purple.ist",
  description:
    "Purple stratejik iletişim, kurumsal PR ve marka deneyimi alanlarında iletişim danışmanlığı sunar.",
  inLanguage: "tr-TR",
  publisher: {
    "@type": "Organization",
    name: "Purple",
    url: "https://purple.ist",
    logo: "https://purple.ist/images/purple-logo.png",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://purple.ist"),
  applicationName: "Purple",
  title: {
    default: "Purple | Stratejik İletişim & PR Ajansı",
    template: "%s | Purple",
  },
  description:
    "Purple; stratejik iletişim, kurumsal PR, CEO iletişimi, savunma sanayi iletişimi, fuar iletişimi ve marka deneyimi alanlarında büyüme odaklı iletişim danışmanlığı sunar.",
  keywords: [
    "stratejik iletişim",
    "kurumsal PR",
    "CEO iletişimi",
    "savunma sanayi iletişimi",
    "fuar iletişimi",
    "marka deneyimi",
    "purple.ist",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Purple | Stratejik İletişim & PR Ajansı",
    description: "Markaların görünürlüğünü değil, etkisini büyütüyoruz.",
    url: "https://purple.ist",
    siteName: "Purple",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Purple" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Purple | Stratejik İletişim & PR Ajansı",
    description: "Markaların görünürlüğünü değil, etkisini büyütüyoruz.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {/* Skip link for keyboard / screen reader navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-zinc-950 focus:shadow-lg"
        >
          İçeriğe geç
        </a>
        <MotionProvider>
          {children}
        </MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  );
}
