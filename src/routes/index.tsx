import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Veterinaria Zafra | Veterinario en el barrio de Salamanca, Madrid" },
      {
        name: "description",
        content:
          "Clínica Veterinaria Zafra en Madrid (barrio de Salamanca). Consultas, vacunación, cirugía, esterilización, peluquería y urgencias para perros y gatos. Llama al 917 269 296.",
      },
      { property: "og:title", content: "Clínica Veterinaria Zafra — Madrid" },
      {
        property: "og:description",
        content: "Cuidamos de la salud de tu mascota en el barrio de Salamanca. Trato cercano y profesional para perros y gatos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VeterinaryCare",
          name: "Clínica Veterinaria Zafra",
          telephone: "+34917269296",
          email: "clinicaveterinariazafra@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "P.º del Marqués de Zafra, 34",
            addressLocality: "Madrid",
            postalCode: "28028",
            addressCountry: "ES",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
