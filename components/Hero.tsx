
import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons'; // Assuming Icons.tsx exists

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
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-500">
            {name}
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          {title}
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
            <LinkedinIcon className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
            <GithubIcon className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={contactLinks.email} className="text-slate-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
            <MailIcon className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="sr-only">Email</span>
          </a>
           <a href={contactLinks.phone} className="text-slate-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
            <PhoneIcon className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="sr-only">Phone</span>
          </a>
        </div>
        <a 
          href="#summary" 
          className="inline-block px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
        >
          Discover More
        </a>
      </div>
    </section>
  );
};
