"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username } },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/login?message=Check your email to confirm signup");
  };

  return (
    <main>
      <div className="prompt">support@desk:~$ signup</div>
      <div className="output">
        <div className="title">NEW ACCOUNT</div>
        <p>Create an account to access the ticket system.</p>
      </div>

      <form className="form" onSubmit={handleSignup}>
        <div className="field">
          <label>USERNAME</label>
          <input
            type="text"
            className="input"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label>EMAIL</label>
          <input
            type="email"
            className="input"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label>PASSWORD</label>
          <input
            type="password"
            className="input"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label>CONFIRM</label>
          <input
            type="password"
            className="input"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && (
          <div
            className="ticket"
            style={{ color: "var(--color-error)", marginBottom: "1rem" }}
          >
            {error}
          </div>
        )}
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "[ CREATING... ]" : "[ CREATE ACCOUNT ]"}
        </button>
      </form>
    </main>
  );
}
