import { Project, Skill, Experience, ProjectCategory, SkillCategory, SkillLevel } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    title: "DevTinder",
    description:
      "A Tinder-like experience for developers, helping them connect based on their skills, projects, and interests.",
    longDescription:
      "DevTinder is a project built to provide a Tinder-like experience for developers, helping them connect based on their skills, projects, and interests. This web application is built using Express.js, React, and Node.js.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/ganesh-halladamal/DevTinder",
    featured: true,
    category: ProjectCategory.WEB_APP,
    completedAt: new Date("2024-12-01"),
  },
  {
    id: "2",
    title: "AI-Powered Travel Advisor",
    description:
      "A comprehensive travel planning platform that helps users discover destinations, explore accommodations, and generate personalized itineraries using AI.",
    longDescription:
      "A comprehensive travel planning platform that helps users discover destinations, explore accommodations, and generate personalized itineraries using AI. Built with Next.js and powered by Qwen LLM for intelligent travel recommendations.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    techStack: ["Next.js", "Qwen LLM", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/ganesh-halladamal/AI-Powered-Travel-Advisor",
    liveUrl: "https://ai-powered-travel-advisor.vercel.app",
    featured: true,
    category: ProjectCategory.WEB_APP,
    completedAt: new Date("2024-11-01"),
  },
  {
    id: "3",
    title: "Smart Attendance Management Using Face Recognition",
    description:
      "An intelligent and efficient web-based application to automate attendance tracking using facial recognition.",
    longDescription:
      "An intelligent and efficient web-based application to automate attendance tracking using facial recognition, built with Python, Flask, OpenCV, and the face_recognition library. This system eliminates manual attendance processes and provides accurate, automated tracking.",
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80",
    techStack: ["Python", "Flask", "OpenCV", "Face Recognition"],
    githubUrl: "https://github.com/ganesh-halladamal/Smart-Attendance-Management-Using-Face-Recognition",
    featured: true,
    category: ProjectCategory.WEB_APP,
    completedAt: new Date("2024-03-01"),
  },
  {
    id: "4",
    title: "Paritranaya IAS Academy",
    description:
      "A comprehensive website for an IAS coaching academy, providing information about courses, faculty, and student resources.",
    longDescription:
      "A modern, responsive website for Paritranaya IAS Academy built with React and Supabase. The platform provides comprehensive information about courses, faculty, admission processes, and student resources for aspiring civil servants.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    techStack: ["React", "Supabase", "JavaScript", "CSS"],
    liveUrl: "https://paritranayaiasacademy.in/",
    featured: true,
    category: ProjectCategory.WEB_APP,
    completedAt: new Date("2024-09-01"),
  },
  {
    id: "5",
    title: "Karnataka Pharmacists Welfare & Development Trust",
    description:
      "Official website for Karnataka Pharmacists Welfare & Development Trust, providing information about trust activities and member services.",
    longDescription:
      "A professional website for Karnataka Pharmacists Welfare & Development Trust built with Next.js and Firebase. The platform serves as a central hub for trust information, member services, events, and welfare programs for pharmacists across Karnataka.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    techStack: ["Next.js", "Firebase", "React", "Tailwind CSS"],
    liveUrl: "https://karnatakapharmacisttrust.com/",
    featured: true,
    category: ProjectCategory.WEB_APP,
    completedAt: new Date("2024-10-01"),
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
