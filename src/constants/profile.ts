import { ProfileData } from "@/types/profile.type";

// Centralized Profile Data
export const profileData: ProfileData = {
  name: "Shani Maurya",
  title: "Software Developer | Web Applications",
  tagline:
    "Building scalable web applications and optimizing workflows with robust front-end and back-end solutions.",
  about:
    "I'm a passionate Software Developer with hands-on experience in building robust, scalable web applications. My core expertise lies in both front-end and back-end development, with a strong foundation in JavaScript and TypeScript. I am skilled in developing robust systems, optimizing business workflows, and delivering secure, high-quality solutions using technologies like Node.js and the React ecosystem.",
  skills: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "React.js",
    "Next.js",
    "Angular",
    "MySQL",
    "MongoDB",
    "Redis",
    "TypeORM",
    "Sequelize.js",
    "Socket.io",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "Docker",
    "Microservices",
    "RabbitMQ",
    "Python",
    "QPDF",
    "Postman",
  ],
  experience: [
    {
      title: "Software Developer",
      company: "Edulab",
      duration: "Nov 2022 - Mar 2025",
      description:
        "Developed and maintained full-stack web applications, contributing significantly to key projects including Question Paper Delivery (QPD), On Screen Marking (OSM), Alumni Portal, Digital Migration Certificate Issuance, and Digital Transfer Certificate (TC) Issuance. Leveraged a diverse tech stack encompassing JavaScript, TypeScript, Node.js, Express.js, React.js, Next.js, MySQL, TypeORM, Sequelize.js, Redis, Mongoose ODM, Angular, Socket.io, Microservices, and RabbitMQ to deliver high-quality, scalable, and secure solutions that optimized business workflows and enhanced user experiences.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      institution:
        "Chikitsak Samuhas Sir Sitaram and Lady Shantabai Patkar College of Arts and Sciences",
      duration: "Jun 2019 - Apr 2022",
      description: "Graduated with Grade: A+.",
    },
  ],
  projects: [
    {
      title: "Question Paper Delivery (QPD)",
      description:
        "Developed a secure system for managing and delivering examination content. Successfully delivered a platform to distribute over 5,000 password-protected PDFs under tight deadlines, achieving zero unauthorized access incidents through QPDF encryption. Built the end-to-end system using Next.js and Express.js, handling over 500 secure email keys daily and ensuring 100% security compliance.",
      technologies: [
        "Next.js",
        "Node.js",
        "QPDF",
        "Express.js",
        "MySQL",
        "Redis",
        "TypeScript",
        "React.js",
        "TypeORM",
        "Postman",
      ],
      link: "https://github.com/yourusername/ecommerce-platform", // Replace with actual project link
    },
    {
      title: "OSM (On Screen Marking)",
      description:
        "Designed and deployed a scalable platform for digital paper evaluation, which reduced evaluation time by 40% by enabling digital assessment of over 10,000 answer sheets. Built a responsive UI with React (Next.js, TypeScript), achieving a 98% evaluator satisfaction rate. Developed robust REST APIs using Node.js and Express, handling over 1,000 daily requests with 99.9% uptime. Automated annotations and mark calculations, reducing manual errors by 50%, and implemented a nested JSON question system with auto-email alerts, improving structural clarity and admin efficiency by 25%.",
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MySQL",
        "Redis",
        "JavaScript",
        "TypeORM",
        "Postman",
      ],
      link: "https://github.com/yourusername/ai-chatbot", // Replace with actual project link
    },
    {
      title: "Alumni Portal",
      description:
        "As a Full-Stack Developer, I built a comprehensive Alumni Portal designed for scalable web applications. The backend was developed using Node.js, Express.js, TypeScript, TypeORM, and MySQL, while the frontend was built with Angular. Key features included secure authentication & authorization (JWT, RBAC) with refresh tokens and password reset, real-time chat functionality using Socket.io, and robust admin tools for bulk alumni import and user management. This project significantly enhanced alumni community engagement.",
      technologies: [
        "TypeScript",
        "Express.js",
        "MySQL",
        "TypeORM",
        "Socket.io",
        "Angular",
        "Node.js",
      ],
      link: "https://github.com/yourusername/alumni-portal", // Replace with actual project link
    },
    {
      title: "Digital Migration Certificate Issuance System",
      description:
        "Developed a system to digitize the application, verification, and generation processes for migration certificates, making the process faster and more secure for educational institutions. I built user-friendly forms (Angular) for students and an administrative dashboard (Angular) for staff. The automated backend workflow (Node.js, Express.js) featured secure Role-Based Access Control (RBAC) and dynamic certificate generation, with efficient data management handled by MySQL (using Sequelize ORM).",
      technologies: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "MySQL",
        "Sequelize.js",
        "Angular",
      ],
      link: "https://github.com/yourusername/migration-certificate-system", // Replace with actual project link
    },
    {
      title: "Digital Transfer Certificate (TC) Issuance System",
      description:
        "Developed a comprehensive full-stack web application for the efficient generation and workflow management of Transfer Certificates (TCs). This system automated TC issuance, significantly improving speed, accuracy, and security for student transfers. I constructed a user-friendly student application portal with Angular Reactive Forms and an administrative workflow dashboard, integrating robust Role-Based Access Control (RBAC) for secure access. All data was managed in MySQL using Sequelize ORM, ensuring seamless interaction between the Angular frontend and Node.js/Express.js backend.",
      technologies: [
        "JavaScript",
        "Express.js",
        "Node.js",
        "Angular",
        "MySQL",
        "Sequelize.js",
      ],
      link: "https://github.com/yourusername/tc-issuance-system", // Replace with actual project link
    },
  ],
  resumeUrl: "/Shani_Maurya_Resume.pdf",
  linkedinUrl: "https://www.linkedin.com/in/shanimaurya1913",
  githubUrl: "https://github.com/shanimaurya1913",
  email: "shanimaurya1913@gmail.com",
};
