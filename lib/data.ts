import { Project, Skill, Experience, ProjectCategory, SkillCategory, SkillLevel } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    title: "AWS Resource Usage Data Validation Tool",
    description:
      "A Python (Boto3) automation tool to extract, validate, and report AWS resource usage data, mirroring core ETL extract-and-validate workflows.",
    longDescription:
      "Developed a Python (Boto3) automation tool to extract, validate, and report AWS resource usage data, mirroring core ETL extract-and-validate workflows. Integrated CloudWatch metrics for automated data accuracy checks, generating usage reports through structured data reconciliation and source-to-target comparison.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    techStack: ["Python", "AWS", "CloudWatch", "Boto3"],
    featured: true,
    category: ProjectCategory.TOOL,
    completedAt: new Date("2025-03-01"),
  },
  {
    id: "2",
    title: "SQL Data Validation & API Test Suite",
    description:
      "A Python-based test suite to validate source-to-target data accuracy across MySQL and MongoDB, with automated REST API response validation.",
    longDescription:
      "Built a Python-based test suite to validate source-to-target data accuracy across MySQL and MongoDB, comparing record counts, field values, and data types after transformation. Automated REST API response validation (status codes, schema, payload accuracy) and logged defects with root-cause notes to speed up debugging and regression cycles.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    techStack: ["Python", "SQL", "REST APIs", "MySQL", "MongoDB"],
    featured: true,
    category: ProjectCategory.TOOL,
    completedAt: new Date("2025-02-01"),
  },
  {
    id: "3",
    title: "RAG Data Retrieval Validation Framework",
    description:
      "A validation framework for Retrieval-Augmented Generation pipelines, testing retrieved data accuracy and consistency against source documents.",
    longDescription:
      "Designed and executed test scenarios for a Retrieval-Augmented Generation pipeline, validating retrieved data accuracy and consistency against source documents. Built regression checks to catch data drift and mismatches between source content and retrieved outputs across pipeline updates.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    techStack: ["Python", "LLMs", "Retrieval-Augmented Generation"],
    featured: true,
    category: ProjectCategory.TOOL,
    completedAt: new Date("2025-01-01"),
  },
  {
    id: "4",
    title: "CRUD Data Integrity Test Suite",
    description:
      "A full-stack test suite validating REST API and MongoDB data integrity across CRUD operations with functional and regression testing.",
    longDescription:
      "Tested a full-stack platform's REST API and MongoDB integration, designing test cases to validate data integrity across CRUD operations. Performed functional and regression testing to ensure accurate data persistence and consistency between application layers.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    techStack: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    featured: true,
    category: ProjectCategory.TOOL,
    completedAt: new Date("2024-12-15"),
  },
  {
    id: "5",
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
    id: "6",
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
    id: "7",
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
