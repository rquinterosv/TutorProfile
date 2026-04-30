import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import logo1 from "../assets/img/czechgroup.svg";
import logo2 from "../assets/img/adl.png";
import logo3 from "../assets/img/huawei.svg";
import logo4 from "../assets/img/ecom.png";
import logo5 from "../assets/img/ts.svg";

const data = [
  {
    id: 1,
    titleKey: "experience.items.czechgroup.title",
    textKey: "experience.items.czechgroup.text",
    imageUrl: logo1,
    period: "2022 - Present",
  },
  {
    id: 2,
    titleKey: "experience.items.desafio.title",
    textKey: "experience.items.desafio.text",
    imageUrl: logo2,
    period: "2021 - 2022",
  },
  {
    id: 3,
    titleKey: "experience.items.product.title",
    textKey: "experience.items.product.text",
    imageUrl: logo2,
    period: "2020 - 2021",
  },
  {
    id: 4,
    titleKey: "experience.items.huawei.title",
    textKey: "experience.items.huawei.text",
    imageUrl: logo3,
    period: "2019 - 2020",
  },
  {
    id: 5,
    titleKey: "experience.items.ecom.title",
    textKey: "experience.items.ecom.text",
    imageUrl: logo4,
    period: "2018 - 2019",
  },
  {
    id: 6,
    titleKey: "experience.items.travel.title",
    textKey: "experience.items.travel.text",
    imageUrl: logo5,
    period: "2017 - 2018",
  },
];

const ZigzagItem = ({ id, titleKey, textKey, imageUrl, period }) => {
  const { t } = useTranslation();
  const isEven = id % 2 === 0;
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`w-full py-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      onViewportEnter={() => setIsVisible(true)}
    >
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
        {/* Logo/Image */}
        <div className="w-full md:w-2/5">
          <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
            <img src={imageUrl} alt={t(titleKey)} className="max-h-20 w-auto object-contain" />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-3/5">
          <span className="inline-block text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">{period}</span>
          <h2 className="text-2xl font-bold text-neutral-800 mb-3">{t(titleKey)}</h2>
          <p className="text-neutral-600 leading-relaxed">{t(textKey)}</p>

          {/* Dot indicator */}
          <div className="hidden md:block relative">
            <div className={`absolute top-1/2 ${isEven ? '-left-6' : '-right-6'} w-3 h-3 rounded-full bg-primary-500 ring-4 ring-primary-100`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ZigzagList() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 rounded-full ring-1 ring-primary-100">
            {t('experience.eyebrow') || 'Work History'}
          </span>
          <h2 className="section-title">{t('experience.title') || 'My Work Experience'}</h2>
          <p className="section-subtitle">{t('experience.subtitle') || 'A journey through my professional career'}</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2" />

          {data.map((item) => (
            <ZigzagItem
              key={item.id}
              id={item.id}
              titleKey={item.titleKey}
              textKey={item.textKey}
              imageUrl={item.imageUrl}
              period={item.period}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
