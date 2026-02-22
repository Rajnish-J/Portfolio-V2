import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "rajnishofficial02@gmail.com",
    link: "mailto:rajnishofficial02@gmail.com",
    color: "primary",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "+91 91769 60600",
    link: "tel:+919176960600",
    color: "secondary",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    value: "Chennai, Tamil Nadu, India",
    link: null,
    color: "accent",
  },
];

export const socialLinks = [
  {
    icon: <Github className="w-6 h-6" />,
    title: "GitHub",
    username: "Rajnish-J",
    link: "https://github.com/Rajnish-J",
    color: "primary",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: "LinkedIn",
    username: "Rajnish J",
    link: "https://www.linkedin.com/in/rajnish-j-a749bb248",
    color: "secondary",
  },
];
