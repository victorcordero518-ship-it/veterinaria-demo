import { motion } from "framer-motion";
import {
  Stethoscope,
  Syringe,
  Scissors,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Cat,
  Ambulance,
} from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Consultas generales", text: "Atendemos a tu mascota ante cualquier duda o síntoma, con diagnóstico cuidadoso." },
  { icon: Syringe, title: "Vacunación y desparasitación", text: "Calendarios completos y recordatorios para mantener a tu perro o gato protegido." },
  { icon: ShieldCheck, title: "Medicina preventiva", text: "Revisiones periódicas para detectar a tiempo y cuidar la salud a largo plazo." },
  { icon: Microscope, title: "Análisis clínicos básicos", text: "Pruebas de laboratorio realizadas en clínica con resultados rápidos." },
  { icon: HeartPulse, title: "Cirugía básica", text: "Intervenciones con máxima seguridad, monitorización y seguimiento postoperatorio." },
  { icon: Cat, title: "Esterilización canina y felina", text: "Realizamos esterilizaciones de perros y gatos, con campañas habituales para gatos del barrio." },
  { icon: Ambulance, title: "Urgencias", text: "Atendemos urgencias de nuestros pacientes; llámanos y te indicamos cómo proceder." },
  { icon: Scissors, title: "Peluquería canina y felina", text: "Servicio de estética adaptado al carácter y necesidades de cada mascota." },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Servicios
          </span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-semibold">
            Cuidamos cada día de los seres más especiales de tu casa
          </h2>
          <p className="mt-4 text-muted-foreground">
            Trabajamos cada día cuidando de tus mascotas: perros y gatos atendidos con
            cariño, profesionalidad y cercanía.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="group rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-soft hover:-translate-y-1.5 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-primary-soft flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
