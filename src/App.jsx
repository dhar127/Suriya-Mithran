import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import CampusGallery from './Components/Campus/CampusGallery'; // Import CampusGallery
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Title subTitle="Our PROGRAMS" title="What We Offer" />
        <Programs />

        {/* Routes for Campus and Gallery */}
        <Routes>
          <Route path="/" element={<Campus />} />
          <Route path="/gallery" element={<CampusGallery />} />
        </Routes>

        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
