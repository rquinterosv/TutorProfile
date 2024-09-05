import React from 'react';
import Hero from '../components/Hero'
import Courses from '../components/Courses'
import Reference from '../components/Reference'

const Home = () => {

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Courses />
      <Reference />
    </div>
  );
};

export default Home;
