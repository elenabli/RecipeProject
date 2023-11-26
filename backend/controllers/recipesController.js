const recipes = require("../models/recipesMongoose");


const createRecipe = async (req, res) => {
  try {
    const { name, ingredients } = req.body;
    if (!name || !ingredients ) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    const newRecipe = new recipes({
      name,
      ingredients,
    });
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await recipes.find();
    res.json(allRecipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getRecipeById = async (req, res) => {
  try {
    const recipe = await recipes.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateRecipe = async (req, res) => {
  try {
    const recipe = await recipes.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const putRecipe = async (req, res) => {
  try {
    const recipe = await recipes.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deleteRecipe = async (req, res) => {
  try {
    const recipe = await recipes.findOneAndDelete({ _id: req.params.id });
    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.json({ msg: "Recipe deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  putRecipe,
  deleteRecipe,
};
