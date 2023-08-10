import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';

import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";


const App =()=> {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary"> 
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
