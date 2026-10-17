import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeInit from "@/components/layout/ThemeInit";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = 'https://hasibkhodayar.vercel.app';

export const metadata: Metadata = {
  title: {
    default: 'Hasib Khodayar',
    template: '%s · Hasib Khodayar',
  },
  description: 'Software Engineer at Ranovus, building test automation and tooling for optical hardware. Carleton University Software Engineering graduate.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Hasib Khodayar',
    description: 'Software Engineer at Ranovus, building test automation and tooling for optical hardware. Carleton University Software Engineering graduate.',
    url: siteUrl,
    siteName: 'Hasib Khodayar',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hasib Khodayar',
    description: 'Software Engineer at Ranovus, building test automation and tooling for optical hardware. Carleton University Software Engineering graduate.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-base text-warm-white`}>
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}
