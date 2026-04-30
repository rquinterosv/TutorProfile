import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import codeImage from "../assets/img/computer.jpg";
import computerImage from "../assets/img/code.jpg";
import meetingImage from "../assets/img/meeting.jpg";

const ServiceCard = ({ title, image, icon }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full lg:w-1/3 p-3 flex">
      <div className="card group flex flex-col w-full hover:-translate-y-2 transition-all duration-300">
        <div className="relative overflow-hidden rounded-t-2xl h-48">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 w-10 h-10 flex items-center justify-center rounded-lg bg-white/90 backdrop-blur text-primary-600">
            {icon}
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-lg font-bold text-neutral-800 mb-3">{title}</h3>
          <Link to="/services" className="mt-auto">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
              {t("home.courses.show_more")}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const { t } = useTranslation();

  const services = [
    { title: t("home.courses.web_development"), image: codeImage, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
    { title: t("home.courses.microsoft"), image: computerImage, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { title: t("home.courses.softwares"), image: meetingImage, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.128-2.592 1.684-4.316 4.637-4.316 3.183 0 4.452 2.053 4.637 4.316m-8.274 0c.128 2.592 1.684 4.316 4.637 4.316 3.183 0 4.452-2.053 4.637-4.316m0 0V7.5a2 2 0 00-2-2h-1.5M4.317 20.983A2 2 0 006.28 23h11.44a2 2 0 002.163-2.018l.837-5.86a2 2 0 00-1.982-2.282H5.462a2 2 0 00-1.982 2.282l.837 5.86z" /></svg> },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-width text-center">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 rounded-full ring-1 ring-primary-100">
          {t('home.courses.eyebrow') || 'Services'}
        </span>
        <h2 className="section-title">{t("home.courses.offer_title")}</h2>
        <p className="section-subtitle mb-12">{t("home.courses.offer_description")}</p>

        <div className="flex flex-wrap -mx-3">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
