import type { Metadata } from "next";
import "./globals.css";

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
          <div className={`header-footer mb-7 ${open_sans.className}`}>
            VERIFEE EDUCATION
          </div>
          <div className="px-4 sm:px-8 md:px-20 lg:px-36">{children}</div>
          <div className={`header-footer mt-7 ${open_sans.className}`}>
          VERIFEE EDUCATION
        </div>
      </body>
    </html>
  );
}
