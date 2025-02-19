import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';


import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import Aboutus from './pages/Aboutus';
import NavBar from './components/Navbar/NavBar';
import Service from './pages/Service';
import Products from './pages/Products';
import Hardware from './pages/productpages/hardware/Hardware';
import Career from './pages/Career';
import Jobapply from './pages/jobapply/Jobapply';
import Singlepro from './pages/productpages/Singlepro.jsx/Singlepro';
import Dersk from './pages/productpages/Desk/Dersk';
import Laptop from './pages/productpages/Laptops/Laptop';
import Tabs from './pages/productpages/tabs/Tabs';
import Project from './pages/productpages/Projectors/Project';
import Server from './pages/productpages/Servers/Server';

;

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Zigma");

  return (
    <>
      <Router>
        <ScrollToTop>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/service" element={<Service />} />
            <Route path="/product" element={<Products />} /> 
            <Route path="/hardware" element={<Hardware/>} /> 
            <Route path="/contact" element={<Contact/>} /> 
            <Route path="/career" element={<Career/>} /> 
            <Route path="/jobapply" element={<Jobapply/>} /> 
            <Route path="/singlepro" element={<Singlepro/>} /> 
            <Route path="/desktop" element={<Dersk/>} /> 
            <Route path="/laptop" element={<Laptop/>} /> 
            <Route path="/tabs" element={<Tabs/>} /> 
            <Route path="/project" element={<Project/>} /> 
            <Route path="/server" element={<Server/>} /> 
           
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
