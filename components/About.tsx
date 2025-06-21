import React, { useEffect, useRef, useState } from 'react';
import { Section } from './Section';
import { AnimateOnScroll } from './AnimateOnScroll';

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
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
      <Section id="summary" title="About Me">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 md:items-stretch">
          <AnimateOnScroll>
            {/* Left Column: Text Content */}
              <div className="w-full md:w-[900px] bg-slate-800/70 backdrop-blur-md rounded-xl shadow-2xl p-9 sm:p-8 md:p-10 space-y-9 h-full flex flex-col">
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                Greetings! I am a proactive and ambitious <strong className="text-sky-400 font-semibold">aspiring Software Developer</strong>, bringing a solid <strong className="text-sky-400 font-semibold">1.6 years of professional experience as a QA Engineer</strong>. My journey in the tech world is fueled by a profound passion for engineering high-quality, efficient, and impactful software solutions.
              </p>
              
              <div>
                <h3 className="text-md sm:text-lg font-semibold text-sky-400 mb-2">Core Competencies & Quality Assurance Excellence:</h3>
                <p className="text-slate-300 leading-relaxed">
                  My core strength lies in comprehensive <strong className="text-sky-300">software quality assurance</strong>, encompassing robust manual and sophisticated automation testing strategies. I am adept at leveraging industry-leading tools like <strong className="text-sky-300">Appium, Katalon Studio, and TestProject</strong> to ensure software integrity. My expertise extends to meticulous <strong className="text-sky-300">API testing (both manual and automated)</strong> and performance analysis, guaranteeing the delivery of reliable and scalable applications.
                </p>
              </div>

              <div>
                <h3 className="text-md sm:text-lg font-semibold text-sky-400 mb-2">Versatile Technical Acumen & Strategic Outlook:</h3>
                <p className="text-slate-300 leading-relaxed">
                  I possess a versatile technical skill set, with foundational knowledge in DevOps principles, and proficiency across the web development stack including <strong className="text-sky-300">HTML, CSS, JavaScript, WordPress, MongoDB, and MySQL</strong>. This is complemented by intermediate capabilities in <strong className="text-sky-300">Python, Node.js, Kotlin (for Android), and React.js</strong>. My technical acumen is uniquely enhanced by an understanding of sales principles, enabling me to approach development challenges with a holistic, business-aware perspective.
                </p>
              </div>
              
              <div className="flex-grow flex flex-col justify-end"> {/* Pushes this to the bottom if card is stretched */}
                <h3 className="text-md sm:text-lg font-semibold text-sky-400 mb-2">Embarking on Backend Development:</h3>
                <p className="text-slate-300 leading-relaxed">
                  I am currently channeling my expertise and enthusiasm into a focused transition towards <strong className="text-sky-300">backend development</strong>. I am keen to apply my rigorous testing background and quality-first mindset to architect and deliver high-performance, resilient backend services. My objective is to contribute significantly to innovative projects that advance technology and deliver exceptional user value.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Section>
    </div>
  );
};
