import TicketList from "./TicketList";

export default function TicketsPage() {
  return (
    <main>
      <div className="prompt">support@desk:~$ cd tickets</div>
      <div className="output">
        <div className="title">TICKETS</div>
        <p>View and manage support tickets</p>
      </div>

      <TicketList />
    </main>
  );
}
