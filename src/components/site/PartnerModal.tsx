import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

export function PartnerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-partner-modal", handler as EventListener);
    return () => window.removeEventListener("open-partner-modal", handler as EventListener);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] grid place-items-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        className="relative mx-4 w-full max-w-md rounded-sm bg-background p-6 shadow-[0_30px_60px_-30px_rgba(16,59,45,0.35)]"
      >
        <button
          aria-label="Close"
          className="absolute right-3 top-3 text-primary/60"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        <h3 className="font-display text-lg font-semibold text-primary">Partner with us</h3>
        <p className="mt-3 text-sm text-muted-foreground">Choose how you'd like to engage with Green Future Collective.</p>

        <div className="mt-6 grid gap-3">
          <Link
            to="/fellowship"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-between gap-4 rounded-full border border-border px-4 py-3 text-sm font-semibold text-primary hover:bg-secondary"
          >
            Check out fellowship program
            <span aria-hidden>→</span>
          </Link>

          <a
            href="mailto:partnerships.gfcindia@gmail.com"
            className="inline-flex items-center justify-between gap-4 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:opacity-95"
            onClick={() => setOpen(false)}
          >
            Get in touch
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
