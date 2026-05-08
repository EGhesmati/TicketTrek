"use client";
import CreateForm from "./createForm";

export default function CreateTicket() {
  return (
    <main>
      <div className="prompt">support@desk:~$ create ticket</div>
      <div className="output">
        <div className="title">NEW TICKET</div>
        <p>Fill in the details below to create a new support ticket</p>
      </div>
      <CreateForm />
      <div className="prompt">support@desk:~/create$</div>
      <div className="output">
        <span>[submit] [cancel] [clear]</span>
      </div>
    </main>
  );
}
