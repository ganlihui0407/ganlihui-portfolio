import ProfileIntro from "../components/about/ProfileIntro";
import EducationTimeline from "../components/about/EducationTimeline";
import SkillShowcase from "../components/about/SkillShowcase";
import DevelopmentProcess from "../components/about/DevelopmentProcess";

function About() {
  return (
    <div className="page-shell">
      <ProfileIntro />
      <EducationTimeline />
      <SkillShowcase />
      <DevelopmentProcess />
    </div>
  );
}

export default About;
