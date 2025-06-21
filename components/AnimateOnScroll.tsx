
import React, { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string; // For base styling before animation
  animationClasses?: string; // e.g., "opacity-0 translate-y-5"
  triggeredAnimationClasses?: string; // e.g., "opacity-100 translate-y-0"
  threshold?: number;
  triggerOnce?: boolean;
  delayClass?: string; // e.g., "delay-100", "delay-200" for Tailwind transition-delay
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = '',
  animationClasses = 'opacity-0 translate-y-5',
  triggeredAnimationClasses = 'opacity-100 translate-y-0',
  threshold = 0.1,
  triggerOnce = true,
  delayClass = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && domRef.current) {
              observer.unobserve(domRef.current);
            }
          } else if (!triggerOnce) {
            // Option to re-trigger animation if element scrolls out and back in
            // This is typically not desired for simple reveal animations.
            // setIsVisible(false); 
          }
        });
      },
      { threshold }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={domRef}
      className={`${className} ${delayClass} transition-all duration-700 ease-out ${isVisible ? triggeredAnimationClasses : animationClasses}`}
    >
      {children}
    </div>
  );
};
