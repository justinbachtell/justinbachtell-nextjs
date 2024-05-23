import { Icons } from "@/components/icons";

type Skill = {
  id: string;
  name: string;
  icon: keyof typeof Icons;
  description: string;
};

type SkillCategory = {
  id: string;
  name: string;
  skills: Skill[];
};

const skills: Skill[] = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: "javascript",
    description:
      "JavaScript is the programming language of the web. It is used to add interactivity to websites, create mobile apps, and build server-side applications.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "typescript",
    description:
      "TypeScript is a superset of JavaScript that provides optional static typing, interfaces, and advanced features to JavaScript.",
  },
  {
    id: "react",
    name: "React",
    icon: "react",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    id: "python",
    name: "Python",
    icon: "python",
    description:
      "Python is a high-level, interpreted programming language that is used for web development, data analysis, artificial intelligence, and scientific computing.",
  },
  {
    id: "php",
    name: "PHP",
    icon: "php",
    description:
      "PHP is a server-side scripting language that is used to create dynamic web pages, e-commerce websites, and content management systems.",
  },
  {
    id: "linux",
    name: "Linux",
    icon: "linux",
    description:
      "Linux is an open-source operating system that is used for web servers, supercomputers, and mobile devices.",
  },
  {
    id: "aws",
    name: "AWS",
    icon: "aws",
    description:
      "Amazon Web Services (AWS) is a cloud computing platform that provides a wide range of services, including computing power, storage, and databases.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "node",
    description:
      "Node.js is a JavaScript runtime that is used to build scalable network applications.",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "mysql",
    description:
      "MySQL is an open-source relational database management system that is used to store and retrieve data for web applications.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "postgresql",
    description:
      "PostgreSQL is an open-source object-relational database management system that is used to store and retrieve data for web applications.",
  },
  {
    id: "java",
    name: "Java",
    icon: "java",
    description:
      "Java is a high-level, object-oriented programming language that is used to build web applications, mobile apps, and enterprise software.",
  },
  {
    id: "docker",
    name: "Docker",
    icon: "docker",
    description:
      "Docker is a platform that is used to develop, ship, and run applications in containers.",
  },
];

