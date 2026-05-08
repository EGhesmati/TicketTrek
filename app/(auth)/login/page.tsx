export default function LoginPage() {
  return (
    <main>
      <div className="prompt">support@desk:~$ login</div>
      <div className="output">
        <div className="title">AUTHENTICATE</div>
        <p>Enter credentials to access the ticket system.</p>
      </div>

      <form className="form">
        <div className="field">
          <label>USERNAME</label>
          <input type="text" className="input" placeholder="username" />
        </div>
        <div className="field">
          <label>PASSWORD</label>
          <input type="password" className="input" placeholder="password" />
        </div>
        <button type="submit" className="btn">
          [ AUTHENTICATE ]
        </button>
      </form>
    </main>
  );
}
