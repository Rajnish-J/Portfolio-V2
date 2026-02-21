import * as s from "@/Imports/skills.imports"
import {
  Code,
  Database,
  Globe,
  Wrench,
  Brain,
  Users,
  Target,
  Clock,
  Lightbulb,
} from "lucide-react";

export const skillCategories = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Programming Languages",
    color: "primary",
    skills: [
      { name: "Java", image: s.java },
      { name: "JavaScript", image: s.JavaScript },
      { name: "TypeScript", image: s.TypeScript },
      { name: "Python", image: s.python },
    ],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Frontend Technologies",
    color: "secondary",
    skills: [
      { name: "React.js", image: s.ReactImg },
      { name: "HTML", image: s.HTML },
      { name: "CSS", image: CSS },
      { name: "Tailwind CSS", image: s.Tailwind },
      { name: "Material UI", image: s.MaterialUI },
      { name: "Bootstrap", image: s.Bootstrap },
      { name: "EcmaScript6", image: s.Es6 },
    ],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend & Database",
    color: "accent",
    skills: [
      { name: "Node.js", image: Node },
      { name: "Spring Boot", image: s.SpringBoot },
      { name: "REST APIs", image: s.Rest },
      { name: "FastAPI", image: s.fastapi },
      { name: "MySQL", image: s.Mysql },
      { name: "MongoDB", image: s.mongodb },
    ],
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Tools & Technologies",
    color: "primary",
    skills: [
      { name: "Git", image: s.GIT },
      { name: "VS Code", image: s.VScode },
      { name: "Postman", image: s.Postman },
      { name: "IntelliJ IDEA", image: s.Intelij },
      { name: "Eclipse", image: s.Eclipse },
    ],
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Core Concepts",
    color: "secondary",
    skills: [
      { name: "Data Structures", icon: <Brain className="w-12 h-12" /> },
      { name: "OOP", icon: <Code className="w-12 h-12" /> },
      { name: "JDBC", icon: <Database className="w-12 h-12" /> },
      { name: "JPA", icon: <Database className="w-12 h-12" /> },
    ],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Soft Skills",
    color: "accent",
    skills: [
      { name: "Leadership", icon: <Target className="w-12 h-12" /> },
      { name: "Problem Solving", icon: <Lightbulb className="w-12 h-12" /> },
      { name: "Time Management", icon: <Clock className="w-12 h-12" /> },
      { name: "Event Management", icon: <Users className="w-12 h-12" /> },
      { name: "Team Collaboration", icon: <Users className="w-12 h-12" /> },
    ],
  },
];