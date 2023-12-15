import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const Hero = () => {
  const {getRandomRecipes} = useContext(RecipeContext);
  return (
    <section className="hero">
      <div className="hero-banner">
        <h1>MealMix</h1>
        <p>
          Running out of ideas for what to make for dinner? Click the button and
          get a selection of recipes and a ready-made grocery list.
        </p>
        <button className="btn btn-primary" onClick={getRandomRecipes}>
          Get Recipes
        </button>
      </div>
    </section>
  );
};

export default Hero;
