export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <h2
        style={{
          margin: 0,
          color: "#0b5ed7",
          fontSize: "28px",
        }}
      >
        Team Waleed
      </h2>

      <nav
        style={{
          display: "flex",
          gap: "28px",
          alignItems: "center",
        }}
      >
        <a href="#">Home</a>
        <a href="#">Meet Waleed</a>
        <a href="#">Education</a>
        <a href="#">MPS IV</a>
        <a href="#">Research</a>
        <a href="#">Resources</a>
        <a href="#">Contact</a>

        <button
          style={{
            background: "#0b5ed7",
            color: "white",
            border: "none",
            padding: "10px 22px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Donate
        </button>
      </nav>
    </header>
  );
}