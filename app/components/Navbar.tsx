"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="full-nav">
      <div className="prompt">support@desk:~$</div>
      <div className="output">
        <Link href="/" className={isActive("/") ? "active" : ""}>
          home
        </Link>
        {" | "}
        <Link href="/tickets" className={isActive("/tickets") ? "active" : ""}>
          tickets
        </Link>
      </div>
    </nav>
  );
}
