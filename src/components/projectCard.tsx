import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  inProgress?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, inProgress = false }) => {
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg rounded  shadow-lg justify-between bg-[#1AB7FF] mx-auto my-4">
      <div className="aspect-w-16 aspect-h-9">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="px-4 py-2 md:px-6 md:py-4">
        <div className="font-semibold text-lg md:text-xl mb-2 text-[#202827]">{title}</div>
        <p className="text-white-700 text-sm md:text-base font-normal leading-6 text-[#202827]">{description}</p>
      </div>
      <div className="px-4 py-2 md:px-6 md:py-4">
        {inProgress ? (
          <span className="bg-[#292f36] text-[#12f7d6] font-mono text-sm font-semibold py-2 px-4 rounded block text-center cursor-not-allowed opacity-80">
            🚧 In progress · Metamonolith Project
          </span>
        ) : (
          <a href={link} target="_blank" rel="noopener noreferrer" className="bg-[#267FF3] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center">
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;