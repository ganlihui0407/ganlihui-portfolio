import { useEffect, useId, useState } from "react";
import { X } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

function FloatingThemeButton() {
  const [open, setOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) {
      setEntered(false);
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const frame = requestAnimationFrame(() => setEntered(true));

    function onKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    if (reduceMotion) {
      setEntered(true);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="pointer-events-none fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[45] sm:right-6 sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))]">
      {open ? (
        <button
          type="button"
          className="pointer-events-auto fixed inset-0 cursor-default"
          aria-label="Close theme panel"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <div className="pointer-events-auto relative z-10 flex flex-col items-end gap-3">
        {open ? (
          <div
            id={panelId}
            role="dialog"
            aria-label="Developer Workspace"
            className={`origin-bottom-right transition duration-200 ease-out motion-reduce:transition-none ${
              entered ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <button
              type="button"
              className="absolute top-3 right-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full text-walnut transition-colors duration-200 hover:bg-wood focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              <X size={16} strokeWidth={1.75} aria-hidden="true" />
            </button>
            <div className="w-[min(20rem,calc(100vw-2rem))]">
              <ThemeSwitcher />
            </div>
          </div>
        ) : null}

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-cream-raised shadow-soft transition duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          aria-expanded={open}
          aria-controls={open ? panelId : undefined}
          aria-label={open ? "Close theme panel" : "Open theme panel"}
          onClick={() => setOpen((current) => !current)}
        >
          <span
            className={`flex flex-col items-center transition-transform duration-300 ease-out motion-reduce:transition-none ${
              open ? "rotate-90" : "rotate-0"
            }`}
            aria-hidden="true"
          >
            <span className="flex h-5 w-7 items-center justify-center rounded-[4px] border-2 border-button bg-on-walnut">
              <span className="h-0.5 w-3 rounded-full bg-olive" />
            </span>
            <span className="h-1 w-2 bg-button" />
            <span className="h-0.5 w-4 rounded-b-sm bg-wood-deep" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default FloatingThemeButton;
