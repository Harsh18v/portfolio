import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsh Vishwakarma | Full Stack Developer",
  description:
    "Portfolio of Harsh Vishwakarma — Full Stack Developer specializing in MERN, TypeScript, and Next.js.",
  keywords: [
    "Harsh Vishwakarma",
    "Full Stack Developer",
    "MERN",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Harsh Vishwakarma" }],
  openGraph: {
    title: "Harsh Vishwakarma | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN, TypeScript, and Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-black font-sans text-neutral-200 antialiased">
        {children}
      </body>
    </html>
  );
}
