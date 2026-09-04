import React from 'react';
import {
  FaCode,
  FaPlug,
  FaShoppingBag,
  FaChalkboardTeacher,
} from 'react-icons/fa';
import { Project } from './projectCard';
import Technologies from './technologies';
import ContactSection from './contact';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';
import ServicesSection, { Service } from '../sections/ServicesSection';
import recipeFinder from '/imgs/projects/recipeFinder.jpeg';
import groupChatGen from '/imgs/projects/GroupChatNameGen.png';
import refreshedNews from '/imgs/projects/refreshedNews.jpeg';
import feelingsLog from '/imgs/projects/myfeelingsLog.png';
import shirtstakes from '/imgs/projects/shirtstakes-port.png';

const contractProjects: Project[] = [
  {
    title: 'ShirtStakes — Planet Euphoria',
    role: 'Contract · Planet Euphoria',
    description:
      'A 3D "mystery pack" pack-opening experience built into Planet Euphoria’s live Shopify store. Customers pick a themed pack, rip it open in an interactive 3D animation, and a random shirt is revealed at checkout. I built the React/Three.js front-end (shipped as a drop-in bundle for their custom theme), a Python app-server handling weighted pull-rate logic and secure Shopify cart/checkout gating, and a companion Expo mobile app.',
    image: shirtstakes,
    link: 'https://planeteuphoria.com',
    linkLabel: 'Visit Store',
    technologies:
      'React 19, React Three Fiber / Three.js, Vite, Tailwind, Shopify (custom theme + Admin GraphQL), Python, Expo / React Native',
  },
];

const projects: Project[] = [
  {
    title: 'DishDex',
    description:
      'At a loss for what to make for dinner? Use DishDex to input a list of your leftover ingredients and see what you can make. Save money, reduce waste, and try something new!',
    image: recipeFinder,
    link: 'https://recipedia-six.vercel.app/',
    technologies: 'React, Vite, Tailwind, Spoonacular API',
  },
  {
    title: 'Group Chat Name Generator',
    description:
      'Generate fun, memorable group chat names — paired with a playful Lottie animation for instant delight.',
    image: groupChatGen,
    link: 'https://660f580d21f957209c188d87--groupchatnamegenerator.netlify.app/',
    technologies: 'React, Lottie, Netlify',
  },
  {
    title: 'Refreshed News',
    description:
      'Get personalized news results with a refreshed, modern feel — built for clarity and speed.',
    image: refreshedNews,
    link: 'https://vite-refreshed-news.vercel.app/',
    technologies: 'React, Vite, News API, Tailwind',
  },
  {
    title: 'Feelings Log Journal',
    description: 'A simple, calming space to log your feelings and reflect on your day. Built with Next.js and AsyncStorage for a smooth mobile experience.',
    image: feelingsLog,
    link: 'https://myfeelingslog.netlify.app/',
    technologies: 'Next.js, Tailwind, AsyncStorage',
  },
];

const services: Service[] = [
  {
    label: 'Custom Web Development',
    detail: 'Full-stack apps — React, Node.js, .NET, Java',
    Icon: FaCode,
  },
  {
    label: 'System Integration',
    detail: 'APIs, legacy bridges, Guidewire / enterprise platforms',
    Icon: FaPlug,
  },
  {
    label: 'Shopify & Platform Work',
    detail: 'Custom storefronts, theme dev, headless builds',
    Icon: FaShoppingBag,
  },
  {
    label: 'Technical Consulting',
    detail: 'Architecture reviews, tech strategy, small business web',
    Icon: FaChalkboardTeacher,
  },
];

const Home: React.FC = () => (
  <div className="bg-white">
    <HeroSection />
    <AboutSection />
    <Technologies />
    <ProjectsSection contractProjects={contractProjects} projects={projects} />
    <ServicesSection services={services} />
    <ContactSection />
  </div>
);

export default Home;
