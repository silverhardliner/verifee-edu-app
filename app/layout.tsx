import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import React from "react";

import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verifee Education",
  description: "Verifee Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <div className={`header-footer mb-7 ${open_sans.className} flex justify-between items-center`}>
            <span>VERIFEE EDUCATION</span>
            <Link href="/" className="text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out">Rozcestník</Link>
          </div>
          <div className="px-4 sm:px-8 md:px-20 lg:px-36">{children}</div>
          <div className={`header-footer mt-7 ${open_sans.className}`}>
          VERIFEE EDUCATION
        </div>
      </body>
    </html>
  );
}
