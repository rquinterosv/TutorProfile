import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

import andres from '../assets/img/andres.jpeg';
import ivan from '../assets/img/ivan.jpeg';
import ale from '../assets/img/ale.jpeg';
import pipe from '../assets/img/pipe.jpeg';

// Names are proper nouns; position + quote are translated under home.reference.items.<id>.
const references = [
  { id: 'andres', photo: andres, name: 'Andres Gallardo' },
  { id: 'ivan', photo: ivan, name: 'Iván Meneses' },
  { id: 'alejandro', photo: ale, name: 'Alejandro Harcha' },
  { id: 'felipe', photo: pipe, name: 'Felipe Vera' },
];

const ReferenceCard = ({ id, photo, name }) => {
  const { t } = useTranslation();
  return (
    <figure className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 md:p-8 mx-3 my-4 text-left transition-all duration-300 h-full flex flex-col">
      <svg className="w-8 h-8 text-primary-100 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 2.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 7.789 5.983 11H10v10H0z" />
      </svg>
      <blockquote className="text-neutral-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
        <p>&ldquo;{t(`home.reference.items.${id}.quote`)}&rdquo;</p>
      </blockquote>
      <figcaption className="flex items-center gap-4 pt-4 border-t border-neutral-100">
        <img src={photo} alt={name} loading="lazy" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-100" />
        <div>
          <p className="font-semibold text-neutral-800 text-sm">{name}</p>
          <p className="text-xs text-neutral-500">{t(`home.reference.items.${id}.position`)}</p>
        </div>
      </figcaption>
    </figure>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnHover: true,
  dotsClass: 'slick-dots !bottom-[-40px]',
  appendDots: (dots) => <ul className="!flex justify-center gap-2"> {dots} </ul>,
  customPaging: () => <div className="w-2 h-2 rounded-full bg-neutral-300 hover:bg-primary-500 transition-colors" />,
  responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
};

const Reference = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-width">
        <SectionHeader eyebrow={t('home.reference.eyebrow')} title={t('home.reference.title')} />
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
