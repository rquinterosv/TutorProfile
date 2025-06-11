import React from "react";
import { useTranslation } from "react-i18next";
import heroImage1 from "../assets/img/computer.jpg";
import heroImage2 from "../assets/img/computer.jpg";

const ProjectHeroCard = ({ title, description, image }) => {
  return (
    <div className="w-full lg:w-1/2 p-4">
      <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-dark-2 transition-transform duration-300 hover:scale-105">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-blue-600">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ProjectMiniCard = ({ title, description }) => {
  return (
    <div className="bg-white dark:bg-dark-2 rounded-lg shadow p-6 transition-transform duration-300 hover:scale-105">
      <h4 className="text-xl font-semibold text-blue-500 mb-2">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300 text-base">{description}</p>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  const miniProjects = [
    {
      title: t("projects.mini.title1"),
      description: t("projects.mini.desc1"),
    },
    {
      title: t("projects.mini.title2"),
      description: t("projects.mini.desc2"),
    },
    {
      title: t("projects.mini.title3"),
      description: t("projects.mini.desc3"),
    },
    {
      title: t("projects.mini.title4"),
      description: t("projects.mini.desc4"),
    },
    {
      title: t("projects.mini.title5"),
      description: t("projects.mini.desc5"),
    },
    {
      title: t("projects.mini.title6"),
      description: t("projects.mini.desc6"),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 dark:bg-dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-12">
          {t("projects.title")}
        </h2>

        {/* Hero cards */}
        <div className="flex flex-wrap -mx-4 mb-16">
          <ProjectHeroCard
            title={t("projects.hero.title1")}
            description={t("projects.hero.desc1")}
            image={heroImage1}
          />
          <ProjectHeroCard
            title={t("projects.hero.title2")}
            description={t("projects.hero.desc2")}
            image={heroImage2}
          />
        </div>

        {/* Grid of 3-column mini cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {miniProjects.map((project, index) => (
            <ProjectMiniCard
              key={index}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
