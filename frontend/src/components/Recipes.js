import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import Recipe from "./Recipe";

const Recipes = () => {
  const { selectedRecipes } = useContext(RecipeContext);
  const shoppingList = selectedRecipes
    ? selectedRecipes.flatMap((recipe) => recipe.ingredients)
    : [];

  return (
    <div>
      {selectedRecipes ? (
        <>
          <h2>Recipes</h2>
          <div className="recipe-container">
            {selectedRecipes &&
              selectedRecipes.map((recipe) => (
                <Recipe key={recipe._id} {...recipe} />
              ))}
          </div>
          <h2>Shopping list</h2>
          <div>
            <ul>
              {selectedRecipes &&
                shoppingList.map((ingredient, index) => (
                  <li key={index}>{ingredient.name}</li>
                ))}
            </ul>
          </div>
        </>
      ) : (
        <h2>Click the button to get recipes!</h2>
      )}
    </div>
  );
};

export default Recipes;
