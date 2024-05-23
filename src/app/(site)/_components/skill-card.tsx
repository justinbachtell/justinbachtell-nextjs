import { Icons } from "@/components/icons";
import { Card, CardTitle } from "@/components/ui/card";
import type { Skill } from "@/config/skills";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = Icons[skill.icon];
  return (
    <Card className="relative flex size-full flex-row bg-muted p-4 transition-colors hover:border-primary hover:border hover:shadow-xl justify-center items-center gap-2 min-w-fit">
      <div className="h-8 w-8 items-center">
        <Icon className="w-full h-full items-center" />
      </div>
      <div className="flex flex-1 flex-col space-y-1.5">
        <CardTitle>{skill.name}</CardTitle>
      </div>
    </Card>
  );
}
