import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import logo from "../assets/icons/glh_logo.jpg.png";
import resume from "../assets/resume/GanLiHui Resume.pdf";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certificates" },
  { to: "/contact", label: "Contact" },
];

function ResumeButton({ className = "" }) {
  return (
    <a
      href={resume}
      download="Gan-Li-Hui-Resume.pdf"
      className={`btn-primary ${className}`}
    >
      <Download size={16} strokeWidth={1.75} aria-hidden="true" />
      Download Resume
    </a>
  );
}

function desktopLinkClass({ isActive }) {
  return `nav-link relative py-1 ${
    isActive
      ? "nav-link-active after:absolute after:inset-x-0 after:-bottom-2 after:h-0.5 after:rounded-full after:bg-olive"
      : ""
  }`;
}

function mobileLinkClass({ isActive }) {
  return `rounded-lg px-3 py-3 font-display text-base font-medium transition-colors duration-200 ${
    isActive ? "bg-olive-soft text-olive" : "text-charcoal hover:bg-wood"
  }`;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream">
      <div className="mx-auto grid h-[4.5rem] max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-6 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
        <NavLink to="/" end className="shrink-0" aria-label="Gan Li Hui, home">
          <img
            src={logo}
            alt=""
            className="h-12 w-auto mix-blend-multiply sm:h-14"
          />
        </NavLink>

        <nav
          className="hidden items-center gap-8 justify-self-center md:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={desktopLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden justify-self-end md:block">
          <ResumeButton />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-lg text-charcoal transition-colors duration-200 hover:bg-wood md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? (
            <X size={22} strokeWidth={1.75} />
          ) : (
            <Menu size={22} strokeWidth={1.75} />
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        inert={!open}
      >
        <div className="overflow-hidden">
          <nav
            className="flex flex-col gap-1 border-t border-line px-4 py-4"
            aria-label="Mobile"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={mobileLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
            <ResumeButton className="mt-3" />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
