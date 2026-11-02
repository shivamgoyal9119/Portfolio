import type { Metadata } from "next";
import "./globals.css";
import SpotlightCursor from "@/components/SpotlightCursor";

export const metadata: Metadata = {
  title: "Shivam Goyal | Software Engineer | Java Backend Developer",
  description:
    "Explore Shivam Goyal's portfolio featuring Java, Spring Boot, Microservices, backend engineering projects, system design and competitive programming achievements.",
  keywords: [
    "Shivam Goyal",
    "Java Backend Developer",
    "Spring Boot Developer",
    "Microservices",
    "System Design",
    "Distributed Systems",
    "Competitive Programming",
    "LeetCode",
    "JECRC University",
  ],
  authors: [{ name: "Shivam Goyal", url: "https://github.com/shivamgoyal9119" }],
  creator: "Shivam Goyal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shivamgoyal.dev",
    title: "Shivam Goyal | Software Engineer | Java Backend Developer",
    description:
      "Computer Science Engineering student specializing in Java Backend Development, Spring Boot, Microservices, System Design and Data Structures & Algorithms.",
    siteName: "Shivam Goyal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Goyal | Software Engineer | Java Backend Developer",
    description:
      "Java Backend Developer & Problem Solver specializing in Spring Boot, Microservices, and System Design.",
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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className="bg-[#03060E] text-[#F8FAFC] antialiased selection:bg-[#00D8F6]/30 selection:text-white min-h-screen relative font-sans">
        <SpotlightCursor />
        {children}
      </body>
    </html>
  );
}