const allSkills: Skill[] = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: "javascript",
    description:
      "JavaScript is the programming language of the web. It is used to add interactivity to websites, create mobile apps, and build server-side applications.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "typescript",
    description:
      "TypeScript is a superset of JavaScript that provides optional static typing, interfaces, and advanced features to JavaScript.",
  },
  {
    id: "react",
    name: "React",
    icon: "react",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    id: "python",
    name: "Python",
    icon: "python",
    description:
      "Python is a high-level, interpreted programming language that is used for web development, data analysis, artificial intelligence, and scientific computing.",
  },
  {
    id: "django",
    name: "Django",
    icon: "django",
    description:
      "Django is a high-level Python web framework that is used to build web applications, APIs, and content management systems.",
  },
  {
    id: "php",
    name: "PHP",
    icon: "php",
    description:
      "PHP is a server-side scripting language that is used to create dynamic web pages, e-commerce websites, and content management systems.",
  },
  {
    id: "html",
    name: "HTML",
    icon: "html",
    description:
      "HTML is the standard markup language for creating web pages and web applications.",
  },
  {
    id: "css",
    name: "CSS",
    icon: "css",
    description:
      "CSS is the language used to style the visual presentation of web pages.",
  },
  {
    id: "bash",
    name: "Bash",
    icon: "bash",
    description:
      "Bash is a Unix shell and command language that is used to automate tasks, manage files, and run scripts.",
  },
  {
    id: "linux",
    name: "Linux",
    icon: "linux",
    description:
      "Linux is an open-source operating system that is used for web servers, supercomputers, and mobile devices.",
  },
  {
    id: "ubuntu",
    name: "Ubuntu",
    icon: "ubuntu",
    description:
      "Ubuntu is a Linux distribution that is based on Debian and is used for personal computers, servers, and cloud computing.",
  },
  {
    id: "apple",
    name: "Apple",
    icon: "apple",
    description:
      "Apple OS is a group of several graphical operating system families that are developed, marketed, and sold by Apple Inc.",
  },
  {
    id: "windows",
    name: "Windows",
    icon: "windows",
    description:
      "Microsoft Windows is a group of several graphical operating system families that are developed, marketed, and sold by Microsoft.",
  },
  {
    id: "aws",
    name: "AWS",
    icon: "aws",
    description:
      "Amazon Web Services (AWS) is a cloud computing platform that provides a wide range of services, including computing power, storage, and databases.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "node",
    description:
      "Node.js is a JavaScript runtime that is used to build scalable network applications.",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "mysql",
    description:
      "MySQL is an open-source relational database management system that is used to store and retrieve data for web applications.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "postgresql",
    description:
      "PostgreSQL is an open-source object-relational database management system that is used to store and retrieve data for web applications.",
  },
  {
    id: "git",
    name: "Git",
    icon: "git",
    description:
      "Git is a distributed version control system that is used to track changes in source code during software development.",
  },
  {
    id: "github",
    name: "GitHub",
    icon: "github",
    description:
      "GitHub is a web-based platform that provides hosting for software development version control using Git.",
  },
  {
    id: "jetbrains",
    name: "JetBrains",
    icon: "jetbrains",
    description:
      "JetBrains is a software development company that provides tools for coding, debugging, and testing.",
  },
  {
    id: "figma",
    name: "Figma",
    icon: "figma",
    description:
      "Figma is a cloud-based design tool that is used to create user interfaces, prototypes, and animations.",
  },
  {
    id: "notion",
    name: "Notion",
    icon: "notion",
    description:
      "Notion is an all-in-one workspace that provides tools for note-taking, project management, and task tracking.",
  },
  {
    id: "raycast",
    name: "Raycast",
    icon: "raycast",
    description:
      "Raycast is a productivity tool for macOS that provides quick access to files, apps, and scripts.",
  },
  {
    id: "openai",
    name: "OpenAI",
    icon: "openai",
    description:
      "OpenAI is an artificial intelligence research lab that is focused on developing safe and beneficial AI.",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    icon: "perplexity",
    description:
      "Perplexity AI is a machine learning platform that provides tools for natural language processing, image recognition, and data analysis.",
  },
  {
    id: "wordpress",
    name: "WordPress",
    icon: "wordpress",
    description:
      "WordPress is a content management system that is used to create websites, blogs, and e-commerce stores.",
  },
  {
    id: "t3stack",
    name: "T3 Stack",
    icon: "t3stack",
    description:
      "The T3 Stack is a full-stack development framework that is used to build web applications, mobile apps, and APIs.",
  },
  {
    id: "resend",
    name: "Resend",
    icon: "resend",
    description:
      "Resend is a web development tool that is used to send emails, SMS messages, and push notifications.",
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: "supabase",
    description:
      "Supabase is an open-source Firebase alternative that provides tools for building web applications with real-time data.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "nextjs",
    description:
      "Next.js is a React framework that is used to build static websites, web applications, and server-side rendered pages.",
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: "vercel",
    description:
      "Vercel is a cloud platform that provides hosting for static websites, web applications, and serverless functions.",
  },
  {
    id: "obs",
    name: "OBS Studio",
    icon: "obs",
    description:
      "OBS Studio is a free and open-source software for video recording and live streaming.",
  },
  {
    id: "radixui",
    name: "Radix UI",
    icon: "radixui",
    description:
      "Radix UI is a collection of open-source components and utilities for building design systems with React.",
  },
  {
    id: "markdown",
    name: "Markdown",
    icon: "markdown",
    description:
      "Markdown is a lightweight markup language that is used to format plain text documents.",
  },
  {
    id: "onepassword",
    name: "1Password",
    icon: "onepassword",
    description:
      "1Password is a password manager that is used to store, manage, and share passwords securely.",
  },
  {
    id: "pnpm",
    name: "PNPM",
    icon: "pnpm",
    description:
      "pnpm is a fast, disk space efficient package manager for JavaScript projects.",
  },
  {
    id: "outlook",
    name: "Outlook",
    icon: "outlook",
    description:
      "Microsoft Outlook is an email client that is used to send, receive, and manage email messages.",
  },
  {
    id: "pycharm",
    name: "PyCharm",
    icon: "pycharm",
    description:
      "PyCharm is an integrated development environment (IDE) that is used to develop Python applications.",
  },
  {
    id: "phpstorm",
    name: "PhpStorm",
    icon: "phpstorm",
    description:
      "PhpStorm is an integrated development environment (IDE) that is used to develop PHP applications.",
  },
  {
    id: "webstorm",
    name: "WebStorm",
    icon: "webstorm",
    description:
      "WebStorm is an integrated development environment (IDE) that is used to develop JavaScript applications.",
  },
  {
    id: "rider",
    name: "Rider",
    icon: "rider",
    description:
      "Rider is an integrated development environment (IDE) that is used to develop .NET applications.",
  },
  {
    id: "intellij",
    name: "IntelliJ IDEA",
    icon: "intellij",
    description:
      "IntelliJ IDEA is an integrated development environment (IDE) that is used to develop Java applications.",
  },
  {
    id: "shadcnui",
    name: "Shadcn UI",
    icon: "shadcnui",
    description:
      "Shadcn UI is a collection of open-source components and utilities for building design systems with React.",
  },
  {
    id: "mintlify",
    name: "Mintlify",
    icon: "mintlify",
    description:
      "Mintlify is a collection of open-source components and utilities for building documentation systems with React.",
  },
  {
    id: "safari",
    name: "Safari",
    icon: "safari",
    description:
      "Safari is a web browser that is developed by Apple Inc. for macOS, iOS, and iPadOS.",
  },
  {
    id: "edge",
    name: "Edge",
    icon: "edge",
    description:
      "Microsoft Edge is a web browser that is developed by Microsoft for Windows, macOS, iOS, and Android.",
  },
  {
    id: "chromium",
    name: "Chromium",
    icon: "chromium",
    description:
      "Chromium is an open-source web browser that is developed by Google and is the basis for Google Chrome.",
  },
  {
    id: "tor",
    name: "Tor",
    icon: "tor",
    description:
      "Tor is free and open-source software that is used to protect your privacy and security online.",
  },
  {
    id: "arc",
    name: "Arc",
    icon: "arc",
    description:
      "Arc is a browser that is designed for speed, privacy, and security.",
  },
  {
    id: "chrome",
    name: "Chrome",
    icon: "chrome",
    description:
      "Google Chrome is a web browser that is developed by Google and is the most popular browser in the world.",
  },
  {
    id: "brave",
    name: "Brave",
    icon: "brave",
    description:
      "Brave is a web browser that is designed for speed, privacy, and security.",
  },
  {
    id: "firefox",
    name: "Firefox",
    icon: "firefox",
    description:
      "Mozilla Firefox is a web browser that is developed by Mozilla and is known for its speed, privacy, and security.",
  },
  {
    id: "zod",
    name: "Zod",
    icon: "zod",
    description:
      "Zod is a TypeScript-first schema declaration and validation library that is used to validate data.",
  },
  {
    id: "sass",
    name: "Sass",
    icon: "sass",
    description:
      "Sass is a preprocessor scripting language that is used to write CSS more efficiently.",
  },
  {
    id: "turbopack",
    name: "Turbo Pack",
    icon: "turbopack",
    description:
      "Turbo Pack is a collection of open-source components and utilities for building design systems with React.",
  },
  {
    id: "reactrouter",
    name: "React Router",
    icon: "reactrouter",
    description:
      "React Router is a collection of navigational components that are used to build single-page applications with React.",
  },
  {
    id: "reactquery",
    name: "React Query",
    icon: "reactquery",
    description:
      "React Query is a library for managing, caching, and synchronizing server state in React applications.",
  },
  {
    id: "jest",
    name: "Jest",
    icon: "jest",
    description:
      "Jest is a JavaScript testing framework that is used to test JavaScript code.",
  },
  {
    id: "java",
    name: "Java",
    icon: "java",
    description:
      "Java is a high-level, object-oriented programming language that is used to build web applications, mobile apps, and enterprise software.",
  },

  {
    id: "atlassian",
    name: "Atlassian",
    icon: "atlassian",
    description:
      "Atlassian is a software company that provides tools for project management, collaboration, and software development.",
  },
  {
    id: "playwright",
    name: "Playwright",
    icon: "playwright",
    description:
      "Playwright is a browser automation library that is used to automate web browsers with a single API.",
  },
  {
    id: "planetscale",
    name: "PlanetScale",
    icon: "planetscale",
    description:
      "PlanetScale is a database company that provides tools for building, scaling, and managing databases.",
  },

  {
    id: "docker",
    name: "Docker",
    icon: "docker",
    description:
      "Docker is a platform that is used to develop, ship, and run applications in containers.",
  },
  {
    id: "prisma",
    name: "Prisma",
    icon: "prisma",
    description:
      "Prisma is a database toolkit that is used to access databases in Node.js and TypeScript applications.",
  },
  {
    id: "bun",
    name: "Bun",
    icon: "bun",
    description:
      "Bun is a collection of open-source components and utilities for building design systems with React.",
  },
  {
    id: "jquery",
    name: "jQuery",
    icon: "jquery",
    description:
      "jQuery is a fast, small, and feature-rich JavaScript library that is used to simplify HTML document traversal and manipulation.",
  },
  {
    id: "storybook",
    name: "Storybook",
    icon: "storybook",
    description:
      "Storybook is an open-source tool for developing UI components in isolation for React, Vue, and Angular.",
  },
  {
    id: "astro",
    name: "Astro",
    icon: "astro",
    description:
      "Astro is a new static site builder that is used to build faster websites with less JavaScript.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "tailwind",
    description:
      "Tailwind CSS is a utility-first CSS framework that is used to build custom designs without writing any CSS.",
  },
  {
    id: "homebrew",
    name: "Homebrew",
    icon: "homebrew",
    description:
      "Homebrew is a package manager for macOS that is used to install software packages on macOS.",
  },
  {
    id: "npm",
    name: "NPM",
    icon: "npm",
    description:
      "NPM is a package manager for JavaScript that is used to install, share, and distribute code.",
  },
  {
    id: "vscode",
    name: "VS Code",
    icon: "vscode",
    description:
      "Visual Studio Code is a source code editor that is used to write, debug, and deploy code.",
  },
];

