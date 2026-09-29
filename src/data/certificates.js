import appliedAi from "../assets/certificates/Applied AI Professional Certification.jpg.png";
import aiAware from "../assets/certificates/AI AWARE DigitaL Badge.jpg.png";
import aiAppreciate from "../assets/certificates/AI APPRECIATE BADGE.jpg.png";
import operatingSystems from "../assets/certificates/Coursera Operating System.jpg.png";
import networking from "../assets/certificates/Coursera The Bit and Bytes of Computer Networking Certificate.jpg.png";
import codeNection from "../assets/certificates/Code Nection Participants 2024.jpg.png";
import gdscHackathon from "../assets/certificates/Google Developer Students Club APU - GDSC Certified Google Workspace Hackathon 2024.jpg.png";

const certificates = [
  {
    id: "applied-ai-professional",
    title: "Applied AI Professional Certificate",
    organization: "Itronix Solutions",
    date: "14 December 2024",
    category: "AI & Technology",
    skills: [
      "Artificial Intelligence",
      "AI Application Development",
      "Digital Technology",
    ],
    description:
      "Completed the Itronix Applied AI Professional Certificate, developing foundational knowledge of artificial intelligence concepts and practical applications.",
    relevance:
      "Supports my interest in developing AI-powered software solutions and intelligent applications.",
    image: appliedAi,
  },
  {
    id: "ai-aware",
    title: "AI AWARE Digital Badge",
    organization: "AI Untuk Rakyat",
    supportedBy: "MyDIGITAL and Intel",
    category: "AI Awareness",
    skills: ["AI Concepts", "Digital Technology Awareness"],
    description:
      "Completed the AI AWARE Digital Badge, demonstrating awareness of artificial intelligence concepts and digital transformation.",
    relevance:
      "Builds my foundation before applying AI concepts into software development.",
    image: aiAware,
  },
  {
    id: "ai-appreciate",
    title: "AI APPRECIATE Digital Badge",
    organization: "AI Untuk Rakyat",
    supportedBy: "MyDIGITAL and Intel",
    category: "AI Application",
    skills: ["AI Applications", "Responsible AI Awareness"],
    description:
      "Completed the AI APPRECIATE Digital Badge, strengthening my understanding of practical AI applications.",
    relevance:
      "Supports my journey toward developing AI-enhanced software solutions.",
    image: aiAppreciate,
  },
  {
    id: "operating-systems",
    title: "Operating Systems and You: Becoming a Power User",
    organization: "Google through Coursera",
    date: "5 February 2025",
    category: "System Development",
    skills: ["Operating Systems", "System Management", "Computer Systems"],
    image: operatingSystems,
  },
  {
    id: "networking",
    title: "The Bits and Bytes of Computer Networking",
    organization: "Google through Coursera",
    date: "21 December 2024",
    category: "Networking",
    skills: [
      "Networking Fundamentals",
      "Internet Communication",
      "Network Protocols",
    ],
    image: networking,
  },
  {
    id: "codenection-2024",
    title: "CodeNection 2024",
    organization: "MMU Faculty of Computing and Informatics",
    category: "Programming Competition",
    skills: ["Problem Solving", "Programming", "Algorithmic Thinking"],
    image: codeNection,
  },
  {
    id: "google-workspace-hackathon-2024",
    title: "Google Workspace Hackathon 2024",
    organization: "Google Developer Student Clubs Asia Pacific University",
    category: "Developer Community",
    skills: [
      "Hackathon Experience",
      "Collaboration",
      "Google Workspace Technology",
    ],
    image: gdscHackathon,
  },
];

export default certificates;
