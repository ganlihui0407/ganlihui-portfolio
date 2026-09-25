import SectionTitle from "../components/SectionTitle";
import appliedAi from "../assets/certificates/Applied AI Professional Certification.jpg.png";
import aiAware from "../assets/certificates/AI AWARE DigitaL Badge.jpg.png";
import aiAppreciate from "../assets/certificates/AI APPRECIATE BADGE.jpg.png";
import operatingSystems from "../assets/certificates/Coursera Operating System.jpg.png";
import networking from "../assets/certificates/Coursera The Bit and Bytes of Computer Networking Certificate.jpg.png";
import codeNection from "../assets/certificates/Code Nection Participants 2024.jpg.png";
import gdscHackathon from "../assets/certificates/Google Developer Students Club APU - GDSC Certified Google Workspace Hackathon 2024.jpg.png";

const categories = [
  {
    title: "AI & Technology Certifications",
    items: [
      {
        name: "Applied AI Professional",
        organization: "Itronix Solutions",
        description:
          "Completed the Itronix Applied AI Professional Certificate in December 2024.",
        image: appliedAi,
      },
      {
        name: "AI AWARE Digital Badge",
        organization: "AI Untuk Rakyat",
        description:
          "AI AWARE digital badge from AI Untuk Rakyat, supported by MyDIGITAL and Intel.",
        image: aiAware,
      },
      {
        name: "AI APPRECIATE Badge",
        organization: "AI Untuk Rakyat",
        description:
          "AI APPRECIATE digital badge from AI Untuk Rakyat, supported by MyDIGITAL and Intel.",
        image: aiAppreciate,
      },
    ],
  },
  {
    title: "Google Certifications",
    items: [
      {
        name: "Operating Systems and You: Becoming a Power User",
        organization: "Google, through Coursera",
        description:
          "Completed this Google operating systems course through Coursera in February 2025.",
        image: operatingSystems,
      },
      {
        name: "The Bits and Bytes of Computer Networking",
        organization: "Google, through Coursera",
        description:
          "Completed this Google networking course through Coursera in December 2024.",
        image: networking,
      },
    ],
  },
  {
    title: "Competitions & Activities",
    items: [
      {
        name: "CodeNection 2024",
        organization: "MMU Faculty of Computing and Informatics",
        description:
          "Open Category participant at CodeNection 2024, held on 23 November 2024.",
        image: codeNection,
      },
      {
        name: "Google Workspace Hackathon 2024",
        organization: "Google Developer Student Clubs, Asia Pacific University",
        description:
          "Hackathon certificate from Google Developer Student Clubs at Asia Pacific University.",
        image: gdscHackathon,
      },
    ],
  },
];

function Certificates() {
  return (
    <div className="page-shell">
      <SectionTitle
        title="Certificates"
        description="Professional certifications, achievements, and learning milestones that support my software development journey."
      />

      <div className="mt-12 space-y-16 sm:space-y-20">
        {categories.map((category) => (
          <section key={category.title}>
            <h2 className="text-3xl">{category.title}</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {category.items.map((item) => (
                <li key={item.name}>
                  <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-cream-raised shadow-soft transition duration-200 ease-out hover:-translate-y-0.5 hover:border-wood-deep motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <div className="flex h-44 items-center justify-center bg-wood/45 px-4 py-3 sm:h-48">
                      <img
                        src={item.image}
                        alt={`${item.name} certificate`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-5 py-5">
                      <h3 className="text-lg leading-snug">{item.name}</h3>
                      <p className="mt-2 font-display text-sm text-olive">
                        {item.organization}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-stone">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
