export default function About() {
  return (
    <section
      style={{
        padding: "100px 20px",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            color: "#0b5ed7",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          About Team Waleed
        </h2>

        <p
          style={{
            fontSize: "21px",
            lineHeight: "1.9",
            color: "#334155",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          Team Waleed was created to inspire hope through learning,
          determination, and awareness. It celebrates Waleed's educational
          journey while providing trusted information about Morquio Syndrome
          (MPS IV) for families, educators, healthcare professionals, and
          researchers around the world.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
            gap: "30px",
            marginTop: "70px",
          }}
        >
          <div
            style={{
              background: "#eff6ff",
              borderRadius: "16px",
              padding: "30px",
            }}
          >
            <h3 style={{ color: "#0b5ed7" }}>🎯 Our Mission</h3>

            <p style={{ lineHeight: "1.8" }}>
              Promote awareness, encourage early diagnosis, support inclusive
              education, and empower every child to achieve their full
              potential.
            </p>
          </div>

          <div
            style={{
              background: "#f0fdfa",
              borderRadius: "16px",
              padding: "30px",
            }}
          >
            <h3 style={{ color: "#14b8a6" }}>🌍 Our Vision</h3>

            <p style={{ lineHeight: "1.8" }}>
              To become one of the world's most trusted resources for Morquio
              Syndrome while inspiring children through education and lifelong
              learning.
            </p>
          </div>

          <div
            style={{
              background: "#fefce8",
              borderRadius: "16px",
              padding: "30px",
            }}
          >
            <h3 style={{ color: "#ca8a04" }}>❤️ Our Values</h3>

            <p style={{ lineHeight: "1.8" }}>
              Hope. Learning. Compassion. Integrity. Scientific accuracy.
              Inclusion. Community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}