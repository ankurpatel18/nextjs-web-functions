export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main>
      <h1>Next.js on Lambda Web Functions</h1>
      <p>Rendered at {new Date().toISOString()}</p>
      <p>This demonstration contains no customer data.</p>
      <a href="/api/health">Check health</a>
      <br />
      <a href="/api/stream">Read a streaming response</a>
    </main>
  );
}
