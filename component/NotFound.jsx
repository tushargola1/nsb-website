import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1>🚧 Page Under Maintenance</h1>
        <p>
          The page you're looking for is currently unavailable or under
          maintenance.
        </p>

        <Link href="/" className="rs-btn">
          Back to Home
        </Link>
      </div>
    </main>
  );
}