import SectionTitle from "../components/SectionTitle";

const education = [
  {
    qualification: "Diploma in Information Technology",
    school: "Tunku Abdul Rahman University of Management and Technology",
    status: "Completed",
    focus: [
      "Programming fundamentals",
      "Database concepts",
      "Web development",
      "IT systems",
    ],
  },
  {
    qualification: "Bachelor Degree in Software System Development",
    school: "Tunku Abdul Rahman University of Management and Technology",
    status: "In progress",
    focus: [
      "Software engineering",
      "Application development",
      "System design",
      "Modern software technologies",
    ],
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend Development",
    skills: ["Java", "Python", "Node.js"],
  },
  {
    title: "Database",
    skills: ["MySQL", "SQLite"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Cursor"],
  },
];

const learningFocus = [
  "Software Engineering",
  "AI Application Development",
  "Web Application Development",
  "System Development",
];

function About() {
  return (
    <div className="page-shell">
      <section>
        <SectionTitle title="About Me" />
        <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed">
          <p>
            I am a Bachelor Degree in Software System Development student at
            Tunku Abdul Rahman University of Management and Technology (TAR UMT).
            Before this degree, I completed a Diploma in Information Technology
            at the same university.
          </p>
          <p>
            I am interested in software engineering, especially web application
            development and AI application development. I like taking a problem
            apart until I understand it, and I keep learning so the next
            solution is clearer.
          </p>
        </div>
      </section>

      <section className="mt-16 sm:mt-20">
        <h2 className="text-3xl">Education</h2>
        <ol className="relative mt-8 max-w-3xl space-y-6 border-l border-wood-deep pl-6 sm:pl-8">
          {education.map((item) => (
            <li key={item.qualification} className="relative">
              <span
                className="absolute top-8 left-[-30px] h-3 w-3 rounded-full bg-walnut ring-4 ring-cream sm:left-[calc(-2rem-6px)]"
                aria-hidden="true"
              />
              <article className="rounded-card border border-line bg-cream-raised px-6 py-6 shadow-soft">
                <h3 className="text-xl">{item.qualification}</h3>
                <p className="mt-2 text-stone">{item.school}</p>
                <p className="mt-1 text-sm text-olive">{item.status}</p>
                <p className="mt-5 font-display text-sm text-walnut">Focus</p>
                <ul className="mt-3 space-y-2">
                  {item.focus.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 sm:mt-20">
        <h2 className="text-3xl">Technical Skills</h2>
        <ul className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <li
              key={group.title}
              className="rounded-card border border-line bg-cream-raised px-6 py-6 shadow-soft"
            >
              <h3 className="text-xl">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-charcoal">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 sm:mt-20">
        <h2 className="text-3xl">Learning Focus</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">
          These are the areas I am studying now and hope to develop further
          during an internship.
        </p>
        <ul className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          {learningFocus.map((item) => (
            <li
              key={item}
              className="rounded-card border border-line bg-wood/55 px-6 py-5 font-display text-lg text-charcoal"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default About;
