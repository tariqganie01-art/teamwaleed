export default function Mission() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#14B8A6",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginBottom: "15px",
            }}
          >
            OUR MISSION
          </p>

          <h2
            style={{
              fontSize: "46px",
              color: "#0B5ED7",
              marginBottom: "25px",
            }}
          >
            Building Hope Through Knowledge
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.9,
              color: "#555",
            }}
          >
            Team Waleed exists to improve awareness of Morquio Syndrome,
            encourage inclusive education, empower families with trusted
            information, and inspire children to pursue their dreams despite
            medical challenges.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "25px",
          }}
        >
          <Card
            icon="🎓"
            title="Education"
            text="Helping schools create inclusive learning environments."
          />

          <Card
            icon="🧬"
            title="Medical Knowledge"
            text="Reliable information reviewed from trusted sources."
          />

          <Card
            icon="❤️"
            title="Family Support"
            text="Sharing experiences, guidance and encouragement."
          />

          <Card
            icon="🌍"
            title="Global Awareness"
            text="Connecting people across countries through education."
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "#f8fafc",
        padding: "30px",
        borderRadius: "18px",
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          fontSize: "42px",
          marginBottom: "15px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          color: "#0B5ED7",
          marginBottom: "15px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#555",
          lineHeight: 1.7,
        }}
      >
        {text}
      </p>
    </div>
  );
}