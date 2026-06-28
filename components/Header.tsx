import Image from "next/image";

const linkStyle = {
  textDecoration: "none",
  color: "#334155",
  fontWeight: 600,
  fontSize: "16px",
};

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <Image
            src="/images/teamwaleed-logo.png"
            alt="Team Waleed Logo"
            width={70}
            height={70}
            priority
          />

          <div>
            <div
              style={{
                color: "#0B5ED7",
                fontSize: "30px",
                fontWeight: "bold",
                lineHeight: 1,
              }}
            >
              TEAM WALEED
            </div>

            <div
              style={{
                color: "#14b8a6",
                fontSize: "13px",
                marginTop: "6px",
                letterSpacing: "1px",
              }}
            >
              HOPE • LEARNING • AWARENESS
            </div>
          </div>
        </a>

        <nav
          style={{
            display: "flex",
            gap: "26px",
            alignItems: "center",
          }}
        >
          <a href="/" style={linkStyle}>
            Home
          </a>

          <a href="/meet-waleed" style={linkStyle}>
            Meet Waleed
          </a>

          <a href="/education" style={linkStyle}>
            Education
          </a>

          <a href="/mps" style={linkStyle}>
            MPS IV
          </a>

          <a href="/research" style={linkStyle}>
            Research
          </a>

          <a href="/resources" style={linkStyle}>
            Resources
          </a>

          <a href="/contact" style={linkStyle}>
            Contact
          </a>

          <a
            href="/donate"
            style={{
              background: "#0B5ED7",
              color: "white",
              padding: "12px 22px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0 6px 18px rgba(11,94,215,.25)",
            }}
          >
            ❤️ Donate
          </a>
        </nav>
      </div>
    </header>
  );
}