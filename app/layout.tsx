import type { Metadata } from "next";
import { Judson } from "next/font/google";

import "./globals.css";
const judson_init = Judson({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-judson",
});

export const metadata: Metadata = {
  title: "Big Sparsh",
  description: "Portfolio / Resume for Sparsh Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={judson_init.variable + " bg-primary-500 overflow-x-hidden"}
      >
        {children}
      </body>
    </html>
  );
}
