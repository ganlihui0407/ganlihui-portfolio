import { useTheme } from "../../context/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <article className="w-full max-w-sm rounded-card border border-line bg-cream-raised px-6 py-6 text-center shadow-soft">
      <div className="mx-auto w-40" aria-hidden="true">
        <div className="rounded-xl border-[3px] border-button bg-button p-2">
          <div
            className={`flex h-20 flex-col justify-center rounded-md border px-3 transition-colors duration-300 motion-reduce:transition-none ${
              dark
                ? "border-walnut-deep bg-[#2c2926]"
                : "border-line bg-cream"
            }`}
          >
            <span
              className={`h-1.5 w-10 rounded-full ${dark ? "bg-olive" : "bg-button"}`}
            />
            <span
              className={`mt-2 h-1.5 w-16 rounded-full ${dark ? "bg-[#d2c0a8]" : "bg-wood"}`}
            />
            <span
              className={`mt-2 h-1.5 w-12 rounded-full ${dark ? "bg-[#eadccb]" : "bg-wood-deep"}`}
            />
          </div>
        </div>
        <div className="mx-auto h-3 w-8 bg-button" />
        <div className="mx-auto h-2 w-20 rounded-b-lg bg-wood-deep" />
      </div>

      <h2 className="mt-5 text-xl">Developer Workspace</h2>
      <p className="mt-2 font-display text-sm tracking-[0.16em] text-olive">
        {dark ? "DARK MODE" : "LIGHT MODE"}
      </p>

      <button
        type="button"
        role="switch"
        aria-checked={dark}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        onClick={toggleTheme}
        className="relative mx-auto mt-5 grid h-10 w-full max-w-[14rem] grid-cols-2 items-center rounded-full border border-line bg-wood font-display text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
      >
        <span
          className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-button shadow-soft transition-transform duration-300 ease-out motion-reduce:transition-none ${
            dark ? "translate-x-full" : "translate-x-0"
          }`}
          aria-hidden="true"
        />
        <span className={`relative z-10 ${dark ? "text-stone" : "text-on-walnut"}`}>
          Light
        </span>
        <span className={`relative z-10 ${dark ? "text-on-walnut" : "text-stone"}`}>
          Dark
        </span>
      </button>
    </article>
  );
}

export default ThemeSwitcher;
