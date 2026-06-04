import { motion } from "framer-motion";

import galleryPuppy from "@/assets/gallery-puppy.jpg";

const images = [
  "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&auto=format&fit=crop&q=80",
  galleryPuppy,
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&auto=format&fit=crop&q=80",
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Galería
            </span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-semibold">
              Momentos de nuestra clínica
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className={`relative overflow-hidden rounded-2xl shadow-card aspect-square ${
                i === 0 || i === 5 ? "md:row-span-2 md:aspect-auto" : ""
              }`}
            >
              <img
                src={src}
                alt={`Mascota ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
