import type { Metadata } from "next";
import { Geist, Geist_Mono, Indie_Flower } from "next/font/google";

import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const indieFlower = Indie_Flower({
  weight: "400",
  variable: "--font-indie-flower",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BabyFans - Hành trình khôn lớn",
  description:
    "Chào mừng đến với BabyFans, nơi chia sẻ và lưu giữ những khoảnh khắc đáng yêu của bé.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${indieFlower.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
