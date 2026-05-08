"use client";

import Link from "next/link";

export default function AuthNotFound() {
  return (
    <main className="terminal-error">
      <div className="prompt blinking-prompt">auth@portal:~$ access</div>
      <div className="output">
        <h2 className="text-error">ERROR 404: Page Not Found</h2>
        <p className="text-muted">
          The requested page does not exist or you do not have access.
        </p>
        <div className="command-suggestions">
          <p className="text-accent">Available commands:</p>
          <div className="suggestion">
            <span className="prompt">$</span>{" "}
            <Link href="/login" className="command-link">
              login
            </Link>{" "}
            - Sign in to your account
          </div>
          <div className="suggestion">
            <span className="prompt">$</span>{" "}
            <Link href="/signup" className="command-link">
              signup
            </Link>{" "}
            - Create a new account
          </div>
        </div>
      </div>
    </main>
  );
}
