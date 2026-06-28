export default function FeaturedResources() {
  const resources = [
    {
      title: "What is Morquio Syndrome (MPS IV)?",
      description:
        "Understand the causes, symptoms, diagnosis and treatment of Morquio Syndrome.",
      link: "/mps",
      icon: "🧬",
    },
    {
      title: "Inclusive Education",
      description:
        "Learn how schools can create environments where every child can succeed.",
      link: "/education",
      icon: "🎓",
    },
    {
      title: "Meet Waleed",
      description:
        "Read Waleed's inspiring story of courage, determination and hope.",
      link: "/meet-waleed",
      icon: "⭐",
    },
  ];

  return (
    <section
      style={{
        background: "#f8fafc",
        padding: "100px 20px",
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
            color: "#0B5ED7",
            fontSize: "44px",
            marginBottom: "15px",
          }}
        >
          Featured Resources
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            fontSize: "20px",
            marginBottom: "60px",
          }}
        >
          Explore trusted information, inspiring stories and educational resources.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "35px",
                textDecoration: "none",
                color: "#1e293b",
                boxShadow: "0 12px 30px rgba(0,0,0,.08)",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  fontSize: "52px",
                  marginBottom: "20px",
                }}
              >
                {resource.icon}
              </div>

              <h3
                style={{
                  color: "#0B5ED7",
                  marginBottom: "15px",
                }}
              >
                {resource.title}
              </h3>

              <p
                style={{
                  color: "#555",
                  lineHeight: 1.8,
                }}
              >
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}