"use client";

import Link from "next/link";
import fallbackData from "@/_data/db.json";
import { useState, useEffect } from "react";

type Ticket = {
  id: string;
  title: string;
  body: string;
  priority: "low" | "medium" | "high";
  user_email: string;
};

export default function TicketList() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getTickets() {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:4000/tickets", {
          next: { revalidate: 30 },
        });
        if (!res.ok) {
          throw new Error(`tickets service returned ${res.status}`);
        }
        const apiTickets = (await res.json()) as Ticket[];
        setTickets(apiTickets);
      } catch (error) {
        console.warn("Ticket fetch failed, using local data fallback.", error);

        let localTickets: Ticket[] = [];
        try {
          const storedTickets = localStorage.getItem("localTickets");
          if (storedTickets) {
            localTickets = JSON.parse(storedTickets);
          }
        } catch (e) {
          console.warn("Error reading local tickets from localStorage:", e);
        }

        const fallbackTickets = (fallbackData.tickets ?? []) as Ticket[];
        const allTickets = [...fallbackTickets, ...localTickets];
        setTickets(allTickets);
      } finally {
        setIsLoading(false);
      }
    }

    getTickets();
  }, []);

  if (isLoading) {
    return <div className="empty">Loading tickets...</div>;
  }

  if (tickets.length === 0) {
    return <div className="empty">No tickets found</div>;
  }

  return (
    <div>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="ticket">
          <div className="ticket-header">
            <div className="ticket-id">#{ticket.id}</div>
            <span className={`pill pill-${ticket.priority.toLowerCase()}`}>
              {ticket.priority}
            </span>
          </div>

          <Link href={`/tickets/${ticket.id}`}>
            <div className="ticket-title">{ticket.title}</div>
          </Link>

          <div className="ticket-body">{ticket.body.slice(0, 100)}...</div>

          <div className="ticket-meta">Submitted by {ticket.user_email}</div>
        </div>
      ))}
    </div>
  );
}
