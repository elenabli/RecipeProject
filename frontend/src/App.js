import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
