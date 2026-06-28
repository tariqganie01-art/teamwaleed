export default function FeatureCards() {
  const cards = [
    {
      icon: "🎓",
      title: "Education & Excellence",
      text: "Celebrating Waleed's learning journey and supporting inclusive education for every child.",
    },
    {
      icon: "🧬",
      title: "Understanding MPS IV",
      text: "Trusted, easy to understand information about Morquio Syndrome for families and professionals.",
    },
    {
      icon: "❤️",
      title: "Hope & Community",
      text: "Connecting families, sharing experiences, and building hope through awareness and support.",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "35px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "52px",
                marginBottom: "20px",
              }}
            >
              {card.icon}
            </div>

            <h3
              style={{
                color: "#0b5ed7",
                marginBottom: "16px",
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                lineHeight: "1.8",
                color: "#475569",
              }}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}