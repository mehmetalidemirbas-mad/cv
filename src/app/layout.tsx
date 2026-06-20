import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/Sidebar";
import MobileTopbar from "./_components/MobileTopbar";
import TabBar from "./_components/TabBar";
import Footer from "./_components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Growth Marketing strategist with 8+ years of experience. Working at the intersection of data and user behavior.";

export const metadata: Metadata = {
  metadataBase: new URL("https://alidemirbas.com"),
  title: {
    default: "Ali Demirbaş — Growth Marketer",
    template: "%s · Ali Demirbaş",
  },
  description,
  alternates: { canonical: "https://alidemirbas.com" },
  openGraph: {
    title: "Ali Demirbaş — Growth Marketer",
    description,
    url: "https://alidemirbas.com",
    siteName: "Ali Demirbaş",
    locale: "en_US",
    type: "website",
    images: [{ url: "/foto.webp", width: 600, height: 600, alt: "Ali Demirbaş" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Demirbaş — Growth Marketer",
    description,
    images: ["/foto.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <Sidebar />
        <MobileTopbar />
        <TabBar />
        <div className="app-main">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
