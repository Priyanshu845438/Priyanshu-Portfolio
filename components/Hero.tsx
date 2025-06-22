
import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons';

interface HeroProps {
  name: string;
  title: string;
  contactLinks: {
    linkedin: string;
    github: string;
    email: string;
    phone: string;
  };
}

export const Hero: React.FC<HeroProps> = ({ name, title, contactLinks }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100); // Slight delay to ensure styles apply
    return () => clearTimeout(timer);
  }, []);

  const baseTransition = "transition-all duration-700 ease-out";
  const initialStyle = "opacity-0 translate-y-5";
  const finalStyle = "opacity-100 translate-y-0";

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="relative z-10 max-w-4xl lg:max-w-5xl w-full">
        <h1 
          className={`text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 ${baseTransition} ${isMounted ? finalStyle : initialStyle}`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-500">
            {name}
          </span>
        </h1>
        <p 
          className={`text-xl sm:text-2xl text-slate-300 mb-10 sm:mb-12 max-w-3xl mx-auto ${baseTransition} delay-150 ${isMounted ? finalStyle : initialStyle}`}
        >
          {title}
        </p>
        <div 
          className={`flex justify-center space-x-7 sm:space-x-8 mb-12 sm:mb-16 ${baseTransition} delay-300 ${isMounted ? finalStyle : initialStyle}`}
        >
          <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-300 transition-colors duration-300 transform hover:scale-125">
            <LinkedinIcon className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-300 transition-colors duration-300 transform hover:scale-125">
            <GithubIcon className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={contactLinks.email} className="text-slate-400 hover:text-sky-300 transition-colors duration-300 transform hover:scale-125">
            <MailIcon className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="sr-only">Email</span>
          </a>
           <a href={contactLinks.phone} className="text-slate-400 hover:text-sky-300 transition-colors duration-300 transform hover:scale-125">
            <PhoneIcon className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="sr-only">Phone</span>
          </a>
        </div>
        <a 
          href="#summary" 
          aria-label="Discover more about me"
          className={`inline-block px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg 
                      hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110 
                      focus:outline-none focus:ring-4 focus:ring-sky-500/40 focus:ring-offset-2 focus:ring-offset-slate-900
                      ${baseTransition} delay-450 ${isMounted ? finalStyle : initialStyle}`}
        >
          Discover More
        </a>
      </div>
    </section>
  );
};
