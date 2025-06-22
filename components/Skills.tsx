import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { Skill } from '../types';
import { AnimateOnScroll } from './AnimateOnScroll';

interface SkillsProps {
  skills: Skill[];
}

// Updated SkillItem styling for a more "advanced" card-like appearance
const SkillItem: React.FC<{ name: string; category?: string }> = ({ name }) => (
  <div 
    className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-lg 
               px-5 py-3 text-slate-200 font-medium shadow-lg 
               hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/30 hover:border-sky-500
               transition-all duration-300 ease-in-out cursor-default"
  >
    {name}
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
      { threshold: 0.05 } // Lowered threshold for earlier trigger
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
    const category = skill.category || 'Other Core Skills'; // Default category name
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
          <AnimateOnScroll 
            key={category} 
            // Stagger category animation slightly
            delayClass={categoryIndex > 0 ? `delay-${Math.min(categoryIndex * 150, 500)}` : ''} 
            className="mb-10 sm:mb-12 last:mb-0" // Increased spacing between categories
          >
            {/* Enhanced category header styling */}
            <h3 className="text-xl sm:text-2xl font-semibold text-sky-300 mb-6 border-l-4 border-sky-500 pl-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-4"> {/* Increased gap for skill items */}
              {skillList.map((skill: Skill, skillIndex: number) => (
                 <AnimateOnScroll 
                    key={skill.name} 
                    // Stagger skill item animation within each category
                    delayClass={`delay-${Math.min(skillIndex * 75, 400)}`} 
                  >
                  <SkillItem name={skill.name} />
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        ))}
      </Section>
    </div>
  );
};