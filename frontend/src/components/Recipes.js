import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import Recipe from "./Recipe";

const Recipes = () => {
  const { selectedRecipes } = useContext(RecipeContext);

  const shoppingList = selectedRecipes
    ? selectedRecipes
        .flatMap((recipe) => recipe.ingredients)
        .reduce((acc, ingredient) => {
          if (!acc[ingredient.name]) {
            acc[ingredient.name] = { ...ingredient };
          } else {
            acc[ingredient.name].quantity += ingredient.quantity;
          }
          return acc;
        }, {})
    : {};

  const shoppingListArray = Object.values(shoppingList);

  return (
    <div>
      {selectedRecipes ? (
        <>
          <h2>Recipes</h2>
          <div className="recipe-container">
            {selectedRecipes.map((recipe) => (
              <Recipe key={recipe._id} {...recipe} />
            ))}
          </div>
          <h2>Shopping list</h2>
          <div>
            <ul>
              {shoppingListArray.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.name} - {ingredient.quantity} {ingredient.unit}
                </li>
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
