const milestones = [
  {
    year: "2024",
    title: "Diploma in Information Technology",
    detail: "Tunku Abdul Rahman University of Management and Technology",
    focus: [
      "Programming fundamentals",
      "Database concepts",
      "Web development",
      "IT systems",
    ],
  },
  {
    year: "2025 - Present",
    title: "Bachelor Degree in Software System Development",
    detail: "Tunku Abdul Rahman University of Management and Technology",
    focus: [
      "Software engineering",
      "Application development",
      "System design",
      "Modern software technologies",
    ],
  },
  {
    year: "2026",
    title: "Current Development Journey",
    detail:
      "Building practical software development skills through projects and continuous learning.",
    focus: [
      "React development",
      "AI application development",
      "System design",
      "Problem solving",
    ],
  },
];

function EducationTimeline() {
  return (
    <section className="mt-16 sm:mt-20" aria-labelledby="education-timeline">
      <h2 id="education-timeline" className="text-3xl">
        Education
      </h2>
      <ol className="relative mt-8 max-w-3xl space-y-4 md:space-y-6 md:border-l md:border-wood-deep md:pl-8">
        {milestones.map((milestone) => (
          <li key={milestone.year} className="relative">
            <span
              className="absolute top-8 left-[calc(-2rem-6px)] hidden h-3 w-3 rounded-full bg-walnut ring-4 ring-cream md:block"
              aria-hidden="true"
            />
            <article className="rounded-card border border-line bg-cream-raised px-5 py-6 shadow-soft transition duration-200 ease-out hover:-translate-y-0.5 hover:border-wood-deep motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-6">
              <p className="font-display text-sm text-olive">{milestone.year}</p>
              <h3 className="mt-2 text-xl leading-snug">{milestone.title}</h3>
              <p className="mt-2 leading-relaxed text-stone">{milestone.detail}</p>
              <p className="mt-5 font-display text-sm text-olive">Focus</p>
              <ul className="mt-3 space-y-2 text-charcoal">
                {milestone.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default EducationTimeline;
