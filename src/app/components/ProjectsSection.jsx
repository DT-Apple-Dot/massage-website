"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Thai Massage",
    description:
      "Thai massage uses stretching and pressure techniques to relieve stress, improve flexibility and restore body-mind balance",
    image: "/images/projects/Thai_Massage.jpg",
    tag: ["All", "Web"],
    prices: [
      { duration: "60 minutes", price: "900 Baht" },
      { duration: "90 minutes", price: "1000 Baht" },
      { duration: "120 minutes", price: "1200 Baht" },
    ],
  },
  {
    id: 2,
    title: "Oil Massage",
    description:
      "Oil Massage is a massage that uses oil applied to the skin to increase slipperiness and help you feel relaxed.",
    image: "/images/projects/oil_massage.png",
    tag: ["All", "Web"],
    prices: [
      { duration: "60 minutes", price: "1000 Baht" },
      { duration: "90 minutes", price: "1200 Baht" },
      { duration: "120 minutes", price: "1500 Baht" },
    ],
  },
  {
    id: 3,
    title: "Aromatherapy Massage",
    description:
      "Aromatherapy Coconut Oil Massage is a combination of health and beauty massage using high-nutritious cold-pressed coconut oil.",
    image: "/images/projects/Aromatherapy_Massage.webp",
    tag: ["All", "Web"],
    prices: [
      { duration: "60 minutes", price: "1200 Baht" },
      { duration: "90 minutes", price: "1500 Baht" },
      { duration: "120 minutes", price: "1800 Baht" },
    ],
  },
  {
    id: 4,
    title: "Four Hands Massage",
    description:
      "Four Hands Massage is a treatment performed by two therapists working simultaneously. This synchronized massage aims to create a deeply relaxing and immersive experience.",
    image: "/images/projects/4hands.jpg",
    tag: ["All", "Mobile"],
    prices: [
      { duration: "60 minutes", price: "2200 Baht" },
      { duration: "90 minutes", price: "2400Baht" },
      { duration: "120 minutes", price: "2500 Baht" },
    ],
  },
];

const ProjectsSection = () => {
  const [tag] = useState("All");
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  return (
    <>
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-8 md:mb-12 transition-colors">
          OUR SERVICES
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
