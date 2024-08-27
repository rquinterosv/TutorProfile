import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import person1 from '../assets/img/andres.jpeg';
import person2 from '../assets/img/ivan.jpeg';
import person3 from '../assets/img/ale.jpeg';

const references = [
  {
    id: 1,
    photo: person1,
    name: 'Andres Gallardo',
    position: 'General Manager at Desafío Latam',
    description: "We count on Rafa commitment and leadership, which helped us in the creation of different businesses and services that we are still running today in Desafío Latam. I would like to highlight his dynamism and responsibility to work autonomously, where he has shown to deliver with quality and on time the challenges we entrust him with."
  },
  {
    id: 2,
    photo: person2,
    name: 'Iván Meneses',
    position: 'Senior Ecosystem Manager at Huawei',
    description: "We had Rafa in technology services sales at Huawei, where he responsibly demonstrated the integration of various technologies into the client portfolio he managed. Within his work, he demonstrated proactivity in order to attract more customers, creating projects and raising internal capital to meet the objectives entrusted to him."
  },
  {
    id: 3,
    photo: person3,
    name: 'Alejandro Harcha',
    position: 'Product Manager at OOH Planning',
    description: "Rafa has a strategic vision for product creation. By raising hypotheses and presenting the analysis for the continuous improvement of proposals, we manage to implement technological solutions and quantitatively demonstrate the success or learnings of our work. "
  },
];

const ReferenceCard = ({ photo, name, position, description }) => {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-blue-500">
      <div className="flex justify-center">
        <img 
          src={photo} 
          alt={name} 
          className="w-24 h-24 object-cover rounded-full border-4 border-black"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{name}</h3>
      <p className="mt-2 text-md font-medium text-white">{position}</p>
      <p className="mt-2 text-base text-white">{description}</p>
    </div>
  );
};

const Reference = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Cambié el tiempo a 5000ms para que sea más lento
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-12 overflow-x-hidden"> {/* overflow-x-hidden previene el desplazamiento horizontal */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-6">
          What People Are Saying
        </h2>
        <Slider {...settings}>
          {references.map((ref) => (
            <div key={ref.id} className="p-4">
              <div className="flex flex-wrap -mx-4">
                {references.slice(ref.id - 1, ref.id + 2).map((item) => (
                  <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                    <ReferenceCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reference;
