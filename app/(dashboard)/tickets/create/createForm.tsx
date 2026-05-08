"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const ticket = {
      title,
      body,
      priority,
      user_email: "user@example.com",
    };

    try {
      const res = await fetch("http://localhost:4000/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticket),
      });

      if (res.status === 201) {
        router.refresh();
        router.push("/tickets");
        return;
      } else {
        throw new Error(`API returned ${res.status}`);
      }
    } catch (error) {
      const newId = Date.now().toString();
      const localTicket = {
        id: newId,
        title,
        body,
        priority,
        user_email: "user@example.com",
      };

      let existingTickets = [];
      try {
        const stored = localStorage.getItem("localTickets");
        existingTickets = stored ? JSON.parse(stored) : [];
      } catch (storageError) {
        console.error("Error reading localStorage:", storageError);
      }

      const updatedTickets = [...existingTickets, localTicket];

      try {
        localStorage.setItem("localTickets", JSON.stringify(updatedTickets));
      } catch (storageError) {
        console.error("Error saving to localStorage:", storageError);
      }

      alert(`Ticket #${newId} created locally.`);
      window.location.href = "/tickets";
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="field">
        <label>TITLE</label>
        <input
          className="input"
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="ticket title"
        />
      </div>

      <div className="field">
        <label>DESCRIPTION</label>
        <textarea
          className="input"
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
          placeholder="describe the issue"
          rows={6}
        />
      </div>

      <div className="field">
        <label>PRIORITY</label>
        <select
          className="input"
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <button type="submit" className="btn" disabled={isLoading}>
        {isLoading ? "Adding..." : "[ CREATE TICKET ]"}
      </button>
    </form>
  );
}
