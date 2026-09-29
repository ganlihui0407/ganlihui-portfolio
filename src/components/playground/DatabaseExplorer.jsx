import { useMemo, useState } from "react";

const projects = [
  {
    name: "PeaceOne",
    type: "Final Year Project",
    technologies: ["React", "Database", "System Development"],
  },
  {
    name: "Healthcare Accessibility Application",
    type: "Coursework Project",
    technologies: ["Software Development", "User Experience", "Application Design"],
  },
  {
    name: "Job System",
    type: "Coursework Project",
    technologies: ["System Development", "Database", "Application Design"],
  },
];

function DatabaseExplorer() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return projects;
    }

    return projects.filter((project) => {
      const haystack = [project.name, project.type, ...project.technologies]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [query]);

  return (
    <article className="rounded-card border border-line bg-cream-raised px-5 py-6 shadow-soft sm:px-8 sm:py-8">
      <label className="block">
        <span className="font-display text-sm text-charcoal">
          Search projects
        </span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by name or technology"
          className="mt-2 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-charcoal outline-none transition-colors duration-200 focus:border-olive"
        />
      </label>

      <p className="mt-4 text-sm text-stone">
        {results.length} {results.length === 1 ? "project" : "projects"}
      </p>

      {results.length > 0 ? (
        <ul className="mt-4 space-y-3">
          {results.map((project) => (
            <li
              key={project.name}
              className="rounded-lg border border-line bg-cream px-4 py-4"
            >
              <p className="font-display text-lg text-charcoal">{project.name}</p>
              <p className="mt-1 text-sm text-olive">{project.type}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-line bg-cream-raised px-3 py-1 text-sm text-charcoal"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-charcoal">No projects match that search.</p>
      )}

      <div className="mt-8 border-t border-line pt-6">
        <p className="font-display text-sm text-olive">Technology used</p>
        <p className="mt-1 text-charcoal">
          Database Concepts
          <br />
          JavaScript
          <br />
          Data Filtering
        </p>
        <p className="mt-4 font-display text-sm text-olive">
          What this demonstrates
        </p>
        <p className="mt-1 text-sm leading-relaxed text-stone">
          How a search narrows portfolio project records by name or technology.
          The records stay in the page, with no database server behind this
          demo.
        </p>
      </div>
    </article>
  );
}

export default DatabaseExplorer;
