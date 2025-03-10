import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <ThemeProvider>
            <div
                className="min-h-screen bg-[var(--background)] flex flex-col">
                {/* Navigation Bar */}
                <div className="h-16 bg-gradient-to-r from-[var(--crust)] via-[var(--mantle)] to-[var(--base)] flex justify-end items-center p-4">
                    {/* Back Button */}

                    {/* Toggle Button */}
                    <ThemeToggle/>
                </div>
                {/* Wrapper */}
                <div className="flex-1 bg-gradient-to-r from-[var(--crust)] via-[var(--mantle)] to-[var(--base)] shadow-lg border-0 border-[var(--surface2)] p-6 px-16">
                    {children}
                </div>
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
