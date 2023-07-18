import './App.css';
import AboutMe from './Sections/AboutMe/AboutMe';
import Banner from './Sections/Banner/Banner';
import ContactMe from './Sections/ContactMe/ContactMe.tsx';
import Portfolio from './Sections/Portfolio/Portfolio';
import Skills from './Sections/Skills/Skills.tsx';

function App() {
  return (
    <div className='App'>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
