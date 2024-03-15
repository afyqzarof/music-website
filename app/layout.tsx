import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: "afyq eyzar",
  description: "afyq eyzar website",
};

const font = Space_Grotesk({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
