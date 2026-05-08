export default function NotFound() {
  return (
    <main className="terminal-error">
      <div className="prompt blinking-prompt">system@portal:~$ navigate</div>
      <div className="output">
        <h2 className="text-error">ERROR 404: Page Not Found</h2>
        <p className="text-muted">
          The requested page does not exist.
        </p>
      </div>
    </main>
  );
}