const ProgrammingLanguages: SkillCategory = {
  id: "programming-languages",
  name: "Programming Languages",
  skills: allSkills.filter((skill) =>
    ["javascript", "typescript", "python", "php", "java"].includes(skill.id),
  ),
};

const FrameworksAndLibraries: SkillCategory = {
  id: "frameworks-and-libraries",
  name: "Frameworks & Libraries",
  skills: allSkills.filter((skill) =>
    [
      "react",
      "django",
      "nodejs",
      "nextjs",
      "astro",
      "tailwind",
      "jquery",
    ].includes(skill.id),
  ),
};

const Databases: SkillCategory = {
  id: "databases",
  name: "Databases",
  skills: allSkills.filter((skill) =>
    ["mysql", "postgresql", "supabase", "planetscale", "prisma"].includes(
      skill.id,
    ),
  ),
};

const DevOpsAndTools: SkillCategory = {
  id: "devops-and-tools",
  name: "DevOps & Tools",
  skills: allSkills.filter((skill) =>
    [
      "docker",
      "git",
      "github",
      "aws",
      "pnpm",
      "npm",
      "bun",
      "homebrew",
      "bash",
      "vercel",
      "t3stack",
      "wordpress",
    ].includes(skill.id),
  ),
};

const IDEsAndDevelopmentTools: SkillCategory = {
  id: "ides-and-development-tools",
  name: "IDEs & Development Tools",
  skills: allSkills.filter((skill) =>
    [
      "vscode",
      "pycharm",
      "phpstorm",
      "webstorm",
      "rider",
      "intellij",
      "jetbrains",
      "figma",
    ].includes(skill.id),
  ),
};

