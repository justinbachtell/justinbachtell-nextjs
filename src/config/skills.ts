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
      "JavaScript is a versatile programming language used for creating dynamic web content.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "typescript",
    description:
      "TypeScript is a statically typed superset of JavaScript that enhances code reliability.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "nextjs",
    description:
      "Next.js is a React framework for building static websites and server-side rendered applications.",
  },
  {
    id: "react",
    name: "React",
    icon: "react",
    description:
      "React is a JavaScript library for building interactive user interfaces.",
  },
  {
    id: "csharp",
    name: "C#",
    icon: "csharp",
    description:
      "C# is a general-purpose, object-oriented programming language used for building web applications and APIs.",
  },
  {
    id: "dotnet",
    name: ".NET",
    icon: "dotnet",
    description:
      ".NET is a software framework for building web applications and APIs.",
  },
  {
    id: "python",
    name: "Python",
    icon: "python",
    description:
      "Python is a high-level programming language known for its readability and versatility.",
  },
  {
    id: "php",
    name: "PHP",
    icon: "php",
    description:
      "PHP is a server-side scripting language used to develop dynamic web pages and applications.",
  },
  {
    id: "linux",
    name: "Linux",
    icon: "linux",
    description:
      "Linux is an open-source operating system widely used in servers and development environments.",
  },
  {
    id: "aws",
    name: "AWS",
    icon: "aws",
    description:
      "Amazon Web Services (AWS) provides cloud computing solutions including storage, databases, and computing power.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "node",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine, ideal for scalable network applications.",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "mysql",
    description:
      "MySQL is a popular open-source relational database management system.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "postgresql",
    description:
      "PostgreSQL is a powerful, open-source object-relational database system.",
  },
  {
    id: "java",
    name: "Java",
    icon: "java",
    description:
      "Java is a widely-used, high-level programming language known for its portability and performance.",
  },
  {
    id: "docker",
    name: "Docker",
    icon: "docker",
    description:
      "Docker is a platform for developing, shipping, and running applications in containers.",
  },
  {
    id: "bash",
    name: "Bash",
    icon: "bash",
    description:
      "Bash is a Unix shell used for scripting and command language tasks.",
  },
];

