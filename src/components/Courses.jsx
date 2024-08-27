import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintBrush, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ title, details, icon }) => (
  <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
    <div className="transition-transform duration-300 transform hover:scale-105 mb-8 rounded-lg bg-white p-6 shadow-lg dark:bg-dark-2">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-black"> {/* Cambia el color aquí */}
        <FontAwesomeIcon icon={icon} size="2x" className="text-black" /> {/* Asegúrate de aplicar el color negro aquí */}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-dark dark:text-white">
        {title}
      </h3>
      <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        {details}
      </p>
      <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark">
        Show More
      </button>
    </div>
  </div>
);

const Courses = () => (
  <section className="pb-12 pt-20 bg-gradient-to-r from-blue-500 to-blue-700 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
    <div className="container mx-auto text-center">
      <div className="mb-12 max-w-[510px] mx-auto lg:mb-20">
        <h2 className="text-5xl font-bold leading-[1.2] text-white sm:text-4xl md:text-[40px] mb-3">
          What We Offer
        </h2>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Discover our range of services designed to help you achieve your goals with excellence.
        </p>
      </div>

      <div className="flex flex-wrap -mx-4">
        <ServiceCard
          title="HTML Basics"
          details="Learn the fundamentals of HTML to build the structure of your web pages."
          icon={faCode} // Icono para HTML Basics
        />
        <ServiceCard
          title="CSS Styling"
          details="Enhance your web pages with stylish CSS to create visually appealing designs."
          icon={faPaintBrush} // Icono para CSS Styling
        />
        <ServiceCard
          title="Responsive Design"
          details="Make your web pages look great on all devices with responsive design techniques."
          icon={faMobileAlt} // Icono para Responsive Design
        />
      </div>
    </div>
  </section>
);

export default Courses;

