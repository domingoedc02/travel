import type { Metadata } from "next";
import { Providers } from "./providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imperial Japan Tours — Premium Japanese Travel Experiences",
  description:
    "Discover Japan through curated travel experiences. From Tokyo to Kyoto, Mount Fuji to Osaka — premium rides with expert local guides.",
  keywords: [
    "Japan travel",
    "Tokyo tours",
    "Kyoto tours",
    "Mount Fuji",
    "Japanese travel",
    "Japan ride",
  ],
  icons: {
    icon: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-washi-100 text-sumi-900 antialiased">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
