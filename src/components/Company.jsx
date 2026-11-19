import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

import czechgroup from '../assets/img/czechgroup.svg';
import adl from '../assets/img/adl.png';
import huawei from '../assets/img/huawei.svg';
import ecom from '../assets/img/ecom.png';
import ts from '../assets/img/ts.svg';

// Company names are proper nouns (used as logo alt text).
const companies = [
  { name: 'Czech Group', logo: czechgroup },
  { name: 'Desafío Latam', logo: adl },
  { name: 'Huawei', logo: huawei },
  { name: 'Ecom Energía', logo: ecom },
  { name: 'Travel Security', logo: ts },
];

const Company = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-white">
      <div className="container-width text-center">
        <SectionHeader eyebrow={t('home.company.eyebrow')} title={t('home.company.title')} className="mb-8" />

        <div className="mb-10 flex flex-wrap justify-center gap-8 md:gap-12">
          {companies.map((company) => (
            <Link
              key={company.name}
              to="/experience"
              className="flex items-center justify-center px-6 py-4 rounded-xl hover:bg-neutral-50 transition-all duration-300"
            >
              <div className="w-32 h-16 flex items-center justify-center">
                <img src={company.logo} alt={company.name} loading="lazy" className="max-h-full max-w-full object-contain" />
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

export default Company;
