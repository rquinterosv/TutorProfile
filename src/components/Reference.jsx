import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import person1 from '../assets/img/code.jpg';
import person2 from '../assets/img/code.jpg';
import person3 from '../assets/img/code.jpg';

const references = [
  {
    id: 1,
    photo: person1,
    name: 'John Doe',
    position: 'Software Engineer',
    description: 'John is a skilled engineer with a passion for developing innovative solutions.'
  },
  {
    id: 2,
    photo: person2,
    name: 'Jane Smith',
    position: 'Product Manager',
    description: 'Jane has a knack for understanding user needs and delivering exceptional products.'
  },
  {
    id: 3,
    photo: person3,
    name: 'Alice Johnson',
    position: 'UX Designer',
    description: 'Alice excels in creating user-centric designs that enhance the overall user experience.'
  },
  {
    id: 4,
    photo: person1,
    name: 'Michael Brown',
    position: 'Data Scientist',
    description: 'Michael uses data-driven insights to drive strategic decisions and improvements.'
  },
  {
    id: 5,
    photo: person2,
    name: 'Emily Davis',
    position: 'Marketing Specialist',
    description: 'Emily specializes in crafting effective marketing strategies that resonate with target audiences.'
  }
];

const ReferenceCard = ({ photo, name, position, description }) => {
  return (
    <div className=" p-6 rounded-lg shadow-lg bg-blue-500">
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
    autoplaySpeed: 3000,
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
