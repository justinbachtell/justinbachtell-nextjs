import Link from "next/link";

import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { SkillCardSkeleton } from "./skill-card-skeleton";

export function MainSkeleton() {
  return (
    <Shell className="max-w-6xl">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
        <div className="flex flex-col space-y-2">
          <p
            className="animate-fade-up text-muted-foreground text-lg sm:text-xl md:text-2xl lg:text-3xl"
            style={{ animationDelay: "0.15s", animationFillMode: "both" }}
          >
            Hi, my name is
          </p>
          <h1
            className="animate-fade-up text-balance font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.20s", animationFillMode: "both" }}
          >
            Justin Bachtell
          </h1>
          <p
            className="animate-fade-up text-muted-foreground text-lg sm:text-xl md:text-2xl lg:text-3xl"
            style={{ animationDelay: "0.30s", animationFillMode: "both" }}
          >
            I'm a Full-Stack Developer
          </p>
        </div>
        <div className={"flex flex-row gap-12"}>
          <Skeleton className="h-7 w-44" />
          <Skeleton className="h-7 w-44" />
        </div>
      </section>
      <section className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkillCardSkeleton key={i} />
        ))}
      </section>
    </Shell>
  );
}
