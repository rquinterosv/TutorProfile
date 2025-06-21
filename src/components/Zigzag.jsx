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
    textKey: "As a full-stack developer, I have had the opportunity to teach aspiring individuals the fundamentals of programming, focusing on languages and frameworks such as React, Node.js, JavaScript, and Ruby on Rails. Currently, I am involved in code review and correction for various projects undertaken by new developers enrolled in the course.",
    imageUrl: logo2,
  },
  {
    id: 3,
    titleKey: "Product Manager",
    textKey: "Led the investigation, creation, and implementation of innovative products, aligning market needs with business goals to drive growth and customer satisfaction. Managed cross-functional teams, ensuring clear communication, prioritization, and optimal performance. Oversaw software project creation, coordinating with full-stack tech teams using Agile methodologies (Scrum) for timely delivery. Acted as a liaison between stakeholders and development teams, ensuring product requirements were met and providing regular progress updates. Focused on continuous product improvement through user feedback, and analyzed KPIs to evaluate product success and guide future projects.",
    imageUrl: logo2,
  },
  {
    id: 4,
    titleKey: "Business Manager",
    textKey: "Served as the primary representative in sales negotiations with software companies for Huawei Mobile Services implementation, leading discussions on contract terms, pricing, and service agreements. Developed and executed sales and marketing strategies to enhance brand presence and increase adoption. Focused on market analysis, identifying opportunities, and crafting campaigns to drive growth. Built and maintained strong client relationships, addressing concerns and ensuring exceptional service. Collaborated with cross-functional teams to align business objectives and ensure successful project execution. Explored new business opportunities, expanded market reach, and tracked performance using data-driven insights to refine strategies and improve outcomes.",
    imageUrl: logo3,
  },
  {
    id: 5,
    titleKey: "Business Manager",
    textKey: "Sales business representation and negotiations within the electric industry in Chile, focusing on building partnerships, securing contracts, and driving business growth through strategic discussions and relationship management.",
    imageUrl: logo4,
  },
  {
    id: 6,
    titleKey: "Finance & Administration",
    textKey: "Professional Internship. Responsible for the transfer and management of data in the billing department, ensuring the accuracy and timeliness of financial records. Conducted detailed analysis of financial data and contributed to the preparation of reports and presentations based on the studies conducted within the finance area. Collaborated with senior team members to support decision-making processes and provide actionable insights, contributing to the efficiency and optimization of financial operations.",
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
