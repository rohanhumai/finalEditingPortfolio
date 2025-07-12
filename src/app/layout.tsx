import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load fonts as CSS variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// SEO metadata
export const metadata: Metadata = {
  title: "NightMare Edits – Cinematic Video Editing Portfolio",
  description:
    "Official portfolio of NightMare – delivering cinematic reels, synced transitions, motion blur, and premium edits. Join the editing revolution.",
  keywords: [
    "video editor",
    "cinematic edits",
    "NightMare",
    "motion blur",
    "YouTube edits",
    "sync transitions",
    "car edits",
    "reels",
    "Instagram",
  ],
  authors: [{ name: "NightMare", url: "https://www.youtube.com/@nightmareditzz69" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
