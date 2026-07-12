export default function MPSSection() {
  const topics = [
    {
      title: "What is MPS IV?",
      text: "Morquio Syndrome (MPS IV) is a rare inherited genetic condition that mainly affects bones, joints and connective tissues while intelligence is usually unaffected.",
    },
    {
      title: "Early Diagnosis",
      text: "Recognizing symptoms early helps families access specialist care, treatment options and long term planning as soon as possible.",
    },
    {
      title: "Treatment",
      text: "Management may include enzyme replacement therapy, orthopedic care, physiotherapy, respiratory care and regular monitoring by a multidisciplinary team.",
    },
    {
      title: "Living with MPS IV",
      text: "With appropriate medical care, family support, education and accessibility, children and adults with MPS IV can pursue meaningful and fulfilling lives.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 20px",
        background: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            color: "#0b5ed7",
            marginBottom: "20px",
          }}
        >
          Understanding Morquio Syndrome (MPS IV)
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto 60px",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#475569",
          }}
        >
          Our goal is to provide clear, reliable and easy to understand
          information for families, students, educators and healthcare
          professionals. Knowledge empowers better decisions and better care.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
            gap: "30px",
          }}
        >
          {topics.map((topic) => (
            <div
              key={topic.title}
              style={{
                background: "#f8fafc",
                borderRadius: "18px",
                padding: "30px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  color: "#0b5ed7",
                  marginBottom: "15px",
                }}
              >
                {topic.title}
              </h3>

              <p
                style={{
                  lineHeight: "1.8",
                  color: "#475569",
                }}
              >
                {topic.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "60px",
            padding: "35px",
            background: "#eff6ff",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: "#0b5ed7",
              fontSize: "28px",
            }}
          >
            Building a Global Knowledge Center
          </h3>

          <p
            style={{
              marginTop: "15px",
              lineHeight: "1.8",
              fontSize: "18px",
              color: "#334155",
            }}
          >
            Team Waleed is committed to creating one of the world's most
            comprehensive and easy to understand resources for Morquio Syndrome.
            Every article will be carefully written, reviewed and updated as new
            medical knowledge becomes available.
          </p>
        </div>
      </div>
    </section>
  );
}