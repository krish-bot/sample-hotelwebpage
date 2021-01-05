import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services/Index';
import Cards from './components/Cards';
import Footer from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar />
        <HeroSection />
        <Router>
        <Cards />
        </Router>
        <Services />
        <Router>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
