import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "G-Pac",
  description: "Gpac Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.className} antialiased dark:bg-gray-950`}
    >
      <body className="flex">
        {/* Sidebar stays here */}
        <Sidebar />

        {/* This will be replaced by the content of the current page */}
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
