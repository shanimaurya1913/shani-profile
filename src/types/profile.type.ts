// Define TypeScript interfaces for the data structure
export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  link?: string; // Optional link
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  skills: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  resumeUrl: string;
  linkedinUrl?: string; // Optional LinkedIn URL
  githubUrl?: string; // Optional GitHub URL
  email?: string; // Optional email
}
