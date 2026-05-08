"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="terminal-error">
      <div className="prompt blinking-prompt">support@desk:~$ navigate</div>
      <div className="output">
        <h2 className="text-error">ERROR 404: Page Not Found</h2>
        <p className="text-muted">
          The requested resource does not exist in the system.
        </p>
        <div className="command-suggestions">
          <p className="text-accent">Available commands:</p>
          <div className="suggestion">
            <span className="prompt">$</span>{" "}
            <Link href="/" className="command-link">
              home
            </Link>{" "}
            - Return to homepage
          </div>
        </div>
      </div>
    </main>
  );
}
