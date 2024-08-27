import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faGithub, faBootstrap, faMicrosoft, faJira, faHubspot } from '@fortawesome/free-brands-svg-icons';
import codeImage from "../assets/img/code.jpg";
import computerImage from "../assets/img/computer.jpg";
import meetingImage from "../assets/img/meeting.jpg";

const InformationCard = ({ image, title, details, logos }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full lg:w-1/2 object-cover" />
      <div className="p-6 flex flex-col justify-center lg:w-1/2">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">{title}</h3>
        <p className="text-gray-700 mb-6">{details}</p>
        <div className="flex space-x-4">
          {logos.map((logo, index) => (
            <FontAwesomeIcon key={index} icon={logo} size="2x" className="text-blue-500" />
          ))}
        </div>
      </div>
    </div>
  );
};

const Information = () => {
  const { t } = useTranslation();

  const courses = [
    {
      image: codeImage,
      title: t("services.information.web_development"),
      details: t("services.information.web_details"),
      logos: [faHtml5, faCss3Alt, faJs, faGithub, faBootstrap],
    },
    {
      image: computerImage,
      title: t("services.information.microsoft"),
      details: t("services.information.microsoft_details"),
      logos: [faMicrosoft],
    },
    {
      image: meetingImage,
      title: t("services.information.softwares"),
      details: t("services.information.softwares_details"),
      logos: [faJira, faHubspot],
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        {courses.map((course, index) => (
          <InformationCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default Information;
