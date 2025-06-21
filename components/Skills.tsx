
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { Skill } from '../types';
import { AnimateOnScroll } from './AnimateOnScroll';

interface SkillsProps {
  skills: Skill[];
}

const SkillBadge: React.FC<{ name: string; category?: string }> = ({ name, category }) => (
  <div className="bg-slate-700/50 backdrop-blur-sm text-sky-300 px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-slate-600/70 transition-all duration-300 transform hover:scale-105 cursor-default">
    {name}
    {/* category prop for SkillBadge is not used in current constants.ts data structure, but kept for flexibility */}
  </div>
);

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
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

  const categorizedSkills: { [key: string]: Skill[] } = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as { [key: string]: Skill[] });

  return (
    <div ref={sectionRef} className={`transition-all duration-1000 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Section id="skills" title="Key Expertise">
        {Object.entries(categorizedSkills).map(([category, skillList], categoryIndex) => (
          <AnimateOnScroll key={category} delayClass={categoryIndex > 0 ? `delay-${Math.min(categoryIndex * 100, 500)}` : ''}>
            <div className="mb-8 last:mb-0">
              <h3 className="text-xl font-semibold text-sky-400 mb-4 text-center sm:text-left">{category}</h3>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
                {skillList.map((skill, skillIndex) => (
                   <AnimateOnScroll key={skill.name} delayClass={`delay-${Math.min(skillIndex * 50 + categoryIndex * 100, 700)}`}>
                    <SkillBadge name={skill.name} />
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </Section>
    </div>
  );
};