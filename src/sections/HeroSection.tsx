import React from 'react';
import hero from '/imgs/hero.png';
import propic from '/imgs/propic.png';

const HeroSection: React.FC = () => (
  <section
    id="home"
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
          <a href="#projects" className="flex flex-col items-center gap-2 group">
            <span className="text-center text-white text-lg md:text-xl font-semibold uppercase leading-7 tracking-widest">
              Projects
            </span>
            <span className="w-36 h-[3px] bg-white group-hover:bg-blue-400 transition-colors" />
          </a>
          <a href="#contact" className="flex flex-col items-center gap-2 group">
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
);

export default HeroSection;
