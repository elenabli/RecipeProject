import React from "react";
import Footer from './components/Footer';
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import Recipes from "./components/Recipes";

function App() {
  return (
    
      <div className="screen">
  
        <Header />
        <Hero />
        <Recipes />
        <Footer />
      </div>
   
  );
}

export default App;
