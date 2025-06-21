
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
  <div className="relative pl-10 sm:pl-12 pb-8 group">
    {/* Vertical line */}
    <div className="absolute left-3 sm:left-4 top-0 h-full w-0.5 bg-slate-700 group-last:h-[calc(100%-2rem)]"></div>
    {/* Icon */}
    <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-0.5 sm:-translate-x-1/2 sm:-translate-y-0">
      <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-800 border-2 border-sky-500 text-sky-500 shadow-lg">
        {icon}
      </span>
    </div>
    <div className="ml-4 p-6 bg-slate-800/70 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold text-sky-400">{item.role}</h3>
      <p className="text-md sm:text-lg text-slate-300 mb-1">{item.company} <span className="text-xs px-2 py-0.5 bg-sky-700 text-sky-200 rounded-full ml-2">{item.type}</span></p>
      <p className="text-sm text-slate-500 mb-3">{item.period}</p>
      <p className="text-slate-400 mb-3 leading-relaxed">{item.description}</p>
      {item.skills && item.skills.length > 0 && (
        <div className="mt-3">
          <h4 className="text-sm font-semibold text-slate-300 mb-1">Key Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {item.skills.map(skill => (
              <span key={skill} className="text-xs bg-slate-700 text-sky-300 px-2 py-1 rounded-md">{skill}</span>
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
    const delays = ['', 'delay-100', 'delay-200', 'delay-300', 'delay-500'];
    return delays[Math.min(index, delays.length - 1)];
  };

  return (
    <div ref={sectionRef} className={`transition-all duration-1000 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Section id="experience" title="Work Journey">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-center text-sky-300 mb-8">Professional Experience</h3>
            <div className="relative">
              {professionalExperience.map((exp, index) => (
                <AnimateOnScroll key={`prof-${index}`} delayClass={getDelayClass(index)}>
                  <TimelineItem item={exp} icon={<BriefcaseIcon className="w-4 h-4 sm:w-5 sm:h-5"/>} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-center text-sky-300 mb-8 mt-12">Internships</h3>
            <div className="relative">
              {internships.map((intern, index) => (
                 <AnimateOnScroll key={`intern-${index}`} delayClass={getDelayClass(index)}>
                    <TimelineItem item={intern} icon={<AcademicCapIcon className="w-4 h-4 sm:w-5 sm:h-5"/>} />
                 </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};