import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DailyPulse",
  description: "Daily tech & science news",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/rss.xml"
        />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col transition-colors`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
