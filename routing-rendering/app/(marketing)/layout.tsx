import "../globals.css";

const MarketingLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main>{children}</main>;
};

export default MarketingLayout;
