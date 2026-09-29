import { useEffect, useState } from "react";
import logo from "../assets/brand/glh_logo.jpg.png";

const steps = [
  "Loading Profile",
  "Loading Skills",
  "Loading Projects",
  "Loading Experience",
];

const STEP_MS = 550;
const HOLD_MS = 350;
const FADE_MS = 450;

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const stepMs = reduceMotion ? 40 : STEP_MS;
    const holdMs = reduceMotion ? 40 : HOLD_MS;
    const fadeMs = reduceMotion ? 80 : FADE_MS;
    const timers = steps.map((_, index) =>
      window.setTimeout(() => {
        const next = index + 1;
        setCompletedSteps(next);
        setProgress(Math.round((next / steps.length) * 100));
      }, stepMs * (index + 1)),
    );

    timers.push(
      window.setTimeout(
        () => setFading(true),
        stepMs * steps.length + holdMs,
      ),
    );
    timers.push(
      window.setTimeout(
        () => onComplete(),
        stepMs * steps.length + holdMs + fadeMs,
      ),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-cream px-6 transition-opacity duration-500 ease-out motion-reduce:transition-none ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label={`Initializing portfolio, ${progress} percent`}
    >
      <div className="flex w-full max-w-xs flex-col items-center text-center">
        <span className="logo-plate">
          <img
            src={logo}
            alt="GLH"
            className="h-16 w-auto mix-blend-multiply"
          />
        </span>
        <p className="mt-8 font-display text-sm tracking-[0.18em] text-walnut">
          INITIALIZING PORTFOLIO
        </p>
        <ul className="mt-8 w-full space-y-2 text-left">
          {steps.map((label, index) => {
            const done = index < completedSteps;
            return (
              <li
                key={label}
                className={`flex items-center justify-between font-display text-sm ${
                  done ? "text-olive" : "text-stone"
                }`}
              >
                <span>{label}</span>
                <span aria-hidden="true">{done ? "✓" : ""}</span>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 font-display text-sm text-walnut">{progress}%</p>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-wood">
          <div
            className="h-full bg-olive transition-[width] duration-500 ease-out motion-reduce:transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
