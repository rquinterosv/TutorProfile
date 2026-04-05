import Hero from '../components/Hero'
import Courses from '../components/Courses'
import Reference from '../components/Reference'
import Company from '../components/Company'
import Portfolio from '../components/Portfolio'
import Driftertrip from '../components/Driftertrip'

// Companies logos
import logo1 from '../assets/img/czechgroup.svg';
import logo2 from '../assets/img/adl.png';

const Home = () => {

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Portfolio />
      <Company />
      <Driftertrip />
      <Courses />
      <Reference />
    </div>
  );
};

export default Home;
