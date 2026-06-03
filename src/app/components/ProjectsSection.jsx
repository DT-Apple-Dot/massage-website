"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ header, projects }) => {
  const [tag] = useState("All");
  const filteredProjects = projects.filter((project) =>
    project.tag.includes(tag),
  );

  return (
    <>
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-8 md:mb-12 transition-colors">
          {header}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              prices={project.prices}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
