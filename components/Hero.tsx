export default function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0b5ed7, #14b8a6)",
        color: "white",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "320px" }}>
          <h1
            style={{
              fontSize: "56px",
              marginBottom: "20px",
            }}
          >
            Team Waleed
          </h1>

          <h2
            style={{
              fontWeight: 400,
              marginBottom: "30px",
            }}
          >
            Building Hope Through Education, Awareness and Research
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            A platform dedicated to Waleed's inspiring journey, inclusive
            education, and trusted information about Morquio Syndrome (MPS IV)
            for families, educators, healthcare professionals, and researchers.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                padding: "15px 30px",
                background: "white",
                color: "#0b5ed7",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Meet Waleed
            </button>

            <button
              style={{
                padding: "15px 30px",
                background: "transparent",
                color: "white",
                border: "2px solid white",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Learn About MPS IV
            </button>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "350px",
              height: "420px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              textAlign: "center",
              padding: "20px",
            }}
          >
            Waleed's Hero Photo
            <br />
            (Coming Soon)
          </div>
        </div>
      </div>
    </section>
  );
}