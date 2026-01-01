import Navbar from "./Components/Navbar";
import Brands from "./Components/Brands";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Discover from "./Components/Discover";
import Divider from "./Components/Small/Divider";
import Section from "./Components/Small/Section";
import ContactForm from "./Components/ContactForm";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full">
          <Navbar />

          <div className="mx-auto flex h-[calc(100vh-4rem)] max-w-6xl items-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Welcome to Peter Roberts
              </h1>

              <p className="mt-4 text-sm text-white/80 sm:text-base">
                Where fashion meets timeless confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section id="discover" tone="light">
        <Discover />
      </Section>

      <Divider />
      <Section id="about" tone="soft">
        <AboutUs />
      </Section>

      <Divider />
      <Section id="brands" tone="light">
        <Brands />
      </Section>

      <Divider />
      <Section id="contactus" tone="soft">
        <ContactForm />
      </Section>

      <Footer />
    </div>
  );
}
