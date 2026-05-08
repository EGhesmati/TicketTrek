"use client";

import Link from "next/link";

export default function TicketNotFound() {
  return (
    <main className="terminal-error">
      <div className="prompt blinking-prompt">support@desk:~$ view</div>
      <div className="output">
        <h2 className="text-error">ERROR 404: Ticket Not Found</h2>
        <p className="text-muted">
          The requested ticket does not exist in the system.
        </p>
        <div className="command-suggestions">
          <p className="text-accent">Available commands:</p>
          <div className="suggestion">
            <span className="prompt">$</span>{" "}
            <Link href="/tickets" className="command-link">
              tickets
            </Link>{" "}
            - View all tickets
          </div>
        </div>
      </div>
    </main>
  );
}