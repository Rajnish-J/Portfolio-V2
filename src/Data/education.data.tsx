import { Trophy, Award } from "lucide-react";

export const educationData = [
    {
        degree: "B.E. Electronics and Communication Engineering",
        institution: "Panimalar Engineering College",
        location: "Chennai, Tamil Nadu",
        duration: "2020 - 2024",
        grade: "CGPA: 8.78",
        status: "Graduated",
        description:
            "Specialized in electronics, communication systems, and embedded programming with strong focus on problem-solving.",
        highlights: [
            "Dean's List for Academic Excellence",
            "Department Head of IETE",
            "Led technical symposiums",
        ],
        color: "primary",
    },
];

export const achievements = [
    {
        title: "Ullas Young Achiever",
        organization: "Polaris",
        period: "2016 - 2020",
        icon: <Trophy className="w-6 h-6" />,
        color: "primary",
    },
    {
        title: "NMMS Scholarship",
        organization: "Government of India",
        period: "2016",
        icon: <Award className="w-6 h-6" />,
        color: "secondary",
    },
];
