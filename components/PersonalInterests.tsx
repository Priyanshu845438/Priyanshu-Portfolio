
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
  
  return (
    <div ref={sectionRef} className={`transition-all duration-1000 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Section id="interests" title="Personal Interests & Hobbies">
        <AnimateOnScroll>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg">
            {interests.map((interest, index) => (
              <AnimateOnScroll key={index} delayClass={`delay-${Math.min(index * 50, 500)}`}>
                <div className="flex items-center bg-slate-700/70 text-sky-300 px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-slate-600/80 transition-all duration-300 cursor-default">
                  <HeartIcon className="w-4 h-4 mr-2 text-red-400" />
                  {interest}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </Section>
    </div>
  );
};