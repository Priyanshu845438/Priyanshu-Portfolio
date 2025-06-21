
import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { ArrowLeftIcon, GithubIcon, LinkIcon, CodeBracketIcon } from './Icons';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
  isVisible: boolean;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose, isVisible }) => {
  const [activeImage, setActiveImage] = useState(project.imageUrl);

  useEffect(() => {
    // Reset active image if project changes (though usually component unmounts/remounts)
    setActiveImage(project.imageUrl);
  }, [project]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const allImages = [project.imageUrl, ...(project.images || [])];

  return (
    <div 
      className={`fixed inset-0 z-[60] bg-slate-900 bg-opacity-95 backdrop-blur-lg p-4 sm:p-6 lg:p-8 overflow-y-auto transition-all duration-300 ease-in-out
                  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      aria-modal="true"
      role="dialog"
      aria-labelledby="project-title"
    >
      {/* Removed container mx-auto max-w-4xl from this div. It will now use the padding from the parent fixed div. */}
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 sm:top-2 sm:right-2 text-slate-400 hover:text-sky-400 transition-colors z-50
                     bg-slate-800/50 hover:bg-slate-700/70 rounded-full p-2"
          aria-label="Close project details"
        >
          <ArrowLeftIcon className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        <div className="bg-slate-800 rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 mt-10 sm:mt-12">
          <h2 id="project-title" className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">
              {project.name}
            </span>
          </h2>

          <div className="mb-6 sm:mb-8 rounded-lg overflow-hidden shadow-lg">
            <img src={activeImage} alt={`${project.name} - Main View`} className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain bg-slate-700" />
          </div>

          {allImages.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
              {allImages.map((img, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border-2 transition-all
                              ${activeImage === img ? 'border-sky-500 scale-110' : 'border-slate-600 hover:border-sky-400'}`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img src={img} alt={`${project.name} - Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
          
          <div className="prose prose-sm sm:prose-base prose-invert max-w-none text-slate-300 leading-relaxed mb-6 sm:mb-8 text-justify" dangerouslySetInnerHTML={{ __html: project.detailedDescription.replace(/\n/g, '<br />') }}>
          </div>


          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl font-semibold text-sky-400 mb-3 flex items-center">
                <CodeBracketIcon className="w-6 h-6 mr-2"/> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="bg-slate-700 text-sky-300 px-3 py-1.5 rounded-md text-sm shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-2.5 bg-slate-700 hover:bg-sky-600 text-slate-200 font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <GithubIcon className="w-5 h-5 mr-2" /> View on GitHub
              </a>
            )}
            {project.liveDemoUrl && project.liveDemoUrl !== "#" && (
              <a 
                href={project.liveDemoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <LinkIcon className="w-5 h-5 mr-2" /> Live Demo
              </a>
            )}
          </div>
           <button
            onClick={onClose}
            className="mt-8 w-full sm:w-auto flex items-center justify-center px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            aria-label="Go back to portfolio"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" /> Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};
