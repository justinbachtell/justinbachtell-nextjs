import { SkillCard } from "@/app/(site)/_components/skill-card";
import { skills } from "@/config/skills";

export function Skills() {
  return (
    <section
      className="grid animate-fade-up grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      style={{ animationDelay: "0.50s", animationFillMode: "both" }}
    >
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </section>
  );
}
