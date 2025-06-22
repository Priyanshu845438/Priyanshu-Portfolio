
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { ExperienceEntry } from '../types';
import { BriefcaseIcon, AcademicCapIcon } from './Icons'; 
import { AnimateOnScroll } from './AnimateOnScroll';

interface ExperienceProps {
  professionalExperience: ExperienceEntry[];
  internships: ExperienceEntry[];
}

const TimelineItem: React.FC<{ item: ExperienceEntry; icon: React.ReactNode }> = ({ item, icon }) => (
  <div className="relative pl-12 sm:pl-14 pb-10 sm:pb-12 group">
    {/* Vertical line: thicker and more prominent */}
    <div className="absolute left-4 sm:left-5 top-0 h-full w-1 bg-slate-700/70 group-last:h-[calc(100%-2.5rem)] rounded-full"></div>
    {/* Icon: larger, styled circle, interactive border */}
    <div className="absolute left-0 top-1 transform translate-x-0">
      <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 border-2 border-sky-500 group-hover:border-sky-300 text-sky-400 group-hover:text-sky-300 shadow-lg transition-colors duration-300">
        {icon}
      </span>
    </div>
    {/* Card: enhanced styling with backdrop-blur, shadow, and hover effects */}
    <div className="ml-5 sm:ml-6 p-6 sm:p-8 bg-slate-800/70 backdrop-blur-md rounded-xl shadow-2xl 
                   group-hover:shadow-sky-500/40 transition-all duration-300 ease-in-out transform group-hover:-translate-y-1.5">
      <h3 className="text-xl sm:text-2xl font-semibold text-sky-300 mb-1">{item.role}</h3>
      <div className="flex flex-wrap items-center mb-2">
        <p className="text-md sm:text-lg text-slate-200 mr-3">{item.company}</p>
        <span className="text-xs px-2.5 py-1 bg-sky-600/80 text-sky-100 rounded-full font-medium tracking-wide">{item.type}</span>
      </div>
      <p className="text-sm text-slate-500 mb-4">{item.period}</p>
      <p className="text-slate-300 mb-5 leading-relaxed text-justify">{item.description}</p>
      
      {item.skills && item.skills.length > 0 && (
        <div>
          <h4 className="text-md font-semibold text-sky-400 mb-3">Core Responsibilities & Skills:</h4>
          <div className="flex flex-wrap gap-2.5">
            {item.skills.map((skill: string) => (
              <span 
                key={skill} 
                className="text-xs sm:text-sm bg-slate-700/80 text-sky-300 px-3 py-1.5 rounded-md shadow-sm 
                           hover:bg-sky-600 hover:text-white transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

export const Experience: React.FC<ExperienceProps> = ({ professionalExperience, internships }) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 } // Trigger animation slightly earlier
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
    // Staggered delays for a smoother cascade effect
    const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500'];
    return delays[Math.min(index, delays.length - 1)];
  };

  return (
    <div ref={sectionRef} className={`transition-all duration-1000 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Section id="experience" title="Work Journey">
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-sky-400 mb-10 sm:mb-12 border-b-2 border-sky-500/50 w-fit mx-auto pb-3 px-4">
              Professional Experience
            </h3>
            <div className="relative">
              {professionalExperience.map((exp: ExperienceEntry, index: number) => (
                <AnimateOnScroll key={`prof-${index}`} delayClass={getDelayClass(index)}>
                  <TimelineItem item={exp} icon={<BriefcaseIcon className="w-5 h-5 sm:w-6 sm:h-6"/>} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
          
          <div className="mt-16"> {/* Increased top margin for better separation */}
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-sky-400 mb-10 sm:mb-12 border-b-2 border-sky-500/50 w-fit mx-auto pb-3 px-4">
              Internships
            </h3>
            <div className="relative">
              {internships.map((intern: ExperienceEntry, index: number) => (
                 <AnimateOnScroll key={`intern-${index}`} delayClass={getDelayClass(index)}>
                    <TimelineItem item={intern} icon={<AcademicCapIcon className="w-5 h-5 sm:w-6 sm:h-6"/>} />
                 </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};