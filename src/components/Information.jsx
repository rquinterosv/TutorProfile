import React from "react";
import { useTranslation } from "react-i18next";
import codeImage from "../assets/img/computer.jpg";
import computerImage from "../assets/img/code.jpg";
import meetingImage from "../assets/img/meeting.jpg";
import { Link } from 'react-router-dom';

const techIcons = {
  web: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js'],
  microsoft: ['Power BI', 'Excel', 'Office 365'],
  software: ['Jira', 'HubSpot', 'Trello', 'Notion'],
};

const InformationCard = ({ image, title, details, type }) => {
  const icons = techIcons[type] || [];
  return (
    <div className="flex flex-col lg:flex-row w-full mb-8 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="w-full lg:w-2/5 relative">
        <img src={image} alt={title} className="w-full h-64 lg:h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:bg-gradient-to-t" />
      </div>
      <div className="p-8 lg:w-3/5 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-neutral-800 mb-4">{title}</h3>
        <p className="text-neutral-600 mb-6 leading-relaxed">{details}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {icons.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <Link to="/contact" className="btn-primary w-fit">
          {t("contact.get_in_touch")}
        </Link>
      </div>
    </div>
  );
};

const Information = () => {
  const { t } = useTranslation();

  const courses = [
    { image: codeImage, title: t("services.information.web_development"), details: t("services.information.web_details"), type: 'web' },
    { image: computerImage, title: t("services.information.microsoft"), details: t("services.information.microsoft_details"), type: 'microsoft' },
    { image: meetingImage, title: t("services.information.softwares"), details: t("services.information.softwares_details"), type: 'software' },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-width">
        {courses.map((course, index) => (
          <InformationCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default Information;