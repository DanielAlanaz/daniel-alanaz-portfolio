import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="not-found shell">
      <p className="eyebrow">404 / OUTSIDE THE SYSTEM</p>
      <h1>Uncharted territory.</h1>
      <p>There isn’t a page at this address. Let’s get you back to the work.</p>
      <Link href="/" className="button button-primary">
        <span>Back to portfolio →</span>
      </Link>
    </main>
  );
}
