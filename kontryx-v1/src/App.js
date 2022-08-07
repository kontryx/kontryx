import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Other from './pages/Other';

import Navbar from './components/Navbar/index'

function App() {
  return (
    <>
      <Router>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/other' element={<Other />} />
          
          
        </Routes>
        {/* <Home /> */}
      </Router>
    </>
  );
}

export default App;
