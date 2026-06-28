export default function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "white",
        padding: "60px 20px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
          gap: "40px",
        }}
      >
        <div>
          <h2 style={{ marginBottom: "20px" }}>Team Waleed</h2>

          <p style={{ lineHeight: "1.8", color: "#cbd5e1" }}>
            Building hope through education, awareness, research and community
            support for children and families affected by Morquio Syndrome.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <p>Home</p>
          <p>Meet Waleed</p>
          <p>Education</p>
          <p>MPS IV</p>
          <p>Research</p>
          <p>Resources</p>
        </div>

        <div>
          <h3>Contact</h3>

          <p>Email</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>YouTube</p>
        </div>

        <div>
          <h3>Our Mission</h3>

          <p style={{ lineHeight: "1.8", color: "#cbd5e1" }}>
            Inspiring children through learning while providing trusted
            information about Morquio Syndrome to families around the world.
          </p>
        </div>
      </div>

      <hr
        style={{
          margin: "40px 0 20px",
          borderColor: "#334155",
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        © 2026 Team Waleed. All Rights Reserved.
      </p>
    </footer>
  );
}