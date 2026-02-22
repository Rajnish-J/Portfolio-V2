import { Code2, Users, Database, Zap } from "lucide-react";

export const projects = [
    {
        title: "Personal Portfolio",
        description:
            "A modern, responsive portfolio built with React.js showcasing my skills, projects, and enabling collaboration. Features interactive UI/UX design and smooth animations.",
        image: "/api/placeholder/400/250",
        tags: ["React.js", "JavaScript", "CSS", "Responsive Design"],
        github: "https://github.com/Rajnish-J/Portfolio.git",
        live: "https://rajnish7102.netlify.app/",
        date: "Dec 2024",
        icon: <Code2 className="w-6 h-6" />,
        color: "primary",
    },
    {
        title: "Hospital Management System",
        description:
            "Comprehensive healthcare management solution for patient registration, appointment scheduling, and doctor availability tracking with full CRUD operations.",
        image: "/api/placeholder/400/250",
        tags: ["Spring Boot", "React.js", "MySQL", "REST API"],
        github: "https://github.com/Rajnish-J/Hospify",
        live: null,
        date: "Dec 2024",
        icon: <Users className="w-6 h-6" />,
        color: "secondary",
    },
    {
        title: "Agricultural Supply Chain System",
        description:
            "Integrated warehouse management system designed to optimize storage and tracking of agricultural materials with real-time inventory management.",
        image: "/api/placeholder/400/250",
        tags: ["JDBC", "Java", "Database Design", "Inventory Management"],
        github: null,
        live: null,
        date: "Mar 2024",
        icon: <Database className="w-6 h-6" />,
        color: "accent",
    },
    {
        title: "M.A.I.D - Cleaning Robot",
        description:
            "Intelligent home cleaning bot using Arduino microcontroller with automated material dispensing and efficient navigation systems.",
        image: "/api/placeholder/400/250",
        tags: ["Arduino", "C++", "Embedded Systems", "IoT"],
        github: null,
        live: null,
        date: "Nov 2022",
        icon: <Zap className="w-6 h-6" />,
        color: "primary",
    },
];
