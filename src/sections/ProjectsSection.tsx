import React from 'react';
import ProjectCard, { Project } from '../components/projectCard';
import Section from '../layout/Section';

interface ProjectsSectionProps {
  contractProjects: Project[];
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  contractProjects,
  projects,
}) => (
  <Section id="projects" className="px-6 md:px-28 py-16 md:py-20">
    <div className="mx-auto max-w-container flex flex-col items-center gap-10 md:gap-12">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-semibold capitalize leading-tight text-center">
          Projects
        </h2>
        <div className="w-8 h-px bg-gray-900" />
      </div>

      <div className="flex flex-col items-center gap-8 md:gap-10 w-full">
        <h3 className="text-blue-600 text-lg md:text-xl font-semibold uppercase tracking-widest text-center">
          Contract Work
        </h3>
        <div className="flex flex-col gap-10 md:gap-12 w-full">
          {contractProjects.map((project, i) => (
            <React.Fragment key={project.title}>
              <ProjectCard {...project} reverse={i % 2 === 1} />
              {i < contractProjects.length - 1 && (
                <div className="w-full h-px bg-stone-300" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-stone-300" />

      <div className="flex flex-col items-center gap-8 md:gap-10 w-full">
        <h3 className="text-blue-600 text-lg md:text-xl font-semibold uppercase tracking-widest text-center">
          Personal Projects
        </h3>
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
    </div>
  </Section>
);

export default ProjectsSection;
