import type { Metadata } from "next";
import { DM_Sans, Public_Sans, PT_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Display + serif accent faces used by the redesigned (Cohesion-style) sections.
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
  variable: "--font-serif",
  display: "swap",
});

const description =
  "Growth Marketing strategist with 8+ years of experience. Working at the intersection of data and user behavior.";

export const metadata: Metadata = {
  metadataBase: new URL("https://alidemirbas.com.tr"),
  title: {
    default: "Ali Demirbaş · Growth Marketer",
    template: "%s · Ali Demirbaş",
  },
  description,
  alternates: { canonical: "https://alidemirbas.com.tr" },
  openGraph: {
    title: "Ali Demirbaş · Growth Marketer",
    description,
    url: "https://alidemirbas.com.tr",
    siteName: "Ali Demirbaş",
    locale: "en_US",
    type: "website",
    images: [{ url: "/foto.webp", width: 600, height: 600, alt: "Ali Demirbaş" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Demirbaş · Growth Marketer",
    description,
    images: ["/foto.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${publicSans.variable} ${ptSerif.variable}`}
    >
      <body>
        <Navbar />
        <div className="app-main">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
