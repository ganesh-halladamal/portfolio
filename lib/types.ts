export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  completedAt: Date;
}

export enum ProjectCategory {
  WEB_APP = "web-app",
  MOBILE_APP = "mobile-app",
  API = "api",
  TOOL = "tool",
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: SkillLevel;
  icon?: string;
}

export enum SkillCategory {
  FRONTEND = "frontend",
  BACKEND = "backend",
  DATABASE = "database",
  TOOLS = "tools",
  DESIGN = "design",
}

export enum SkillLevel {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced",
  EXPERT = "expert",
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
