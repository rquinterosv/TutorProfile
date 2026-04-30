import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';

import person1 from '../assets/img/andres.jpeg';
import person2 from '../assets/img/ivan.jpeg';
import person3 from '../assets/img/ale.jpeg';
import person4 from '../assets/img/pipe.jpeg';

const references = [
  {
    id: 1, photo: person1, name: 'Andres Gallardo',
    position: 'General Manager at Desafío Latam',
    description: "We count on Rafa's commitment and leadership, which helped us in the creation of different businesses and services that we are still running today in Desafío Latam. I would like to highlight his dynamism and responsibility to work autonomously, where he has shown to deliver with quality and on time the challenges we entrust him with."
  },
  {
    id: 2, photo: person2, name: 'Iván Meneses',
    position: 'Senior Ecosystem Manager at Huawei',
    description: "We had Rafa in technology services sales at Huawei, where he responsibly demonstrated the integration of various technologies into the client portfolio he managed. Within his work, he demonstrated proactivity in order to attract more customers, creating projects and raising internal capital to meet the objectives entrusted to him."
  },
  {
    id: 3, photo: person3, name: 'Alejandro Harcha',
    position: 'Product Manager at OOH Planning',
    description: "Rafa has a strategic vision for product creation. By raising hypotheses and presenting the analysis for the continuous improvement of proposals, we manage to implement technological solutions and quantitatively demonstrate the success or learnings of our work."
  },
  {
    id: 4, photo: person4, name: 'Felipe Vera',
    position: 'Front End Developer at Quiebre Marketing',
    description: "I have taken my first class with Rafael. It has been a wonderful experience where he helped me to install the necessary programs to make our first code together. You can see that he is an experienced person and the class was extremely dynamic."
  }
];

const ReferenceCard = ({ photo, name, position, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 md:p-8 mx-3 my-4 text-left transition-all duration-300 h-full flex flex-col">
      {/* Quote icon */}
      <svg className="w-8 h-8 text-primary-100 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 2.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 7.789 5.983 11H10v10H0z" />
      </svg>
      <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
        "{description}"
      </p>
      <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
        <img src={photo} alt={name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-100" />
        <div>
          <h4 className="font-semibold text-neutral-800 text-sm">{name}</h4>
          <p className="text-xs text-neutral-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Reference = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    dotsClass: "slick-dots !bottom-[-40px]",
    appendDots: dots => (
      <ul className="!flex justify-center gap-2"> {dots} </ul>
    ),
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-neutral-300 hover:bg-primary-500 transition-colors" />
    ),
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 rounded-full ring-1 ring-primary-100">
            {t('home.reference.eyebrow') || 'Testimonials'}
          </span>
          <h2 className="section-title">
            {t('home.reference.title') || 'What People Are Saying'}
          </h2>
        </div>
        <Slider {...settings}>
          {references.map((ref) => (
            <div key={ref.id}>
              <ReferenceCard {...ref} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reference;
