import React from 'react';
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const { t } = useTranslation();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16">
      <div className="company__content text-center container mx-auto px-4">
        <h2 className="text-5xl font-bold text-blue-500 mb-12">
          {t('home.company.title')}
        </h2>

        <div className="logo-carousel">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="px-6">
                <Link to="/experience" className="flex items-center justify-center h-24">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-20 w-auto object-contain hover:scale-105 transition duration-300"
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        <Link to="/experience">
          <button className="mt-12 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition duration-300">
            {t('home.company.more')}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LogoGrid;
