
import { ResumeData, NavItem, Project } from './types';

// Note: The project data below is dummy data. For a live portfolio, 
// you would typically fetch this from a CMS, a JSON file, or an API (e.g., GitHub API for public repos).

const placeholderImageBase = "https://placehold.co/600x400/1e293b/94a3b8?text=";
const detailedPlaceholderImageBase = "https://placehold.co/800x600/1e293b/94a3b8?text=";

export const resumeData: ResumeData = {
  name: "PRIYANSHU RAJ",
  title: "B.Tech. - CSE - PIET",
  tagline: "Aspiring Software Developer & Experienced QA Engineer",
  contact: {
    phone: "+91-6206698170",
    email: "2303031057078@paruluniversity.ac.in",
    location: "Vadodra, Gujarat, India - 391760",
    linkedin: "https://www.linkedin.com/in/priyanshu-raj-b0b589203/",
    whatsapp: "https://api.whatsapp.com/send?phone=916206698170",
    facebook: "https://www.facebook.com/profile.php?id=100029721249059",
    github: "https://github.com/Priyanshu845438",
    codechef: "https://www.codechef.com/users/shadow_chef_79",
  },
  // This summary is for data consistency, the About.tsx component has its own tailored content.
  summary: "A dynamic and results-oriented aspiring Software Developer with 1.6 years of hands-on experience as a QA Engineer. Proven expertise in comprehensive software testing methodologies, including manual, automation, API, and performance testing, utilizing industry-standard tools. Possesses a robust technical foundation in web and mobile technologies, coupled with a strategic business acumen. Actively transitioning into backend development, eager to leverage a quality-first mindset to build scalable and innovative solutions.",
  keyExpertise: [
    { name: "Manual & Functional Testing", category: "Quality Assurance & Testing" },
    { name: "Automation Testing (Appium, Katalon Studio, TestProject)", category: "Quality Assurance & Testing" },
    { name: "API Testing (Manual & Automated Strategies)", category: "Quality Assurance & Testing" },
    { name: "Performance & Load Testing", category: "Quality Assurance & Testing" },
    { name: "Compatibility & Unit Testing", category: "Quality Assurance & Testing" },
    
    { name: "ReactJS (Frontend Development)", category: "Web Development" },
    { name: "Node.js & Express.js (Backend Development)", category: "Web Development" },
    { name: "HTML5, CSS3, Modern JavaScript (ES6+)", category: "Web Development" },
    
    { name: "Kotlin (Android App Development - Foundational)", category: "Mobile Development" },
    
    { name: "MongoDB (NoSQL Database Management)", category: "Data Management" },
    { name: "SQL (MySQL Database Design & Querying)", category: "Data Management" },
    
    { name: "Java (Object-Oriented Programming)", category: "Programming Languages & Scripting" },
    { name: "Python (Scripting & Web Development)", category: "Programming Languages & Scripting" },
    
    { name: "WordPress Development & Customization", category: "CMS & E-commerce Solutions" },
    { name: "Shopify Theme Development & Store Setup", category: "CMS & E-commerce Solutions" },
    { name: "Wix Website Design & Management", category: "CMS & E-commerce Solutions" },
    { name: "Squarespace Site Building & Customization", category: "CMS & E-commerce Solutions" },
    { name: "BigCommerce E-commerce Solutions", category: "CMS & E-commerce Solutions" },
    { name: "Magento (Adobe Commerce) Development", category: "CMS & E-commerce Solutions" },
    { name: "Drupal CMS Development & Theming", category: "CMS & E-commerce Solutions" },

    { name: "DevOps (Core Concepts & CI/CD Awareness)", category: "DevOps & IT Operations" },
    { name: "IT Support & Technical Troubleshooting", category: "DevOps & IT Operations" },
    
    { name: "Agile Methodologies & Scrum", category: "Professional Competencies" },
    { name: "Effective Communication & Team Collaboration", category: "Professional Competencies" },
    { name: "Strategic Time & Resource Management", category: "Professional Competencies" },
    { name: "Analytical Problem-Solving", category: "Professional Competencies" },
  ],
  education: [
    { period: "2022 - 2026", institution: "Parul University", degree: "B.Tech. - CSE - PIET", details: "CGPA: 7.12 / 10" },
    { period: "2022", institution: "Kalinga University, Raipur", degree: "Diploma - Computer Science and Engineering", details: "AICTE | CGPA: 7.22 / 10" },
    { period: "2019", institution: "C M Memorial High School, Motihari", degree: "10th", details: "CBSE | Percentage: 64.60 / 100" },
  ],
  awards: [
    { description: "Awarded for successfully completing the Nestlé E-Learning program, demonstrating a commitment to continuous learning and professional development." },
    { description: "Earned free certifications from the Great Learning platform in Software Testing, HTML, CSS, JavaScript, and other related technologies." },
    { description: "Completed a web development internship, gaining hands-on experience." },
    { description: "Successfully completed a sales internship, developing strong communication and customer engagement skills." },
    { description: "Received a joining letter for a role in software testing." },
  ],
  professionalExperience: [
    {
      period: "01 Aug, 2024 - Present",
      company: "Acadify Solution",
      role: "Freelance Software Developer",
      description: "Expertise in web development and content management systems (HTML, CSS, WordPress, Shopify, Wix) to create responsive and user-friendly websites. Experience in Kotlin for mobile application development. Strong management abilities, including resource management, IT support, and cost management, ensuring efficient project execution.",
      skills: ["HTML", "CSS", "Kotlin", "WordPress", "Shopify", "Wix", "Management Skills", "Cost Management", "Resource Management", "IT-Support"],
      type: "Freelance",
    },
    {
      period: "01 Aug, 2021 - 31 Aug, 2023",
      company: "AppTestify",
      role: "QA Engineer",
      description: "Worked as QA Engineer with expertise in manual and automated testing across Android, iOS, and web platforms. Experience in tools like Katalon Studio, pCloudy, BrowserStack and TestProject. Specialized in ensuring software quality through comprehensive Functional and Performance testing.",
      skills: ["Manual Testing", "API Testing", "Performance Testing", "Automation Testing", "Mobile Testing", "Compatibility Testing", "Functional Testing", "Kalon Studio", "pCloudy", "BrowserStack", "TestProject"],
      type: "Full-time",
    },
  ],
  internships: [
    {
      period: "01 May, 2024 - 31 May, 2024",
      company: "SGRGCore Solutions Pvt Ltd",
      role: "IT Support Engineer",
      description: "Played a key role in resource management, IT support, and client services. Responsible for IT service management, troubleshooting technical issues, and optimizing workflows. Worked closely with clients to understand requirements and provide tailored solutions.",
      skills: ["Resource Management", "IT-Support", "IT-Service-Management", "Client Services"],
      type: "Internship",
    },
    {
      period: "11 Apr, 2024 - 11 May, 2024",
      company: "MarqSet Branding pvt ltd",
      role: "Web Developer",
      description: "Focused on WordPress, Shopify, HTML, and CSS to build and customize websites. Responsibilities included designing responsive web pages, optimizing website performance, and integrating plugins. Mentored by Aishwarya Mane (Director & CEO).",
      skills: ["WordPress", "Shopify", "HTML", "CSS"],
      type: "Internship",
    },
  ],
  achievements: [
    "Expertise in Testing: Skilled in manual and automation testing across Android, iOS, WatchOS, and web platforms using tools like Appium, Katalon Studio, and TestProject.",
    "API and Performance Testing: Proficient in API and performance testing, ensuring high-quality, scalable software.",
    "Technical Proficiency: Strong foundation in Daily use tools, server management, JavaScript, MySQL, and HTML/CSS.",
    "Backend Development Transition: Leveraging testing expertise to transition into backend development.",
    "Innovative Project Work: Leading the development of a \"Donation Platform (All-in-One Solution)\" for my college final year project.",
  ],
  positionsOfResponsibility: [
    { title: "Manual Tester", description: "Conducted manual, compatibility, and automation testing to ensure high-quality software." },
    { title: "Web Developer", description: "Worked on web development using HTML, CSS, JavaScript, WordPress, Shopify, Wix, PHP." },
    { title: "IT Support & Technical Support", description: "Managed technical support tasks and resource management." },
    { title: "Digital Marketing", description: "Focused on SEO and lead generation." },
  ],
  collegeProjects: [
    { 
      id: "donation-platform",
      name: "Donation Platform (All-in-One Solution)", 
      description: "College final year project, integrating frontend and backend for a comprehensive donation solution.",
      detailedDescription: "The All-in-One Donation Platform is a comprehensive web and mobile application designed to streamline the process of charitable giving. It connects donors with various NGOs and causes, offering features like secure payment gateways, transparent fund tracking, volunteer opportunity listings, and impact reporting. The platform aims to foster a community of givers and provide a reliable system for managing donations effectively. The backend is built with Node.js and Express, utilizing MongoDB for data storage. The web frontend uses React.js for a dynamic user experience, and a complementary Kotlin-based Android app is planned for mobile users.",
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "Kotlin (Android)", "Payment Gateway Integration"],
      imageUrl: `${placeholderImageBase}Donation+Platform`,
      githubUrl: "https://github.com/Priyanshu845438/donation-platform-dummy",
      liveDemoUrl: "#",
      images: [
        `${detailedPlaceholderImageBase}Donation+Dashboard`,
        `${detailedPlaceholderImageBase}NGO+Profile`,
        `${detailedPlaceholderImageBase}Payment+Flow`,
      ]
    },
    {
      id: "portfolio-website-v1",
      name: "Personal Portfolio Website (Previous Version)",
      description: "An earlier version of my personal portfolio, built with HTML, CSS, and vanilla JavaScript.",
      detailedDescription: "This project represents one of my initial forays into web development, a static portfolio website created to showcase my early skills and projects. It was built using fundamental web technologies: HTML for structure, CSS for styling (including custom responsive design), and vanilla JavaScript for interactive elements like a simple image carousel and form validation. This project helped solidify my understanding of core web concepts before moving to frameworks like React.",
      technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "Responsive Design"],
      imageUrl: `${placeholderImageBase}Portfolio+V1`,
      githubUrl: "https://github.com/Priyanshu845438/portfolio-v1-dummy",
      liveDemoUrl: "#",
      images: [
        `${detailedPlaceholderImageBase}Portfolio+V1+Home`,
        `${detailedPlaceholderImageBase}Portfolio+V1+Projects`,
        `${detailedPlaceholderImageBase}Portfolio+V1+Contact`,
      ]
    },
    {
      id: "recipe-finder-app",
      name: "Recipe Finder Mobile App (Concept)",
      description: "A Kotlin-based Android app concept for finding recipes based on available ingredients.",
      detailedDescription: "Recipe Finder is an Android application concept developed using Kotlin. The app allows users to input ingredients they currently have, and it suggests recipes based on those items, pulling data from a (conceptual) recipe API. Key features include user accounts for saving favorite recipes, filtering by dietary restrictions, and a step-by-step cooking mode. This project focused on Android UI/UX design principles, Kotlin programming, and conceptual API integration.",
      technologies: ["Kotlin", "Android Studio", "Material Design", "Retrofit (API Concept)", "SQLite (Local Storage)"],
      imageUrl: `${placeholderImageBase}Recipe+Finder+App`,
      githubUrl: "https://github.com/Priyanshu845438/recipe-app-dummy",
      images: [
        `${detailedPlaceholderImageBase}Recipe+App+Search`,
        `${detailedPlaceholderImageBase}Recipe+App+Detail`,
        `${detailedPlaceholderImageBase}Recipe+App+Favorites`,
      ]
    },
    // Adding 10 new dummy projects
    {
      id: "e-commerce-platform",
      name: "E-commerce Platform Frontend",
      description: "A responsive frontend for an e-commerce site featuring product listings, cart, and checkout.",
      detailedDescription: "This project involved building the user interface for a modern e-commerce platform. It includes features like dynamic product catalogs, search and filtering, a shopping cart, user account management, and a multi-step checkout process. Built with React and Tailwind CSS for a highly responsive and customizable experience. State management was handled using Context API.",
      technologies: ["React", "Tailwind CSS", "Context API", "React Router", "Responsive Design"],
      imageUrl: `${placeholderImageBase}E-commerce+Frontend`,
      githubUrl: "https://github.com/Priyanshu845438/ecommerce-frontend-dummy",
      liveDemoUrl: "#",
      images: [
        `${detailedPlaceholderImageBase}Ecomm+Homepage`,
        `${detailedPlaceholderImageBase}Ecomm+ProductList`,
        `${detailedPlaceholderImageBase}Ecomm+Cart`,
      ]
    },
    {
      id: "task-manager-app",
      name: "Task Manager Application",
      description: "A full-stack task management application with user authentication and real-time updates.",
      detailedDescription: "A web application for managing tasks and to-do lists. Users can register, log in, create tasks, set priorities, due dates, and mark tasks as complete. The backend was built with Node.js/Express and MongoDB, providing RESTful APIs. Frontend using Vue.js for a reactive interface. Implemented JWT for authentication.",
      technologies: ["Vue.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
      imageUrl: `${placeholderImageBase}Task+Manager`,
      githubUrl: "https://github.com/Priyanshu845438/task-manager-dummy",
    },
    {
      id: "weather-dashboard",
      name: "Weather Dashboard",
      description: "A dashboard displaying current weather and forecasts using a third-party weather API.",
      detailedDescription: "This weather dashboard allows users to search for a city and view its current weather conditions (temperature, humidity, wind speed) and a 5-day forecast. It fetches data from the OpenWeatherMap API. The UI is built with plain JavaScript, HTML, and CSS, focusing on clear data presentation and API integration.",
      technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "OpenWeatherMap API", "Async/Await"],
      imageUrl: `${placeholderImageBase}Weather+Dashboard`,
      images: [
        `${detailedPlaceholderImageBase}Weather+Search`,
        `${detailedPlaceholderImageBase}Weather+Forecast`,
      ]
    },
    {
      id: "blogging-platform-cms",
      name: "Simple Blogging CMS",
      description: "A Content Management System for creating and managing blog posts.",
      detailedDescription: "A backend-focused project creating a simple CMS for a blog. It allows admin users to create, edit, delete, and publish blog posts. Built with Python (Flask) and SQLite. It provides a RESTful API for managing posts, which could be consumed by any frontend.",
      technologies: ["Python", "Flask", "SQLite", "REST API", "HTML/CSS (Admin UI)"],
      imageUrl: `${placeholderImageBase}Blogging+CMS`,
    },
    {
      id: "chat-application-socketio",
      name: "Real-time Chat Application",
      description: "A basic real-time chat application using Node.js and Socket.IO.",
      detailedDescription: "This project demonstrates real-time communication using WebSockets. Users can join chat rooms and send messages that are broadcast to all other users in the room instantly. The backend is built with Node.js and Express, with Socket.IO managing the WebSocket connections. The frontend is simple HTML, CSS, and JavaScript.",
      technologies: ["Node.js", "Socket.IO", "Express.js", "JavaScript", "HTML5", "CSS3"],
      imageUrl: `${placeholderImageBase}Chat+App`,
      liveDemoUrl: "#",
    },
    {
      id: "url-shortener-service",
      name: "URL Shortener Service",
      description: "A backend service to create shortened URLs, similar to bit.ly.",
      detailedDescription: "This service takes a long URL as input and generates a unique short code. When the short URL is accessed, it redirects the user to the original long URL. Built with Node.js and Express, using a simple in-memory store or MongoDB for mapping short codes to long URLs. Includes basic analytics like click tracking.",
      technologies: ["Node.js", "Express.js", "MongoDB (Optional)", "REST API"],
      imageUrl: `${placeholderImageBase}URL+Shortener`,
    },
    {
      id: "quiz-app-react",
      name: "Interactive Quiz App",
      description: "A React-based quiz application with multiple-choice questions and scoring.",
      detailedDescription: "A frontend application that presents users with a series of multiple-choice questions on a selected topic. It tracks the user's score and provides feedback at the end. Questions and answers are fetched from a JSON file or a simple API. State management and component logic are handled with React.",
      technologies: ["React", "JavaScript", "CSS3", "State Management"],
      imageUrl: `${placeholderImageBase}Quiz+App`,
      githubUrl: "https://github.com/Priyanshu845438/quiz-app-react-dummy",
    },
    {
      id: "image-gallery-firebase",
      name: "Cloud Image Gallery",
      description: "An image gallery application with image uploads to Firebase Storage.",
      detailedDescription: "This web application allows users to upload images, which are then stored in Firebase Storage. The uploaded images are displayed in a gallery format. It uses Firebase Authentication for user sign-up/sign-in and Firestore to store image metadata. Frontend built with HTML, CSS, and JavaScript.",
      technologies: ["Firebase (Auth, Storage, Firestore)", "JavaScript", "HTML5", "CSS3"],
      imageUrl: `${placeholderImageBase}Image+Gallery`,
    },
    {
      id: "music-player-ui",
      name: "Music Player UI Clone",
      description: "A UI clone of a popular music streaming service's player interface.",
      detailedDescription: "This project focuses purely on frontend UI/UX, aiming to replicate the look and feel of a music player interface (like Spotify or Apple Music). It includes interactive elements like play/pause buttons, progress bar, volume control, and playlist display. Built with HTML, CSS, and JavaScript for dynamic interactions, without actual music playback functionality.",
      technologies: ["HTML5", "CSS3 (Flexbox/Grid)", "JavaScript (DOM Manipulation)"],
      imageUrl: `${placeholderImageBase}Music+Player+UI`,
    },
    {
      id: "data-visualization-d3",
      name: "Data Visualization with D3.js",
      description: "A project showcasing data visualization techniques using the D3.js library.",
      detailedDescription: "This project involves creating interactive charts and graphs (e.g., bar charts, scatter plots, line graphs) from sample datasets using D3.js. The focus is on understanding D3.js concepts like selections, data binding, scales, and axes to represent data visually and effectively.",
      technologies: ["D3.js", "JavaScript", "HTML5", "SVG", "CSS3"],
      imageUrl: `${placeholderImageBase}D3+Viz`,
      githubUrl: "https://github.com/Priyanshu845438/d3-visualization-dummy",
    }
  ],
  personalInterests: [
    "Cooking", "Playing BGMI", "Traveling", "Spending time with family", "Working hard", "Taking care of family's needs", "Exploring new technologies", "Exploring new cuisines", "Staying active through sports"
  ],
  personalDetails: {
    gender: "Male",
    maritalStatus: "Single",
    currentAddress: "Stanza Living Christchurch, Sankar Chokdi, Wagodia GIDC, Vadodra, Gujarat, India - 391760",
    dateOfBirth: "03 Apr, 2003",
    knownLanguages: ["Hindi", "English"],
    permanentAddress: "Gora Semra, P.O: Kathaia, P.S: Majhaulia, West Champaran, Bihar, India - 845454",
    emails: ["2303031057078@paruluniversity.ac.in", "priyanshubth6742@gmail.com", "priyanshurajnth121@gmail.com"],
  },
  // GitHub and LeetCode Stats
  githubUsername: "Priyanshu845438", // Used in multiple URLs
  leetCodeStatsUrl: "https://leetcard.jacoblin.cool/Priyanshu845438?theme=dark",
  githubStatsStreakUrl: "https://github-readme-streak-stats.herokuapp.com?user=Priyanshu845438&theme=vue-dark&date_format=M%20j%5B%2C%20Y%5D&ring=64D3B2&fire=64D3B2",
  githubProfileDetailsCardUrl: "https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Priyanshu845438&theme=github_dark",
  githubStatsOverallUrl: "https://github-readme-stats.vercel.app/api?username=Priyanshu845438&show_icons=true&theme=tokyonight&count_private=true&border_radius=12",
  githubTopLangsUrl: "https://github-readme-stats.vercel.app/api/top-langs/?username=Priyanshu845438&layout=compact&theme=tokyonight&border_radius=12",
  // Snake game related URLs
  githubSnakeGameUrl: "https://raw.githubusercontent.com/Akarshjha03/Akarshjha03/output/github-snake-dark.svg", 
  footerGifUrl: "https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif", // This GIF is no longer used in the footer
};

export const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "summary", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "awards", label: "Recognition" }, 
  { id: "activity-stats", label: "Activity" }, // Updated ID and Label
  { id: "github-stats", label: "GitHub Stats" }, 
  { id: "interests", label: "Interests"},
  { id: "contact", label: "Contact" },
];
