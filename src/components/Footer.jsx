import { profile } from "../data/profile";

const links = [
  {
    label: "GitHub",
    href: profile.github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    external: false,
  },
];

function Footer() {
  return (
    <footer className="border-t border-line bg-wood/45">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-medium tracking-tight text-charcoal">
            {profile.name}
          </p>
          <p className="mt-1 text-stone">{profile.role}</p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-display text-[0.95rem] font-medium text-charcoal transition-colors duration-200 hover:text-olive"
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
