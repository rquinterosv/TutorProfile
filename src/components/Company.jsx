import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Importa las imágenes
import logo1 from "../assets/img/czechgroup.svg";
import logo2 from "../assets/img/adl.png";
import logo3 from "../assets/img/huawei.svg";
import logo4 from "../assets/img/ecom.png";
import logo5 from "../assets/img/ts.svg";

// Definir la constante con los logos importados
const logos = [
  { src: logo1, alt: 'Czech Group' },
  { src: logo2, alt: 'Desafío Latam' },
  { src: logo3, alt: 'Huawei' },
  { src: logo4, alt: 'Ecom Energía' },
  { src: logo5, alt: 'Travel Security' },
];

const LogoGrid = () => {
  return (
    <div className="company__content text-center">
          <h1 className="text-5xl font-semibold text-blue-500 mb-12">
            Work Experience
          </h1>

      <div className="grid grid-cols-3 gap-20 justify-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item transition-transform duration-300 hover:scale-110">
            <img src={logo.src} alt={logo.alt} className="w-64 h-auto" />
          </div>
        ))}
      </div>
      <Link to="/experience">
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition duration-300">
          More Information
        </button>
      </Link>
    </div>
  );
};

export default LogoGrid;
