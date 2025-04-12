import "../globals.css";
import MainHeader from "@/components/main-header";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="page">
      <MainHeader />
      {children}
    </div>
  );
}
