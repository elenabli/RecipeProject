import Recipe from "./Recipe"
import { recipes } from "../data.js"

const Recipes = () => {
  return (
    <div>
        {recipes.map((recipe) => (
            <Recipe key={recipe.id} {...recipe} />
        
        ))} 
    </div>
  )
}

export default Recipes