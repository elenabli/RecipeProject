import { createContext, useState, useEffect } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const response = await fetch("http://localhost:3100/api/recipes");
      const jsonData = await response.json();
      setRecipes(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);


  const getRandomRecipes = () => {
    const randomRecipes = new Set();
    while (randomRecipes.size < 5) {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      randomRecipes.add(recipes[randomIndex]);
    }
    console.log(randomRecipes);
    setSelectedRecipes([...randomRecipes]);
  };


    return (
        <RecipeContext.Provider value={{selectedRecipes, getRandomRecipes}}>
        {children}
        </RecipeContext.Provider>
    );
    }