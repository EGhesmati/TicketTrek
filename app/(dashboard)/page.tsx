import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="prompt">support@desk:~$ status</div>
      <div className="output"></div>

      <div className="home-hero">
        <div className="prompt">support@desk:~$</div>
        <div className="output">
          <div>Welcome to Support Desk</div>
          <div>Manage support tickets</div>
          <div style={{ marginTop: "1rem" }}>
            <Link href="/tickets">[View Tickets]</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
