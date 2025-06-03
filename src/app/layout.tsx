import type React from "react";
import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-red-hat-display",
});

export const metadata: Metadata = {
  title: "Miguel Fernandez - Online Fitness Coaching",
  description:
    "Certified Personal Trainer offering custom fitness programs, nutrition plans, and ongoing coaching to transform your physique and performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={redHatDisplay.variable}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
