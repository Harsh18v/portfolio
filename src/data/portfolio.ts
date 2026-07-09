export const personalInfo = {
  name: "Harsh Vishwakarma",
  title: "Full Stack Developer",
  tagline: "I build fast, scalable, and responsive web applications using React, Next.js, Node.js, Express, MongoDB, and TypeScript. Building modern products from database to deployment.",
  email: "harsh17v@gmail.com",
  location: "Pune, India",
  bio: "Full stack developer focused on shipping fast, reliable products. I work across the stack with MERN, TypeScript, and Next.js — designing schemas, building APIs, and crafting interfaces that feel instant.",
  resumeUrl: "/resume/Harsh_Vishwakarma_Resume.pdf",
};

export const stats = [
  { value: "1.5", label: "Years building" },
  { value: "4+", label: "Projects build" },
  { value: "MERN ", label: "Primary stack" },
];

export type SocialLink = {
  name: string;
  url: string;
  icon: "github" | "linkedin";
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Harsh18v", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/harsh-vishwakarma-22982b28b", icon: "linkedin" },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "MongoDB"],
  },
  {
    category: "Infrastructure",
    items: ["Git", "Vercel", "Render"],
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java"],
  },
];

export const projects = [
  {
    title: "InterviewMentor AI",
    description:
      "AI-powered interview preparation platform built with the MERN stack and Google Gemini API.",
    tags: ["React.js", "JavaScript", "Express", "Node.js", "MongoDB", "TailwindCSS"],
    liveUrl: "https://harsh-interviewmentor-ai.vercel.app/",
    githubUrl: "https://github.com/Harsh18v/interviewmentor-ai",
    featured: true,
  },
  {
    title: "ChatBox",
    description:
      "Real-time chat application built with React.js, Node.js, MongoDB, and Socket.IO.",
    tags: ["React", "JavaScript", "Express", "Node.js", "Socket.io", "MongoDB", "TailwindCSS"],
    liveUrl: "https://hv-chat-box.vercel.app",
    githubUrl: "https://github.com/Harsh18v/ChatBox",
    featured: true,
  },
  {
    title: "Developer Portfolio",
    description:
      "Personal site with optimized performance and responsive layout.",
    tags: ["Next.js", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2026 — Present",
    description:
      "End-to-end web applications for clients using MERN and Next.js.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const allSkills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "REST APIs", "MongoDB", "Git", "Vercel", "Render", "JavaScript", "Python", "Java", "HTML5", "CSS3"
];


