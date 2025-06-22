
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { HeartIcon } from './Icons'; 
import { AnimateOnScroll } from './AnimateOnScroll';

interface PersonalInterestsProps {
  interests: string[];
}

export const PersonalInterests: React.FC<PersonalInterestsProps> = ({ interests }) => {
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
    const delays = ['delay-0', 'delay-75', 'delay-100', 'delay-150', 'delay-200', 'delay-300', 'delay-400', 'delay-500'];
    return delays[index % delays.length]; // Use modulo to cycle through delays if more items than defined delays
  };

  return (
    <div ref={sectionRef} className={`transition-all duration-1000 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Section id="interests" title="Personal Interests & Hobbies">
        <div className="p-4 sm:p-6 bg-slate-800/50 backdrop-blur-md rounded-xl shadow-2xl">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {interests.map((interest, index) => (
              <AnimateOnScroll 
                key={index} 
                delayClass={getDelayClass(index)}
                className="w-full sm:w-auto max-w-xs" // Ensure cards don't get too wide on small screens
              >
                <div 
                  className="flex items-center w-full px-5 py-3 rounded-lg shadow-lg cursor-default
                             bg-gradient-to-br from-slate-800 to-slate-700/70 backdrop-blur-sm 
                             border border-slate-600/80 
                             hover:bg-gradient-to-br hover:from-sky-700 hover:to-sky-600 
                             hover:text-white hover:border-sky-500 
                             hover:shadow-xl hover:shadow-sky-500/30
                             transform hover:scale-105 hover:-translate-y-0.5
                             transition-all duration-300 ease-in-out"
                >
                  <HeartIcon className="w-5 h-5 mr-3 text-red-400/90 flex-shrink-0" />
                  <span className="font-medium text-sky-300 group-hover:text-white transition-colors duration-300">
                    {interest}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