const FrontendTechnologies: SkillCategory = {
  id: "frontend-technologies",
  name: "Frontend Technologies",
  skills: allSkills.filter((skill) =>
    [
      "html",
      "css",
      "sass",
      "react",
      "tailwind",
      "shadcnui",
      "storybook",
      "zod",
      "turbopack",
    ].includes(skill.id),
  ),
};

const Browsers: SkillCategory = {
  id: "browsers",
  name: "Browsers",
  skills: allSkills.filter((skill) =>
    [
      "safari",
      "edge",
      "chromium",
      "tor",
      "arc",
      "chrome",
      "brave",
      "firefox",
    ].includes(skill.id),
  ),
};

const OperatingSystems: SkillCategory = {
  id: "operating-systems",
  name: "Operating Systems",
  skills: allSkills.filter((skill) =>
    ["linux", "ubuntu", "apple", "windows"].includes(skill.id),
  ),
};

const TestingAndAutomation: SkillCategory = {
  id: "testing-and-automation",
  name: "Testing & Automation",
  skills: allSkills.filter((skill) =>
    ["jest", "playwright"].includes(skill.id),
  ),
};

const Miscellaneous: SkillCategory = {
  id: "miscellaneous",
  name: "Miscellaneous",
  skills: allSkills.filter((skill) =>
    [
      "markdown",
      "obs",
      "onepassword",
      "notion",
      "resend",
      "atlassian",
      "raycast",
      "openai",
      "perplexity",
      "outlook",
    ].includes(skill.id),
  ),
};

export {
  skills,
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
};
export type { Skill, SkillCategory };
