import './App.css';
import AboutMe from './Sections/AboutMe/AboutMe';
import Banner from './Sections/Banner/Banner';
import Portfolio from './Sections/Portfolio/Portfolio';

function App() {
  return (
    <div className='App'>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
