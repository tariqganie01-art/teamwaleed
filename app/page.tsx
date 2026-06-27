export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "60px 20px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#0b5ed7" }}>
        Team Waleed
      </h1>

      <h2>Hope. Awareness. Action.</h2>

      <p
        style={{
          fontSize: "20px",
          lineHeight: "1.8",
          marginTop: "30px",
        }}
      >
        Welcome to Team Waleed.
      </p>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
        }}
      >
        We are building awareness about Morquio Syndrome (MPS IV),
        supporting affected families, sharing trusted medical
        information, and promoting early diagnosis.
      </p>

      <button
        style={{
          marginTop: "40px",
          padding: "15px 35px",
          fontSize: "18px",
          background: "#0b5ed7",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Learn More
      </button>
    </main>
  );
}