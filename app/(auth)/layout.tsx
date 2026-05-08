"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <nav className="full-nav">
        <div className="prompt">support@desk:~$</div>
        <div className="output">
          <Link href="/login" className={pathname === "/login" ? "active" : ""}>
            login
          </Link>
          {" | "}
          <Link href="/signup" className={pathname === "/signup" ? "active" : ""}>
            signup
          </Link>
        </div>
      </nav>
      <div className="auth-content">
        <main>{children}</main>
      </div>
    </>
  );
}