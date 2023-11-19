import { useState } from 'react';
import {recipes} from '../data.js';

const Hero = () => {

    // const [recipes, setRecipes] = useState([]);

    const getRandomRecipes = () => {
        const randomRecipes = [];
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * recipes.length);
            randomRecipes.push(recipes[randomIndex]);
        }
        console.log(randomRecipes);
    }

    return (
        <section className="hero">
            <div className="hero-banner">
                <h1>MealMix</h1>
                <p>
                    Running out of ideas for what to make for dinner?  
                    Click the button and get a selection of recipes and a ready-made grocery list.
                </p>
                <button className="btn btn-primary" onClick={getRandomRecipes}>Get Recipes</button>
            </div>
        </section>
    )
};

export default Hero;