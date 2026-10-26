import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import SectionTitle from "../components/SectionTitle";
import systemIcon from "../assets/icons/application/system.png";
import peaceoneHome from "../assets/projects/peaceone/peaceone-home.png";
import peaceoneLogin from "../assets/projects/peaceone/peaceone-login.png";
import peaceoneStudentDashboard from "../assets/projects/peaceone/peaceone-student-dashboard.png";
import peaceoneSkillGapAnalysis from "../assets/projects/peaceone/peaceone-skill-gap-analysis.png";
import peaceoneLearningRecommendations from "../assets/projects/peaceone/peaceone-learning-recommendations.png";
import peaceoneEmployerDashboard from "../assets/projects/peaceone/peaceone-employer-dashboard.png";
import peaceoneAdminDashboard from "../assets/projects/peaceone/peaceone-admin-dashboard.png";
import healthcareHome from "../assets/projects/healthcare-app/healthcare-home.png";
import healthcareSearch from "../assets/projects/healthcare-app/healthcare-search.png";
import healthcareMap from "../assets/projects/healthcare-app/healthcare-map.png";
import healthcareFacilityDetails from "../assets/projects/healthcare-app/healthcare-facility-details.png";
import healthcareComparison from "../assets/projects/healthcare-app/healthcare-comparison.png";
import healthcareNearby from "../assets/projects/healthcare-app/healthcare-nearby.png";
import healthcareFavourites from "../assets/projects/healthcare-app/healthcare-favourites.png";
import jobRecruitHomepage from "../assets/projects/job-system/01_JobRecruit_Homepage.png";
import jobListingsAndFilters from "../assets/projects/job-system/02_Job_Listings_and_Filters.png";
import jobCompanyDirectory from "../assets/projects/job-system/03_Company_Directory.png";
import jobContactPage from "../assets/projects/job-system/04_Contact_Page.png";
import jobCandidateRegistration from "../assets/projects/job-system/05_Candidate_Registration.png";
import jobCandidateDashboard from "../assets/projects/job-system/06_Candidate_Dashboard.png";
import jobChatInbox from "../assets/projects/job-system/07_Chat_Inbox.png";

const peaceoneScreenshots = [
  { src: peaceoneHome, title: "Homepage", alt: "PeaceOne homepage" },
  { src: peaceoneLogin, title: "Login", alt: "PeaceOne login screen" },
  {
    src: peaceoneStudentDashboard,
    title: "Student dashboard",
    alt: "PeaceOne student dashboard",
  },
  {
    src: peaceoneSkillGapAnalysis,
    title: "Skill-gap analysis",
    alt: "PeaceOne skill gap analysis screen",
  },
  {
    src: peaceoneLearningRecommendations,
    title: "Learning recommendations",
    alt: "PeaceOne learning recommendations screen",
  },
  {
    src: peaceoneEmployerDashboard,
    title: "Employer dashboard",
    alt: "PeaceOne employer dashboard",
  },
  {
    src: peaceoneAdminDashboard,
    title: "Administrator dashboard",
    alt: "PeaceOne administrator dashboard",
  },
];

const healthcareScreenshots = [
  {
    src: healthcareHome,
    title: "Home",
    alt: "Healthcare Accessibility Application home screen",
  },
  {
    src: healthcareSearch,
    title: "Search",
    alt: "Healthcare facility search listing 4,131 facilities",
  },
  {
    src: healthcareMap,
    title: "Map",
    alt: "Map showing 698 mapped healthcare facilities",
  },
  {
    src: healthcareFacilityDetails,
    title: "Facility details",
    alt: "Healthcare facility details screen",
  },
  {
    src: healthcareComparison,
    title: "Comparison",
    alt: "Side-by-side comparison of healthcare facilities",
  },
  {
    src: healthcareNearby,
    title: "Nearby facilities",
    alt: "Nearby healthcare facilities screen",
  },
  {
    src: healthcareFavourites,
    title: "Favourites",
    alt: "Saved favourite healthcare facilities",
  },
];

