import React from 'react';
import { FooterProps } from '../types'; // Updated FooterProps import

export const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <footer className="relative z-10 text-center py-8 border-t border-slate-700/50 mt-8">
      {/* Removed Snake Game Section */}
      <p className="text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </p>
      <p className="text-xs text-slate-500 mt-1">
        Crafted with <span className="text-red-500">&hearts;</span> using React & Tailwind CSS.
      </p>
    </footer>
  );
};