const steps = [
  {
    number: "01",
    title: "Understand the Problem & Requirements",
    text: "Before writing code, I analyse the problem, identify user needs, and define system requirements. This includes understanding the purpose, target users, required functions, and possible challenges.",
    focus: "Requirement Analysis",
  },
  {
    number: "02",
    title: "Design the Solution & System Structure",
    text: "I plan the application structure by designing the user interface, database organisation, and system flow. A clear design helps create software that is easier to develop, maintain, and improve.",
    focus: "System Design",
  },
  {
    number: "03",
    title: "Develop Functional Software",
    text: "I transform the design into a working application by implementing features, integrating technologies, and writing structured code. I focus on creating practical, reliable, and user-focused solutions.",
    focus: "Software Development",
  },
  {
    number: "04",
    title: "Test, Evaluate & Improve",
    text: "After development, I test the system, identify issues, and improve performance and user experience through continuous refinement.",
    focus: "Testing & Improvement",
  },
];

function DevelopmentProcess() {
  return (
    <section className="mt-16 sm:mt-20" aria-labelledby="development-process">
      <h2 id="development-process" className="text-3xl">
        Development Process
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-stone">
        The way I approach a software task, from the first question to a
        clearer result.
      </p>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2">
        {steps.map((step) => (
          <li
            key={step.title}
            className="rounded-card border border-line bg-cream-raised px-5 py-6 shadow-soft transition duration-200 ease-out hover:-translate-y-0.5 hover:border-wood-deep motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-6"
          >
            <p className="font-display text-sm text-olive">{step.number}</p>
            <h3 className="mt-2 text-xl">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-stone">{step.text}</p>
            <p className="mt-5 font-display text-sm text-olive">Focus</p>
            <p className="mt-1 text-charcoal">{step.focus}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default DevelopmentProcess;
