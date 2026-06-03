import { motion } from "framer-motion";
import { PhoneCall, MessageCircle, MapPin, Star, StarHalf } from "lucide-react";
import heroPet from "@/assets/hero-pet.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-hero"
    >
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-background/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-primary border border-primary/20">
            <Star className="h-3.5 w-3.5 fill-primary" />
            Clínica veterinaria en el barrio de Salamanca
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-foreground">
            Cuidamos de la salud de tu mascota en el{" "}
            <span className="text-primary italic">barrio de Salamanca</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Clínica Veterinaria Zafra — somos una clínica de confianza en Madrid,
            especializada en perros y gatos, con trato cercano y personalizado para cada
            familia.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href="tel:917269296"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-soft hover:opacity-90 transition"
            >
              <PhoneCall className="h-5 w-5" /> Llamar ahora
            </a>
            <a
              href="https://wa.me/34633489755?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20cita"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-base font-semibold text-white shadow-soft hover:opacity-90 transition"
            >
              <MessageCircle className="h-5 w-5" /> Escribir por WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              P.º del Marqués de Zafra, 34 · Madrid
            </div>
            <div className="hidden sm:flex items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
              <StarHalf className="h-4 w-4 fill-primary text-primary" />
              <span className="ml-1">4.5</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
            <img
              src={heroPet}
              alt="Perros y gatos atendidos en clínica veterinaria"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-card max-w-[240px]"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary-soft flex items-center justify-center text-primary text-lg">
                ❤
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Perros y gatos</p>
                <p className="font-semibold text-foreground">Cuidado cercano</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
