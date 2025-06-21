
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { LeetCodeStatsProps } from '../types';
import { AnimateOnScroll } from './AnimateOnScroll';

export const LeetCodeStats: React.FC<LeetCodeStatsProps> = ({ leetCodeStatsUrl, githubSnakeGameUrl }) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [leetCodeImageError, setLeetCodeImageError] = useState(false);
  const [snakeGameImageError, setSnakeGameImageError] = useState(false);

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

  const leetcodeUser = leetCodeStatsUrl.includes('?') 
    ? leetCodeStatsUrl.substring(leetCodeStatsUrl.lastIndexOf('/') + 1, leetCodeStatsUrl.indexOf('?')) 
    : leetCodeStatsUrl.substring(leetCodeStatsUrl.lastIndexOf('/') + 1);

  return (
    <div ref={sectionRef} className={`transition-all duration-1000 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Section id="activity-stats" title="📊 Coding Activity & Stats">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 md:items-stretch">
          <AnimateOnScroll className="w-full">
            {/* Left Column: LeetCode Stats Card */}
            <div className="w-full h-full bg-slate-800/70 backdrop-blur-md rounded-xl shadow-2xl p-6 transition-all duration-300 ease-in-out hover:shadow-sky-500/30 hover:-translate-y-1.5 flex flex-col items-center text-center">
              <h3 className="text-xl lg:text-2xl font-semibold text-sky-300 mb-5 flex-shrink-0">LeetCode Profile</h3>
              <a 
                href={`https://leetcode.com/${leetcodeUser}/`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full group mb-3 flex-grow flex justify-center items-center"
                aria-label={`View ${leetcodeUser}'s LeetCode profile`}
              >
                {!leetCodeImageError ? (
                  <img 
                    src={leetCodeStatsUrl} 
                    alt={`${leetcodeUser}'s LeetCode Stats`}
                    className="rounded-lg shadow-xl border-2 border-slate-700 group-hover:border-sky-400 transition-all duration-300 w-full max-h-[280px] sm:max-h-[320px] md:max-h-full object-contain"
                    onError={() => setLeetCodeImageError(true)}
                  />
                ) : (
                  <div className="text-slate-400 text-center p-4 bg-slate-700 rounded-lg h-40 sm:h-48 flex items-center justify-center flex-grow">
                    <p>LeetCode stats image failed to load. Click to visit profile.</p>
                  </div>
                )}
              </a>
              <p className="text-sm text-slate-400 mt-auto flex-shrink-0">
                Click card to view LeetCode profile.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="w-full" delayClass="delay-100">
            {/* Right Column: GitHub Snake Game Card */}
            <div className="w-full h-full bg-slate-800/70 backdrop-blur-md rounded-xl shadow-2xl p-6 transition-all duration-300 ease-in-out hover:shadow-sky-500/30 hover:-translate-y-1.5 flex flex-col items-center text-center">
              <h3 className="text-xl lg:text-2xl font-semibold text-sky-300 mb-5 flex-shrink-0">GitHub Activity Snake</h3>
              <div className="w-full bg-slate-700/50 p-2 rounded-lg shadow-inner mb-3 flex-grow flex justify-center items-center">
                {!snakeGameImageError ? (
                  <img 
                    src={githubSnakeGameUrl} 
                    alt="GitHub Contribution Snake Animation" 
                    className="max-w-full h-auto rounded-md mx-auto max-h-[280px] sm:max-h-[320px] md:max-h-full object-contain"
                    onError={() => setSnakeGameImageError(true)}
                  />
                ) : (
                  <div className="text-slate-400 text-center p-4 bg-slate-600 rounded-lg h-40 sm:h-48 flex items-center justify-center flex-grow">
                    <p>GitHub snake animation failed to load.</p>
                  </div>
                )}
              </div>
              <p className="text-sm text-slate-400 mt-auto flex-shrink-0">
                My GitHub contribution activity visualized. The snake game itself is an external SVG.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </Section>
    </div>
  );
};