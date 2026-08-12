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
  metadataBase: new URL("https://harsh-vishwakarma.vercel.app"),
  title: {
    default: "Harsh Vishwakarma | Full Stack Developer",
    template: "%s | Harsh Vishwakarma",
  },
  description:
    "Portfolio of Harsh Vishwakarma — Full Stack Developer specializing in MERN, TypeScript, and Next.js.",
  keywords: [
    "Harsh Vishwakarma",
    "Full Stack Developer",
    "MERN Stack Developer",
    "TypeScript",
    "Next.js",
    "Pune developer",
  ],
  authors: [{ name: "Harsh Vishwakarma", url: "https://harsh-vishwakarma.vercel.app" }],
  creator: "Harsh Vishwakarma",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Harsh Vishwakarma | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN, TypeScript, and Next.js.",
    url: "https://harsh-vishwakarma.vercel.app",
    siteName: "Harsh Vishwakarma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Vishwakarma | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN, TypeScript, and Next.js."
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Harsh Vishwakarma",
    jobTitle: "Full Stack Developer",
    url: "https://harsh-vishwakarma.vercel.app",
    sameAs: [
      "https://github.com/Harsh18v",
      "https://www.linkedin.com/in/harsh-vishwakarma-22982b28b",
    ],
    knowsAbout: ["MERN Stack", "Next.js", "TypeScript", "React", "Node.js"],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <meta name="google-site-verification" content="teGW9ou2xV-SiktYXy1C2Y_cfGWS-Obt4M9V_kqVoFI" />
      <body className="min-h-screen bg-black font-sans text-neutral-200 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}