
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { UserGroupIcon } from './Icons';
import { AnimateOnScroll } from './AnimateOnScroll';

interface Position {
  title: string;
  description: string;
}

interface PositionsOfResponsibilityProps {
  positions: Position[];
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
      <Section id="responsibilities" title="Positions of Responsibility">
        <div className="space-y-6">
          {positions.map((pos, index) => (
            <AnimateOnScroll key={index} delayClass={getDelayClass(index)}>
              <div className="p-6 bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-sky-500/20 transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-sky-400 mb-2 flex items-center">
                  <UserGroupIcon className="w-6 h-6 mr-3 text-sky-500" /> 
                  {pos.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">{pos.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>
    </div>
  );
};