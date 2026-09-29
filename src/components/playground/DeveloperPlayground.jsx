import { useState } from "react";
import ReactPlayground from "./ReactPlayground";
import DatabaseExplorer from "./DatabaseExplorer";
import AiInteractionDemo from "./AiInteractionDemo";

const demos = [
  { id: "react", label: "React", Panel: ReactPlayground },
  { id: "database", label: "Database", Panel: DatabaseExplorer },
  { id: "ai", label: "AI Interaction", Panel: AiInteractionDemo },
];

function DeveloperPlayground() {
  const [activeId, setActiveId] = useState(demos[0].id);
  const active = demos.find((demo) => demo.id === activeId) ?? demos[0];
  const ActivePanel = active.Panel;

  return (
    <section className="mt-16 sm:mt-20" aria-labelledby="developer-playground">
      <h2 id="developer-playground" className="text-3xl">
        Developer Playground
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-stone">
        Three short demos for React state, filtering portfolio project records,
        and preset answers drawn from this site.
      </p>

      <div
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        role="tablist"
        aria-label="Playground demos"
      >
        {demos.map((demo) => {
          const isSelected = demo.id === active.id;
          return (
            <button
              key={demo.id}
              type="button"
              role="tab"
              id={`playground-tab-${demo.id}`}
              aria-selected={isSelected}
              aria-controls={`playground-panel-${demo.id}`}
              className={`${isSelected ? "btn-primary" : "btn-secondary"} w-full sm:w-auto`}
              onClick={() => setActiveId(demo.id)}
            >
              {demo.label}
            </button>
          );
        })}
      </div>

      <div
        className="mt-6"
        role="tabpanel"
        id={`playground-panel-${active.id}`}
        aria-labelledby={`playground-tab-${active.id}`}
      >
        <ActivePanel />
      </div>
    </section>
  );
}

export default DeveloperPlayground;
