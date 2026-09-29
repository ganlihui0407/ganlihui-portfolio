import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import logo from "../assets/brand/glh_logo.jpg.png";
import portrait from "../assets/profile/GanLiHui.jpg.png";
import resume from "../assets/resume/GanLiHui Resume.pdf";
import documentIcon from "../assets/icons/document/document.png";
import systemIcon from "../assets/icons/application/system.png";
import imageIcon from "../assets/icons/application/image.png";
import reactIcon from "../assets/icons/technology/react.png";
import databaseIcon from "../assets/icons/technology/database.png";
import DeveloperJourney from "../components/journey/DeveloperJourney";
import DeveloperPlayground from "../components/playground/DeveloperPlayground";

const stats = [
  {
    value: "5+",
    label: "Professional Certificates",
    icon: documentIcon,
  },
  { value: "3", label: "Software Projects", icon: systemIcon },
  {
    value: "AI",
    label: "Application Development Interest",
    icon: imageIcon,
  },
];

const focusAreas = [
  {
    title: "Software Engineering",
    focus: "Software design, development process, and problem solving",
    icon: systemIcon,
  },
  {
    title: "Web Application Development",
    focus: "React, JavaScript, responsive user interfaces",
    icon: reactIcon,
  },
  {
    title: "AI Application Development",
    focus: "Applying AI technologies into practical software solutions",
    icon: imageIcon,
  },
  {
    title: "System Development",
    focus: "Database, application architecture, and system design",
    icon: databaseIcon,
  },
];

function Home() {
  const reduceMotion = useReducedMotion();

  const contentMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, ease: "easeOut" },
      };

  const photoMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.75, ease: "easeOut", delay: 0.1 },
      };

  return (
    <section className="page-shell pt-8 md:pt-10 lg:pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-x-14 xl:gap-x-20">
        <motion.div
          className="logo-plate mx-auto lg:col-start-1 lg:row-start-1 lg:mx-0 lg:justify-self-start"
          {...contentMotion}
        >
          <img
            src={logo}
            alt="GLH"
            className="h-10 w-auto mix-blend-multiply md:h-11"
          />
        </motion.div>

        <motion.img
          src={portrait}
          alt="Portrait of Gan Li Hui"
          className="mx-auto mt-6 h-56 w-56 rounded-card border border-line object-cover shadow-soft md:mt-5 md:h-64 md:w-64 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:h-80 lg:w-80 lg:justify-self-end"
          {...photoMotion}
        />

        <motion.div
          className="mt-6 text-center md:mt-5 lg:col-start-1 lg:row-start-2 lg:mt-5 lg:max-w-xl lg:text-left"
          {...contentMotion}
        >
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem]">Gan Li Hui</h1>
          <p className="mt-2 font-display text-xl text-walnut md:text-2xl">
            Software Engineering Intern
          </p>
          <p className="mt-4 text-balance text-charcoal">
            Bachelor Degree in Software System Development
          </p>
          <p className="mt-1 text-balance text-stone">
            Tunku Abdul Rahman University of Management and Technology (TAR UMT)
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            I develop software and web applications, and I am building my
            skills in AI application development. I start by understanding the
            problem, then shape a solution that is clear and practical.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link to="/projects" className="btn-primary w-full sm:w-auto">
              View Projects
            </Link>
            <a
              href={resume}
              download="Gan-Li-Hui-Resume.pdf"
              className="btn-secondary w-full sm:w-auto"
            >
              <Download size={16} strokeWidth={1.75} aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3 md:mt-12 lg:mt-14">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="rounded-card border border-line bg-cream-raised px-5 py-6 text-center shadow-soft transition duration-200 ease-out hover:-translate-y-0.5 hover:border-wood-deep motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <span className="icon-plate">
              <img
                src={stat.icon}
                alt=""
                className="h-12 w-12 object-contain mix-blend-multiply"
              />
            </span>
            <p className="mt-3 font-display text-3xl text-walnut">{stat.value}</p>
            <p className="mt-2 text-stone">{stat.label}</p>
          </li>
        ))}
      </ul>

      <DeveloperJourney />

      <section className="mt-16 sm:mt-20">
        <h2 className="text-3xl">Technical Focus</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <li
              key={area.title}
              className="rounded-card border border-line bg-cream-raised px-5 py-6 shadow-soft transition duration-200 ease-out hover:-translate-y-0.5 hover:border-wood-deep motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <span className="icon-plate">
                <img
                  src={area.icon}
                  alt=""
                  className="h-12 w-12 object-contain mix-blend-multiply"
                />
              </span>
              <h3 className="mt-4 text-lg leading-snug">{area.title}</h3>
              <p className="mt-4 font-display text-sm text-olive">Focus</p>
              <p className="mt-1 text-sm leading-relaxed text-stone">
                {area.focus}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <DeveloperPlayground />
    </section>
  );
}

export default Home;
