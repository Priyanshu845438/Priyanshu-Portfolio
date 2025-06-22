
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { AnimateOnScroll } from './AnimateOnScroll';

interface GithubStatsProps {
  githubUsername: string;
  streakUrl: string;
  profileDetailsUrl: string;
  overallStatsUrl: string;
  topLangsUrl: string;
}

interface StatItemType {
  src: string;
  alt: string;
  title: string;
}

const StatImage: React.FC<{ src: string; alt: string; href?: string; itemTitle?: string }> = ({ src, alt, href, itemTitle }) => {
  const [hasError, setHasError] = useState(false);

  const cardContent = (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-1 p-4 h-full flex flex-col justify-center items-center">
      {itemTitle && <h4 className="text-sm font-semibold text-sky-300 mb-2 text-center">{itemTitle}</h4>}
      {hasError ? (
        <div className="text-center text-slate-400">
          <p>{alt} image failed to load.</p>
          {href && <a href={href} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Visit GitHub Profile</a>}
        </div>
      ) : (
        <img 
          src={src} 
          alt={alt} 
          className="max-w-full h-auto mx-auto rounded-md"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full" aria-label={alt}>
      {cardContent}
    </a>
  ) : (
    <div className="h-full">
      {cardContent}
    </div>
  );
};


export const GithubStats: React.FC<GithubStatsProps> = ({ 
  githubUsername,
  streakUrl, 
  profileDetailsUrl, 
  overallStatsUrl, 
  topLangsUrl 
}) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const githubProfileUrl = `https://github.com/${githubUsername}`;

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

  const statsItems: StatItemType[] = [
    { src: streakUrl, alt: `${githubUsername}'s GitHub Streak Stats`, title: "Contribution Streak" },
    { src: profileDetailsUrl, alt: `${githubUsername}'s GitHub Profile Summary`, title: "Profile Details" },
    { src: overallStatsUrl, alt: `${githubUsername}'s Overall GitHub Stats`, title: "Overall Stats" },
    { src: topLangsUrl, alt: `${githubUsername}'s Top Languages on GitHub`, title: "Top Languages" }
  ];

  const getDelayClass = (index: number) => {
    const delays = ['', 'delay-75', 'delay-150', 'delay-200']; // Adjusted for 2x2 grid
    return delays[index % delays.length];
  };

  return (
    <div ref={sectionRef} className={`transition-all duration-1000 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Section id="github-stats" title="📈 GitHub Statistics">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-2">
          {statsItems.map((item: StatItemType, index: number) => (
            <AnimateOnScroll key={item.title} delayClass={getDelayClass(index)}>
              <StatImage 
                src={item.src} 
                alt={item.alt} 
                href={githubProfileUrl}
                itemTitle={item.title}
              />
            </AnimateOnScroll>
          ))}
        </div>
         <p className="text-center text-sm text-slate-400 mt-8">
          Stats are dynamically fetched from public GitHub data. Click any card to visit my GitHub profile.
        </p>
      </Section>
    </div>
  );
};