import { Download } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import resume from "../assets/resume/GanLiHui Resume.pdf";
import emailIcon from "../assets/icons/social/email.png";
import linkedinIcon from "../assets/icons/social/linkedin.png";
import githubIcon from "../assets/icons/social/github.png";

const contacts = [
  {
    label: "Email",
    value: "ganlihui0704@gmail.com",
    href: "mailto:ganlihui0704@gmail.com",
    icon: emailIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/li-hui-gan-b2b6b530b",
    href: "https://www.linkedin.com/in/li-hui-gan-b2b6b530b",
    icon: linkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/ganlihui0407",
    href: "https://github.com/ganlihui0407",
    icon: githubIcon,
    external: true,
  },
];

function Contact() {
  return (
    <div className="page-shell">
      <SectionTitle
        title="Contact"
        description="Let's connect and discuss software development opportunities, internships, and collaboration."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="flex h-full flex-col rounded-card border border-line bg-cream-raised px-5 py-5 shadow-soft transition duration-200 ease-out hover:-translate-y-0.5 hover:border-wood-deep motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              {...(item.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              <img
                src={item.icon}
                alt=""
                className="h-11 w-11 object-contain mix-blend-multiply"
              />
              <span className="mt-3 font-display text-sm text-olive">
                {item.label}
              </span>
              <span className="mt-3 break-words text-charcoal">{item.value}</span>
            </a>
          </li>
        ))}
      </ul>

      <section className="mt-16 max-w-3xl sm:mt-20">
        <h2 className="text-3xl">Resume</h2>
        <article className="mt-8 rounded-card border border-line bg-cream-raised px-6 py-6 shadow-soft sm:px-8 sm:py-8">
          <h3 className="text-xl">Gan Li Hui</h3>
          <p className="mt-3 max-w-xl leading-relaxed text-stone">
            Download a PDF copy of my resume for internship applications.
          </p>
          <a
            href={resume}
            download="Gan-Li-Hui-Resume.pdf"
            className="btn-primary mt-6"
          >
            <Download size={16} strokeWidth={1.75} aria-hidden="true" />
            Download Resume
          </a>
        </article>
      </section>

      <p className="mt-16 max-w-2xl text-lg leading-relaxed sm:mt-20">
        Thank you for visiting my portfolio. I am open to internship
        opportunities and opportunities to grow as a software developer.
      </p>
    </div>
  );
}

export default Contact;
