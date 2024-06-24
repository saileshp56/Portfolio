import logo from './logo.svg';
import './styles/App.css';
import About from './components/About'
import Awards from './components/Awards'
import NavBar from './components/NavBar'
import Resume from './components/Resume'
import Experience from './components/Experience';
import Projects from './components/Projects';
import Repository from './components/Repository';
import ReadMe from './components/ReadMe';





function App() {
  return (
    <div >
      <NavBar />
      {/* <ReadMe /> */}
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
