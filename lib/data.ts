import { Project, Skill, Experience, ProjectCategory, SkillCategory, SkillLevel } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Student Attendance Management System",
    description:
      "A web-based student attendance system that automates the process of recording and managing student attendance, replacing time-consuming manual methods with a user-friendly digital solution.",
    longDescription:
      "Say goodbye to paper sheets! This web-based student attendance system, built with PHP, MySQL, HTML, CSS, JavaScript, and Bootstrap, automates the process of recording and managing student attendance. It replaces time-consuming manual methods with a user-friendly digital solution, boosting efficiency for both teachers and administrators.",
    image: "/images/projects/attendance.jpg",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/ganesh-halladamal/Student-Attendance-Management-System",
    featured: true,
    category: ProjectCategory.WEB_APP,
    completedAt: new Date("2023-06-01"),
  },
  {
    id: "2",
    title: "Responsive Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing front-end development skills with optimal viewing experiences across various devices.",
    longDescription:
      "This portfolio website is a testament to my skills in front-end development. It showcases responsive design, ensuring optimal viewing experiences across various devices, from mobile phones to desktops. The website is built using HTML, CSS, JavaScript, and Bootstrap, highlighting my ability to create visually appealing and functional web applications.",
    image: "/images/projects/portfolio-website.jpg",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/ganesh-halladamal/portfolio",
    featured: true,
    category: ProjectCategory.WEB_APP,
    completedAt: new Date("2023-08-01"),
  },
];

export const skills: Skill[] = [
  { name: "HTML", category: SkillCategory.FRONTEND, proficiency: SkillLevel.EXPERT },
  { name: "CSS", category: SkillCategory.FRONTEND, proficiency: SkillLevel.EXPERT },
  { name: "JavaScript", category: SkillCategory.FRONTEND, proficiency: SkillLevel.ADVANCED },
  { name: "React", category: SkillCategory.FRONTEND, proficiency: SkillLevel.ADVANCED },
  { name: "Next.js", category: SkillCategory.FRONTEND, proficiency: SkillLevel.ADVANCED },
  { name: "Tailwind CSS", category: SkillCategory.FRONTEND, proficiency: SkillLevel.ADVANCED },
  { name: "Node.js", category: SkillCategory.BACKEND, proficiency: SkillLevel.ADVANCED },
  { name: "Java", category: SkillCategory.BACKEND, proficiency: SkillLevel.INTERMEDIATE },
  { name: "MongoDB", category: SkillCategory.DATABASE, proficiency: SkillLevel.ADVANCED },
  { name: "SQL", category: SkillCategory.DATABASE, proficiency: SkillLevel.ADVANCED },
  { name: "Git", category: SkillCategory.TOOLS, proficiency: SkillLevel.ADVANCED },
  { name: "Bootstrap", category: SkillCategory.FRONTEND, proficiency: SkillLevel.EXPERT },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Freelance",
    position: "Full Stack Developer",
    startDate: new Date("2023-01-01"),
    description:
      "Working on various web development projects, building responsive and dynamic web applications using modern technologies.",
    achievements: [
      "Developed multiple full-stack web applications",
      "Implemented responsive designs for optimal user experience",
      "Integrated RESTful APIs and database solutions",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "KLEs SSMS BCA College Athani",
    year: "2023",
  },
  {
    degree: "Pre University Education (10+2)",
    institution: "KLEs SSMS PU College Athani",
    year: "2019",
  },
  {
    degree: "SSLC (10)",
    institution: "J A High School Athani",
    year: "2017",
  },
];
