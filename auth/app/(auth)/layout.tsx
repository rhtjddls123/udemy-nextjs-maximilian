import React, { ReactNode } from "react";
import "../globals.css";
import { logout } from "@/actions/auth-action";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthRootLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome back!</p>
        <form action={logout}>
          <button>Logout</button>
        </form>
      </header>
      {children}
    </>
  );
}
