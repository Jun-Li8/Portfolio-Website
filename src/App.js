import './App.scss';
import NavigationBar from './components/Navbar/navBar';
import Intro from './components/Intro/Intro';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Data from './data.json'

function App() {
  return (
    <div className="app">
      <NavigationBar/>
      <div className="sections">
        <Intro/>
        <Projects data={Data.projects}/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
