import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify all weights you want to use
  subsets: ["latin"], // Essential for smaller file sizes and better performance
  display: "swap", // This is generally recommended to prevent FOIT (Flash of Invisible Text)
  variable: "--font-poppins", // Define a CSS variable for Tailwind CSS or global CSS
});

export const metadata: Metadata = {
  title: "Edyo.ai: AI-Powered Exam Prep for SSC, RRB, JEE, NEET, UPSC",
  description:
    "Revolutionize your exam preparation with Edyo.ai! Our intelligent platform provides personalized learning paths for SSC, RRB, JEE, NEET, UPSC, and other competitive exams, maximizing your chances of success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.className}`}>
        <Navbar/>
        <main className="min-h-screen bg-gray-900 text-white pt-16">
        {children}
        </main>
      </body>
    </html>
  );
}