export default function Education() {
  const highlights = [
    {
      emoji: "📚",
      title: "Love for Learning",
      text: "Education is at the heart of Team Waleed. Every child deserves the opportunity to learn, explore and succeed.",
    },
    {
      emoji: "💻",
      title: "Technology & AI",
      text: "Technology opens new possibilities for learning, communication and creativity. We encourage children to explore computers, coding and artificial intelligence.",
    },
    {
      emoji: "🚀",
      title: "Science & Space",
      text: "Curiosity about science, astronomy and the universe inspires imagination and lifelong learning.",
    },
    {
      emoji: "🏫",
      title: "Inclusive Education",
      text: "Children with Morquio Syndrome can thrive in school when classrooms are supportive, accessible and inclusive.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 20px",
        background: "#f8fafc",
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
          Education & Excellence
        </h2>

        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            maxWidth: "900px",
            margin: "0 auto 60px",
            lineHeight: "1.8",
            color: "#475569",
          }}
        >
          Team Waleed believes that curiosity, knowledge and determination can
          help every child reach their full potential. Education is not simply
          about school. It is about building confidence, independence and hope.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
            gap: "30px",
          }}
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              style={{
                background: "white",
                borderRadius: "18px",
                padding: "30px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: "46px",
                  marginBottom: "20px",
                }}
              >
                {item.emoji}
              </div>

              <h3
                style={{
                  color: "#0b5ed7",
                  marginBottom: "16px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  lineHeight: "1.8",
                  color: "#475569",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "70px",
            background: "#0b5ed7",
            color: "white",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "30px",
              marginBottom: "20px",
            }}
          >
            Growing Beyond Limits
          </h3>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "1.8",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            Waleed's journey reminds us that a diagnosis does not define a
            child's future. Curiosity, family support, quality education and
            determination help children discover their strengths and achieve
            remarkable things.
          </p>
        </div>
      </div>
    </section>
  );
}