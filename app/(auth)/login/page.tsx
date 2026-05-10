"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) router.push("/");
    };
    checkSession();
  }, []);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/");
  };

  return (
    <main>
      <div className="prompt">support@desk:~$ login</div>
      <div className="output">
        <div className="title">AUTHENTICATE</div>
        <p>Enter credentials to access the ticket system.</p>
      </div>

      <form className="form" onSubmit={handleLogin}>
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
        {error && (
          <div className="ticket" style={{ color: "var(--color-error)", marginBottom: "1rem" }}>
            {error}
          </div>
        )}
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "[ SIGNING IN... ]" : "[ AUTHENTICATE ]"}
        </button>
      </form>
    </main>
  );
}
