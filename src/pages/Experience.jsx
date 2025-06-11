import React from "react";
import { useTranslation } from "react-i18next";

import logo1 from '../assets/img/czechgroup.svg';
import logo2 from '../assets/img/czechgroup.svg';

const data = [
  {
    id: 1,
    titleKey: "Czech Group",
    textKey: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
    imageUrl: logo1,
  },
  {
    id: 2,
    titleKey: "Desafío Latam",
    textKey: "section2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, ",
    imageUrl: logo2,
  },
  {
    id: 3,
    titleKey: "Desafío Latam",
    textKey: "section2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, ",
    imageUrl: logo2,
  },
  {
    id: 4,
    titleKey: "Desafío Latam",
    textKey: "section2.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, ",
    imageUrl: logo2,
  },
];

const ZigzagItem = ({ id, titleKey, textKey, imageUrl }) => {
  const { t } = useTranslation();

  const isEven = id % 2 === 0;

  return (

    <><div className="container flex flex-col md:flex-row items-center md:justify-between my-8 w-full mx-auto">
        {isEven ? (
          <>
            <div className="container text-center mb-12 max-w-[710px] lg:mb-20">
              <img src={imageUrl} alt={t(titleKey)} className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-4">{t(titleKey)}</h2>
              <p className="text-gray-700">{t(textKey)}</p>
            </div>
          </>
        ) : (
          <>
            <div className="container text-center mx-auto mb-12 max-w-[710px] lg:mb-20">
              <h2 className="text-2xl font-bold mb-4">{t(titleKey)}</h2>
              <p className="text-gray-700">{t(textKey)}</p>
            </div>
            <div className="md:w-1/2 p-4">
              <img src={imageUrl} alt={t(titleKey)} className="w-full rounded-lg shadow-lg" />
            </div>
          </>
        )}
      </div></>
  );
};

export default function ZigzagList() {
  return (
    <div>
      {data.map((item) => (
        <ZigzagItem
          key={item.id}
          id={item.id}
          titleKey={item.titleKey}
          textKey={item.textKey}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}


