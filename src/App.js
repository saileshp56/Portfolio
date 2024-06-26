import logo from './logo.svg';
import './styles/App.css';
import About from './components/About'
import Awards from './components/Awards'
import NavBar from './components/NavBar'
import Resume from './components/Resume'
import Experience from './components/Experience';
import Projects from './components/Projects';
import Repository from './components/Repository';






function App() {
  return (
    <div >
      <NavBar />
      <About />
      <Projects />
      <Experience />
      <Repository />
      <Resume />
      <Awards />
    </div>
  );
}

export default App;
