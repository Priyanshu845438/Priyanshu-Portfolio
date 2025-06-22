
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { EducationEntry } from '../types';
import { AcademicCapIcon } from './Icons';
import { AnimateOnScroll } from './AnimateOnScroll';

interface EducationProps {
  education: EducationEntry[];
}

const EducationItem: React.FC<{ item: EducationEntry }> = ({ item }) => (
 <div className="relative pl-10 sm:pl-12 pb-8 group">
    <div className="absolute left-3 sm:left-4 top-0 h-full w-0.5 bg-slate-700 group-last:h-[calc(100%-2rem)]"></div>
    <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-0.5 sm:-translate-x-1/2 sm:-translate-y-0">
      <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-800 border-2 border-sky-500 text-sky-500 shadow-lg">
        <AcademicCapIcon className="w-4 h-4 sm:w-5 sm:h-5" />
      </span>
    </div>
    <div className="ml-4 p-6 bg-slate-800/70 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold text-sky-400">{item.degree}</h3>
      <p className="text-md sm:text-lg text-slate-300 mb-1">{item.institution}</p>
      <p className="text-sm text-slate-500 mb-2">{item.period}</p>
      {item.details && <p className="text-slate-400 text-sm">{item.details}</p>}
    </div>
  </div>
);

export const Education: React.FC<EducationProps> = ({ education }) => {
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
    const delays = ['', 'delay-100', 'delay-200', 'delay-300'];
    return delays[Math.min(index, delays.length - 1)];
  };

  return (
    <div ref={sectionRef} className={`transition-all duration-1000 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Section id="education" title="Education">
        <div className="relative">
          {education.map((edu: EducationEntry, index: number) => (
            <AnimateOnScroll key={index} delayClass={getDelayClass(index)}>
              <EducationItem item={edu} />
            </AnimateOnScroll>
          ))}
        </div>
      </Section>
    </div>
  );
};