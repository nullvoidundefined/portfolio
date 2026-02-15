export interface Job {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  graduationDate: string;
  details?: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  selectedImpact: string[];
  jobs: Job[];
  education: Education[];
  skills: Record<string, string[]>;
}

const resume: ResumeData = {
  name: "Ian Greenough",
  title: "Staff Frontend Engineer",
  email: "ian.greenough.developer@gmail.com",
  phone: "(415) 350-7731",
  location: "New York, NY / Seattle, WA",
  linkedin: "linkedin.com/in/iangreenough",
  github: "github.com/iangreenough",
  summary:
    "Staff Frontend Engineer with 15+ years of experience building, stabilizing, and scaling frontend systems at startups and growth-stage companies. Specialized in TypeScript/React architecture, large-scale refactors, and accelerating developer productivity. Proven track record of reducing technical debt, establishing quality standards, and directly driving product and revenue impact in small, fast-moving teams.",

  selectedImpact: [
    "Led multi-quarter frontend modernization efforts (TypeScript migrations, testing infrastructure) that materially reduced production incidents and unblocked faster feature delivery.",
    "Established frontend quality and DX standards (testing, Storybook, CI) adopted across teams, improving onboarding speed and code maintainability.",
    "Partnered closely with product and design to optimize critical user flows, directly contributing to significant revenue and conversion gains.",
  ],

  jobs: [
    {
      id: "founding-fe-liminary",
      company: "Liminary",
      title: "Founding Frontend Engineer",
      location: "Seattle",
      startDate: "May 2025",
      endDate: "Feb 2026",
      highlights: [
        "Defined and implemented the frontend architecture for a Chrome extension and companion apps, balancing rapid iteration with long-term maintainability in an AI-driven product.",
        "Led development of the Chrome extension, restructuring the codebase to improve maintainability and enable rapid feature development in a fast-paced 0-1 startup environment.",
        "Integrated AI/LLM-assisted tooling into the frontend development workflow to accelerate debugging, refactoring, and feature development while maintaining code quality standards.",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Chrome Extensions",
        "AI/LLM",
      ],
    },
    {
      id: "staff-fe-the-rounds",
      company: "The Rounds",
      title: "Staff Frontend Engineer",
      location: "NYC",
      startDate: "August 2022",
      endDate: "April 2025",
      highlights: [
        "Owned frontend technical direction during a major modernization phase, leading the migration of the codebase from JavaScript to TypeScript in order to improve reliability, maintainability, and developer velocity.",
        "Introduced and scaled automated testing (unit + Cypress E2E), increasing coverage from ~15% to ~75% and significantly reducing production regressions.",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Cypress",
        "CI/CD",
      ],
    },
    {
      id: "founding-eng-arketa",
      company: "Arketa",
      title: "Founding Engineer",
      location: "Los Angeles",
      startDate: "April 2021",
      endDate: "August 2022",
      highlights: [
        "Built and scaled core revenue-driving features including point of sale, checkout, scheduling, and media upload pipelines.",
        "Led a comprehensive frontend re-architecture, introducing shared standards and patterns that eliminated accumulated technical debt and enabled faster feature iteration.",
        "Introduced early component standards and documentation practices that later evolved into a component driven workflow as the product scaled.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Storybook",
        "Node.js",
      ],
    },
    {
      id: "senior-eng-daily-harvest",
      company: "Daily Harvest",
      title: "Senior Software Engineer",
      location: "New York",
      startDate: "April 2019",
      endDate: "April 2021",
      highlights: [
        "Delivered customer-facing features across multiple high-traffic product lines, directly supporting business growth initiatives.",
        "Led the transition from a legacy Angular frontend toward a modern React architecture, including the design of a framework agnostic shared application state management system.",
        "Built reusable UI and animation systems that standardized design implementation and reduced development effort across teams.",
      ],
      technologies: [
        "React",
        "Angular",
        "JavaScript",
        "CSS Animations",
      ],
    },
  ],

  education: [],

  skills: {
    "Languages": ["TypeScript", "JavaScript", "HTML", "CSS/SCSS"],
    "Frameworks & Libraries": [
      "React",
      "Angular",
      "Node.js",
      "Storybook",
      "Cypress",
    ],
    "Architecture": [
      "Chrome Extensions",
      "Component Libraries",
      "State Management",
      "CI/CD",
    ],
    "Practices": [
      "TypeScript Migrations",
      "Testing Strategy",
      "Frontend Architecture",
      "Developer Experience",
      "Agile",
    ],
  },
};

export default resume;
