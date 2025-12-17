import { useState } from "react";
import { cn } from "@/lib/utils";

type InkId = "moss" | "stone" | "persimmon";

const INKS: { id: InkId; label: string; hslVar: string }[] = [
  { id: "moss", label: "Moss", hslVar: "--primary" },
  { id: "stone", label: "Stone", hslVar: "--muted-foreground" },
  { id: "persimmon", label: "Sun", hslVar: "--accent" },
];

export function RisoHeroPlateTest() {
  const [active, setActive] = useState<Record<InkId, boolean>>({
    moss: true,
    stone: false,
    persimmon: false,
  });

  const toggle = (id: InkId) => setActive((p) => ({ ...p, [id]: !p[id] }));

  return (
    <div>
      <div className="exhibit-frame">
        <div className="riso-plate">
          {/* paper grain overlay */}
          <div className="riso-grain" aria-hidden="true" />

          {/* ink layers */}
          <div className={cn("riso-layer riso-moss", active.moss ? "is-on" : "")} aria-hidden="true" />
          <div className={cn("riso-layer riso-stone", active.stone ? "is-on" : "")} aria-hidden="true" />
          <div className={cn("riso-layer riso-persimmon", active.persimmon ? "is-on" : "")} aria-hidden="true" />

          {/* grid lines */}
          <div className="riso-grid" aria-hidden="true" />
        </div>
      </div>

      <p className="caption mt-2">Fig. 1 — A landscape printed in layers</p>

      <div className="mt-3 flex items-center gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Ink key
        </span>

        <div className="flex items-center gap-3">
          {INKS.map((ink) => {
            const on = active[ink.id];
            return (
              <button
                key={ink.id}
                type="button"
                onClick={() => toggle(ink.id)}
                className={cn(
                  "inline-flex items-center gap-2",
                  "font-mono text-[11px] uppercase tracking-[0.14em]",
                  "text-foreground/70 hover:text-foreground transition-colors"
                )}
              >
                <span
                  className={cn("h-4 w-4 rounded-full border border-border", on ? "opacity-100" : "opacity-35")}
                  style={{ backgroundColor: `hsl(var(${ink.hslVar}))` }}
                />
                <span className={on ? "text-foreground" : ""}>{ink.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
