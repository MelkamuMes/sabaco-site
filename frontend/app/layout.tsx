import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const sora = Sora({ 
  subsets: ["latin"], 
  weight: ["500", "700", "800"],
  variable: "--font-sora" 
});

const manrope = Manrope({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"],
  variable: "--font-manrope" 
});

export const metadata: Metadata = {
  title: "Sabaco – ERP, web, mobile and bot development",
  description: "We design and build ERP systems, websites, mobile apps and chatbots.",

  //  icons: {
  //   icon: "/images/sabaco.png",
  //   shortcut: "/images/sabaco.png",
  //   apple: "/images/sabaco.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${manrope.variable} antialiased`}>
        <LanguageProvider>

        {children}
        </LanguageProvider>

      </body>
    </html>
  );
}