import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import person1 from '../assets/img/andres.jpeg';
import person2 from '../assets/img/ivan.jpeg';
import person3 from '../assets/img/ale.jpeg';
import person4 from '../assets/img/pipe.jpeg';

const references = [
  {
    id: 1,
    photo: person1,
    name: 'Andres Gallardo',
    position: 'General Manager at Desafío Latam',
    description: "We count on Rafa's commitment and leadership, which helped us in the creation of different businesses and services that we are still running today in Desafío Latam. I would like to highlight his dynamism and responsibility to work autonomously, where he has shown to deliver with quality and on time the challenges we entrust him with."
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
    description: "Rafa has a strategic vision for product creation. By raising hypotheses and presenting the analysis for the continuous improvement of proposals, we manage to implement technological solutions and quantitatively demonstrate the success or learnings of our work."
  },
  {
    id: 4,
    photo: person4,
    name: 'Felipe Vera',
    position: 'Front End Developer at Quiebre Marketing Inmobiliario',
    description: "I have taken my first class with Rafael. It has been a wonderful experience where he helped me to install the necessary programs to make our first code together. You can see that he is an experienced person and the class was extremely dynamic."
  }
];

const ReferenceCard = ({ photo, name, position, description }) => {
  return (
    <div className="flex flex-col items-center bg-blue-500 rounded-lg shadow-lg p-6 text-center h-full">
      <div className="flex justify-center mb-4">
        <img 
          src={photo} 
          alt={name} 
          className="w-24 h-24 object-cover rounded-full border-4 border-black"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-md font-medium text-white mb-2">{position}</p>
        <p className="text-base text-white">{description}</p>
      </div>
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
    autoplaySpeed: 5000,
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
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-6">
          What People Are Saying
        </h2>
        <Slider {...settings}>
          {references.map((ref) => (
            <div key={ref.id} className="flex justify-center">
              <ReferenceCard {...ref} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reference;
