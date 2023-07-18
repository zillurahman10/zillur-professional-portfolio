import './App.css';
import AboutMe from './Sections/AboutMe/AboutMe';
import Banner from './Sections/Banner/Banner';
import Portfolio from './Sections/Portfolio/Portfolio';
import Skills from './Sections/Skills/Skills.tsx';

function App() {
  return (
    <div className='App'>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Skills></Skills>
    </div>
  );
}

export default App;
