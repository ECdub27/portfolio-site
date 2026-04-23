import React from 'react';

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string;
}

interface ProjectCardProps extends Project {
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
  technologies,
  reverse = false,
}) => (
  <article
    className={`flex flex-col ${
      reverse ? 'md:flex-row-reverse' : 'md:flex-row'
    } items-center gap-8 md:gap-9`}
  >
    <img
      src={image}
      alt={title}
      className="w-full max-w-sm md:w-96 md:h-96 aspect-square object-cover rounded-[40px] flex-shrink-0"
    />
    <div className="flex-1 flex flex-col items-start gap-6 md:gap-8 w-full md:max-w-[776px]">
      <h3 className="text-gray-900 text-3xl md:text-4xl font-semibold capitalize leading-tight">
        {title}
      </h3>
      <div className="w-8 h-px bg-gray-900" />
      <p className="text-zinc-600 text-base md:text-lg font-normal leading-7">
        {description}
      </p>
      <div className="flex flex-col items-start gap-2">
        <span className="text-blue-600 text-sm md:text-lg font-semibold uppercase tracking-widest leading-7">
          Technologies Used
        </span>
        <span className="text-zinc-600 text-base md:text-lg font-normal leading-7">
          {technologies}
        </span>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 w-44 group"
      >
        <span className="text-center text-gray-900 text-lg md:text-xl font-semibold uppercase leading-7 tracking-widest group-hover:text-blue-600 transition-colors">
          See Project
        </span>
        <span className="w-44 h-[3px] bg-blue-600" />
      </a>
    </div>
  </article>
);

export default ProjectCard;
