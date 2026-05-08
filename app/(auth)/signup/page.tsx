export default function SignupPage() {
  return (
    <main>
      <div className="prompt">support@desk:~$ signup</div>
      <div className="output">
        <div className="title">NEW ACCOUNT</div>
        <p>Create an account to access the ticket system.</p>
      </div>

      <form className="form">
        <div className="field">
          <label>USERNAME</label>
          <input type="text" className="input" placeholder="username" />
        </div>
        <div className="field">
          <label>EMAIL</label>
          <input type="email" className="input" placeholder="email" />
        </div>
        <div className="field">
          <label>PASSWORD</label>
          <input type="password" className="input" placeholder="password" />
        </div>
        <div className="field">
          <label>CONFIRM</label>
          <input type="password" className="input" placeholder="confirm password" />
        </div>
        <button type="submit" className="btn">
          [ CREATE ACCOUNT ]
        </button>
      </form>
    </main>
  );
}
