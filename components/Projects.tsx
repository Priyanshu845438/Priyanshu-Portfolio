
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { Project, ProjectListModalProps } from '../types'; // Updated import
import { CodeBracketIcon, ViewGridIcon } from './Icons'; // Added ViewGridIcon
import { AnimateOnScroll } from './AnimateOnScroll';
import { ProjectListModal } from './ProjectListModal'; // Import the new modal

interface ProjectsProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const INITIAL_PROJECT_COUNT = 6;

const ProjectCard: React.FC<{ project: Project; onSelect: () => void }> = ({ project, onSelect }) => (
  <div 
    className="bg-slate-800/70 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-sky-500/30 
               transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer overflow-hidden h-full flex flex-col"
    onClick={onSelect}
    onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect()}
    tabIndex={0}
    role="button"
    aria-label={`View details for ${project.name}`}
  >
    <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center mb-2">
          <CodeBracketIcon className="w-5 h-5 text-sky-400 mr-2 flex-shrink-0" />
          <h3 className="text-lg font-semibold text-sky-400 truncate" title={project.name}>{project.name}</h3>
      </div>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">{project.description}</p>
      {project.technologies && project.technologies.length > 0 && (
        <div className="mt-auto">
          <h4 className="text-xs font-semibold text-slate-300 mb-1">Technologies:</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map(tech => ( 
              <span key={tech} className="text-xs bg-slate-700 text-sky-300 px-2 py-0.5 rounded-md">{tech}</span>
            ))}
            {project.technologies.length > 4 && <span className="text-xs bg-slate-700 text-sky-300 px-2 py-0.5 rounded-md">...</span>}
          </div>
        </div>
      )}
    </div>
  </div>
);

export const Projects: React.FC<ProjectsProps> = ({ projects, onProjectSelect }) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const getDelayClass = (index: number) => {
    const delays = ['', 'delay-100', 'delay-200', 'delay-300', 'delay-100', 'delay-200'];
    return delays[index % delays.length];
  };

  const displayedProjects = projects.slice(0, INITIAL_PROJECT_COUNT);
  const showViewMoreButton = projects.length > INITIAL_PROJECT_COUNT;

  const handleProjectSelectFromModal = (project: Project) => {
    onProjectSelect(project);
    setIsModalOpen(false); // Close modal after selection
  };

  return (
    <>
      <div ref={sectionRef} className={`transition-all duration-1000 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Section id="projects" title="Projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <AnimateOnScroll key={project.id} delayClass={getDelayClass(index)}>
                <ProjectCard project={project} onSelect={() => onProjectSelect(project)} />
              </AnimateOnScroll>
            ))}
          </div>
          
          {showViewMoreButton && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:from-sky-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                <ViewGridIcon className="w-5 h-5 mr-2" />
                View More Projects ({projects.length - INITIAL_PROJECT_COUNT} more)
              </button>
            </div>
          )}

          {projects.length === 0 && <p className="text-center text-slate-400 mt-8">More projects coming soon!</p>}
          <p className="text-center text-xs text-slate-500 mt-8">
            Note: Project details are illustrative. For actual project code, please visit my GitHub profile.
          </p>
        </Section>
      </div>

      <ProjectListModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projects={projects}
        onProjectSelect={handleProjectSelectFromModal}
      />
    </>
  );
};
