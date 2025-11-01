import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vintage Weapon Research | Game Asset Development",
  description: "Comprehensive concept art research for vintage-style weapon assets with historical authenticity and realistic modeling techniques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-vintage-50">{children}</body>
    </html>
  );
}
