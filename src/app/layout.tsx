import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keyless Note Taker",
  description: "Manage your notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 px-4 py-4 mx-2 shadow-md rounded-b-lg">
          <div className="container mx-auto">
            <h1 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100">Keyless Note Taker</h1>
          </div>
        </header>
        {children}
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          TODO: Footer
        </footer>
      </body>
    </html>
  );
}
