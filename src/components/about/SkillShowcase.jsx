import reactIcon from "../../assets/icons/technology/react.png";
import javascriptIcon from "../../assets/icons/technology/javascript.png";
import htmlIcon from "../../assets/icons/technology/html.png";
import databaseIcon from "../../assets/icons/technology/database.png";
import systemIcon from "../../assets/icons/application/system.png";
import aiIcon from "../../assets/icons/application/image.png";

const skills = [
  {
    title: "React",
    text: "Building user interfaces with components and component state.",
    icon: reactIcon,
  },
  {
    title: "JavaScript",
    text: "Adding interactive behavior to web applications.",
    icon: javascriptIcon,
  },
  {
    title: "HTML/CSS",
    text: "Structuring pages and laying them out for different screen sizes.",
    icon: htmlIcon,
  },
  {
    title: "Database",
    text: "Organizing application data so it can be stored and retrieved.",
    icon: databaseIcon,
  },
  {
    title: "System Development",
    text: "Connecting application parts into a clear working system.",
    icon: systemIcon,
  },
  {
    title: "AI Application Development",
    text: "Applying AI ideas inside practical software solutions.",
    icon: aiIcon,
  },
];

function SkillShowcase() {
  return (
    <section className="mt-16 sm:mt-20" aria-labelledby="skill-showcase">
      <h2 id="skill-showcase" className="text-3xl">
        Technical Skills
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <li
            key={skill.title}
            className="rounded-card border border-line bg-cream-raised px-5 py-6 shadow-soft transition duration-200 ease-out hover:-translate-y-0.5 hover:border-wood-deep motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <span className="icon-plate">
              <img
                src={skill.icon}
                alt=""
                className="h-12 w-12 object-contain mix-blend-multiply"
              />
            </span>
            <h3 className="mt-4 text-lg leading-snug">{skill.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone">{skill.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SkillShowcase;
