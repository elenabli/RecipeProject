import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import Recipes from "./components/Recipes";
import { RecipeProvider } from "./context/RecipeContext";

function App() {
  return (
    <div className="screen">
      <Header />
      <RecipeProvider>
        <Hero />
        <Recipes />
      </RecipeProvider>
      <Footer />
    </div>
  );
}

export default App;
