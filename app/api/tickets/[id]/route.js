import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:4000/tickets/${id}`);

  if (!res.ok) {
    return NextResponse.json(
      { error: "Ticket not found" },
      { status: 404 },
    );
  }

  const ticket = await res.json();
  return NextResponse.json(ticket, { status: 200 });
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const ticket = await request.json();
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });

  const updatedTicket = await res.json();
  return NextResponse.json(updatedTicket, { status: 200 });
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to delete ticket" },
      { status: res.status },
    );
  }

  return NextResponse.json({ message: "Ticket deleted" }, { status: 200 });
}