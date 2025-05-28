import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';

function App() {
  return (
<HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   </HashRouter>
  );
}

export default App;
