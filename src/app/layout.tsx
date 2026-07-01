import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/Layout/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Engineer | Portfolio",
  description: "A premium portfolio showcasing scalable digital products and high-end software engineering experiences.",
  keywords: ["Software Engineer", "Portfolio", "Full Stack Developer", "Next.js", "React"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${inter.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-white`}
      >
        <SmoothScroll>
          <div className="relative flex min-h-screen flex-col" style={{ overflowX: "clip" }}>
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
