import React, { ReactNode } from "react";

interface NewsDetailLayoutProps {
  modal: ReactNode;
  children: ReactNode;
}

const NewsDetailLayout = ({ modal, children }: NewsDetailLayoutProps) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default NewsDetailLayout;
