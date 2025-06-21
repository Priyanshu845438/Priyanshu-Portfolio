
export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  whatsapp: string;
  facebook: string;
  github: string;
  codechef: string;
}

export interface Skill {
  name: string;
  category?: string;
}

export interface EducationEntry {
  period: string;
  institution: string;
  degree: string;
  details?: string;
}

export interface Award {
  description: string;
}

export interface ExperienceEntry {
  period: string;
  company: string;
  role: string;
  description: string;
  skills: string[];
  type: 'Freelance' | 'Full-time' | 'Internship';
}

export interface Project {
  id: string;
  name: string;
  description: string; // Short description for cards
  detailedDescription: string; // Longer description for detail page
  technologies: string[];
  imageUrl: string; // Main image for the project
  githubUrl?: string;
  liveDemoUrl?: string;
  images?: string[]; // Optional array of image URLs for a gallery on the detail page
}

export interface PersonalDetails {
  gender: string;
  maritalStatus: string;
  currentAddress: string;
  dateOfBirth: string;
  knownLanguages: string[];
  permanentAddress: string;
  emails: string[];
}

export interface LeetCodeStatsProps {
  leetCodeStatsUrl: string;
  githubSnakeGameUrl: string; // Added for snake game
}

export interface FooterProps {
    name: string;
    // Removed snakeGameUrl and footerGifUrl
}

// ContactProps updated: personalDetails removed
export interface ContactProps {
  contactInfo: ContactInfo;
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  contact: ContactInfo;
  summary: string;
  keyExpertise: Skill[];
  education: EducationEntry[];
  awards: Award[];
  professionalExperience: ExperienceEntry[];
  internships: ExperienceEntry[];
  achievements: string[];
  positionsOfResponsibility: Array<{ title: string; description: string }>;
  collegeProjects: Project[];
  personalInterests: string[];
  personalDetails: PersonalDetails; // Kept in ResumeData for potential future use
  // New fields for stats and GitHub snake game
  githubUsername: string;
  leetCodeStatsUrl: string;
  githubStatsStreakUrl: string;
  githubProfileDetailsCardUrl: string;
  githubStatsOverallUrl: string;
  githubTopLangsUrl: string;
  githubSnakeGameUrl: string;
  footerGifUrl: string; // This is now unused as per user request
}

export interface NavItem {
  id: string;
  label: string;
}

export interface ProjectListModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}
