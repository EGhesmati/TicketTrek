import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tickets | Support Desk",
    description: "View and manage support tickets",
  };
}

export default function TicketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}