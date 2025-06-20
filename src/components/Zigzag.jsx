import { useTranslation } from 'react-i18next';

// Importa las imágenes
import logo1 from "../assets/img/czechgroup.svg";
import logo2 from "../assets/img/adl.png";
import logo3 from "../assets/img/huawei.svg";
import logo4 from "../assets/img/ecom.png";
import logo5 from "../assets/img/ts.svg";


const data = [
  {
    id: 1,
    titleKey: "Fullstack web Developer",
    textKey: "As a fullstack web developer, I am responsible for designing and developing complete web applications, working on both the client-side (front-end) and server-side (back-end). I use modern technologies, mostly I use PHP/Nette, MySQL, Vue and Docker among other, to create dynamic and scalable applications. My focus is on user experience, ensuring each project is efficient, functional, and easy to use and administrate by the clients.",
    imageUrl: logo1,
  },
  {
    id: 2,
    titleKey: "Fullstack Web Developer",
    textKey: "section2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, ",
    imageUrl: logo2,
  },
  {
    id: 3,
    titleKey: "Product Manager",
    textKey: "section2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, ",
    imageUrl: logo2,
  },
  {
    id: 4,
    titleKey: "Business Manager",
    textKey: "section2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, ",
    imageUrl: logo3,
  },
  {
    id: 5,
    titleKey: "Business Manager",
    textKey: "section2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, ",
    imageUrl: logo4,
  },
  {
    id: 6,
    titleKey: "Finance & Administration",
    textKey: "section2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, ",
    imageUrl: logo5,
  },
];

const ZigzagItem = ({ id, titleKey, textKey, imageUrl }) => {
  const { t } = useTranslation();

  const isEven = id % 2 === 0;

  return (
    <>
    <div className="container flex flex-col md:flex-row items-center md:justify-between w-full mx-auto">
      {isEven ? (
        <>
                  <div className="company_logo">
            <img src={imageUrl} alt={t(titleKey)} className="w-full" />
          </div>
          <div className="container text-left mx-auto mb-12 max-w-[710px] lg:mb-20">
            <h2 className="text-2xl font-bold mb-4">{t(titleKey)}</h2>
            <p className="text-gray-700">{t(textKey)}</p>
          </div>

        </>
      ) : (
        <>
          <div className="container text-left mx-auto max-w-[710px]">
            <h2 className="text-3xl font-bold mb-4">{t(titleKey)}</h2>
            <p className="text-gray-700">{t(textKey)}</p>
          </div>
          <div className="company_logo">
            <img src={imageUrl} alt={t(titleKey)} className="w-full" />
          </div>
        </>
      )}
    </div></>
  );
};

export default function ZigzagList() {
  const { t } = useTranslation();

  return (

    <div>
      {/* Iteración sobre los items */}
      {data.map((item) => (
        <ZigzagItem
          key={item.id}
          id={item.id}
          titleKey={item.titleKey}
          textKey={item.textKey}
          imageUrl={item.imageUrl} />
      ))}
    </div>
  );
}
