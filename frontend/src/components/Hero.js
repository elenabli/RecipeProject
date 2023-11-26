import { useState } from 'react';
import {recipes} from '../data.js';
import Recipe from './Recipe';

const Hero = () => {

    const [selectedRecipes, setSelectedRecipes] = useState([]);

    const getRandomRecipes = () => {
        const randomRecipes = new Set();
        while (randomRecipes.size < 5) {
            const randomIndex = Math.floor(Math.random() * recipes.length);
            randomRecipes.add(recipes[randomIndex]);
        }
        console.log(randomRecipes);
        setSelectedRecipes([...randomRecipes]);
    }

    return (
        <section className="hero">
            <div className="hero-banner">
                <h1>MealMix</h1>
                <p>
                    Running out of ideas for what to make for dinner?  
                    Click the button and get a selection of recipes and a ready-made grocery list.
                </p>
                <button className="btn btn-primary" onClick={getRandomRecipes} >Get Recipes</button>
            </div>
            <div className='recipe-container'>
                {selectedRecipes.map((recipe) => (
                    <Recipe key={recipe.id} {...recipe} />
                ))}
            </div>
        </section>
    )
};

export default Hero;