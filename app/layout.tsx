import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Components/ThemeProvider";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolioafzaal.vercel.app"),
  title: {
    default: "Afzaal — Web & App Developer",
    template: "%s | Afzaal Chandio",
  },
  description:
    "Afzaal is a web and app developer creating expressive, high-performance digital experiences with Next.js, TypeScript, and modern UI frameworks.",
  generator: "Afzaal Chandio",
  keywords: [
    "Dev.Afzaal",
    "Web Developer Afzaal",
    "Afzaal",
    "Afzaal Chandio",
    "Afzaal Chandio Portfolio",
    "Portfolio Afzal",
    "Chandio PORTFOLIO",
    "Afzaal Hussain",
    "Full-Stack Developer Afzaal Hussain",
    "Pakistan portfolio",
  ],
  authors: [
    { name: "Afzaal Chandio", url: "https://github.com/afzalafzaal029-web" },
  ],
  creator: "Afzaal Chandio",
  publisher: "Afzaal Chandio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolioafzaal.vercel.app",
    siteName: "Afzaal Chandio — Portfolio",
    title: "Afzaal — Web & App Developer",
    description:
      "Afzaal is a web and app developer creating expressive, high-performance digital experiences with Next.js and TypeScript.",
    images: [
      {
        url: "/portfolio-image.png",
        width: 1200,
        height: 630,
        alt: "Afzaal Chandio — Web & App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afzaal — Web & App Developer",
    description:
      "Afzaal is a web and app developer creating expressive, high-performance digital experiences with Next.js and TypeScript.",
    images: ["/portfolio-image.png"],
    creator: "@afzaaldev",
    site: "@afzaaldev",
  },
  alternates: {
    canonical: "https://portfolioafzaal.vercel.app",
    languages: {
      "en-US": "https://portfolioafzaal.vercel.app",
    },
  },
  verification: {
    google: "UNx2lKPtjcM6Yo4CM2BXFD5w4AnImv6dvlQ-IhsLS6A", // ← isko apni actual google verification se replace karein
  },
  category: "technology",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Afzaal Chandio",
    url: "https://portfolioafzaal.vercel.app",
    sameAs: [
      "https://github.com/afzalafzaal029-web",
      "https://www.linkedin.com/in/web-and-app-developere",
      "https://wa.me/923103104364",
    ],
    jobTitle: "Web & App Developer",
    description:
      "Afzaal is a web and app developer creating expressive, high-performance digital experiences with Next.js and TypeScript.",
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Github",
      "Git",
      "Vercel",
    ],
  };

  return (
    <html
      lang="en"
      className={`bg-background ${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Favicon and Apple Touch Icon */}
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/svg+xml" href="/icon.svg" />
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
<link rel="apple-touch-icon" href="/favicon-180x180.png" />
<link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
