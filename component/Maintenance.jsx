import Image from "next/image";

export default function Maintenance() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        background: "#f8f9fa",
      }}
    >
      <div>
        <Image
          src="/assets/images/logo/nsblogo.png"
          alt="NSB"
          width={180}
          height={80}
        />

        <h1 style={{ marginTop: 20 }}>🚧 Website Under Maintenance</h1>

        <p style={{ marginTop: 10 }}>
          We are currently improving our website.
          <br />
          Please visit again shortly.
        </p>
      </div>
    </div>
  );
}