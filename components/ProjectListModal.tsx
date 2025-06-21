
import React from 'react';
import { Project, ProjectListModalProps } from '../types';
import { XIcon } from './Icons';

const ModalProjectCard: React.FC<{ project: Project; onSelect: () => void }> = ({ project, onSelect }) => (
  <div
    className="bg-slate-700/50 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-sky-500/20 
               transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer overflow-hidden"
    onClick={onSelect}
    onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect()}
    tabIndex={0}
    role="button"
    aria-label={`View details for ${project.name}`}
  >
    <img 
      src={project.imageUrl} 
      alt={project.name} 
      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="p-3">
      <h3 className="text-sm font-semibold text-sky-300 truncate group-hover:text-sky-200" title={project.name}>
        {project.name}
      </h3>
    </div>
  </div>
);

export const ProjectListModal: React.FC<ProjectListModalProps> = ({ isOpen, onClose, projects, onProjectSelect }) => {
  if (!isOpen) return null;

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents clicks inside the modal from closing it
  };

  return (
    <div
      className="fixed inset-0 z-[70] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out"
      onClick={onClose} // Close modal if overlay is clicked
      aria-modal="true"
      role="dialog"
      aria-labelledby="project-list-modal-title"
    >
      <div
        className="bg-slate-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={handleModalContentClick}
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-700">
          <h2 id="project-list-modal-title" className="text-xl sm:text-2xl font-semibold text-sky-400">
            All Projects ({projects.length})
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-sky-300 transition-colors p-1 rounded-full hover:bg-slate-700"
            aria-label="Close project list"
          >
            <XIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto">
          {projects.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {projects.map(project => (
                <ModalProjectCard 
                  key={project.id} 
                  project={project} 
                  onSelect={() => {
                    onProjectSelect(project);
                    // No need to onClose here as Projects.tsx's onProjectSelectFromModal handles it
                  }} 
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-400 py-8">No projects to display.</p>
          )}
        </div>
        
        <div className="p-4 sm:p-6 border-t border-slate-700 text-right">
            <button
                onClick={onClose}
                className="px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
            >
                Close
            </button>
        </div>
      </div>
    </div>
  );
};
