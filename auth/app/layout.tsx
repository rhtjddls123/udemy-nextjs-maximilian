import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Next.js Authentication"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
