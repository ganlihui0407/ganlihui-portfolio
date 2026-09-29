import SectionTitle from "../SectionTitle";
import { profile } from "../../data/profile";
import portrait from "../../assets/profile/GanLiHui.jpg.png";

function ProfileIntro() {
  return (
    <section aria-labelledby="about-intro">
      <SectionTitle title="About Me" />
      <article className="mt-10 grid items-center gap-8 rounded-card border border-line bg-cream-raised p-6 shadow-soft sm:p-8 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12">
        <img
          src={portrait}
          alt="Portrait of Gan Li Hui"
          className="mx-auto h-56 w-56 rounded-card border border-line object-cover shadow-soft md:mx-0 md:h-56 md:w-56 lg:h-64 lg:w-64"
        />
        <div>
          <h2 id="about-intro" className="text-3xl sm:text-4xl">
            {profile.name}
          </h2>
          <p className="mt-2 font-display text-xl text-walnut">{profile.role}</p>
          <p className="mt-4 leading-relaxed text-charcoal">
            I am a Software System Development student at Tunku Abdul Rahman
            University of Management and Technology (TAR UMT). I start by
            understanding the problem, then shape a solution that is clear and
            practical.
          </p>
          <p className="mt-3 leading-relaxed text-stone">
            My current interests are software development, AI application
            development, and system design. I keep learning so the next
            solution is clearer.
          </p>
        </div>
      </article>
    </section>
  );
}

export default ProfileIntro;
