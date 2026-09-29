import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import systemIcon from "../assets/icons/application/system.png";
import imageIcon from "../assets/icons/application/image.png";

const projects = [
  {
    id: "peaceone",
    name: "PeaceOne",
    type: "Final Year Project",
    status: "Currently Under Development",
    description: [
      "A software project developed as part of my Final Year Project.",
      "The system focuses on creating a practical digital solution using modern software development approaches.",
    ],
    technologies: ["React", "Database", "System Development"],
    icon: systemIcon,
    caseStudy: [
      {
        label: "Project Goal",
        text: "Develop a practical software solution using modern software development approaches to address a real-world need.",
      },
      {
        label: "Problem",
        text: "To be updated after project completion.",
      },
      {
        label: "Solution",
        text: "To be updated after project completion.",
      },
      {
        label: "Development Progress",
        text: "Currently developing system functions, improving features, and refining the overall system.",
      },
      {
        label: "Demo",
        text: "Coming Soon",
      },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare Accessibility Application",
    type: "Coursework Project",
    description: [
      "A software application project focusing on improving accessibility and user experience through digital solutions.",
    ],
    technologies: [
      "Software Development",
      "User Experience",
      "Application Design",
    ],
    icon: imageIcon,
    caseStudy: [
      {
        label: "Project Goal",
        text: "Develop a software application that improves accessibility and provides a better user experience through digital solutions.",
      },
      {
        label: "Problem",
        text: "Details will be added after project documentation is completed.",
      },
      {
        label: "Solution",
        text: "Details will be added after project documentation is completed.",
      },
    ],
  },
  {
    id: "job-system",
    name: "Job System",
    type: "Coursework Project",
    description: [
      "A system development project focusing on managing job-related information and application processes.",
    ],
    technologies: ["System Development", "Database", "Application Design"],
    icon: systemIcon,
    caseStudy: [
      {
        label: "Project Goal",
        text: "Develop a system that manages job-related information and supports application processes efficiently.",
      },
      {
        label: "Problem",
        text: "Details will be added after project documentation is completed.",
      },
      {
        label: "Solution",
        text: "Details will be added after project documentation is completed.",
      },
    ],
  },
];

function ProjectCard({ project, isOpen, onToggle }) {
  const panelId = `${project.id}-case-study`;

  return (
    <article className="overflow-hidden rounded-card border border-line bg-cream-raised shadow-soft transition duration-200 ease-out hover:-translate-y-0.5 hover:border-wood-deep motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)]">
        <div className="flex min-h-44 items-center justify-center bg-wood/50 px-6 py-12 text-center lg:min-h-72">
          <div>
            <span className="icon-plate">
              <img
                src={project.icon}
                alt=""
                className="h-14 w-14 object-contain mix-blend-multiply"
              />
            </span>
            <p className="mt-4 font-display text-sm text-olive">Preview</p>
            <p className="mt-2 font-display text-xl text-charcoal">
              Project Preview Coming Soon
            </p>
          </div>
        </div>

        <div className="px-6 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md bg-olive-soft px-2.5 py-1 font-display text-sm text-olive">
              {project.type}
            </span>
            {project.status ? (
              <span className="rounded-md bg-wood px-2.5 py-1 font-display text-sm text-walnut">
                {project.status}
              </span>
            ) : null}
          </div>

          <h2 className="mt-4 text-2xl sm:text-3xl">{project.name}</h2>
          <div className="mt-3 max-w-2xl space-y-3 leading-relaxed text-stone">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-md border border-line bg-cream px-3 py-1 text-sm text-charcoal"
              >
                {technology}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="btn-secondary mt-6"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => onToggle(project.id)}
          >
            {isOpen ? "Hide Case Study" : "View Case Study"}
          </button>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        inert={!isOpen}
      >
        <div className="overflow-hidden">
          <div
            id={panelId}
            className="border-t border-line px-6 py-6 sm:px-8 sm:py-8"
          >
            <h3 className="text-xl">Case Study</h3>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              {project.caseStudy.map((item) => (
                <div key={item.label}>
                  <dt className="font-display text-sm text-olive">{item.label}</dt>
                  <dd className="mt-1 text-charcoal">{item.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [openId, setOpenId] = useState(null);

  function toggleCaseStudy(id) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <div className="page-shell">
      <SectionTitle
        title="Projects"
        description="Showcase of software development projects, coursework, and ongoing development work."
      />

      <div className="mt-12 space-y-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isOpen={openId === project.id}
            onToggle={toggleCaseStudy}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
