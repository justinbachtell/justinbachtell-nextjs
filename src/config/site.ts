import type { FooterItem, MainNavItem } from "@/types";
import { env } from "@/env.js";

export type SiteConfig = typeof siteConfig;

const links = {
  x: "https://twitter.com/justinjbachtell",
  github: "https://github.com/justinbachtell/justinbachtell-nextjs",
  githubAccount: "https://github.com/justinbachtell",
  linkedIn: "https://www.linkedin.com/in/justinbachtell/",
};

export const siteConfig = {
  name: "JustinBachtell.com",
  description: "A personal website, portfolio, and blog of Justin Bachtell.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: env.NEXT_PUBLIC_APP_URL + "/opengraph-image.png",
  links,
  mainNav: [
    {
      title: "Home",
      href: "/",
      items: [],
    },
    /* {
      title: "Blog",
      href: "/blog",
      description: "Opinions and thoughts on various topics.",
      items: [
        {
          title: "Tech",
          href: "/technology",
          description: "Opinions and thoughts on various skills.",
          items: [],
        },
      ],
    },
    {
      title: "Projects",
      href: "/projects",
      description: "A collection of projects, websites, apps, and more.",
      items: [
        {
          title: "JustinBachtell.com",
          href: "/",
          description:
            "A personal website, portfolio, and blog of Justin Bachtell.",
          items: [],
        },
        {
          title: "Quote Table",
          href: "/quote-table",
          description: "A collection of quotes, books, authors, and more.",
          items: [],
        },
        {
          title: "Liberty University Online",
          href: "/luo",
          description:
            "A full redesign of the Liberty University Online website.",
          items: [],
        },
        {
          title: "Liberty University Online Academy",
          href: "/luoa",
          description:
            "A full redesign of the Liberty University Online Academy website.",
          items: [],
        },
      ],
    }, */
    {
      title: "About",
      href: "/about",
      items: [],
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Learn more",
      items: [
        {
          title: "Terms",
          href: "/terms",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "GitHub",
          href: links.githubAccount,
          external: true,
        },
        {
          title: "LinkedIn",
          href: links.linkedIn,
          external: true,
        },
        /*{
          title: "X",
          href: links.x,
          external: true,
        },*/
      ],
    },
  ] satisfies FooterItem[],
};
