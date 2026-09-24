export const profile = {
  name: "Boutoutane Takey",
  initials: "BT",
  role: "Software Engineer",
  focus: "Full-stack development & applied AI",
  location: "Annaba, Algeria",
  email: "takibt4@gmail.com",
  availability: "Open to software engineering opportunities",
} as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/takibttn",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/takey-boutoutane-93523b308/",
  },
  {
    label: "X",
    href: "https://x.com/takibt2",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/taki__bttn/?next=%2F",
  },
] as const;

export const projects = [
  {
    slug: "hemocare",
    number: "01",
    category: "Mobile product",
    title: "HemoCare",
    description:
      "An intelligent mobile application that digitizes the blood donor process, making donor discovery and participation easier to manage.",
    stack: ["Flutter", "Dart", "Firebase"],
    href: "https://github.com/takibttn/hemocare.git",
    theme: "moss",
  },
  {
    slug: "face-recognition",
    number: "02",
    category: "Applied machine learning",
    title: "Face Recognition Model",
    description:
      "A real-time face recognition system built with data preprocessing, TensorFlow, and OpenCV for live detection.",
    stack: ["Python", "TensorFlow", "OpenCV"],
    href: "https://github.com/takibttn/facetracker.git",
    theme: "sand",
  },
] as const;

export const education = [
  {
    period: "2025 — 2027",
    degree: "Master's in Artificial Intelligence",
    institution: "University Badji Mokhtar",
  },
  {
    period: "2022 — 2025",
    degree: "Bachelor of Computer Science",
    institution: "University Badji Mokhtar",
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Dart", "PHP"],
  },
  {
    title: "Backend & data",
    skills: ["Node.js", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    title: "Product",
    skills: ["Flutter", "Firebase"],
  },
  {
    title: "AI & ML",
    skills: ["TensorFlow", "OpenCV", "Machine learning"],
  },
  {
    title: "Ways of working",
    skills: ["Git & GitHub", "Problem solving", "Teamwork", "Communication"],
  },
] as const;
