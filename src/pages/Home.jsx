import Hero from '../components/Hero';
import WhatIDo from '../components/WhatIDo';
import Portfolio from '../components/Portfolio';
import Company from '../components/Company';
import Reference from '../components/Reference';
import MusicTeaser from '../components/MusicTeaser';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <WhatIDo />
      <Portfolio />
      <Company />
      <Reference />
      <MusicTeaser />
      <ContactCTA />
    </div>
  );
};

export default Home;
