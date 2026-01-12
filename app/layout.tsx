import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { ConditionalFooter } from "@/components/layout/conditional-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ganesh Halladamal | Full Stack Developer",
  description: "Experienced Full Stack Developer Specialized in Building Dynamic Web Applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <Navbar />
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <ConditionalFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
