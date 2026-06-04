import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20cita"
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-soft hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 rounded-full animate-ping bg-whatsapp/40" />
    </a>
  );
}
