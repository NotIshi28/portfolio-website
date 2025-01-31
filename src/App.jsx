import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';

import { About, Contact, Hero, Navbar, Tech, Works } from "./components";


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
        <Contact />
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
