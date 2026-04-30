import React from 'react';
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import existing logo images
import logo1 from "../assets/img/rlogo.png";
import logo2 from "../assets/img/por1.png";
import logo3 from "../assets/img/por2.png";

const logos = [
  { src: logo1, alt: 'RafaQuinteros' },
  { src: logo2, alt: 'Prohopo' },
  { src: logo3, alt: 'Adam Růžička' },
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
    <section className="section-padding bg-white">
      <div className="container-width text-center">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 rounded-full ring-1 ring-primary-100">
          {t('home.company.eyebrow') || 'Trusted by'}
        </span>
        <h2 className="section-title">{t('home.company.title')}</h2>

        <div className="mt-8 mb-10">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="px-6">
                <Link to="/experience" className="flex items-center justify-center h-20 p-4 rounded-xl hover:bg-neutral-50 transition-all duration-300">
                  <img src={logo.src} alt={logo.alt} className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        <Link to="/experience" className="btn-primary">
          {t('home.company.more')}
        </Link>
      </div>
    </section>
  );
};

export default LogoGrid;