const allSkills: Skill[] = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: "javascript",
    description:
      "JavaScript is a versatile programming language used for creating dynamic web content.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "typescript",
    description:
      "TypeScript is a statically typed superset of JavaScript that enhances code reliability.",
  },
  {
    id: "react",
    name: "React",
    icon: "react",
    description:
      "React is a JavaScript library for building interactive user interfaces.",
  },
  {
    id: "blazor",
    name: "Blazor",
    icon: "blazor",
    description:
      "Blazor is a .NET web framework for building web applications using C# and HTML.",
  },
  {
    id: "csharp",
    name: "C#",
    icon: "csharp",
    description:
      "C# is a general-purpose, object-oriented programming language used for building web applications and APIs.",
  },
  {
    id: "dotnet",
    name: ".NET",
    icon: "dotnet",
    description:
      ".NET is a software framework for building web applications and APIs.",
  },
  {
    id: "python",
    name: "Python",
    icon: "python",
    description:
      "Python is a high-level programming language known for its readability and versatility.",
  },
  {
    id: "django",
    name: "Django",
    icon: "django",
    description:
      "Django is a high-level Python web framework for building robust web applications.",
  },
  {
    id: "php",
    name: "PHP",
    icon: "php",
    description:
      "PHP is a server-side scripting language used to develop dynamic web pages and applications.",
  },
  {
    id: "html",
    name: "HTML",
    icon: "html",
    description:
      "HTML is the standard markup language for creating web pages and applications.",
  },
  {
    id: "css",
    name: "CSS",
    icon: "css",
    description: "CSS is used to style the visual presentation of web pages.",
  },
  {
    id: "bash",
    name: "Bash",
    icon: "bash",
    description:
      "Bash is a Unix shell used for scripting and command language tasks.",
  },
  {
    id: "linux",
    name: "Linux",
    icon: "linux",
    description:
      "Linux is an open-source operating system widely used in servers and development environments.",
  },
  {
    id: "ubuntu",
    name: "Ubuntu",
    icon: "ubuntu",
    description:
      "Ubuntu is a user-friendly Linux distribution based on Debian.",
  },
  {
    id: "apple",
    name: "Apple",
    icon: "apple",
    description:
      "Apple OS includes macOS, iOS, and iPadOS, known for their user-friendly interfaces and seamless ecosystem.",
  },
  {
    id: "windows",
    name: "Windows",
    icon: "windows",
    description:
      "Microsoft Windows is a widely-used operating system for personal and professional use.",
  },
  {
    id: "aws",
    name: "AWS",
    icon: "aws",
    description:
      "Amazon Web Services (AWS) provides cloud computing solutions including storage, databases, and computing power.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "node",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine, ideal for scalable network applications.",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "mysql",
    description:
      "MySQL is a popular open-source relational database management system.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "postgresql",
    description:
      "PostgreSQL is a powerful, open-source object-relational database system.",
  },
  {
    id: "git",
    name: "Git",
    icon: "git",
    description:
      "Git is a distributed version control system for tracking changes in source code.",
  },
  {
    id: "github",
    name: "GitHub",
    icon: "github",
    description:
      "GitHub is a platform for version control and collaboration using Git.",
  },
  {
    id: "jetbrains",
    name: "JetBrains",
    icon: "jetbrains",
    description:
      "JetBrains provides integrated development environments (IDEs) for various programming languages.",
  },
  {
    id: "figma",
    name: "Figma",
    icon: "figma",
    description:
      "Figma is a collaborative interface design tool for creating and prototyping user interfaces.",
  },
  {
    id: "notion",
    name: "Notion",
    icon: "notion",
    description:
      "Notion is an all-in-one workspace for note-taking, project management, and collaboration.",
  },
  {
    id: "raycast",
    name: "Raycast",
    icon: "raycast",
    description:
      "Raycast is a macOS productivity tool for quick access to files, apps, and scripts.",
  },
  {
    id: "openai",
    name: "OpenAI",
    icon: "openai",
    description:
      "OpenAI is an AI research lab focused on developing safe and beneficial artificial intelligence.",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    icon: "perplexity",
    description:
      "Perplexity AI provides tools for natural language processing, image recognition, and data analysis.",
  },
  {
    id: "wordpress",
    name: "WordPress",
    icon: "wordpress",
    description:
      "WordPress is a content management system for creating websites, blogs, and e-commerce stores.",
  },
  {
    id: "t3stack",
    name: "T3 Stack",
    icon: "t3stack",
    description:
      "The T3 Stack is a full-stack framework for building web applications and APIs.",
  },
  {
    id: "resend",
    name: "Resend",
    icon: "resend",
    description:
      "Resend is a tool for sending emails, SMS messages, and push notifications in web development.",
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: "supabase",
    description:
      "Supabase is an open-source Firebase alternative for building web applications with real-time data.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "nextjs",
    description:
      "Next.js is a React framework for building static websites and server-side rendered applications.",
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: "vercel",
    description:
      "Vercel is a cloud platform for hosting static websites, web applications, and serverless functions.",
  },
  {
    id: "obs",
    name: "OBS Studio",
    icon: "obs",
    description:
      "OBS Studio is a free, open-source software for video recording and live streaming.",
  },
  {
    id: "radixui",
    name: "Radix UI",
    icon: "radixui",
    description:
      "Radix UI provides open-source components for building design systems with React.",
  },
  {
    id: "markdown",
    name: "Markdown",
    icon: "markdown",
    description:
      "Markdown is a lightweight markup language for formatting plain text documents.",
  },
  {
    id: "onepassword",
    name: "1Password",
    icon: "onepassword",
    description:
      "1Password is a password manager for securely storing, managing, and sharing passwords.",
  },
  {
    id: "pnpm",
    name: "PNPM",
    icon: "pnpm",
    description:
      "pnpm is a fast, space-efficient package manager for JavaScript projects.",
  },
  {
    id: "outlook",
    name: "Outlook",
    icon: "outlook",
    description:
      "Microsoft Outlook is an email client for managing emails, calendars, and contacts.",
  },
  {
    id: "pycharm",
    name: "PyCharm",
    icon: "pycharm",
    description:
      "PyCharm is an integrated development environment (IDE) for developing Python applications.",
  },
  {
    id: "phpstorm",
    name: "PhpStorm",
    icon: "phpstorm",
    description:
      "PhpStorm is an integrated development environment (IDE) for developing PHP applications.",
  },
  {
    id: "webstorm",
    name: "WebStorm",
    icon: "webstorm",
    description:
      "WebStorm is an integrated development environment (IDE) for developing JavaScript applications.",
  },
  {
    id: "rider",
    name: "Rider",
    icon: "rider",
    description:
      "Rider is an integrated development environment (IDE) for developing .NET applications.",
  },
  {
    id: "intellij",
    name: "IntelliJ IDEA",
    icon: "intellij",
    description:
      "IntelliJ IDEA is an integrated development environment (IDE) for developing Java applications.",
  },
  {
    id: "shadcnui",
    name: "Shadcn UI",
    icon: "shadcnui",
    description:
      "Shadcn UI provides open-source components for building design systems with React.",
  },
  {
    id: "mintlify",
    name: "Mintlify",
    icon: "mintlify",
    description:
      "Mintlify provides components for building documentation systems with React.",
  },
  {
    id: "safari",
    name: "Safari",
    icon: "safari",
    description:
      "Safari is a web browser developed by Apple for macOS, iOS, and iPadOS.",
  },
  {
    id: "edge",
    name: "Edge",
    icon: "edge",
    description:
      "Microsoft Edge is a web browser developed by Microsoft for Windows, macOS, iOS, and Android.",
  },
  {
    id: "chromium",
    name: "Chromium",
    icon: "chromium",
    description:
      "Chromium is an open-source web browser developed by Google and the basis for Google Chrome.",
  },
  {
    id: "tor",
    name: "Tor",
    icon: "tor",
    description: "Tor is software for protecting privacy and security online.",
  },
  {
    id: "arc",
    name: "Arc",
    icon: "arc",
    description: "Arc is a browser focused on speed, privacy, and security.",
  },
  {
    id: "chrome",
    name: "Chrome",
    icon: "chrome",
    description:
      "Google Chrome is the world's most popular web browser developed by Google.",
  },
  {
    id: "brave",
    name: "Brave",
    icon: "brave",
    description:
      "Brave is a web browser designed for speed, privacy, and security.",
  },
  {
    id: "firefox",
    name: "Firefox",
    icon: "firefox",
    description:
      "Mozilla Firefox is a web browser known for its speed, privacy, and security.",
  },
  {
    id: "zod",
    name: "Zod",
    icon: "zod",
    description:
      "Zod is a TypeScript-first schema declaration and validation library.",
  },
  {
    id: "sass",
    name: "Sass",
    icon: "sass",
    description:
      "Sass is a preprocessor scripting language that compiles to CSS.",
  },
  {
    id: "turbopack",
    name: "Turbo Pack",
    icon: "turbopack",
    description:
      "Turbo Pack provides tools for building design systems with React.",
  },
  {
    id: "reactrouter",
    name: "React Router",
    icon: "reactrouter",
    description:
      "React Router provides navigational components for building single-page applications with React.",
  },
  {
    id: "reactquery",
    name: "React Query",
    icon: "reactquery",
    description:
      "React Query is a library for managing server state in React applications.",
  },
  {
    id: "jest",
    name: "Jest",
    icon: "jest",
    description:
      "Jest is a JavaScript testing framework for unit and integration testing.",
  },
  {
    id: "java",
    name: "Java",
    icon: "java",
    description:
      "Java is a widely-used, high-level programming language known for its portability and performance.",
  },
  {
    id: "atlassian",
    name: "Atlassian",
    icon: "atlassian",
    description:
      "Atlassian provides tools for project management, collaboration, and software development.",
  },
  {
    id: "playwright",
    name: "Playwright",
    icon: "playwright",
    description:
      "Playwright is a library for automating web browsers with a single API.",
  },
  {
    id: "planetscale",
    name: "PlanetScale",
    icon: "planetscale",
    description:
      "PlanetScale provides tools for building, scaling, and managing databases.",
  },
  {
    id: "docker",
    name: "Docker",
    icon: "docker",
    description:
      "Docker is a platform for developing, shipping, and running applications in containers.",
  },
  {
    id: "prisma",
    name: "Prisma",
    icon: "prisma",
    description:
      "Prisma is a toolkit for accessing databases in Node.js and TypeScript applications.",
  },
  {
    id: "bun",
    name: "Bun",
    icon: "bun",
    description: "Bun provides tools for building design systems with React.",
  },
  {
    id: "jquery",
    name: "jQuery",
    icon: "jquery",
    description:
      "jQuery is a fast, small JavaScript library for simplifying HTML document manipulation.",
  },
  {
    id: "storybook",
    name: "Storybook",
    icon: "storybook",
    description:
      "Storybook is an open-source tool for developing UI components in isolation.",
  },
  {
    id: "astro",
    name: "Astro",
    icon: "astro",
    description:
      "Astro is a static site builder for creating faster websites with less JavaScript.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "tailwind",
    description:
      "Tailwind CSS is a utility-first framework for building custom designs without writing CSS.",
  },
  {
    id: "homebrew",
    name: "Homebrew",
    icon: "homebrew",
    description:
      "Homebrew is a package manager for macOS that simplifies software installation.",
  },
  {
    id: "npm",
    name: "NPM",
    icon: "npm",
    description:
      "NPM is a package manager for JavaScript used for sharing and distributing code.",
  },
  {
    id: "vscode",
    name: "VS Code",
    icon: "vscode",
    description:
      "Visual Studio Code is a source code editor for writing, debugging, and deploying code.",
  },
];

const ProgrammingLanguages: SkillCategory = {
  id: "programming-languages",
  name: "Programming Languages",
  skills: allSkills.filter((skill) =>
    ["javascript", "typescript", "csharp", "python", "php", "java"].includes(
      skill.id,
    ),
  ),
};

const FrameworksAndLibraries: SkillCategory = {
  id: "frameworks-and-libraries",
  name: "Frameworks & Libraries",
  skills: allSkills.filter((skill) =>
    [
      "react",
      "dotnet",
      "blazor",
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
