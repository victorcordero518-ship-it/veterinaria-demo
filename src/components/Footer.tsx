import { PawPrint, Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <PawPrint className="h-5 w-5" />
            </span>
            Clínica Veterinaria (demo)
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Clínica veterinaria de barrio en Madrid (Salamanca). Cuidamos a perros y gatos
            con cariño, profesionalidad y cercanía.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/clinicavetzafra/" },
              { Icon: Facebook, href: "https://www.facebook.com/people/Cl%C3%ADnica-Veterinaria-ZAFRA/" },
              { Icon: Mail, href: "mailto:vaterinariademo@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm">Horario:</h4>
          <ul className="mt-4 text-sm text-muted-foreground space-y-2">
            <li>Lunes – Viernes</li>
            <li className="text-foreground">10:00 – 14:00 · 17:00 – 20:30</li>
            <li className="pt-2">Sábado</li>
            <li className="text-foreground">10:00 – 14:00</li>
            <li className="pt-2">Domingo cerrado</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm">Contacto</h4>
          <ul className="mt-4 text-sm text-muted-foreground space-y-2">
            <li>Tel: 900 000 000</li>
            <li>WhatsApp: 600 000 000</li>
            <li>Ubicacion</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Clínica Veterinaria (demo). Todos los derechos reservados | Diseñador y desarrolado por VVV</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Aviso legal</a>
            <a href="#" className="hover:text-primary">Privacidad</a>
            <a href="#" className="hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
