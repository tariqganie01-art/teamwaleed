import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Timeline from "@/components/Timeline";

export default function MeetWaleedPage() {
  return (
    <>
      <Header />

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            color: "#0B5ED7",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Meet Waleed
        </h1>

        <p
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 60px",
            fontSize: "20px",
            lineHeight: 1.8,
            color: "#555",
          }}
        >
          Waleed is an inspiring young student living with Morquio Syndrome
          (MPS IV). Through determination, family support and education, he
          continues to demonstrate that every child can dream, learn and
          achieve.
        </p>

        <div
          style={{
            display: "flex",
            gap: "60px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1 }}>
            <Image
              src="/images/waleed-hero.png"
              alt="Waleed"
              width={450}
              height={600}
              style={{
                borderRadius: "20px",
                width: "100%",
                height: "auto",
                boxShadow: "0 15px 40px rgba(0,0,0,.2)",
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <h2
              style={{
                color: "#0B5ED7",
                marginBottom: "20px",
              }}
            >
              Waleed's Story
            </h2>

            <p
              style={{
                lineHeight: 1.9,
                color: "#555",
                fontSize: "18px",
              }}
            >
              Waleed's journey is one of courage, resilience and hope. Despite
              the challenges of Morquio Syndrome, he enjoys learning, exploring
              science and technology, travelling with his family and inspiring
              others through his positive attitude.
            </p>

            <p
              style={{
                lineHeight: 1.9,
                color: "#555",
                fontSize: "18px",
              }}
            >
              Team Waleed was created to share his story, spread awareness,
              encourage inclusive education and provide trusted information for
              families, educators and healthcare professionals around the world.
            </p>
          </div>
        </div>
            </main>

      <Timeline />

      <Footer />
    </>
  );
}