
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyobe Muhammad Foundation - Empowering Communities, Transforming Lives",
  description: "KMF is a community-based organization empowering youth, women, orphans, and street-connected children in Uganda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="k1Tr1FCc9WijzcO4R9TqkzOtaJpNsDsJAMU_pi-eshw" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}