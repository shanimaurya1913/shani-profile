import { AboutSection } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { EducationSection } from "@/components/education";
import { ExperienceSection } from "@/components/experience";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
import { ProjectsSection } from "@/components/projects";
import { SkillsSection } from "@/components/skills";
import { profileData } from "@/constants/profile";
import React from "react";

// Main App Component
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-inter">
      <Header name={profileData.name} />
      <HeroSection
        name={profileData.name}
        title={profileData.title}
        tagline={profileData.tagline}
        resumeUrl={profileData.resumeUrl}
      />
      <AboutSection about={profileData.about} />
      <SkillsSection skills={profileData.skills} />
      <ExperienceSection experience={profileData.experience} />
      <EducationSection education={profileData.education} />
      <ProjectsSection projects={profileData.projects} />
      <ContactSection
        linkedinUrl={profileData.linkedinUrl}
        githubUrl={profileData.githubUrl}
        email={profileData.email}
        name={profileData.name}
      />
    </div>
  );
};

export default App;
