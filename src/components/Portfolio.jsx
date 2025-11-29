import React from "react";
import { useTranslation } from "react-i18next";
import heroImage1 from "../assets/img/por1.png";
import heroImage2 from "../assets/img/por2.png";

const ProjectHeroCard = ({ title, description, image, link }) => {
  return (
<div className="w-full lg:w-1/2 p-4">
  <a href={link} className="block rounded-lg overflow-hidden shadow-lg bg-white dark:bg-dark-2 transition-transform duration-300 hover:scale-105">
    <img src={image} alt={title} className="w-full h-80 object-cover object-top" />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-blue-600">{title}</h3>
      <p className="text-black">{description}</p>
    </div>
  </a>
</div>
  );
};

const ProjectMiniCard = ({ title, description, link, linkname }) => {
  return (
    <div className="bg-white dark:bg-dark-2 rounded-lg shadow p-6 transition-transform duration-300 hover:scale-105">
      <a href={link} >
        <h4 className="text-xl font-semibold text-blue-500 mb-2">{title}</h4>
        <p className="text-black text-base">{description}</p>
        <p className="text-gray-600 pt-5">{linkname} </p>
      </a>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  const miniProjects = [
    {
      title: t("Fencee"),
      description: t("I contributed to enhancing various elements of the website by working on both the front-end and back-end development."),
      link: "https://www.fencee.cz",
      linkname: "www.fencee.cz",
    },
    {
      title: t("Dogtrace"),
      description: t("I contributed to enhancing various elements of the website by working on both the front-end and back-end development."),
      link: "https://www.dogtrace.com/",
      linkname: "www.dogtrace.com/",
    },
    {
      title: t("Sysel Polak"),
      description: t("I created the page from scratch, managing to program  the back and front end of the project following the UX/UI team's graphics 100%."),
      link: "https://www.sysel-polak.cz/",
      linkname: "www.sysel-polak.cz",
    },
    {
      title: t("Doucebnice"),
      description: t("I created the page from scratch, managing to program  the back and front end of the project following the UX/UI team's graphics 100%. "),
      link: "https://www.doucebnice.cz/",
      linkname: "www.doucebnice.cz",
    },
    {
      title: t("Autojeraby Horak"),
      description: t("I created the page from scratch, managing to program  the back and front end of the project following the UX/UI team's graphics 100%. "),
      link: "https://www.autojerabyhorak.cz/",
      linkname: "www.autojerabyhorak.cz",
    },
    {
      title: t("Starlux"),
      description: t("I created the page from scratch, managing to program  the back and front end of the project following the UX/UI team's graphics 100%. "),
      link: "https://www.starlux.cz/",
      linkname: "www.starlux.cz",
    },
    {
      title: t("Chytré střechy"),
      description: t("I created the page from scratch, managing to program  the back and front end of the project following the UX/UI team's graphics 100%. "),
      link: "https://www.chytrestrechy.cz/",
      linkname: "www.chytrestrechy.cz",
    },
    {
      title: t("Centrum veterinární péče"),
      description: t("I worked on the website update, focusing on the logic behind date handling and modifications to the operating hours of different clinics."),
      link: "https://www.veterinar-palan.cz/",
      linkname: "www.veterinar-palan.cz/",
    
    },
    {
      title: t("Desafío Latam"),
      description: t("Worked as a tech tutor for aspiring full-stack developers (React and Node.js). Focused on teaching the fundamentals of coding while specifically participating in code reviews for various projects."),
      link: "https://desafiolatam.com/full-stack-javascript-b/",
      linkname: "www.desafiolatam.com",
    },
    {
      title: t("Grime Fighters"),
      description: t("I developed this website for a Canadian company, primarily using HTML and CSS. However, the underlying logic of the project showcases my skills and abilities in web development."),
      link: "https://grimefighters.ca/",
      linkname: "www.grimefighters.ca/",
    },
    {
      title: t("Pronachem"),
      description: t("Updated the homepage, including banners and functionality, allowing users to easily update information based on their specific needs. Also improved the user experience by making the interface more intuitive and responsive."),
      link: "https://www.pronachem.cz/",
      linkname: "www.pronachem.cz/",
    },
    {
      title: t("Ekoplant"),
      description: t("Updated the homepage, including banners and functionality, allowing users to easily update information based on their specific needs. Also improved the user experience by making the interface more intuitive and responsive."),
      link: "https://www.ekoplant.cz/",
      linkname: "www.ekoplant.cz/",
    },
    {
      title: t("MYJOYS"),
      description: t("Updated the homepage, including banners and functionality, allowing users to easily update information based on their specific needs. Also improved the user experience by making the interface more intuitive and responsive."),
      link: "https://www.myjoysbad.de/",
      linkname: "www.myjoysbad.de/",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 dark:bg-dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-12">
          {t("home.portfolio.title")}
        </h2>
        <p className="mx-auto mt-3 text-center text-white mb-12 sm:text-lg md:mt-5 md:text-xl">
          {t("home.portfolio.subtitle")}
        </p>

        {/* Hero cards */}
        <div className="flex flex-wrap -mx-4 mb-16">
          <ProjectHeroCard
            title={t("Prohopo")}
            description={t("Project in which I participated in the initial creation of the pages. It features a well-structured design and logic that enable users and administrators to dynamically modify the page content, improving flexibility and ease of use. Check the responsivnes and user experience that have the website")}
            image={heroImage1}
            link={("https://www.prohopo.cz/")}
          />
          <ProjectHeroCard
            title={t("Adam Růžička")}
            description={t("Another project in which I participated in the initial creation, developed with direct code. It includes a custom design and logic tailored to the user's requirements, with a dynamic structure that allows for real-time modifications based on user input, ensuring a personalized and adaptable experience.")}
            image={heroImage2}
            link={("https://www.adamruzickareality.cz/")}
          />
        </div>

        {/* Grid of 3-column mini cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {miniProjects.map((project, index) => (
            <ProjectMiniCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              linkname={project.linkname}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
