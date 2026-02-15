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
  jobs: Job[];
  education: Education[];
  skills: Record<string, string[]>;
}

const resume: ResumeData = {
  name: "Ian Greenough",
  title: "Software Developer",
  email: "ian.greenough@example.com",
  phone: "(555) 123-4567",
  location: "United States",
  linkedin: "linkedin.com/in/iangreenough",
  github: "github.com/iangreenough",
  summary:
    "Experienced software developer with a passion for building performant, user-friendly web applications. Skilled in modern frontend and backend technologies with a track record of delivering quality software in collaborative team environments.",

  jobs: [
    {
      id: "senior-dev-acme",
      company: "Acme Corp",
      title: "Senior Software Developer",
      location: "Remote",
      startDate: "Jan 2022",
      endDate: "Present",
      highlights: [
        "Led frontend architecture migration from legacy jQuery codebase to React with TypeScript, improving developer productivity by 40%",
        "Designed and implemented a component library used across 5 product teams, ensuring consistent UI/UX",
        "Mentored junior developers through code reviews, pair programming, and technical documentation",
        "Reduced page load times by 60% through code splitting, lazy loading, and image optimization",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Docker",
      ],
    },
    {
      id: "fullstack-dev-techstart",
      company: "TechStart Inc.",
      title: "Full Stack Developer",
      location: "San Francisco, CA",
      startDate: "Jun 2019",
      endDate: "Dec 2021",
      highlights: [
        "Built and maintained RESTful APIs serving 100k+ daily active users using Node.js and Express",
        "Developed real-time collaboration features using WebSockets, improving user engagement by 25%",
        "Implemented CI/CD pipelines with GitHub Actions, reducing deployment time from hours to minutes",
        "Collaborated with product and design teams to translate wireframes into responsive web applications",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
      ],
    },
    {
      id: "frontend-dev-webworks",
      company: "WebWorks Agency",
      title: "Frontend Developer",
      location: "Austin, TX",
      startDate: "Aug 2017",
      endDate: "May 2019",
      highlights: [
        "Developed responsive websites and web applications for 20+ clients across various industries",
        "Introduced modern build tooling (Webpack, Babel) that reduced build times by 50%",
        "Created reusable component patterns that became the agency's standard starter kit",
        "Ensured WCAG 2.1 accessibility compliance across all client deliverables",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Sass",
        "Webpack",
      ],
    },
    {
      id: "junior-dev-dataflow",
      company: "DataFlow Solutions",
      title: "Junior Developer",
      location: "Denver, CO",
      startDate: "Jun 2016",
      endDate: "Jul 2017",
      highlights: [
        "Contributed to a data visualization dashboard used by enterprise clients for real-time analytics",
        "Built internal tools that automated manual reporting processes, saving 10+ hours per week",
        "Participated in agile development practices including sprint planning, daily standups, and retrospectives",
      ],
      technologies: ["JavaScript", "Python", "D3.js", "SQL", "Git"],
    },
  ],

  education: [
    {
      institution: "University of Colorado",
      degree: "B.S. in Computer Science",
      location: "Boulder, CO",
      graduationDate: "May 2016",
      details: [
        "Dean's List, 3.7 GPA",
        "Senior capstone: Real-time collaborative code editor",
      ],
    },
  ],

  skills: {
    Languages: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
    "Frameworks & Libraries": [
      "React",
      "Node.js",
      "Express",
      "Next.js",
      "TanStack Router",
    ],
    "Databases & Storage": ["PostgreSQL", "MongoDB", "Redis", "S3"],
    "Tools & Platforms": [
      "Git",
      "Docker",
      "AWS",
      "GitHub Actions",
      "Vite",
      "Webpack",
    ],
    Practices: [
      "Agile/Scrum",
      "CI/CD",
      "Code Review",
      "TDD",
      "Accessibility",
    ],
  },
};

export default resume;
