import type { Metadata } from "next";
import { Judson, Pixelify_Sans } from "next/font/google";

import "./globals.css";
const judson_init = Judson({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-judson",
});

const pixel_init = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
});
export const metadata: Metadata = {
  title: "Big Sparsh",
  description: "Portfolio / Resume for Sparsh Singh",
  keywords: [
    "Portfolio",
    "Resume",
    "Sparsh Singh",
    "bigSparsh",
    "bigsparsh",
    "Sparsh",
    "big sparsh",
    "sparsh portfolio",
    "sparsh github",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          judson_init.variable +
          " bg-primary-500 overflow-x-hidden " +
          pixel_init.variable
        }
      >
        {children}
      </body>
    </html>
  );
}
