import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Qualification from './components/Qualification';

function App() {
  return (    
      <div>
        <Navbar/>
        <Home/>
        <About/>  
        <Skills/>      
        <Qualification/>      
        <Projects/>
        <Contact/>
      </div>    
  );
}

export default App;
