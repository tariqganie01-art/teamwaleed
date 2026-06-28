export default function FeatureCards() {
  return (
    <section
      style={{
        background: "#f8fafc",
        padding: "90px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            color: "#0B5ED7",
            marginBottom: "15px",
          }}
        >
          Why Team Waleed?
        </h2>

        <p
          style={{
            color: "#64748b",
            fontSize: "20px",
            maxWidth: "760px",
            margin: "0 auto 70px",
            lineHeight: 1.8,
          }}
        >
          Team Waleed is more than a website. It is a growing movement dedicated
          to education, awareness, research and hope for children living with
          Morquio Syndrome.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "35px",
          }}
        >
          <div style={cardStyle}>
            <div style={iconStyle}>🎓</div>

            <h3>Education</h3>

            <p>
              Supporting inclusive education and helping every child achieve
              their highest potential.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={iconStyle}>🧬</div>

            <h3>Morquio Syndrome</h3>

            <p>
              Reliable medical information explained in a way families can
              understand.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={iconStyle}>❤️</div>

            <h3>Family Support</h3>

            <p>
              Sharing experiences, practical guidance and encouragement for
              families around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  background: "white",
  padding: "40px",
  borderRadius: "18px",
  boxShadow: "0 12px 35px rgba(0,0,0,.08)",
  textAlign: "center" as const,
};

const iconStyle = {
  fontSize: "56px",
  marginBottom: "20px",
};