const jobSystemScreenshots = [
  {
    src: jobRecruitHomepage,
    title: "Homepage",
    alt: "JobRecruit homepage",
  },
  {
    src: jobListingsAndFilters,
    title: "Job Listings and Filters",
    alt: "JobRecruit job listings and filters",
  },
  {
    src: jobCompanyDirectory,
    title: "Company Directory",
    alt: "JobRecruit company directory",
  },
  {
    src: jobContactPage,
    title: "Contact Page",
    alt: "JobRecruit contact page",
  },
  {
    src: jobCandidateRegistration,
    title: "Candidate Registration",
    alt: "JobRecruit candidate registration page",
  },
  {
    src: jobCandidateDashboard,
    title: "Candidate Dashboard",
    alt: "JobRecruit candidate dashboard",
  },
  {
    src: jobChatInbox,
    title: "Chat Inbox",
    alt: "JobRecruit chat inbox",
  },
];

const projects = [
  {
    id: "peaceone",
    name: "PeaceOne",
    type: "Final Year Project",
    status: "Frontend Prototype",
    description: [
      "A career development platform prototype designed to bring skill profiling, career planning, learning recommendations, and job opportunities into one workspace.",
      "The project includes separate interfaces for students and job seekers, employers, and administrators, with a focus on connecting career goals to skill development.",
    ],
    technologies: ["React 19", "Vite", "Tailwind CSS 4", "React Router"],
    icon: systemIcon,
    screenshots: peaceoneScreenshots,
    repositoryUrl: "https://github.com/ganlihui0407/PeaceOne",
    sections: [
      {
        title: "Project overview",
        text: "PeaceOne is a career development prototype that places skill profiling, career planning, learning recommendations, and job opportunities in one workspace.",
      },
      {
        title: "Problem addressed",
        text: "Career planning often separates skill assessment, learning, and job search into different activities.",
      },
      {
        title: "Solution",
        text: "A frontend prototype brings those activities into one interface for students and job seekers, employers, and administrators.",
      },
      {
        title: "Key interfaces",
        items: [
          "Student dashboard",
          "Skill-gap analysis",
          "Learning recommendations",
          "Employer dashboard",
          "Administrator dashboard",
        ],
      },
      {
        title: "Technical implementation",
        text: "The interface is built with React, Vite, Tailwind CSS 4, and React Router.",
      },
      {
        title: "Project status",
        text: "The prototype is in a public GitHub repository. It uses demonstration data, with no connected backend or real authentication.",
      },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare Accessibility Application",
    type: "Coursework Project",
    description: [
      "A Flutter-based mobile application designed to help users discover and explore public healthcare facilities across Malaysia through searchable listings, interactive maps, and detailed facility information.",
      "The application also supports side-by-side facility comparison, location-based nearby discovery, and saved favourites, helping users explore available healthcare facilities in one convenient interface.",
    ],
    technologies: ["Flutter", "Dart"],
    screenshots: healthcareScreenshots,
    repositoryUrl:
      "https://github.com/MrLiam0407/healthcare-facility-accessibility-explorer",
    sections: [
      {
        title: "Project Overview",
        text: "A Flutter application for exploring public healthcare facilities in Malaysia. It focuses on making facility information easier to look through in one mobile interface.",
      },
      {
        title: "Problem Addressed",
        text: "Healthcare facility information can be spread across different listings. Finding a facility can mean searching for a location, reviewing details, and comparing options as separate tasks.",
      },
      {
        title: "Solution",
        text: "The application brings facility search, map exploration, detailed facility information, side-by-side comparison, nearby discovery, and favourites into one interface.",
      },
      {
        title: "Key Features",
        items: [
          "Search across 4,131 healthcare facility records",
          "Interactive map displaying 698 mapped facilities",
          "Facility details, including available address, contact, and source information",
          "Side-by-side facility comparison",
          "Nearby facility discovery using location support",
          "Saved favourites for convenient access",
        ],
      },
      {
        title: "Technical Implementation",
        text: "Built with Flutter and Dart. Facility records are loaded from a bundled dataset and can include address, phone, and source fields. The map uses flutter_map with OpenStreetMap tiles. Nearby discovery uses geolocator for device location. Favourites are stored locally with SQLite on Android and iOS, and with SharedPreferences on other platforms.",
      },
      {
        title: "Project Status",
        text: "Search, map exploration, facility details, comparison, nearby discovery, and favourites are implemented. The map shows the 698 facilities that have coordinates, not all 4,131 searchable records.",
      },
    ],
  },
  {
    id: "job-system",
    name: "Job System",
    type: "Coursework Project",
    description: [
      "A job recruitment web application for browsing openings, exploring companies, and managing a candidate account.",
      "The system includes job listings and filters, a company directory, candidate registration, a candidate dashboard, a contact page, and a chat inbox.",
    ],
    technologies: ["ASP.NET Core MVC", "Entity Framework Core", "SQL Server"],
    icon: systemIcon,
    screenshots: jobSystemScreenshots,
    repositoryUrl: "https://github.com/ganlihui0407/JobRecruit",
    sections: [
      {
        title: "Project overview",
        text: "JobRecruit is an ASP.NET Core MVC recruitment system that brings job listings, company information, and candidate activity into one web application.",
      },
      {
        title: "Problem addressed",
        text: "Searching for work can mean checking job listings, company information, and application activity in separate places. This system gathers those tasks into one interface.",
      },
      {
        title: "Solution",
        text: "Candidates can filter job listings, browse a company directory, register an account, use a dashboard, contact the site, and open a chat inbox.",
      },
      {
        title: "Key interfaces",
        items: [
          "Homepage",
          "Job listings and filters",
          "Company directory",
          "Contact page",
          "Candidate registration",
          "Candidate dashboard",
          "Chat inbox",
        ],
      },
      {
        title: "Technical implementation",
        text: "Built with ASP.NET Core MVC on .NET 9 and Entity Framework Core. Application data is stored in SQL Server. Sign-in uses cookie authentication, with job seeker, employer, and administrator roles.",
      },
      {
        title: "Project status",
        text: "The homepage, job listings and filters, company directory, contact page, candidate registration, candidate dashboard, and chat inbox are implemented. The source code is not published on GitHub yet.",
      },
    ],
  },
];

const iconButtonClass =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-wood-deep bg-cream-raised text-walnut shadow-soft transition hover:border-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive";

function wrapIndex(index, length) {
  return (index + length) % length;
}

function Chevron({ direction }) {
  const points =
    direction === "left" ? "M11 4 L6 9 L11 14" : "M7 4 L12 9 L7 14";

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="none">
      <path
        d={points}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PreviewCarousel({ shots, name }) {
  const [index, setIndex] = useState(0);
  const shot = shots[index];

  function step(delta) {
    setIndex((current) => wrapIndex(current + delta, shots.length));
  }

  function onKeyDown(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
  }

  return (
    <div
      className="flex min-h-44 flex-col justify-center bg-wood/50 px-4 py-6 sm:px-6 lg:min-h-72"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${name} screenshots`}
      onKeyDown={onKeyDown}
    >
      <img
        src={shot.src}
        alt={shot.alt}
        className="mx-auto h-auto max-h-64 w-full object-contain sm:max-h-80"
      />
      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          className={iconButtonClass}
          aria-label="Previous screenshot"
          onClick={() => step(-1)}
        >
          <Chevron direction="left" />
        </button>
        <p className="min-w-0 text-center">
          <span className="block truncate font-display text-sm text-charcoal">
            {shot.title}
          </span>
          <span className="font-display text-sm text-olive">
            {index + 1} / {shots.length}
          </span>
        </p>
        <button
          type="button"
          className={iconButtonClass}
          aria-label="Next screenshot"
          onClick={() => step(1)}
        >
          <Chevron direction="right" />
        </button>
      </div>
      <div className="mt-1 flex justify-center" role="group" aria-label="Choose a screenshot">
        {shots.map((item, itemIndex) => {
          const active = itemIndex === index;
          return (
            <button
              key={item.title}
              type="button"
              className="inline-flex h-11 w-8 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
              aria-label={`Show ${item.title}`}
              aria-current={active ? "true" : undefined}
              onClick={() => setIndex(itemIndex)}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  active ? "bg-olive" : "bg-wood-deep"
                }`}
              />
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {shots.length}: {shot.title}
      </p>
    </div>
  );
}

function ScreenshotLightbox({ shots, index, onClose, onStep, openerRef }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const titleId = useId();
  const onCloseRef = useRef(onClose);
  const onStepRef = useRef(onStep);
  const shot = shots[index];

  onCloseRef.current = onClose;
  onStepRef.current = onStep;

  useEffect(() => {
    const opener = openerRef.current;
    closeRef.current?.focus();

    const html = document.documentElement;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onStepRef.current(1);
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onStepRef.current(-1);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = [...dialogRef.current.querySelectorAll("button")];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      html.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      if (opener?.isConnected && !opener.closest("[inert]")) {
        opener.focus();
      }
    };
  }, [openerRef]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="flex max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl flex-col overflow-y-auto rounded-card border border-line bg-cream-raised p-4 shadow-soft sm:p-5"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 id={titleId} className="text-xl">
              {shot.title}
            </h2>
            <p className="mt-1 font-display text-sm text-olive">
              {index + 1} of {shots.length}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="btn-secondary shrink-0"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <img
          src={shot.src}
          alt={shot.alt}
          className="mt-4 h-auto max-h-[calc(100dvh-13rem)] w-full object-contain"
        />
        <p className="sr-only" aria-live="polite">
          {shot.title}, image {index + 1} of {shots.length}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            className="btn-secondary"
            aria-label="Previous screenshot"
            onClick={() => onStep(-1)}
          >
            <Chevron direction="left" />
            Previous
          </button>
          <button
            type="button"
            className="btn-secondary"
            aria-label="Next screenshot"
            onClick={() => onStep(1)}
          >
            Next
            <Chevron direction="right" />
          </button>
        </div>
      </div>
    </div>
  );
}

