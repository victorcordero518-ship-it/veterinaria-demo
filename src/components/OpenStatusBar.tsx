import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

type Status = {
  open: boolean;
  label: string;
  detail: string;
};

function computeStatus(now: Date): Status {
  const day = now.getDay(); // 0 Sun .. 6 Sat
  const minutes = now.getHours() * 60 + now.getMinutes();

  // Define ranges in minutes
  const weekday = [
    [10 * 60, 14 * 60],
    [17 * 60, 20 * 60 + 30],
  ];
  const saturday = [[10 * 60, 14 * 60]];

  let ranges: number[][] = [];
  if (day >= 1 && day <= 5) ranges = weekday;
  else if (day === 6) ranges = saturday;

  for (const [start, end] of ranges) {
    if (minutes >= start && minutes < end) {
      const h = Math.floor(end / 60);
      const m = end % 60;
      return {
        open: true,
        label: "Abierto ahora",
        detail: `Cerramos a las ${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`,
      };
    }
  }

  // Closed — find next opening
  const allRanges: { day: number; start: number; end: number }[] = [];
  for (let d = 0; d < 7; d++) {
    if (d >= 1 && d <= 5) {
      weekday.forEach(([s, e]) => allRanges.push({ day: d, start: s, end: e }));
    } else if (d === 6) {
      saturday.forEach(([s, e]) => allRanges.push({ day: d, start: s, end: e }));
    }
  }

  const dayNames = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  for (let offset = 0; offset < 8; offset++) {
    const d = (day + offset) % 7;
    const candidates = allRanges
      .filter((r) => r.day === d)
      .sort((a, b) => a.start - b.start);
    for (const r of candidates) {
      if (offset === 0 && r.start <= minutes) continue;
      const h = Math.floor(r.start / 60);
      const m = r.start % 60;
      const time = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
      const when =
        offset === 0 ? `hoy a las ${time}` : offset === 1 ? `mañana a las ${time}` : `el ${dayNames[d]} a las ${time}`;
      return { open: false, label: "Cerrado ahora", detail: `Abrimos ${when}` };
    }
  }
  return { open: false, label: "Cerrado", detail: "" };
}

export function OpenStatusBar() {
  // Renderizado solo en cliente para evitar hydration mismatch
  // (el estado depende de la hora actual y diverge entre SSR y client).
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const tick = () => setStatus(computeStatus(new Date()));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) {
    // Placeholder estable para SSR/primer render — misma altura que el bar real.
    return (
      <div
        className="w-full text-xs sm:text-sm bg-muted text-foreground border-b border-border"
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2 flex items-center justify-center gap-2 flex-wrap text-center">
          <span className="inline-block h-2 w-2 rounded-full bg-foreground/20" />
          <Clock className="h-3.5 w-3.5 opacity-60" />
          <span className="font-medium opacity-60">Comprobando horario…</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full text-xs sm:text-sm ${
        status.open
          ? "bg-primary text-primary-foreground"
          : "bg-muted text-foreground border-b border-border"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2 flex items-center justify-center gap-2 flex-wrap text-center">
        <span
          className={`inline-block h-2 w-2 rounded-full ${
            status.open ? "bg-white animate-pulse" : "bg-foreground/40"
          }`}
        />
        <Clock className="h-3.5 w-3.5 opacity-80" />
        <span className="font-medium">{status.label}</span>
        {status.detail && <span className="opacity-90">· {status.detail}</span>}
      </div>
    </div>
  );
}
