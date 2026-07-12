export default function Timeline() {
  const events = [
    {
      year: "Early Years",
      title: "Beginning the Journey",
      description:
        "Waleed's journey began surrounded by the love and support of his family.",
    },
    {
      year: "Diagnosis",
      title: "Morquio Syndrome (MPS IV)",
      description:
        "After medical evaluations, Waleed was diagnosed with Morquio Syndrome, beginning a journey of treatment, learning and resilience.",
    },
    {
      year: "School",
      title: "Inclusive Education",
      description:
        "Waleed continues to learn, grow and inspire others through inclusive education and determination.",
    },
    {
      year: "Today",
      title: "Looking Forward",
      description:
        "Team Waleed shares knowledge, raises awareness and inspires families around the world.",
    },
  ];

  return (
    <section
      style={{
        background: "#f8fafc",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0B5ED7",
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          Waleed's Journey
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "60px",
          }}
        >
          Every milestone reflects courage, hope and determination.
        </p>

        {events.map((event, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "25px",
              marginBottom: "35px",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                minWidth: "120px",
                fontWeight: "bold",
                color: "#14B8A6",
              }}
            >
              {event.year}
            </div>

            <div
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                flex: 1,
              }}
            >
              <h3
                style={{
                  color: "#0B5ED7",
                  marginBottom: "10px",
                }}
              >
                {event.title}
              </h3>

              <p
                style={{
                  color: "#555",
                  lineHeight: 1.7,
                }}
              >
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}