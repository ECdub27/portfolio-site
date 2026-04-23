import React from 'react';
import {
  FaReact,
  FaJsSquare,
  FaJava,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiPostgresql } from 'react-icons/si';

type Tech = { label: string; Icon: React.ComponentType<{ className?: string }> };

const GuidewireMark: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`${className ?? ''} flex items-center justify-center rounded-lg border-2 border-white`}
  >
    <span className="text-white font-mono text-[10px] font-bold leading-tight text-center">
      Guide
      <br />
      wire
    </span>
  </div>
);

const techs: Tech[] = [
  { label: 'React', Icon: FaReact },
  { label: 'JavaScript', Icon: FaJsSquare },
  { label: 'TypeScript', Icon: SiTypescript },
  { label: 'Java', Icon: FaJava },
  { label: 'Python', Icon: FaPython },
  { label: '.NET', Icon: SiDotnet },
  { label: 'Node.js', Icon: FaNodeJs },
  { label: 'Docker', Icon: FaDocker },
  { label: 'Git', Icon: FaGitAlt },
  { label: 'PostgreSQL', Icon: SiPostgresql },
  { label: 'Guidewire', Icon: GuidewireMark },
];

const Technologies: React.FC = () => (
  <section className="w-full px-6 md:px-[120px] py-12 md:py-20">
    <div className="mx-auto max-w-container bg-gray-900 rounded-[40px] md:rounded-[80px] px-6 sm:px-10 md:px-16 py-12 md:py-20">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold capitalize leading-tight text-center">
          Technologies &amp; Expertise
        </h2>
        <div className="w-8 h-px bg-white" />
      </div>
      <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-6 gap-y-10 place-items-center">
        {techs.map(({ label, Icon }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-4 w-20"
          >
            <Icon className="w-16 h-16 text-white" />
            <span className="text-white text-sm sm:text-base md:text-lg font-medium capitalize text-center leading-tight">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Technologies;
