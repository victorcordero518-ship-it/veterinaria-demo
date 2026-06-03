import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

// Opiniones de ejemplo — fácilmente sustituibles por testimonios reales de clientes.
const testimonials = [
  {
    text: "Llevamos desde el primer día a nuestra perrita Mia a este veterinario y estamos encantados, el trato de Daniel y sus ayudantes es genial, hace todo con mucho cariño y siempre soluciona los problemas y dudas que tengamos.",
    author: "Laura G.",
  },
  {
    text: "El mejor veterinario que hay. Hemos estado llevando a nuestro perrito y gatito 6 años. Sin duda Dani es un gran profesional. Se lo hemos recomendado a todos nuestros amigos y familiares. Nunca falla. Un besito de parte de Milo y Calvin❤️",
    author: "Carlos M.",
  },
  {
    text: "Hoy llevamos a nuestro gatito a hacerle un chequeo y ponerle sus vacunas. No podemos estar mas contentos, el veterinario nos dio muy buena impresión, nuestro gato ni se enteró de los pinchazos, todo excelente!!!!",
    author: "Sofía R.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-semibold">
            Lo que dicen nuestras familias
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            * Opiniones de ejemplo, fácilmente sustituibles por testimonios reales.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col rounded-3xl bg-card border border-border p-8 shadow-card"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/15" />
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/90 leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-6 mt-auto">
                <div className="h-10 w-10 rounded-full bg-primary-soft flex items-center justify-center text-primary font-semibold">
                  {t.author.charAt(0)}
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {t.author}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