function PeaceOneStudy({ project, isOpen }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const openerRef = useRef(null);
  const shots = project.screenshots;
  const showLightbox = isOpen && lightboxIndex !== null;

  useEffect(() => {
    if (!isOpen) setLightboxIndex(null);
  }, [isOpen]);

  function openAt(index, event) {
    openerRef.current = event.currentTarget;
    setLightboxIndex(index);
  }

  function step(delta) {
    setLightboxIndex((current) =>
      current === null ? current : wrapIndex(current + delta, shots.length),
    );
  }

  return (
    <>
      <h3 className="text-xl">Case Study</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {project.sections.map((section) => (
          <section
            key={section.title}
            className="rounded-card border border-line bg-cream px-4 py-4 sm:px-5 sm:py-5"
          >
            <h4 className="font-display text-base text-olive">{section.title}</h4>
            {section.items ? (
              <ul className="mt-3 space-y-2 text-charcoal">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 leading-relaxed text-charcoal">{section.text}</p>
            )}
          </section>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl">Screenshots</h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {shots.map((shot, index) => (
            <li key={shot.title}>
              <button
                type="button"
                className="w-full overflow-hidden rounded-card border border-line bg-cream text-left transition hover:border-wood-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
                aria-haspopup="dialog"
                aria-label={`Open ${shot.title} screenshot`}
                onClick={(event) => openAt(index, event)}
              >
                <img src={shot.src} alt={shot.alt} className="h-auto w-full object-contain" />
                <span className="block border-t border-line px-3 py-2 font-display text-sm text-charcoal">
                  {shot.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {showLightbox
        ? createPortal(
            <ScreenshotLightbox
              shots={shots}
              index={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
              onStep={step}
              openerRef={openerRef}
            />,
            document.body,
          )
        : null}
    </>
  );
}

function ProjectCard({ project, isOpen, onToggle }) {
  const panelId = `${project.id}-case-study`;

  return (
    <article className="overflow-hidden rounded-card border border-line bg-cream-raised shadow-soft transition duration-200 ease-out hover:-translate-y-0.5 hover:border-wood-deep motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)]">
        {project.screenshots ? (
          <PreviewCarousel shots={project.screenshots} name={project.name} />
        ) : (
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
        )}

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

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn-secondary"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => onToggle(project.id)}
            >
              {isOpen ? "Hide Case Study" : "View Case Study"}
            </button>
            {project.repositoryUrl ? (
              <a
                href={project.repositoryUrl}
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Repository
              </a>
            ) : null}
          </div>
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
            {project.sections ? (
              <PeaceOneStudy project={project} isOpen={isOpen} />
            ) : (
              <>
                <h3 className="text-xl">Case Study</h3>
                <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                  {project.caseStudy.map((item) => (
                    <div key={item.label}>
                      <dt className="font-display text-sm text-olive">{item.label}</dt>
                      <dd className="mt-1 text-charcoal">{item.text}</dd>
                    </div>
                  ))}
                </dl>
              </>
            )}
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
