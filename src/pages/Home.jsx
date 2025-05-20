import Hero from '../components/Hero'
import Courses from '../components/Courses'
import Reference from '../components/Reference'
// import Experience from '../components/Experience'

const Home = () => {

  return (
    <div className="overflow-x-hidden">
      <Hero />
      {/* <Experience /> */}
      <Courses />
      <Reference />
    </div>
  );
};

export default Home;
