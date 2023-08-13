import './App.css';
import HeroSection from './components/HeroSection'
import Navbar from '../src/components/Navbar'
import Skills from './components/SkillsSection';
import Education from './components/Education';
import AppFooter from './components/Footer';
import Projects from './components/Projects';


function App() {
  return (
      <div className=" flex flex-col items-center bg-background px-6 lg:px-20  ">
        <Navbar />
        <HeroSection/>
        <Education/>
        <Skills/>
        <Projects/>
        <AppFooter/>
      </div>
  );
}

export default App;
