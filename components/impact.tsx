export default function Impact() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px",
          textAlign: "center",
        }}
      >
        <StatCard
          number="1"
          title="Inspiring Journey"
          description="One remarkable story inspiring families around the world."
        />

        <StatCard
          number="100%"
          title="Commitment"
          description="Dedicated to education, awareness and inclusion."
        />

        <StatCard
          number="Growing"
          title="Knowledge Hub"
          description="Building trusted information about Morquio Syndrome."
        />

        <StatCard
          number="∞"
          title="Hope"
          description="Every child deserves opportunities to learn and thrive."
        />
      </div>
    </section>
  );
}

function StatCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        background: "#f8fafc",
        padding: "35px",
        borderRadius: "18px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          color: "#0B5ED7",
          fontSize: "3rem",
          margin: 0,
        }}
      >
        {number}
      </h2>

      <h3
        style={{
          marginTop: "15px",
          color: "#1e293b",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#64748b",
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>
    </div>
  );
}