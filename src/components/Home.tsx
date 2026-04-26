import React from 'react';
import {
  FaCode,
  FaPlug,
  FaShoppingBag,
  FaChalkboardTeacher,
} from 'react-icons/fa';
import MainNav from './mainNav';
import Technologies from './technologies';
import ProjectCard, { Project } from './projectCard';
import ContactSection from './contact';
import Footer from './footer';
import hero from '/imgs/hero.png';
import propic from '/imgs/propic.png';
import recipeFinder from '/imgs/recipeFinder.jpeg';
import groupChatGen from '/imgs/GroupChatNameGen.png';
import refreshedNews from '/imgs/refreshedNews.jpeg';

const projects: Project[] = [
  {
    title: 'DishDex',
    description:
      'At a loss for what to make for dinner? Use RecipeFinder to input a list of your leftover ingredients and see what you can make. Save money, reduce waste, and try something new!',
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
];

const services = [
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
  <div id="home" className="bg-white">
    <MainNav />

    {/* Hero */}
    <section
      className="relative w-full bg-zinc-800 rounded-b-[60px] md:rounded-b-[100px] overflow-hidden"
      style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-zinc-800/70" />
      <div className="relative z-10 mx-auto max-w-container px-6 md:px-[120px] py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12">
        <div className="flex flex-col items-start gap-6 md:gap-8 w-full md:max-w-[621px]">
          <div className="flex flex-col">
            <span className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold capitalize leading-none">
              Hi, I&rsquo;m
            </span>
            <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold capitalize leading-tight mt-1">
              Elijah-Christian.
            </span>
          </div>
          <p className="text-white text-base md:text-xl font-semibold uppercase leading-7 tracking-widest">
            Independent Software Contractor —
            <br className="hidden sm:block" />
            enterprise roots, modern web focus
          </p>
          <div className="w-8 h-px bg-white" />
          <div className="flex flex-wrap gap-8 md:gap-12">
            <a
              href="#projects"
              className="flex flex-col items-center gap-2 group"
            >
              <span className="text-center text-white text-lg md:text-xl font-semibold uppercase leading-7 tracking-widest">
                Projects
              </span>
              <span className="w-36 h-[3px] bg-white group-hover:bg-blue-400 transition-colors" />
            </a>
            <a
              href="#contact"
              className="flex flex-col items-center gap-2 group"
            >
              <span className="text-center text-white text-lg md:text-xl font-semibold uppercase leading-7 tracking-widest">
                Contact
              </span>
              <span className="w-32 h-[3px] bg-white group-hover:bg-blue-400 transition-colors" />
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <img
            src={propic}
            alt="Elijah-Christian Wiegand"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[464px] lg:h-[464px] rounded-full object-cover"
          />
        </div>
      </div>
    </section>

    {/* About */}
    <section
      id="about"
      className="scroll-mt-24 w-full px-6 md:px-[240px] py-16 md:py-20"
    >
      <div className="mx-auto max-w-container flex flex-col items-center gap-6">
        <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-semibold capitalize leading-tight text-center">
          About Me
        </h2>
        <div className="w-8 h-px bg-gray-900" />
        <div className="flex flex-col items-start gap-4 w-full">
          <p className="w-full text-center text-zinc-600 text-base md:text-lg font-normal leading-7">
            I&rsquo;m Elijah-Christian Wiegand, a Full-Stack Developer from New
            York, now living in Chicago.
          </p>
          <p className="w-full text-center text-zinc-600 text-base md:text-lg font-normal leading-7">
            By day, I configure and extend Guidewire for complex policy
            workflows in enterprise insurance. By night, I build clean,
            scalable apps with .NET, Next.js, with friends.
          </p>
          <p className="w-full text-center text-zinc-600 text-base md:text-lg font-normal leading-7">
            My sweet spot is bridging legacy enterprise systems with modern
            engineering practices — untangling brittle logic, improving
            reliability, and shipping user-friendly features.
          </p>
          <p className="w-full text-center text-zinc-600 text-base md:text-lg font-normal leading-7">
            I believe &ldquo;haste makes waste,&rdquo; and that less can be
            more. This portfolio is a living document — check back for what
            I&rsquo;m shipping next. I&rsquo;m available for contract
            engagements through Parsec Logic Development Solutions.
          </p>
        </div>
      </div>
    </section>

    <Technologies />

    {/* Projects */}
    <section
      id="projects"
      className="scroll-mt-24 w-full px-6 md:px-28 py-16 md:py-20"
    >
      <div className="mx-auto max-w-container flex flex-col items-center gap-10 md:gap-12">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-semibold capitalize leading-tight text-center">
            Projects
          </h2>
          <div className="w-8 h-px bg-gray-900" />
        </div>
        <div className="flex flex-col gap-10 md:gap-12 w-full">
          {projects.map((project, i) => (
            <React.Fragment key={project.title}>
              <ProjectCard {...project} reverse={i % 2 === 1} />
              {i < projects.length - 1 && (
                <div className="w-full h-px bg-stone-300" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="w-full px-6 md:px-[120px] py-12 md:py-20">
      <div className="mx-auto max-w-container bg-gray-900 rounded-[40px] md:rounded-[80px] px-6 sm:px-10 md:px-16 py-12 md:py-20">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold capitalize leading-tight text-center">
            Services
          </h2>
          <div className="w-8 h-px bg-white" />
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {services.map(({ label, detail, Icon }) => (
            <div
              key={label}
              className="bg-white/10 rounded-3xl p-8 md:p-9 flex flex-col items-start gap-6 min-h-[18rem]"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold capitalize leading-9">
                {label}
              </h3>
              <div className="w-8 h-px bg-white" />
              <p className="text-white text-base md:text-lg font-normal leading-7">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContactSection />
    <Footer />
  </div>
);

export default Home;
