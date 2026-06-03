import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock, MessageCircle } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Contacto y ubicación
          </span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-semibold">
            Estamos a tu lado en el barrio de Salamanca
          </h2>
          <p className="mt-4 text-muted-foreground">
            Llámanos, escríbenos por WhatsApp o pásate por la clínica. Estaremos
            encantados de conoceros.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Phone, label: "Teléfono", value: "917 269 296", href: "tel:917269296" },
              { icon: MessageCircle, label: "WhatsApp", value: "633 489 755", href: "https://wa.me/34633489755?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20cita" },
              { icon: MapPin, label: "Dirección", value: "P.º del Marqués de Zafra, 34, 28028 Madrid" },
              { icon: Mail, label: "Email", value: "clinicaveterinariazafra@gmail.com", href: "mailto:clinicaveterinariazafra@gmail.com" },
              { icon: Clock, label: "Horario:", value: "Lun – Vie: 10:00–14:00 · 17:00–20:30\nSáb: 10:00–14:00\nDom: Cerrado" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel={c.href?.startsWith("http") ? "noreferrer" : undefined}
                className="block rounded-2xl bg-card border border-border p-5 shadow-card hover:shadow-soft transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary-soft flex items-center justify-center text-primary shrink-0">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                    <p className="mt-1 text-foreground font-medium whitespace-pre-line">{c.value}</p>
                  </div>
                </div>
              </a>
            ))}

            <div className="rounded-2xl overflow-hidden border border-border shadow-card aspect-[16/10]">
              <iframe
                title="Ubicación Clínica Veterinaria Zafra"
                src="https://www.google.com/maps?q=Paseo+del+Marqu%C3%A9s+de+Zafra+34+Madrid&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-3xl bg-card border border-border p-8 lg:p-10 shadow-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nombre" name="name" required />
              <Field label="Teléfono" name="phone" type="tel" />
            </div>
            <Field label="Email" name="email" type="email" required />
            <Field label="Tipo de mascota" name="pet" placeholder="Perro, gato..." />
            <div>
              <label className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea
                name="message"
                rows={5}
                required
                maxLength={1000}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="Cuéntanos cómo podemos ayudaros..."
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-soft hover:opacity-90 transition"
            >
              Enviar mensaje
            </button>
            {sent && (
              <p className="text-sm text-primary">¡Gracias! Te responderemos lo antes posible.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required = false, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={255}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
      />
    </div>
  );
}
