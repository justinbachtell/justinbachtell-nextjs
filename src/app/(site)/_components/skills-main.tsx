import { Shell } from "@/components/shell";
import {
  allSkills,
  ProgrammingLanguages,
  FrameworksAndLibraries,
  Databases,
  DevOpsAndTools,
  IDEsAndDevelopmentTools,
  FrontendTechnologies,
  Browsers,
  OperatingSystems,
  TestingAndAutomation,
  Miscellaneous,
} from "@/config/skills";
import { SkillDetailedCard } from "./skill-detailed-card";

export async function SkillsMain() {
  return (
    <Shell>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6">
        <div className="max-w-5xl w-full space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              My Skills
            </h1>
            <p className="text-gray-600 dark:text-gray-400">My skills.</p>
          </div>
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Programming Languages
              </h2>
              <ul className={"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"}>
                {ProgrammingLanguages.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-1">
                    <SkillDetailedCard key={skill.name} skill={skill} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Frameworks and Libraries
              </h2>
              <ul className={"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"}>
                {FrameworksAndLibraries.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-1">
                    <SkillDetailedCard key={skill.name} skill={skill} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Databases
              </h2>
              <ul className={"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"}>
                {Databases.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-1">
                    <SkillDetailedCard key={skill.name} skill={skill} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                DevOps and Tools
              </h2>
              <ul className={"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"}>
                {DevOpsAndTools.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-1">
                    <SkillDetailedCard key={skill.name} skill={skill} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                IDEs and Development Tools
              </h2>
              <ul className={"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"}>
                {IDEsAndDevelopmentTools.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-1">
                    <SkillDetailedCard key={skill.name} skill={skill} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Frontend Technologies
              </h2>
              <ul className={"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"}>
                {FrontendTechnologies.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-1">
                    <SkillDetailedCard key={skill.name} skill={skill} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Browsers
              </h2>
              <ul className={"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"}>
                {Browsers.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-1">
                    <SkillDetailedCard key={skill.name} skill={skill} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Operating Systems
              </h2>
              <ul className={"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"}>
                {OperatingSystems.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-1">
                    <SkillDetailedCard key={skill.name} skill={skill} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Testing and Automation
              </h2>
              <ul className={"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"}>
                {TestingAndAutomation.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-1">
                    <SkillDetailedCard key={skill.name} skill={skill} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Miscellaneous
              </h2>
              <ul className={"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"}>
                {Miscellaneous.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-1">
                    <SkillDetailedCard key={skill.name} skill={skill} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/*<ul className={"grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"}>
          {allSkills.map((skill) => (
            <li key={skill.name} className="flex flex-1">
            <SkillDetailedCard
              key={skill.name}
              skill={skill}
            />
            </li>
          ))}
          </ul>*/}
        </div>
      </div>
    </Shell>
  );
}
