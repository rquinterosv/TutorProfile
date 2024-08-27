import React from "react";
import { useTranslation } from "react-i18next";
import codeImage from "../assets/img/code.jpg";
import computerImage from "../assets/img/computer.jpg";
import meetingImage from "../assets/img/meeting.jpg";

const ServiceCard = ({ title, details, image }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-2 flex">
      <div className="flex flex-col transition-transform duration-300 transform hover:scale-105 mb-8 rounded-lg bg-white shadow-lg dark:bg-dark-2 h-full">
        <img src={image} alt="Service" className="w-full rounded-t-lg object-cover h-48" />
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="mb-3 text-xl font-semibold from-blue-500">
            {title}
          </h3>
          <p className="flex-grow text-base text-gray-500 sm:text-lg md:text-xl">
            {details}
          </p>
          <button className="mt-4 w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
            {t("home.courses.show_more")}
          </button>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-12 pt-20 bg-gradient-to-r from-blue-500 to-blue-700 dark:bg-dark lg:pb-[90px] lg:pt-[120px] overflow-x-hidden">
      <div className="container mx-auto text-center">
        <div className="mb-12 max-w-[510px] mx-auto lg:mb-20">
          <h2 className="text-5xl font-bold leading-[1.2] text-white sm:text-4xl md:text-[40px] mb-3">
            {t("home.courses.offer_title")}
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {t("home.courses.offer_description")}
          </p>
        </div>

        <div className="flex flex-wrap -mx-2 p-10">
          <ServiceCard
            title={t("home.courses.web_development")}
            details={t("home.courses.web_details")}
            image={codeImage}
          />
          <ServiceCard
            title={t("home.courses.microsoft")}
            details={t("home.courses.microsoft_details")}
            image={computerImage}
          />
          <ServiceCard
            title={t("home.courses.softwares")}
            details={t("home.courses.softwares_details")}
            image={meetingImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;
