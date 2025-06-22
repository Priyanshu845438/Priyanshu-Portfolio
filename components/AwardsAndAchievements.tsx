
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { Award } from '../types';
import { SparklesIcon, TrophyIcon } from './Icons';
import { AnimateOnScroll } from './AnimateOnScroll';

interface AwardsAndAchievementsProps {
  awards: Award[];
  achievements: string[];
}

export const AwardsAndAchievements: React.FC<AwardsAndAchievementsProps> = ({ awards, achievements }) => {
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
      <Section id="awards" title="Recognition">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimateOnScroll>
            <div>
              <h3 className="text-2xl font-semibold text-sky-400 mb-6 flex items-center justify-center md:justify-start">
                <TrophyIcon className="w-7 h-7 mr-3" /> Awards & Scholarships
              </h3>
              <ul className="space-y-4">
                {awards.map((award: Award, index: number) => (
                  <AnimateOnScroll key={`award-${index}`} delayClass={getDelayClass(index)}>
                    <li className="flex items-start p-4 bg-slate-800/50 rounded-lg shadow-md">
                      <SparklesIcon className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">{award.description}</span>
                    </li>
                  </AnimateOnScroll>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delayClass="delay-100">
            <div>
              <h3 className="text-2xl font-semibold text-sky-400 mb-6 flex items-center justify-center md:justify-start">
                <SparklesIcon className="w-7 h-7 mr-3" /> Key Achievements
              </h3>
              <ul className="space-y-4">
                {achievements.map((achievement: string, index: number) => (
                  <AnimateOnScroll key={`achievement-${index}`} delayClass={getDelayClass(index)}>
                    <li className="flex items-start p-4 bg-slate-800/50 rounded-lg shadow-md">
                      <SparklesIcon className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">{achievement}</span>
                    </li>
                  </AnimateOnScroll>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </Section>
    </div>
  );
};