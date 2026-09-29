import { useState } from "react";

function ReactPlayground() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const greeting = name.trim() || "visitor";

  return (
    <article className="rounded-card border border-line bg-cream-raised px-5 py-6 shadow-soft sm:px-8 sm:py-8">
      <div className="rounded-lg border border-line bg-cream px-5 py-6">
        <p className="font-display text-sm text-olive">Live preview</p>
        <p className="mt-3 font-display text-2xl text-charcoal">
          Hello, {greeting}
        </p>
        <p className="mt-2 font-display text-4xl text-walnut">{count}</p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <label className="block">
          <span className="font-display text-sm text-charcoal">Name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Type a name"
            className="mt-2 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-charcoal outline-none transition-colors duration-200 focus:border-olive"
          />
        </label>
        <div className="flex gap-3">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setCount((current) => current - 1)}
          >
            Decrease
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={() => setCount((current) => current + 1)}
          >
            Increase
          </button>
        </div>
      </div>

      <div className="mt-8 border-t border-line pt-6">
        <p className="font-display text-sm text-olive">Technology used</p>
        <p className="mt-1 text-charcoal">
          React
          <br />
          JavaScript
          <br />
          Component State
        </p>
        <p className="mt-4 font-display text-sm text-olive">
          What this demonstrates
        </p>
        <p className="mt-1 text-sm leading-relaxed text-stone">
          How a React component stores JavaScript state. The name field updates
          the greeting, and the counter changes when a button is clicked.
        </p>
      </div>
    </article>
  );
}

export default ReactPlayground;
