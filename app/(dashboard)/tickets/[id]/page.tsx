"use client";

import { useState, useEffect, use } from "react";
import fallbackData from "@/_data/db.json";
import { notFound } from "next/navigation";

type Ticket = {
  id: string;
  title: string;
  body: string;
  priority: string;
  user_email: string;
};

export default function TicketDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [id] = useState(resolvedParams.id);
  const [notFoundFlag, setNotFoundFlag] = useState(false);

  useEffect(() => {
    async function loadTicket() {
      try {
        const res = await fetch(`http://localhost:4000/tickets/${resolvedParams.id}`);
        if (res.ok) {
          const apiTicket = await res.json();
          setTicket(apiTicket);
          setIsLoading(false);
          return;
        }
      } catch (error) {
        console.warn("API fetch failed, checking local data...", error);
      }

      const dbTicket = (fallbackData.tickets ?? []).find(
        (t: any) => t.id === resolvedParams.id,
      );

      if (dbTicket) {
        setTicket(dbTicket);
        setIsLoading(false);
        return;
      }

      try {
        const storedTickets = localStorage.getItem("localTickets");
        if (storedTickets) {
          const localTickets: Ticket[] = JSON.parse(storedTickets);
          const localTicket = localTickets.find((t: any) => t.id === resolvedParams.id);

          if (localTicket) {
            setTicket(localTicket);
            setIsLoading(false);
            return;
          }
        }
      } catch (storageError) {
        console.warn("Error reading localStorage:", storageError);
      }

      setIsLoading(false);
      setNotFoundFlag(true);
    }

    loadTicket();
  }, [resolvedParams.id]);

  if (isLoading) {
    return (
      <main>
        <div className="prompt">support@desk:~$ loading #{id}</div>
        <div className="output">
          <div className="empty">Loading...</div>
        </div>
      </main>
    );
  }

  if (notFoundFlag) {
    notFound();
  }

  return (
    <main>
      <div className="prompt">support@desk:~$ view #{ticket.id}</div>
      <div className="output">
        <div className="title">TICKET DETAILS</div>
        <p>Viewing ticket #{ticket.id}</p>
      </div>

      <div className="ticket" style={{ marginTop: "1rem" }}>
        <div className="ticket-header">
          <div className="ticket-id">#{ticket.id}</div>
          <span className={`pill pill-${ticket.priority.toLowerCase()}`}>
            {ticket.priority}
          </span>
        </div>

        <div className="ticket-title">{ticket.title}</div>

        <div className="ticket-body">{ticket.body}</div>

        <div className="ticket-meta">{ticket.user_email}</div>
      </div>

      <div className="prompt" style={{ marginTop: "1rem" }}>
        support@desk~/tickets/{id}$
      </div>
      <div className="output">
        <span>[back] [edit] [close]</span>
      </div>
    </main>
  );
}