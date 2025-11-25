import type { Metadata } from "next";
import { Geist, Geist_Mono, Indie_Flower } from "next/font/google";

import { BirthdayInvitation } from "@/components/home/BirthdayInvitation";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://babyfans.vercel.app"
  ),
  title: "Đậu Nhỏ - Hành trình khôn lớn",
  description:
    "Chào mừng đến với thế giới của Đậu Nhỏ! Sinh ngày 02/02/2025, nặng 2.5kg, cao 46cm. Cùng chúng tôi ghi lại những khoảnh khắc đáng yêu, những cột mốc lớn và tất cả những điều ở giữa.",
  keywords: ["Đậu Nhỏ", "baby", "sinh nhật", "khoảnh khắc", "cột mốc", "em bé"],
  authors: [{ name: "Bố & Mẹ Đậu Nhỏ" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://babyfans.vercel.app",
    siteName: "Đậu Nhỏ - Hành trình khôn lớn",
    title: "Đậu Nhỏ - Hành trình khôn lớn",
    description:
      "Chào mừng đến với thế giới của Đậu Nhỏ! Sinh ngày 02/02/2025, nặng 2.5kg, cao 46cm. Cùng chúng tôi ghi lại những khoảnh khắc đáng yêu, những cột mốc lớn và tất cả những điều ở giữa.",
    images: [
      {
        url: "/images/baby/IMG_1454.jpg",
        width: 1200,
        height: 630,
        alt: "Đậu Nhỏ - Khoảnh khắc đáng yêu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Đậu Nhỏ - Hành trình khôn lớn",
    description:
      "Chào mừng đến với thế giới của Đậu Nhỏ! Sinh ngày 02/02/2025, nặng 2.5kg, cao 46cm.",
    images: ["/images/baby/IMG_1454.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
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
          <BirthdayInvitation />
          <Header />
          <main className="min-h-screen relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
