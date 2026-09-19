import profileImage from "../assets/images/profile1.jpg";


export const personalDetails = {
  name: "SADAQAT ALI",
  role: "Full Stack Developer",
  location: "Karachi, Pakistan",
  availability: "Open to Work",
  bio: "Passionate Full Stack Developer crafting modern, scalable web applications with React, Next.js, Node.js, and MongoDB. Focused on performance, clean architecture, and exceptional user experiences.",
  email: "sadaqat.mec786@gmail.com",
  brand: "0xSADAQAT",
  profileImage: profileImage,
};


export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const techStackCategories = [
  {
    category: "Frontend",
    icon: "brush",
    color: "border-t-primary/40",
    textColor: "text-primary",
    items: [
      { label: "React", icon: "deployed_code" },
      { label: "Next.js", icon: "terminal" },
    ],
  },
  {
    category: "Backend",
    icon: "settings_ethernet",
    color: "border-t-secondary/40",
    textColor: "text-secondary",
    items: [
      { label: "Node.js", icon: "dns" },
      { label: "Express", icon: "api" },
    ],
  },
  {
    category: "Database",
    icon: "database",
    color: "border-t-tertiary/40",
    textColor: "text-tertiary",
    items: [
      { label: "MongoDB", icon: "storage" },
      { label: "FireStore", icon: "cloud" },
    ],
  },
  {
    category: "Tools",
    icon: "build",
    color: "border-t-white/20",
    textColor: "text-on-surface",
    items: [
      { label: "GitHub", icon: "code" },
      { label: "Vercel", icon: "cloud_upload" },
    ],
  },
];

export const projects = [
  {
    title: "Matrimonial App",
    tags: ["React", "Firebase"],
    desc: "A full-stack matrimonial platform with profile matching, interests, real-time chat, notifications, and secure authentication",
    img: "https://i.ibb.co/hR5bn3dJ/Screenshot-2026-09-19-183150.png",
    hostedUrl: "https://lnkd.in/p/dzbsEpTE",
    repoUrl: "https://github.com/sadaqat14736/matrinomial-webApplication.git",
  },
  {
    title: "Routine-Tracker",
    tags: ["React", "Firebase", "Tailwind"],
    desc: "Routine tracking application built with React, Firebase, and Tailwind CSS.",
    img: "https://i.ibb.co/21MQ1647/Screenshot-2026-09-19-170054.png",
    hostedUrl: "https://routine-tracker-sand.vercel.app/",
    repoUrl: "https://github.com/sadaqat14736/routine-tracker.git",
  },

  {
    title: "Eleken",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "A website inspired by Eleken, featuring a modern layout, interactive sections, and a clean user experience.",
    img: "https://i.ibb.co/XkLy1jLW/Screenshot-2026-09-19-181315.png",
    hostedUrl: "https://eleken-web.vercel.app/",
    repoUrl: "https://github.com/sadaqat14736/Eleken-web.git",
  },
  // {
  //   title: "Eventica Travel",
  //   tags: ["HTML", "CSS", "Bootstrap"],
  //   desc: "A responsive travel website built with HTML, CSS, and Bootstrap, designed to provide users with an engaging and informative experience for exploring travel destinations and services.",
  //   img: " https://i.ibb.co/1YT8Rn93/Chat-GPT-Image-Sep-19-2026-05-31-30-PM.png",
  //   hostedUrl: "https://sadaqat14736.github.io/Eventica-Travel/",
  //   repoUrl: "https://github.com/sadaqat14736/Eventica-Travel.git",
  // },
];

