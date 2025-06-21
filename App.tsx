
import React, { useState, useEffect } from 'react';
import { resumeData, navItems } from './constants';
import { Project as ProjectType, LeetCodeStatsProps as ActivityStatsProps } from './types'; // Renamed LeetCodeStatsProps for clarity

import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { AwardsAndAchievements } from './components/AwardsAndAchievements';
import { PositionsOfResponsibility } from './components/PositionsOfResponsibility';
import { PersonalInterests } from './components/PersonalInterests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticlesBackground } from './components/ParticlesBackground';
import { FloatingNav } from './components/FloatingNav';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { ProjectDetail } from './components/ProjectDetail';
import { LeetCodeStats } from './components/LeetCodeStats'; 
import { GithubStats } from './components/GithubStats';   


const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isProjectDetailVisible, setIsProjectDetailVisible] = useState(false);


  const handleProjectSelect = (project: ProjectType) => {
    setSelectedProject(project);
    setIsProjectDetailVisible(true);
    document.body.style.overflow = 'hidden'; 
    window.scrollTo({ top: 0, behavior: 'auto' }); 
  };

  const handleCloseProjectDetail = () => {
    setIsProjectDetailVisible(false);
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = ''; 
    }, 300); 
  };
  
  const currentNavItems = navItems;


  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-100 antialiased overflow-x-hidden">
      <ParticlesBackground />
      {!selectedProject && <FloatingNav navItems={currentNavItems} />}
      
      <main className={`relative z-10 px-4 sm:px-6 lg:px-8 transition-opacity duration-300 ${selectedProject && !isProjectDetailVisible ? 'opacity-0' : 'opacity-100'}`}>
        {!selectedProject && (
          <>
            <Hero 
              name={resumeData.name} 
              title={resumeData.tagline} 
              contactLinks={{
                linkedin: resumeData.contact.linkedin,
                github: resumeData.contact.github,
                email: `mailto:${resumeData.contact.email}`,
                phone: `tel:${resumeData.contact.phone}`
              }}
            />
            <About />
            <Skills skills={resumeData.keyExpertise} />
            <Experience professionalExperience={resumeData.professionalExperience} internships={resumeData.internships} />
            <Projects projects={resumeData.collegeProjects} onProjectSelect={handleProjectSelect} />
            <Education education={resumeData.education} />
            <AwardsAndAchievements awards={resumeData.awards} achievements={resumeData.achievements} />
            <PositionsOfResponsibility positions={resumeData.positionsOfResponsibility} />
            {/* LeetCodeStats now also shows the snake game */}
            <LeetCodeStats 
              leetCodeStatsUrl={resumeData.leetCodeStatsUrl} 
              githubSnakeGameUrl={resumeData.githubSnakeGameUrl}
            />
            <GithubStats 
              githubUsername={resumeData.githubUsername}
              streakUrl={resumeData.githubStatsStreakUrl}
              profileDetailsUrl={resumeData.githubProfileDetailsCardUrl}
              overallStatsUrl={resumeData.githubStatsOverallUrl}
              topLangsUrl={resumeData.githubTopLangsUrl}
            />
            <PersonalInterests interests={resumeData.personalInterests} />
            {/* Contact component no longer needs personalDetails */}
            <Contact contactInfo={resumeData.contact} />
          </>
        )}
      </main>

      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={handleCloseProjectDetail}
          isVisible={isProjectDetailVisible}
        />
      )}
      
      {/* Footer no longer needs snake game URLs */}
      <Footer name={resumeData.name} />
      {!selectedProject && <ScrollToTopButton />}
    </div>
  );
};

export default App;
