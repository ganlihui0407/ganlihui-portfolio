import { profile } from "../data/profile";
import logo from "../assets/brand/glh_logo.jpg.png";
import githubIcon from "../assets/icons/social/github.png";
import linkedinIcon from "../assets/icons/social/linkedin.png";
import emailIcon from "../assets/icons/social/email.png";

const links = [
  {
    label: "GitHub",
    href: profile.github,
    icon: githubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: linkedinIcon,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: emailIcon,
    external: false,
  },
];

function Footer() {
  return (
    <footer className="border-t border-line bg-wood/45">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <img
              src={logo}
              alt="GLH"
              className="h-12 w-auto mix-blend-multiply"
            />
            <p className="mt-5 font-display text-2xl font-medium tracking-tight text-charcoal">
              {profile.name}
            </p>
            <p className="mt-1 text-stone">{profile.role}</p>
            <p className="mt-4 max-w-md leading-relaxed text-stone">
              Building software solutions through web development, system
              design, and AI application development.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-2.5 font-display text-[0.95rem] font-medium text-charcoal transition-colors duration-200 hover:text-olive"
                  {...(link.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  <img
                    src={link.icon}
                    alt=""
                    className="h-7 w-7 shrink-0 object-contain mix-blend-multiply"
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 border-t border-line pt-6 text-sm text-stone">
          © 2026 Gan Li Hui. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
