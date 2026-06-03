import { motion } from "framer-motion";
import { Heart, MapPin, Users, ShieldCheck } from "lucide-react";

const values = [
  { icon: Heart, title: "Trato cercano y personalizado", text: "Cuidamos a cada mascota y a su familia con atención individualizada." },
  { icon: Users, title: "Experiencia con perros y gatos", text: "Especialistas en pequeños animales." },
  { icon: ShieldCheck, title: "Atención profesional y honesta", text: "Te explicamos cada paso con claridad y sin compromisos innecesarios." },
  { icon: MapPin, title: "Ubicación cómoda en Madrid", text: "En pleno barrio de Salamanca, bien comunicada y de fácil acceso." },
];

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Por qué elegirnos
          </span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-semibold leading-tight">
            Una clínica veterinaria de barrio, con vocación de familia
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            En Clínica Veterinaria Zafra atendemos a perros y gatos con un trato
            cercano, profesional y honesto. Conocemos a nuestros pacientes por
            su nombre y acompañamos a sus familias en cada etapa.
          </p>

          <div className="mt-8 flex items-center gap-5 rounded-2xl bg-primary-soft/60 border border-primary/15 p-5">
            <div className="shrink-0 flex flex-col items-center justify-center h-20 w-20 rounded-2xl bg-primary text-primary-foreground shadow-soft">
              <span className="text-3xl font-semibold leading-none">+20</span>
              <span className="text-[10px] uppercase tracking-wider mt-1">años</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Más de 20 años de experiencia</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Dos décadas cuidando de perros y gatos en Madrid, con un equipo
                que combina experiencia, formación continua y mucho cariño.
              </p>
            </div>
          </div>



          <div className="mt-8 aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=80"
              alt="Equipo veterinario atendiendo a un paciente"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-primary-soft flex items-center justify-center text-primary">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
