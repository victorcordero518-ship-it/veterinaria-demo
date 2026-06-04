import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "¿Necesito pedir cita previa?",
    a: "Sí, recomendamos pedir cita previa para garantizar una atención tranquila y personalizada. Puedes llamarnos al 900 000 000 o escribirnos por WhatsApp al 600 000 000.",
  },
  {
    q: "¿Atendéis urgencias?",
    a: "Atendemos urgencias de nuestros pacientes habituales en horario de clínica. Llámanos al 900 000 000 y te indicaremos cómo proceder según la situación.",
  },
  {
    q: "¿Qué animales atendéis?",
    a: "Somos una clínica especializada en pequeños animales: perros y gatos.",
  },
  {
    q: "¿Realizáis campañas de esterilización?",
    a: "Sí, realizamos esterilizaciones caninas y felinas, con campañas habituales para gatos del barrio. Consúltanos por las condiciones actuales.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-semibold">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-foreground">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
