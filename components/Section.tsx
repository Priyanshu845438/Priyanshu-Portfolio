
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string; // For additional section-level styling if needed
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}> {/* Removed animate-fadeInUp */}
      <div> 
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">
            {title}
          </span>
        </h2>
        {children}
      </div>
    </section>
  );
};