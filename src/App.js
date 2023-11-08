import React from "react";
import Footer from './components/Footer';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div>
      <div className="screen">
        {/* <NavBar /> */}
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
