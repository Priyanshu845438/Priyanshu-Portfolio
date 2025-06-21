
import React from 'react';

// Generic Icon Props
interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LinkedinIcon: React.FC<IconProps> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const GithubIcon: React.FC<IconProps> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export const MailIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v-2.544a2.25 2.25 0 00-1.2-2.028L13.5 6.095V5.25A2.25 2.25 0 0011.25 3h-2.5A2.25 2.25 0 006.5 5.25v.845L1.45 9.578A2.25 2.25 0 00.25 11.606v2.544c0 .878.506 1.667 1.282 2.051L8.5 19.593V21a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-1.407l5.968-3.391A2.25 2.25 0 0020.25 14.15zM8.5 19.593L2.25 15.9V11.606l6.25 3.561v4.426zM12 17.25v-7.5M15.5 19.593v-4.426l6.25-3.561V15.9l-6.25 3.693zM13.5 6.095l-3 1.708-3-1.708V5.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v.845z" />
  </svg>
);

export const AcademicCapIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422A12.083 12.083 0 0122 12.5V17a2 2 0 01-2 2H4a2 2 0 01-2-2v-4.5c0-.993.413-1.928 1.127-2.613L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.204 11.204L12 16.5l8.796-5.296M12 21.75V16.5" />
  </svg>
);

export const CodeBracketIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

export const ChevronUpIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const XIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 13.75M18.25 12L19.5 10.25M18.25 12L17 10.25M18.25 12L19.5 13.75M12 3.75L10.25 5.5M12 3.75L13.75 5.5M12 3.75L10.25 2M12 3.75L13.75 2M3.75 12L5.5 13.75M3.75 12L2 13.75M3.75 12L5.5 10.25M3.75 12L2 10.25M12 20.25L10.25 18.5M12 20.25L13.75 18.5M12 20.25L10.25 22M12 20.25L13.75 22M20.25 12L18.5 13.75M20.25 12L22 13.75M20.25 12L18.5 10.25M20.25 12L22 10.25" />
  </svg>
);

export const TrophyIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 9.75H11.25A3.375 3.375 0 007.5 13.125V18.75m9 0h1.5a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5H6" />
  </svg>
);

export const UserGroupIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.247-4.522a5.998 5.998 0 00-11.48 0M12 15.75a8.973 8.973 0 01-6.727-3.006 3 3 0 014.682-2.72m.247 4.522a5.998 5.998 0 0111.48 0M12 15.75a8.973 8.973 0 006.727-3.006 3 3 0 00-4.682-2.72m-.247-4.522a5.998 5.998 0 00-11.48 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.242 12.75a5.961 5.961 0 0011.516 0" />
    </svg>
);

export const HeartIcon: React.FC<IconProps> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

export const GlobeAltIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121.75 12c0 .28-.01.558-.027.832M3.027 12.832A8.959 8.959 0 012.25 12c0-.28.01.558.027-.832m18.72.001c-.017-.274-.027-.552-.027-.832 0-4.97-4.03-9-9-9s-9 4.03-9 9c0 .28.01.558.027.832M12 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

export const CakeIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.75a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15.75V10.5A2.25 2.25 0 015.25 8.25h13.5A2.25 2.25 0 0121 10.5v5.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75V8.25m0 0a3.75 3.75 0 00-3.75-3.75H6a3.75 3.75 0 000 7.5h2.25A3.75 3.75 0 0012 8.25zm0 0a3.75 3.75 0 013.75-3.75H18a3.75 3.75 0 010 7.5h-2.25A3.75 3.75 0 0112 8.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v1.5M12 5.25a.75.75 0 000 1.5.75.75 0 000-1.5zM12 6.75v1.5" />
  </svg>
);

export const LanguageIcon: React.FC<IconProps> = (props) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.473 48.473 0 0118 0M3 8.995C6.726 12.368 11.274 12.368 15 8.995M3 12.368C6.726 15.742 11.274 15.742 15 12.368m-12 5.622a48.473 48.473 0 0118 0" />
    </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

export const LinkIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
);

export const PaperAirplaneIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ExclamationCircleIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
  </svg>
);

export const ViewGridIcon: React.FC<IconProps> = (props) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);
