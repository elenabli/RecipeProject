const express = require("express");

const router = express.Router();
const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  putRecipe,
  deleteRecipe,
} = require("../controllers/recipesController");


router.get("/", getAllRecipes);


router.get("/:id", getRecipeById);


router.post("/", createRecipe);


router.patch("/:id", updateRecipe);


router.put("/:id", putRecipe);


router.delete("/:id", deleteRecipe);


module.exports = router;
