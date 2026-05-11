import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VidGenAI — AI Video Generator for Course Creators",
  description:
    "Describe a topic and get a complete faceless video with AI voiceover, stock footage, animated captions, and background music. Editable before export.",
  keywords: [
    "AI video generator",
    "YouTube video maker",
    "course creator tools",
    "faceless video",
    "AI voiceover",
    "stock footage",
  ],
  openGraph: {
    title: "VidGenAI — AI Video Generator",
    description: "Describe a topic. Get a whole video.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%236366f1'/><polygon points='40,25 75,50 40,75' fill='white'/></svg>"
        />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        {children}
      </body>
    </html>
  );
}