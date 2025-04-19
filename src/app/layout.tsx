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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 px-4 py-4 mx-2 shadow-md rounded-b-lg">
          <div className="container mx-auto">
            <h1 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100">Keyless NoteTaker</h1>
          </div>
        </header>
        {children}
        <footer className="w-full py-8 bg-gradient-to-r from-slate-800 to-slate-700 border-t border-slate-600">
          <div className="container mx-auto px-4">
            <p className="text-center font-light tracking-wide text-white text-sm flex items-center justify-center gap-2">
              <span className="bg-slate-700/50 px-3 py-1.5 rounded-full backdrop-blur-sm">Keyless NoteTaker</span>
              <span className="group relative">
                made by{" "}
                <span className="font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-blue-300 hover:after:w-full after:transition-all after:duration-300">
                  Gennaro D&apos;Urso
                </span>
              </span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
