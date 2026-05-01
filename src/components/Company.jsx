import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import czechgroup from "../assets/img/czechgroup.svg";
import adl from "../assets/img/adl.png";
import huawei from "../assets/img/huawei.svg";
import ecom from "../assets/img/ecom.png";
import ts from "../assets/img/ts.svg";

const companies = [
  { name: 'Czech Group', logo: czechgroup },
  { name: 'Desafío Latam', logo: adl },
  { name: 'Huawei', logo: huawei },
  { name: 'Ecom Energía', logo: ecom },
  { name: 'Travel Security', logo: ts },
];

const LogoGrid = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <div className="container-width text-center">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary-700 bg-primary-50 rounded-full ring-1 ring-primary-100">
          {t('home.company.eyebrow') || 'Trusted by'}
        </span>
        <h2 className="section-title">{t('home.company.title')}</h2>

         <div className="mt-8 mb-10 flex flex-wrap justify-center gap-8 md:gap-12">
           {companies.map((company, index) => (
             <Link
               key={index}
               to="/experience"
               className="flex items-center justify-center px-6 py-4 rounded-xl hover:bg-neutral-50 transition-all duration-300"
             >
               <div className="w-32 h-16 flex items-center justify-center">
                 <img src={company.logo} alt={company.name} className="max-h-full max-w-full object-contain" />
               </div>
             </Link>
           ))}
         </div>

        <Link to="/experience" className="btn-primary">
          {t('home.company.more')}
        </Link>
      </div>
    </section>
  );
};

export default LogoGrid;
