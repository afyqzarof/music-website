import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "afyq eyzar",
  description: "afyq eyzar website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
