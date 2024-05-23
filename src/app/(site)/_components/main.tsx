import Link from "next/link";
import Image from "next/image";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

import { Icons } from "@/components/icons";
import { Shell } from "@/components/shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { type getGithubStars } from "@/lib/actions/github";

import { EmailConnectForm } from "@/components/forms/email-connect-form";
import { ContentSection } from "@/components/content-section";
import { Skills } from "@/components/skills";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { ClientButton } from "@/components/client-button";
import { ConnectButton } from "@/components/forms/connect-button";

interface MainProps {
  githubStarsPromise: ReturnType<typeof getGithubStars>;
}

export async function Main({ githubStarsPromise }: MainProps) {
  const githubStars = Promise.resolve(githubStarsPromise);

  return (
    <Shell className="max-w-6xl">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-10 py-20 text-center md:py-32">
        <div
          className="flex flex-col sm:flex-col md:flex-row align-middle items-center justify-center w-full flex-nowrap animate-fade-up space-x-2 gap-12"
          style={{ animationDelay: "0.10s", animationFillMode: "both" }}
        >
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
          <div
            className="flex animate-fade-up flex-wrap items-center justify-center gap-4 w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
            style={{ animationDelay: "0.40s", animationFillMode: "both" }}
          >
            <Image
              src={"/images/featured/justinbachtell-md.png"}
              fill
              sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
              priority
              placeholder={"blur"}
              blurDataURL={"/images/featured/justinbachtell-blur.jpg"}
              alt={"Image of Justin Bachtell"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "9999px",
              }}
            />
          </div>
        </div>
        <div
          className="flex animate-fade-up flex-row space-x-2 gap-8 md:gap-12"
          style={{ animationDelay: "0.10s", animationFillMode: "both" }}
        >
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Badge
              aria-hidden="true"
              className="rounded-full px-3.5 py-1.5"
              variant="secondary"
            >
              <Icons.github className="mr-3 size-5" aria-hidden="true" />
              {githubStars} stars on GitHub
            </Badge>
            <span className="sr-only">GitHub</span>
          </Link>
          <ConnectButton />
        </div>
      </section>

      <ContentSection
        title="Skills"
        description="I have experience with a variety of technologies and tools. Here are some of my favorites:"
        linkText="View all my skills"
        className="pt-8 md:py-10 lg:py-12"
        href="/skills"
        asChild
      >
        <Skills />
      </ContentSection>
    </Shell>
  );
}
