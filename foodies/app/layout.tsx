import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/main-header/MainHeader";

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
