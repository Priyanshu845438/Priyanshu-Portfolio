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
        <AnimateOnScroll>
          <div className="bg-slate-800/80 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-8 md:p-10">
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto text-center mb-10 sm:mb-16">
              Greetings! I am a proactive and ambitious <strong className="text-sky-400 font-semibold">aspiring Software Developer</strong>, bringing a solid <strong className="text-sky-400 font-semibold">1.6 years of professional experience as a QA Engineer</strong>. My journey in the tech world is fueled by a profound passion for engineering high-quality, efficient, and impactful software solutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 sm:gap-10 text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-sky-300 mb-4 border-b-2 border-sky-500/30 pb-3">Core Competencies & QA Excellence:</h3>
                <p className="text-slate-300 leading-relaxed sm:leading-loose">
                  My core strength lies in comprehensive <strong className="text-sky-300">software quality assurance</strong>, encompassing robust manual and sophisticated automation testing strategies. I am adept at leveraging industry-leading tools like <strong className="text-sky-300">Appium, Katalon Studio, and TestProject</strong> to ensure software integrity. My expertise extends to meticulous <strong className="text-sky-300">API testing (both manual and automated)</strong> and performance analysis, guaranteeing the delivery of reliable and scalable applications.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-sky-300 mb-4 border-b-2 border-sky-500/30 pb-3">Versatile Technical Acumen & Outlook:</h3>
                <p className="text-slate-300 leading-relaxed sm:leading-loose">
                  I possess a versatile technical skill set, with foundational knowledge in DevOps principles, and proficiency across the web development stack including <strong className="text-sky-300">HTML, CSS, JavaScript, WordPress, MongoDB, and MySQL</strong>. This is complemented by intermediate capabilities in <strong className="text-sky-300">Python, Node.js, Kotlin (for Android), and React.js</strong>. My technical acumen is uniquely enhanced by an understanding of sales principles, enabling me to approach development challenges with a holistic, business-aware perspective.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-sky-300 mb-4 border-b-2 border-sky-500/30 pb-3">Embarking on Backend Development:</h3>
                <p className="text-slate-300 leading-relaxed sm:leading-loose">
                  I am currently channeling my expertise and enthusiasm into a focused transition towards <strong className="text-sky-300">backend development</strong>. I am keen to apply my rigorous testing background and quality-first mindset to architect and deliver high-performance, resilient backend services. My objective is to contribute significantly to innovative projects that advance technology and deliver exceptional user value.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Section>
    </div>
  );
};