import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  tailwind,
} from "../assets";

// 🧠 Import your custom project images (place them in src/assets/)
import expense from "../assets/file.png";
import brain from "../assets/Brain.png";
import boston from "../assets/boston.jpeg";

// 🧩 Add ML-related icons using URLs (no need to download)
const python =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
const ml =
  "https://cdn-icons-png.flaticon.com/512/2103/2103633.png";
const flask =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Machine Learning Developer",
    icon: ml,
  },
  {
    title: "AI & Deep Learning Enthusiast",
    icon: python,
  },
  
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Python", icon: python },
  { name: "Machine Learning", icon: ml },
  { name: "Flask", icon: flask },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: git },
];

const projects = [
  {
    name: "Expense Tracker (MERN)",
    description:
      "A full-stack web app built with the MERN stack that helps users manage their daily expenses, visualize spending patterns, and stay on top of their finances with a clean dashboard UI.",
    tags: [
      { name: "mern", color: "green-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
    ],
    image: expense,
    source_code_link: "https://github.com/charishmasree6/Expense-Tracker",
  },
  {
    name: "Brain Tumor Detection (CNN)",
    description:
      "A deep learning model that detects and classifies brain tumors from MRI images using a Convolutional Neural Network for accurate medical image analysis.",
    tags: [
      { name: "cnn", color: "pink-text-gradient" },
      { name: "deeplearning", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
    ],
    image: brain,
    source_code_link:
      "https://github.com/charishmasree6/Brain-Tumour-Detection-using-Deeplearning",
  },
  {
    name: "Boston House Pricing (ML)",
    description:
      "A machine learning project deployed with Flask and Pickle that predicts house prices based on multiple features using regression algorithms.",
    tags: [
      { name: "flask", color: "blue-text-gradient" },
      { name: "ml", color: "green-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
    ],
    image: boston,
    source_code_link: "https://github.com/charishmasree6/bostonHousePricing",
  },
];

export { services, technologies, projects };
