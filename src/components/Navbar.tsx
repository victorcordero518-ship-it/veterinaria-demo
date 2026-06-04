import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, PawPrint } from "lucide-react";
import { OpenStatusBar } from "@/components/OpenStatusBar";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#galeria", label: "Galería" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <OpenStatusBar />
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

        <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="h-5 w-5" />
          </span>
          <span>Clínica Veterinaria (demo)\n</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Cambiar tema"
            className="h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-muted transition-colors"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="tel:900000000"
            className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity shadow-soft"
          >
            Llamar ahora
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-muted"
            aria-label="Menú"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="tel:900000000"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Llamar ahora
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
