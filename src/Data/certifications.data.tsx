import { Code, Database, Globe, Award } from "lucide-react";

export const certifications = [
    {
        title: "Java Full Stack Course",
        provider: "QSpiders",
        category: "Full Stack Development",
        date: "2024",
        status: "Completed",
        description:
            "Comprehensive course covering Java backend development, Spring Boot, and full-stack application development.",
        skills: ["Java", "Spring Boot", "REST APIs", "Full Stack"],
        icon: <Code className="w-6 h-6" />,
        color: "primary",
        featured: true,
    },
    {
        title: "Joy Of Python",
        provider: "NPTEL",
        category: "Programming",
        date: "2023",
        status: "Completed",
        score: "81%",
        description:
            "Advanced Python programming concepts, data structures, and algorithmic thinking.",
        skills: ["Python", "Data Structures", "Algorithms"],
        icon: <Code className="w-6 h-6" />,
        color: "secondary",
    },
    {
        title: "Java: Understanding the Fundamentals",
        provider: "Scaler",
        category: "Programming",
        date: "2023",
        status: "Completed",
        description:
            "Core Java concepts, OOP principles, and programming best practices.",
        skills: ["Java", "OOP", "Programming"],
        icon: <Code className="w-6 h-6" />,
        color: "accent",
    },
    {
        title: "JavaScript",
        provider: "Scaler",
        category: "Frontend Development",
        date: "2023",
        status: "Completed",
        description:
            "Modern JavaScript ES6+, DOM manipulation, and asynchronous programming.",
        skills: ["JavaScript", "ES6+", "DOM"],
        icon: <Globe className="w-6 h-6" />,
        color: "primary",
    },
    {
        title: "SQL using MySQL",
        provider: "Scaler",
        category: "Database",
        date: "2023",
        status: "Completed",
        description:
            "Database design, complex queries, and MySQL optimization techniques.",
        skills: ["SQL", "MySQL", "Database Design"],
        icon: <Database className="w-6 h-6" />,
        color: "secondary",
    },
    {
        title: "Node.js",
        provider: "Scaler",
        category: "Backend Development",
        date: "2023",
        status: "Completed",
        description:
            "Server-side JavaScript, Express.js, and building scalable backend applications.",
        skills: ["Node.js", "Express.js", "Backend"],
        icon: <Code className="w-6 h-6" />,
        color: "accent",
    },
    {
        title: "React.js",
        provider: "Scaler",
        category: "Frontend Development",
        date: "2023",
        status: "Completed",
        description:
            "Component-based architecture, state management, and modern React patterns.",
        skills: ["React.js", "Components", "State Management"],
        icon: <Globe className="w-6 h-6" />,
        color: "primary",
    },
];

export const conferences = [
    {
        title: "Project Expo (M.A.I.D)",
        type: "Certificate of Appreciation",
        date: "2022",
        description:
            "Recognition for innovative Arduino-based cleaning robot project presentation.",
    },
    {
        title: "International Conference on Intelligent Computing (IConIC)",
        type: "PECTEAM 2K23",
        date: "2023",
        description:
            "Participated in technical conference on emerging computing technologies.",
    },
];
