
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
    email: "Priyanshubth6742@gmail.com",
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
    { name: "PHP (Server-side Scripting)", category: "Web Development" },
    
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
    { name: "Network Troubleshooting", category: "DevOps & IT Operations" }, // Added for IT Support role
    
    { name: "Agile Methodologies & Scrum", category: "Professional Competencies" },
    { name: "Effective Communication & Team Collaboration", category: "Professional Competencies" },
    { name: "Strategic Time & Resource Management", category: "Professional Competencies" },
    { name: "Analytical Problem-Solving", category: "Professional Competencies" },
    { name: "Data-driven Decision Making", category: "Professional Competencies" }, // Added for Digital Marketing role
    { name: "Content Strategy Basics", category: "Professional Competencies" }, // Added for Digital Marketing role
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
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "PHP (WordPress)", "WordPress Development", "Shopify Development", "Wix Platform", "React.js (Basic)", "Node.js (Conceptual)", "Kotlin (Mobile Basics)", "Theme Customization", "Plugin Integration", "Client Communication", "Project Scoping", "Agile Management", "Cost Management", "Resource Management", "IT Support"],
      type: "Freelance",
    },
    {
      period: "01 Aug, 2021 - 31 Aug, 2023",
      company: "AppTestify",
      role: "QA Engineer",
      description: "Worked as QA Engineer with expertise in manual and automated testing across Android, iOS, and web platforms. Experience in tools like Katalon Studio, pCloudy, BrowserStack and TestProject. Specialized in ensuring software quality through comprehensive Functional and Performance testing.",
      skills: ["Manual Testing", "Automation Testing", "API Testing (Manual & Automated)", "Performance Testing", "Mobile Testing (Android & iOS)", "Web Testing", "Test Case Design", "Bug Tracking (JIRA/Trello)", "Regression Testing", "Usability Testing", "Compatibility Testing", "Functional Testing", "Katalon Studio", "Appium (Conceptual)", "pCloudy", "BrowserStack", "TestProject", "SQL (Validation)", "Agile/Scrum", "Test Reporting"],
      type: "Full-time",
    },
  ],
  internships: [
    {
      period: "01 May, 2024 - 31 May, 2024",
      company: "SGRGCore Solutions Pvt Ltd",
      role: "IT Support Engineer",
      description: "Played a key role in resource management, IT support, and client services. Responsible for IT service management, troubleshooting technical issues, and optimizing workflows. Worked closely with clients to understand requirements and provide tailored solutions.",
      skills: ["IT Support", "Technical Troubleshooting", "Resource Management", "IT Service Management (ITSM)", "Client Services", "Network Troubleshooting", "Hardware Diagnostics", "Software Installation & Config", "User Account Management", "Ticketing Systems (e.g., Jira Service Desk, Zendesk basics)"],
      type: "Internship",
    },
    {
      period: "11 Apr, 2024 - 11 May, 2024",
      company: "MarqSet Branding pvt ltd",
      role: "Web Developer",
      description: "Focused on WordPress, Shopify, HTML, and CSS to build and customize websites. Responsibilities included designing responsive web pages, optimizing website performance, and integrating plugins. Mentored by Aishwarya Mane (Director & CEO).",
      skills: ["WordPress", "Shopify", "HTML5", "CSS3", "Responsive Web Design", "Website Customization", "Plugin Management", "Basic SEO Principles", "Browser Developer Tools", "Version Control (Git basics)", "CSS Frameworks (Conceptual)"],
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
    { 
      title: "QA Strategist", 
      description: "Spearheaded comprehensive software quality assurance initiatives, designing and executing manual, compatibility, and foundational automation tests. Drove the adoption of best practices to ensure robust, high-quality software delivery across multiple projects.",
      appliedSkills: ["Manual & Functional Testing", "API Testing (Manual & Automated Strategies)", "Compatibility & Unit Testing", "Analytical Problem-Solving", "Agile Methodologies & Scrum"]
    },
    { 
      title: "Full-Stack Web Development", 
      description: "Led the development and enhancement of diverse web solutions, leveraging proficiency in HTML, CSS, JavaScript, and PHP for CMS platforms like WordPress and Shopify. Focused on creating responsive, user-centric interfaces and integrating backend functionalities.",
      appliedSkills: ["HTML5, CSS3, Modern JavaScript (ES6+)", "WordPress Development & Customization", "Shopify Theme Development & Store Setup", "ReactJS (Frontend Development)", "Node.js & Express.js (Backend Development)"]
    },
    { 
      title: "IT Operations & Support Specialist", 
      description: "Orchestrated IT support operations, managing technical troubleshooting, resource allocation, and system maintenance. Implemented strategies to enhance IT service delivery and ensure operational efficiency.",
      appliedSkills: ["IT Support & Technical Troubleshooting", "DevOps (Core Concepts & CI/CD Awareness)", "Strategic Time & Resource Management", "Network Troubleshooting", "Effective Communication & Team Collaboration"]
    },
    { 
      title: "Digital Growth & SEO Analyst", 
      description: "Drove digital presence optimization by implementing SEO strategies and managing lead generation campaigns. Analyzed performance metrics to refine approaches and achieve key marketing objectives.",
      appliedSkills: ["Analytical Problem-Solving", "Data-driven Decision Making", "Content Strategy Basics", "Effective Communication & Team Collaboration", "Strategic Time & Resource Management"]
    },
  ],
  collegeProjects: [
    { 
      id: "donation-platform",
      name: "🌍 Donation Platform (All-in-One Solution)", 
      description: "A comprehensive MERN stack-based donation platform for NGOs, companies, and donors with secure payment integration (Cashfree). College final year project.",
      detailedDescription: `
PROJECT OVERVIEW:

The "Donation Platform (All-in-One Solution)" is a comprehensive web application developed as a B.Tech final year project, leveraging the MERN (MongoDB, Express.js, React.js, Node.js) stack. It's meticulously designed to serve as a centralized hub connecting NGOs, corporate donors, and individual contributors, streamlining the entire donation and campaign management lifecycle. The platform features real-time functionalities, robust role-based access control, and secure payment processing integrated via Cashfree.

KEY OBJECTIVES:
- To provide NGOs with an intuitive platform to create, manage, and promote fundraising campaigns.
- To enable companies and individual donors to discover, evaluate, and contribute to various causes seamlessly.
- To ensure transparency and accountability through comprehensive reporting and activity tracking for all user roles.

-----------------------------------
CORE FEATURES:
-----------------------------------

SOPHISTICATED ROLE-BASED ACCESS CONTROL (RBAC):
The platform implements distinct roles with tailored dashboards and permissions:

  Super Administrator:
  * Full oversight: Manage (CRUD) NGOs, Company profiles, and Campaigns.
  * Access comprehensive platform-wide donation reports and user activity logs.
  * System configuration and user profile management.

  NGO Dashboard:
  * Create, publish, and manage fundraising campaigns.
  * Track campaign performance and donations in real-time.
  * Option to donate to other NGOs' campaigns.
  * View profiles of registered companies.
  * Manage and update their own organizational profile.

  Company/Corporate Donor Dashboard:
  * Discover NGO profiles and their active campaigns.
  * Access detailed donation history and generate reports.
  * Securely manage and update their company profile.

  Individual Donor Portal:
  * Browse and search for campaigns.
  * Make secure donations.
  * Track personal donation history.

SEAMLESS DONATION & SECURE PAYMENT PROCESSING:
* Cashfree Payment Gateway Integration: Ensures secure, reliable, multi-modal payments.
* Public Sharable Donation Links: For campaigns, enabling external donations.
* Transparent Transaction Tracking: All donations are recorded and auditable.

INSIGHTFUL REPORTING & ACTIVITY LOGS:
* Donation Reports: Filterable by campaign, date, donor type, etc.
* Campaign Performance Analytics: Metrics on funds raised, engagement.
* User Activity Logs: For admin monitoring and audit.

ROBUST PROFILE & CAMPAIGN MANAGEMENT:
* User Profiles: Secure creation, viewing, and editing for all roles.
* NGO Campaign Showcase: Profiles display active/past campaigns.
* Secure Credential Management: Password changes, recovery options.

-----------------------------------
TECHNOLOGY STACK:
-----------------------------------

* Frontend: React.js (with Context API/Redux for state management), Tailwind CSS (Conceptual for UI)
* Backend: Node.js, Express.js (for RESTful APIs)
* Database: MongoDB (with Mongoose ODM)
* Authentication: JSON Web Tokens (JWT)
* Payment Gateway: Cashfree API
* API Design & Testing: Postman, RESTful principles
* Version Control: Git & GitHub

-----------------------------------
CONCEPTUAL PROJECT ARCHITECTURE:
-----------------------------------

This platform follows a standard MERN stack architecture:

  backend/
  ├── config/         (Database, environment variables)
  ├── controllers/    (Request handling logic)
  ├── middleware/     (Auth, error handling)
  ├── models/         (Mongoose schemas and models)
  ├── routes/         (API endpoint definitions)
  └── server.js       (Main backend server entry)

  frontend/ (Create React App structure)
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/   (Reusable UI components)
  │   ├── contexts/     (Or /store for Redux)
  │   ├── hooks/
  │   ├── pages/        (Top-level page components)
  │   ├── services/     (API interaction services)
  │   ├── utils/
  │   ├── App.js
  │   ├── index.js
  └── package.json

(Note: The structure above is a typical representation.)

-----------------------------------
INSTALLATION & LOCAL SETUP:
-----------------------------------

Detailed instructions for setting up and running the project locally are available in the README.md file within the GitHub repository.
(Standard steps involve cloning, 'npm install' and 'npm start' for both backend and frontend.)

-----------------------------------
API DOCUMENTATION:
-----------------------------------

The backend APIs are designed following RESTful conventions and have been thoroughly tested using Postman. Comprehensive API documentation details (endpoints, request/response formats) can be found or generated from the backend codebase.

-----------------------------------
DEVELOPMENT LIFECYCLE & ROADMAP HIGHLIGHTS:
-----------------------------------

The project followed a structured development lifecycle:
1. Requirement Analysis & System Design: Defining roles, features, schemas.
2. Backend Development: Node.js/Express server, Mongoose models, APIs, JWT auth.
3. Payment Gateway Integration: Securely incorporating Cashfree.
4. Frontend Development: React.js UI, role-based dashboards, API connections.
5. Testing & Refinement: Comprehensive testing and iterative improvements.
6. Deployment (Conceptual): Prepared for cloud platform deployment.

-----------------------------------
CONTRIBUTING & FUTURE SCOPE:
-----------------------------------

This project serves as a strong foundation. Contributions are highly encouraged! Fork the repository, report issues, suggest features, or submit pull requests.

Potential future enhancements:
* Advanced analytics and data visualization.
* Automated email notifications.
* Social media integration for campaign sharing.
* Mobile application development.
`,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cashfree Gateway", "Postman (API Testing)", "Tailwind CSS (Conceptual)"],
      imageUrl: `${placeholderImageBase}Donation+Platform`,
      githubUrl: "https://github.com/Priyanshu845438/Donation-Platform", 
      liveDemoUrl: "#", 
      images: [
        `${detailedPlaceholderImageBase}Donation+Dashboard`,
        `${detailedPlaceholderImageBase}NGO+Profile`,
        `${detailedPlaceholderImageBase}Payment+Flow`,
      ]
    },
    {
      id: "portfolio-website-v1", // This ID is kept, but content updated
      name: "🚀 Dynamic Personal Portfolio (This Website)",
      description: "The interactive and modern portfolio you are currently viewing, built with React, TypeScript, and Tailwind CSS.",
      detailedDescription: `
WELCOME TO MY PORTFOLIO!

This is the very website you are exploring now – a dynamic and interactive personal portfolio designed to showcase my skills, professional journey, and projects with an "ultra-advanced" user interface and experience.

KEY FEATURES & DESIGN PHILOSOPHY:
*   Modern & Engaging UI: Crafted with Tailwind CSS for a sleek, responsive, and mobile-first design.
*   Smooth Animations: Subtle and engaging animations (leveraging CSS transitions and Intersection Observer for scroll-based effects like 'AnimateOnScroll') enhance user experience without being distracting.
*   Dynamic Content Loading: Project details and other sections are presented in a clean and organized manner.
*   Interactive Components: Features like the project detail modal, floating navigation, and particle background contribute to a lively and professional feel.
*   Component-Based Architecture: Built with React, promoting reusable and maintainable code.
*   TypeScript for Robustness: Ensures type safety and improves developer experience.

PURPOSE:
This portfolio serves as a central hub for my professional presence, allowing visitors to get a comprehensive understanding of my capabilities as a software developer and QA engineer.

TECHNOLOGY STACK:
*   Frontend: React.js, TypeScript
*   Styling: Tailwind CSS
*   Animations: CSS Transitions, Intersection Observer API (for scroll-triggered animations)
*   Development Environment: Vite (or similar modern bundler setup assumed for .tsx)
*   Version Control: Git & GitHub

This project is a testament to my commitment to clean code, user-centric design, and leveraging modern web technologies to create impactful digital experiences.
      `,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "CSS Animations", "Intersection Observer API"],
      imageUrl: `${placeholderImageBase}Portfolio_Current_Site`, // Placeholder, update with actual screenshot
      githubUrl: "https://github.com/Priyanshu845438/Priyanshu-Portfolio", // Corrected GitHub link
      liveDemoUrl: "#", // It's the current site, so # is appropriate or can be omitted
      images: [
        `${detailedPlaceholderImageBase}Portfolio_Home_View`,
        `${detailedPlaceholderImageBase}Portfolio_Projects_View`,
        `${detailedPlaceholderImageBase}Portfolio_Contact_View`,
      ]
    },
    {
      id: "healthcare-ai-chatbot", // Original Healthcare AI bot project
      name: "🩺 Healthcare AI - Chatbot & Website",
      description: "AI-powered MERN stack healthcare assistant with Gemini API for symptom checking, health info, and real-time chat.",
      detailedDescription: `
PROJECT OVERVIEW:
The Healthcare AI Chatbot & Website is a MERN stack application designed to provide users with an intelligent and interactive healthcare assistant. Leveraging a powerful AI model (e.g., Gemini API), this platform offers features like symptom checking, reliable health information retrieval, and potentially basic appointment guidance, all through a user-friendly web interface and a real-time chatbot.

-----------------------------------
KEY FEATURES:
-----------------------------------
*   **AI-Powered Chatbot**: 
    *   Integrates with a Large Language Model (e.g., Gemini API) for natural language understanding and response generation.
    *   Provides preliminary symptom analysis based on user input (not a replacement for professional medical advice).
    *   Offers information on medical conditions, treatments, and wellness topics.
*   **Real-Time Communication**: Utilizes Socket.IO (or similar) for instant messaging capabilities within the chatbot.
*   **User Authentication**: Secure user registration and login system (e.g., using JWT).
*   **Health Information Portal**: A section of the website dedicated to articles, FAQs, and resources on various health topics.
*   **Responsive Web Design**: Ensures accessibility and optimal user experience across desktops, tablets, and mobile devices.
*   **(Conceptual) Appointment Helper**: Could guide users on how to find relevant healthcare providers or book appointments (future scope).

-----------------------------------
TECHNOLOGY STACK:
-----------------------------------
*   **Frontend**: React.js, Tailwind CSS (for modern UI styling)
*   **Backend**: Node.js, Express.js (for RESTful APIs and WebSocket management)
*   **Database**: MongoDB (with Mongoose for data modeling)
*   **AI Integration**: Gemini API (or a similar LLM for chatbot intelligence)
*   **Real-Time Engine**: Socket.IO (for chat functionality)
*   **Authentication**: JSON Web Tokens (JWT)
*   **API Testing**: Postman
*   **Version Control**: Git & GitHub

-----------------------------------
PURPOSE & VISION:
-----------------------------------
The vision behind this project is to make basic healthcare information and preliminary guidance more accessible and engaging through AI. It aims to empower users to understand their health better and make informed decisions, while always emphasizing the importance of consulting professional healthcare providers for diagnosis and treatment.
      `,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API (LLM)", "Socket.IO", "Tailwind CSS", "JWT"],
      imageUrl: `${placeholderImageBase}HealthcareAI`,
      githubUrl: "https://github.com/Priyanshu845438/Healthcare-AI---chatboot-and-Website",
      liveDemoUrl: "#",
      images: [
        `${detailedPlaceholderImageBase}HealthcareAI_Chat`,
        `${detailedPlaceholderImageBase}HealthcareAI_Symptom`,
        `${detailedPlaceholderImageBase}HealthcareAI_Info`
      ]
    },
    {
      id: "labour-ekta-android",
      name: "📱 Labour Ekta - Android Application",
      description: "A Kotlin-based Android app connecting admins, operators, and companies for job and vehicle management with OTP login.",
      detailedDescription: `
PROJECT OVERVIEW:
Labour Ekta is a comprehensive native Android application developed using Kotlin. It serves as a multifaceted platform designed to connect administrators, vehicle operators, and companies, facilitating the management of job campaigns, vehicle bookings, user profiles, and the automated generation of certificates and invoices. The application prioritizes a seamless user experience, incorporating secure OTP-based login and efficient integration with backend services (assumed).

-----------------------------------
KEY FEATURES:
-----------------------------------

SECURE AUTHENTICATION & REGISTRATION:
*   OTP-Based Login: Ensures secure access to the platform. Users verify via OTP before completing the full registration (company/operator details).

CAMPAIGN MANAGEMENT:
*   Admin Control: Administrators can create, edit, and manage job or service campaigns.
*   User Visibility: All active campaigns are readily visible to users within the mobile application.

USER PROFILE MANAGEMENT:
*   Editable Profiles: Users can update their profile information. For data integrity, core details like name, email, and phone number are non-editable post-registration.

CERTIFICATES & INVOICING:
*   Automated Certificate Generation: Certificates are automatically generated for registered users.
*   In-App Downloads: Users can conveniently download their certificates directly from the app.
*   Invoice System: Invoices are generated for transactions such as membership payments and donations.

VEHICLE BOOKING SYSTEM:
*   Vehicle Listings: Admins can list available vehicles for booking.
*   Booking Functionality: Operators and companies can browse and book available vehicles.
*   Admin Notification: The admin panel receives booking details along with the user's contact information for follow-up.

BUG FIXES & PERFORMANCE ENHANCEMENTS:
*   Splash Screen: Resolved rendering issues for a smoother app launch.
*   Complaint & Bug Tracking: Implemented fixes for reported issues.
*   Job Details Display: Corrected display of job information on Home and Job Details screens.
*   Job Application Workflow:
    *   Ensured successful submission of job applications.
    *   Integrated email notifications upon application.
    *   Made applied jobs visible to administrators.
*   Notifications: Implemented push/email notifications for new job postings.
*   Overall Performance: Enhanced application responsiveness and stability.

-----------------------------------
TECHNOLOGY STACK:
-----------------------------------

*   Primary Language: Kotlin
*   Platform: Android (Native Application Development)
*   User Interface: Android XML Layouts, Material Design Components
*   Networking: Retrofit/Volley (for API communication with backend)
*   Authentication: OTP-based (potentially using Firebase Authentication or a third-party SMS gateway API)
*   Backend: Assumed to be Node.js/Express.js (Note: Backend code is not part of this specific Android repository)
*   Version Control: Git & GitHub

-----------------------------------
DEVELOPMENT FOCUS:
-----------------------------------
The development focused on creating a user-centric mobile experience, robust feature implementation, and addressing critical bug fixes to ensure a stable and reliable application for all user roles.
      `,
      technologies: ["Kotlin", "Android Native", "XML Layouts", "Material Design", "OTP Authentication", "API Integration (Retrofit/Volley)", "MVVM/MVC (Assumed)"],
      imageUrl: `${placeholderImageBase}Labour+Ekta+App`,
      githubUrl: "https://github.com/Priyanshu845438/Labour-Ekta",
      liveDemoUrl: "#", // Android apps usually don't have a live web demo
      images: [
        `${detailedPlaceholderImageBase}LabourEkta_Login`,
        `${detailedPlaceholderImageBase}LabourEkta_Campaigns`,
        `${detailedPlaceholderImageBase}LabourEkta_VehicleBooking`,
        `${detailedPlaceholderImageBase}LabourEkta_Profile`,
      ]
    },
    {
      id: "tours-and-travel-website",
      name: "🧳 Tours and Travel 🌍",
      description: "A responsive website for Manav Tours and Travel, showcasing packages and enabling inquiries. Built with HTML, CSS, JS, and PHP.",
      detailedDescription: `
WELCOME TO MANAV TOURS AND TRAVEL! 🌍

This website serves as your one-stop solution for exploring travel packages, booking tours, and discovering amazing destinations. It's designed to offer a modern, user-friendly interface for customers looking to plan their next vacation.

-----------------------------------
📌 PROJECT OVERVIEW:
-----------------------------------

Manav Tours and Travel is a responsive and interactive website created to:
*   Showcase popular tour packages and destinations.
*   Enable easy inquiry and booking processes for customers.
*   Provide comprehensive details about available services, special offers, and unique travel experiences.
*   Clearly present company information and multiple contact options.

-----------------------------------
🛠️ TECHNOLOGY STACK:
-----------------------------------

*   Frontend: HTML5, CSS3, JavaScript (for interactivity and dynamic content)
*   Backend: PHP (for form handling, server-side logic if any)
*   Design Principles: Fully Responsive Design, ensuring optimal viewing across all devices (Mobile-Friendly).

-----------------------------------
📂 KEY FEATURES:
-----------------------------------

*   🏞️ Featured Destinations Carousel: A dynamic slider showcasing attractive travel spots.
*   🎯 Tour Categories: Well-organized categories such as Adventure, Honeymoon, Family Tours, etc.
*   📄 Detailed Package Information: Each package includes itinerary, pricing, and inclusions.
*   📞 Contact / Inquiry Form: User-friendly form with validation for seamless communication.
*   💬 Customer Testimonials/Reviews: Section to build trust and showcase positive experiences.
*   🌐 Social Media Integration: Links to social media profiles for wider reach.
*   🧭 Google Maps Embed: For displaying office location or key destination points.

-----------------------------------
GITHUB REPOSITORY:
-----------------------------------
You can explore the codebase and further details on GitHub via the link provided on the project card.
      `,
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Responsive Design"],
      imageUrl: `${placeholderImageBase}Tours+And+Travel`,
      githubUrl: "https://github.com/Priyanshu845438/Tours-and-Travel",
      liveDemoUrl: "#",
      images: [
        `${detailedPlaceholderImageBase}ToursTravel_Homepage`,
        `${detailedPlaceholderImageBase}ToursTravel_Packages`,
        `${detailedPlaceholderImageBase}ToursTravel_Destinations`,
        `${detailedPlaceholderImageBase}ToursTravel_ContactForm`
      ]
    },
    {
      id: "agreement-generator-php",
      name: "📄 PHP Agreement & Document Generator",
      description: "A dynamic PHP-based tool for generating customized agreements and formal documents from templates and user inputs.",
      detailedDescription: `
PROJECT OVERVIEW:
The PHP Agreement & Document Generator is a web-based application designed to streamline and automate the creation of standardized legal or formal documents. Users can input specific details, which are then dynamically inserted into predefined templates to produce customized agreements, contracts, or other formal paperwork.

-----------------------------------
KEY FEATURES:
-----------------------------------
*   Dynamic Content Insertion: Utilizes PHP to process user-submitted data (e.g., names, dates, specific clauses) and populate document templates.
*   Template-Based System: Allows for the creation and management of various document templates, ensuring consistency and reusability. (Conceptual: Could involve simple file-based templates or a database-driven system for more complex scenarios).
*   User-Friendly Input Forms: Provides intuitive HTML forms for users to enter the necessary information required for the document.
*   Document Output: Generates documents primarily as HTML which can be styled with CSS for presentation and print. (Conceptual: Could be extended with libraries like FPDF or TCPDF for direct PDF generation).
*   Responsive Interface: Ensures usability across different devices for easy access and document creation.

-----------------------------------
TECHNOLOGY STACK:
-----------------------------------
*   Backend: PHP (for server-side logic, form processing, and template manipulation)
*   Frontend: HTML5, CSS3, JavaScript (for user interface and client-side validation/interactivity)
*   Database (Conceptual): MySQL or similar for storing user accounts or document templates if advanced features were implemented.
*   Templating Engine (Conceptual): Could use a simple include-based system or a more advanced PHP templating engine.
*   Version Control: Git & GitHub

-----------------------------------
PURPOSE & USE CASE:
-----------------------------------
This tool is ideal for small businesses, freelancers, or individuals who frequently need to generate similar types of documents and want to save time while ensuring accuracy and consistency. It demonstrates proficiency in server-side scripting with PHP and frontend web technologies.
      `,
      technologies: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL (Conceptual)", "Document Templating"],
      imageUrl: `${placeholderImageBase}AgreementGenPHP`,
      githubUrl: "https://github.com/Priyanshu845438/agreement-generator",
      liveDemoUrl: "#", // PHP projects often need a server to run, so a live demo might not always be available from GitHub Pages
      images: [
        `${detailedPlaceholderImageBase}AgreementGen_Form`,
        `${detailedPlaceholderImageBase}AgreementGen_Output`,
        `${detailedPlaceholderImageBase}AgreementGen_Template`
      ]
    },
    {
      id: "real-estate-website",
      name: "🏡 Real Estate Website",
      description: "A fully responsive real estate website (HTML, CSS, JS) showcasing property listings and services with a modern UI.",
      detailedDescription: `
PROJECT OVERVIEW:
This is a fully responsive real estate website designed using HTML, CSS, and JavaScript. It provides an intuitive, clean, and modern user interface for showcasing property listings, real estate services, and contact information. This project demonstrates front-end web development skills focused on layout design, user experience, and responsive mobile-first principles.

-----------------------------------
KEY SECTIONS & FEATURES:
-----------------------------------
*   🏘️ Property Listings: Display properties with details and images.
*   📞 Contact & Inquiry Form: Easy way for users to get in touch.
*   📋 About & Services Page: Information about the real estate agency.
*   🔎 Simple Navigation: With smooth scroll and engaging animations.
*   📱 Responsive Design: Adapts seamlessly to all devices (desktops, tablets, mobiles).
*   Interactive Components: Features like menu toggle and scroll-triggered animations.
*   Clean & Readable Codebase: Well-structured for maintainability.
*   Lightweight & Fast-Loading: Optimized for performance.
*   SEO-Friendly Structure: Basic SEO considerations implemented.

This project is ideal for anyone looking to explore front-end development in the real estate domain or adapt a template for similar business websites.

-----------------------------------
TECHNOLOGIES USED:
-----------------------------------
*   HTML5
*   CSS3
*   JavaScript (Vanilla JS)
*   Responsive Design Principles

-----------------------------------
SETUP INSTRUCTIONS:
-----------------------------------
1.  Clone the repository from GitHub.
2.  Open the \`index.html\` file in any modern web browser.
3.  Customize content (text, images, property details) as needed by editing the HTML and CSS files.
      `,
      technologies: ["HTML5", "CSS3", "JavaScript (Vanilla JS)", "Responsive Design"],
      imageUrl: `${placeholderImageBase}Real+Estate+Site`,
      githubUrl: "https://github.com/Priyanshu845438/Nitin-Estate",
      liveDemoUrl: "#", // Typically, static sites like this can be hosted on GitHub Pages
      images: [
        `${detailedPlaceholderImageBase}RealEstate_Listings`,
        `${detailedPlaceholderImageBase}RealEstate_Contact`,
        `${detailedPlaceholderImageBase}RealEstate_MobileView`
      ]
    },
    {
      id: "android-news-app", 
      name: "📰 Android News Application (Kotlin)",
      description: "A Kotlin-based Android app fetching real-time news via NewsAPI, using Retrofit, Coil, and RecyclerView with MVVM.",
      detailedDescription: `
PROJECT DESCRIPTION:
A simple Android News Application built with Kotlin using NewsAPI.org to fetch the latest headlines. The app demonstrates the use of Retrofit for network calls, Coil for efficient image loading, and RecyclerView for displaying news articles in a clean and responsive UI. This project follows MVVM architecture and emphasizes modular, readable, and maintainable code.

-----------------------------------
✨ KEY FEATURES:
-----------------------------------
*   📡 Fetch Real-Time News using NewsAPI.org
*   🔄 Retrofit Integration for seamless API calls
*   🖼️ Coil Library for efficient image loading and caching
*   📰 RecyclerView to display dynamic news lists
*   🌐 Internet Permission for API access
*   📱 Responsive UI with Material Design components
*   🏛️ MVVM (Model-View-ViewModel) Architecture

-----------------------------------
🛠️ TECH STACK:
-----------------------------------
*   Language: Kotlin
*   Platform: Android Native
*   Networking: Retrofit + Gson Converter
*   Image Loading: Coil
*   UI Components: RecyclerView, CardView, ConstraintLayout
*   Architecture: MVVM (Model-View-ViewModel)
*   API Source: NewsAPI.org

-----------------------------------
GITHUB REPOSITORY:
-----------------------------------
Explore the codebase: https://github.com/Priyanshu845438/Newsapp
      `,
      technologies: ["Kotlin", "Android Native", "NewsAPI.org", "Retrofit", "Gson", "Coil (Image Loading)", "RecyclerView", "CardView", "MVVM Architecture", "Material Design"],
      imageUrl: `${placeholderImageBase}NewsAppKotlin`,
      githubUrl: "https://github.com/Priyanshu845438/Newsapp",
      liveDemoUrl: "#", // Android apps don't have live web demos
      images: [
        `${detailedPlaceholderImageBase}NewsApp_Home`,
        `${detailedPlaceholderImageBase}NewsApp_Article`,
        `${detailedPlaceholderImageBase}NewsApp_Loading`,
      ]
    },
    {
      id: "demokevin-android-donation", // Updated ID
      name: "🤝 DemoKevin - Android Donation Platform",
      description: "A Kotlin-based Android app for a simple donation platform, focusing on UI/UX with minimal backend. Ideal for prototyping.",
      detailedDescription: `
PROJECT OVERVIEW:
DemoKevin is a Kotlin-based Android application designed as a simple donation platform. It features a modern UI and basic functionality to simulate donation-related user flows. The project focuses primarily on the frontend with minimal backend logic, making it ideal for prototyping, UI/UX demonstration, or educational purposes in Android development.

-----------------------------------
📱 KEY FEATURES:
-----------------------------------
*   Clean and User-Friendly UI: Built with modern Android UI practices, potentially using Jetpack Compose or traditional XML layouts with Material Design components.
*   Simulated Donation Workflows: Demonstrates user flows for selecting causes, entering donation amounts, and confirming donations (without actual payment processing).
*   Minimal Backend Logic: Primarily frontend-focused, using local data structures or mock API responses to simulate data interactions.
*   Modular Codebase: Written in Kotlin, emphasizing readable and maintainable code structure, likely following MVVM architecture.
*   Smooth Screen Navigation: Utilizes Android's Navigation Component for a seamless user experience between different screens.
*   Material Design Components: Adherence to Material Design guidelines for a consistent and visually appealing interface.

-----------------------------------
🛠️ TECH STACK:
-----------------------------------
*   Language: Kotlin
*   Architecture: MVVM (Model-View-ViewModel)
*   UI Components: ConstraintLayout / Jetpack Compose, CardView, RecyclerView (or LazyColumn/Row in Compose), Material Components for Android.
*   Navigation: Android Navigation Component.
*   Build System: Gradle (likely using Kotlin DSL - .kts files for build scripts).
*   Project Type: Android Application (Frontend-Focused).

-----------------------------------
PURPOSE:
-----------------------------------
This project serves as a demonstration of Android UI/UX development skills, showcasing the ability to build intuitive interfaces and user flows for mobile applications using Kotlin and modern Android development tools.
      `,
      technologies: ["Kotlin", "Android Native", "Jetpack Compose (or XML)", "MVVM Architecture", "Navigation Component", "Material Design", "RecyclerView", "CardView", "Gradle (Kotlin DSL)"],
      imageUrl: `${placeholderImageBase}DemoKevinApp`,
      githubUrl: "https://github.com/Priyanshu845438/DemoKevin",
      liveDemoUrl: "#", // Android app
      images: [
        `${detailedPlaceholderImageBase}DemoKevin_Home`,
        `${detailedPlaceholderImageBase}DemoKevin_Donate`,
        `${detailedPlaceholderImageBase}DemoKevin_Confirm`,
      ]
    },
    {
      id: "kotlin-android-mini-projects",
      name: "📚 Kotlin Android Mini Projects Collection",
      description: "A collection of 14+ small Kotlin Android projects exploring various components, libraries, and architecture patterns from college.",
      detailedDescription: `
PROJECT OVERVIEW:
This repository is a collection of small Android projects developed using Kotlin during my college learning phase. These projects explore various fundamental Android components, essential libraries, and common architecture patterns. Each mini-project focuses on a specific feature or concept, contributing to a strong foundational understanding of Android app development.

-----------------------------------
📦 PROJECTS INCLUDED (Highlights):
-----------------------------------
1.  🔽 **Bottom Navigation App**: Demonstrates \`BottomNavigationView\` for seamless tab switching using multiple fragments and fragment transactions.
2.  🔥 **Firebase Auth App**: Basic Firebase Authentication integration (Email/Password), including login, registration, and user session handling.
3.  📡 **Firebase Realtime DB Demo**: Simple app for reading and writing data to Firebase Realtime Database, showcasing live updates.
4.  🔄 **Intent Data App**: Passes data between activities using Intents and Intent extras.
5.  📰 **News Android App (NewsAPI)**: Fetches latest news using NewsAPI.org, implementing Retrofit, RecyclerView, and Coil for image loading.
6.  📰 **NewsApp (Alternate Version)**: Another take on a news application, possibly with different UI or structural approaches.
7.  🗂️ **RecyclerView App**: Displays a list of items using \`RecyclerView\`, including custom adapters and click listeners.
8.  🎬 **Splash Screen App**: Implements a basic splash screen with a timer and transition to the main activity.
9.  🖼️ **Swipeable Image Gallery**: Gallery with swipe navigation using \`ViewPager\` or \`ViewPager2\`.
10. 📑 **TabLayout App**: Uses \`TabLayout\` with \`ViewPager\` to switch between different tabs/fragments.
11. 🍞 **Toast App**: Basic app to demonstrate the usage of Toast messages for user feedback.
12. 📺 **YouTube Clone (UI Focus)**: A UI-only clone of the YouTube app, focusing on layout structuring, icons, and responsiveness.
13. 🔐 **Login App**: Simple login screen with input validation, potentially using SharedPreferences or mock authentication.
14. 🗃️ **RoomDB Demo**: Local database integration using Room Persistence Library, including Entity, DAO, and ViewModel setup.
... and potentially more, as this is a collection of various small learning projects.

-----------------------------------
🛠️ TECH & CONCEPTS COVERED:
-----------------------------------
*   **Language**: Kotlin (Fundamentals, Coroutines, Extensions)
*   **Android Architecture Components**: MVVM (Model-View-ViewModel), ViewModel, LiveData
*   **Firebase**: Authentication (Email/Password), Realtime Database
*   **Networking**: Retrofit for API consumption, Gson for JSON parsing
*   **UI Components**: RecyclerView, CardView, ViewPager/ViewPager2, TabLayout, BottomNavigationView, ConstraintLayout, Material Design Components
*   **Data Persistence**: Room Database, SharedPreferences
*   **Core Android**: Activities, Fragments, Intents, Services (basic), Broadcast Receivers (basic)
*   **Image Loading**: Coil
*   **Build System**: Gradle (with Kotlin DSL - .kts or Groovy)
*   **General Concepts**: Navigation, Splash Screens, Toast messages, UI/UX design principles, Error Handling.

-----------------------------------
🚀 GETTING STARTED:
-----------------------------------
Each mini-project is typically in its own folder within the main repository. To run any specific project:
1.  Clone the main \`AndroidStudioProjects\` repository.
2.  Navigate to the desired mini-project's folder.
3.  Open that specific project folder in Android Studio.
4.  Allow Gradle to sync and build the project.
5.  Run the application on an Android emulator or a physical device.

(Note: Some projects might require API keys for services like NewsAPI or Firebase setup. Refer to individual project READMEs if available, or set them up as needed.)

-----------------------------------
PURPOSE:
-----------------------------------
This collection showcases a practical, hands-on approach to learning Android development by building small, focused applications. It reflects a journey of exploring different facets of the Android SDK and common development practices.
      `,
      technologies: ["Kotlin", "Android Native", "Firebase Auth", "Firebase Realtime DB", "Retrofit", "RoomDB", "MVVM", "RecyclerView", "ViewPager", "TabLayout", "Material Design"],
      imageUrl: `${placeholderImageBase}Kotlin+Mini+Projects`,
      githubUrl: "https://github.com/Priyanshu845438/AndroidStudioProjects",
      liveDemoUrl: "#", // Android apps
      images: [
        `${detailedPlaceholderImageBase}Android_Project_Collage1`,
        `${detailedPlaceholderImageBase}Android_Firebase_Demo`,
        `${detailedPlaceholderImageBase}Android_News_Demo`,
        `${detailedPlaceholderImageBase}Android_UI_Demo`
      ]
    },
    {
      id: "js-timepass-games", // Updated ID
      name: "🎮 JavaScript Timepass Games Collection",
      description: "A collection of 5+ fun, interactive small games (Colour Guess, GuessNum, Snake Ladder, Tetris, TikTac) built with Vanilla JavaScript, HTML, and CSS.",
      detailedDescription: `
PROJECT OVERVIEW:
"Timepass_Games by Priyanshu" is a delightful collection of classic and simple interactive games developed purely with JavaScript, HTML, and CSS. This project serves as a showcase of fundamental game mechanics, DOM manipulation, and logical problem-solving using Vanilla JavaScript, without relying on external frameworks or libraries. It's designed to be a fun way to engage users and demonstrate core web development skills.

-----------------------------------
🕹️ GAMES INCLUDED:
-----------------------------------
1.  🎨 **Colour Guess**: A game where players must guess the correct color from a set of displayed choices based on a given RGB value or hint.
2.  🔢 **GuessNum**: A classic number guessing game where the player tries to guess a randomly generated number within a certain range, receiving feedback like "too high" or "too low."
3.  🐍 **Snake Ladder**: A digital adaptation of the traditional board game "Snakes and Ladders," involving dice rolls and navigating a game board.
4.  🧱 **Tetris**: The iconic puzzle game where players arrange falling tetrominoes (geometric shapes composed of four square blocks) to complete horizontal lines.
5.  ⭕❌ **TikTac (Tic-Tac-Toe)**: A simple, two-player game where players take turns marking spaces in a 3x3 grid, aiming to get three of their marks in a row.

-----------------------------------
🛠️ TECHNOLOGIES USED:
-----------------------------------
*   **HTML5**: For the basic structure and markup of each game.
*   **CSS3**: For styling the visual appearance, layout, and responsiveness of the games.
*   **JavaScript (Vanilla JS)**: For implementing all game logic, interactivity, event handling, and dynamic updates to the DOM.

-----------------------------------
🚀 KEY FEATURES:
-----------------------------------
*   **Simple and Intuitive UI**: Each game is designed with a clean and easy-to-understand user interface.
*   **Interactive Gameplay**: Provides engaging and direct interaction for the players.
*   **Vanilla JavaScript Focus**: Highlights the capabilities of core JavaScript for game development.
*   **Lightweight and Accessible**: Runs directly in any modern web browser without special requirements.

-----------------------------------
📄 HOW TO PLAY:
-----------------------------------
1.  Clone or download the "JavaScript_TImePass" repository from GitHub.
2.  Navigate to the specific game folder you wish to play.
3.  Open the main \`index.html\` (or similarly named HTML file) for that game in your web browser.
4.  Follow any on-screen instructions or intuitive game mechanics to start playing.

-----------------------------------
💬 CONTRIBUTING:
-----------------------------------
Contributions to enhance existing games or add new simple games to the collection are welcome! Feel free to fork the repository, create issues for bugs or suggestions, and submit pull requests.

-----------------------------------
PURPOSE:
-----------------------------------
This collection demonstrates foundational JavaScript skills applied to create interactive and fun mini-games, suitable for learning, practice, or simply a bit of "timepass."
      `,
      technologies: ["JavaScript (Vanilla JS)", "HTML5", "CSS3", "Game Logic", "DOM Manipulation"],
      imageUrl: `${placeholderImageBase}JSTimepassGames`,
      githubUrl: "https://github.com/Priyanshu845438/JavaScript_TImePass",
      liveDemoUrl: "#", // Typically, static sites like this can be hosted on GitHub Pages
      images: [
        `${detailedPlaceholderImageBase}JSGame_ColourGuess`,
        `${detailedPlaceholderImageBase}JSGame_GuessNum`,
        `${detailedPlaceholderImageBase}JSGame_SnakeLadder`,
        `${detailedPlaceholderImageBase}JSGame_Tetris`,
        `${detailedPlaceholderImageBase}JSGame_TikTac`
      ]
    },
    {
      id: "mediconnect-ai", // Updated from chat-application-socketio
      name: "🩺 MediConnect-AI (Advanced Healthcare Platform)",
      description: "An advanced MERN stack AI-powered healthcare platform, extending chatbot capabilities with enhanced features and robust backend.",
      detailedDescription: `
PROJECT OVERVIEW:
MediConnect-AI is an advanced healthcare platform built on the MERN stack, designed to provide comprehensive, AI-driven health assistance. This project aims to extend the functionalities of a typical healthcare chatbot by incorporating more sophisticated features, robust backend services, and a focus on personalized user experiences. It leverages a powerful AI model like Gemini API for intelligent interactions.

-----------------------------------
CORE FEATURES:
-----------------------------------
*   **Intelligent AI Chatbot (Gemini API Powered)**:
    *   Advanced symptom analysis and contextual understanding.
    *   Personalized health advice and information dissemination (disclaimer: not a substitute for professional medical consultation).
    *   Natural Language Processing for intuitive conversations.
*   **Comprehensive Health Dashboard**:
    *   User profiles with health history tracking (conceptual, with privacy considerations).
    *   Personalized wellness tips and reminders.
*   **Secure Real-Time Communication**:
    *   Socket.IO for instant messaging with the AI or potentially for secure patient-provider interactions (conceptual future scope).
*   **Extensive Health Resource Library**:
    *   Curated articles, videos, and links to verified medical information.
*   **Robust User Authentication & Authorization**:
    *   Secure JWT-based authentication for protecting user data.
    *   Role-based access for potential future admin or practitioner portals.
*   **(Conceptual) Teleconsultation Features**:
    *   Potential for WebRTC integration for video consultations (future enhancement).
*   **Data Analytics & Insights**:
    *   Admin panel for viewing anonymized usage statistics and trends (conceptual).

-----------------------------------
TECHNOLOGY STACK:
-----------------------------------
*   **Frontend**: React.js, Tailwind CSS (for responsive and modern UI/UX)
*   **Backend**: Node.js, Express.js (building scalable RESTful APIs & WebSocket handling)
*   **Database**: MongoDB (with Mongoose for flexible data modeling and storage)
*   **AI Engine**: Gemini API (or similar advanced Large Language Model)
*   **Real-Time Communication**: Socket.IO
*   **Authentication**: JSON Web Tokens (JWT)
*   **Security**: HTTPS, Data Encryption best practices (e.g., for sensitive health data)
*   **(Conceptual Future Tech)**: WebRTC for video, Advanced Data Analytics tools.
*   **API Testing & Design**: Postman, OpenAPI/Swagger (conceptual for documentation)
*   **Version Control**: Git & GitHub

-----------------------------------
PROJECT GOALS & VISION:
-----------------------------------
MediConnect-AI aims to be a next-generation healthcare companion, offering more than just information retrieval. The vision is to create a proactive, personalized, and secure platform that empowers users to manage their health effectively, connecting them with AI-driven insights and (conceptually) healthcare professionals. This project emphasizes scalability, security, and a user-centric approach to digital health.
      `,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API (LLM)", "Socket.IO", "Tailwind CSS", "JWT", "WebRTC (Conceptual)", "Data Encryption"],
      imageUrl: `${placeholderImageBase}MediConnectAI`,
      githubUrl: "https://github.com/Priyanshu845438/MediConnect-AI",
      liveDemoUrl: "#",
      images: [
        `${detailedPlaceholderImageBase}MediConnect_Dashboard`,
        `${detailedPlaceholderImageBase}MediConnect_AIChat`,
        `${detailedPlaceholderImageBase}MediConnect_Resources`,
        `${detailedPlaceholderImageBase}MediConnect_Profile`
      ]
    },
    {
      id: "url-shortener-service",
      name: "🔗 Upcoming Project Zeta",
      description: "Details for this exciting project will be updated soon! Stay tuned.",
      detailedDescription: "This section is currently under development. I'm working on an innovative project, and full details, including features, tech stack, and a live demo/GitHub link, will be available shortly. Thank you for your patience!",
      technologies: ["TBD", "Utility Focused"],
      imageUrl: `${placeholderImageBase}Coming+Soon+Zeta`,
    },
    {
      id: "quiz-app-react",
      name: "🎮 Upcoming Project Eta",
      description: "Details for this exciting project will be updated soon! Stay tuned.",
      detailedDescription: "This section is currently under development. I'm working on an innovative project, and full details, including features, tech stack, and a live demo/GitHub link, will be available shortly. Thank you for your patience!",
      technologies: ["TBD", "Interactive"],
      imageUrl: `${placeholderImageBase}Coming+Soon+Eta`,
      githubUrl: "#",
    }
    // Total 13 projects: 11 actual + 2 updated dummy
  ],
  personalInterests: [
    "Exploring AI & Machine Learning Concepts",
    "Strategic Board Games & Puzzles",
    "Culinary Arts & Fusion Cooking",
    "Learning New Programming Languages (Recreational)",
    "Sci-Fi Literature & Cinema",
    "Amateur Astrophotography",
    "Mountain Biking & Trail Hiking",
    "Playing the Guitar (Intermediate)",
    "Volunteer Coding for Non-profits",
    "Competitive eSports (BGMI)",
    "International Travel & Cultural Immersion",
    "Mindfulness & Meditation Practices"
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
  { id: "responsibilities", label: "Roles" }, // Updated label for Positions of Responsibility
  { id: "activity-stats", label: "Activity" }, 
  { id: "github-stats", label: "GitHub Stats" }, 
  { id: "interests", label: "Interests"},
  { id: "contact", label: "Contact" },
];
