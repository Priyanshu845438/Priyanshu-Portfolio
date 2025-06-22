
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { UserGroupIcon, CheckCircleIcon } from './Icons'; // Added CheckCircleIcon
import { AnimateOnScroll } from './AnimateOnScroll';
import { PositionOfResponsibility } from '../types'; // Updated import

interface PositionsOfResponsibilityProps {
  positions: PositionOfResponsibility[];
}

export const PositionsOfResponsibility: React.FC<PositionsOfResponsibilityProps> = ({ positions }) => {
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
    const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300'];
    return delays[Math.min(index, delays.length - 1)];
  };

  if (!positions || positions.length === 0) {
    return null; // Or some fallback UI if needed
  }

  return (
    <div ref={sectionRef} className={`transition-all duration-1000 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Section id="responsibilities" title="Key Roles & Responsibilities">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {positions.map((pos: PositionOfResponsibility, index: number) => (
            <AnimateOnScroll key={index} delayClass={getDelayClass(index)} className="h-full">
              <div className="bg-slate-800/70 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-8 
                              hover:shadow-sky-500/40 transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <UserGroupIcon className="w-8 h-8 text-sky-400 mr-4 flex-shrink-0" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-sky-300">{pos.title}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-5 text-justify flex-grow">{pos.description}</p>
                
                {pos.appliedSkills && pos.appliedSkills.length > 0 && (
                  <div className="mt-auto">
                    <h4 className="text-md font-semibold text-sky-400 mb-3 pt-3 border-t border-slate-700/50">
                      Key Contributions & Skills Applied:
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {pos.appliedSkills.map((skill: string) => (
                        <span 
                          key={skill} 
                          className="flex items-center text-xs sm:text-sm bg-slate-700/80 text-sky-300 px-3 py-1.5 rounded-md shadow-sm 
                                     hover:bg-sky-600 hover:text-white transition-all duration-200 cursor-default"
                        >
                          <CheckCircleIcon className="w-3.5 h-3.5 mr-1.5 text-green-400"/>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>
    </div>
  );
};