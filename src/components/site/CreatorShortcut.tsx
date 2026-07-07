import { useEffect } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";

export function CreatorShortcut() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const isEditable = (el: EventTarget | null) => {
      if (!(el instanceof HTMLElement)) return false;
      const tag = el.tagName;
      return (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        el.isContentEditable
      );
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat) return;
      if (!e.shiftKey) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.code !== "KeyJ" && e.key.toLowerCase() !== "j") return;
      if (isEditable(e.target)) return;
      if (pathname === "/creator") return;
      e.preventDefault();
      navigate({ to: "/creator" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, pathname]);

  return null;
}
