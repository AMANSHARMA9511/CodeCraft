import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "CodeCraft | Web Development & Digital Solutions",
    template: "%s | CodeCraft",
  },
  description:
    "CodeCraft designs and develops fast, modern websites, web applications and digital solutions for ambitious businesses.",
  keywords:
    "web development, website design, Next.js, React, web application, e-commerce, India",
  openGraph: {
    type: "website",
    siteName: "CodeCraft",
    title: "CodeCraft | Web Development & Digital Solutions",
    description:
      "CodeCraft designs and develops fast, modern websites, web applications and digital solutions for ambitious businesses.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        <Providers>
          <SmoothScroll>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
            <WhatsAppFloat />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
