const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    unit: {
        type: String,
        required: true,
    },
});

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: [ingredientSchema],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
