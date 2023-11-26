import React from 'react'

const Recipe = ({name, ingredients}) => {
  return (
    <div className='recipe'>
        <h3>{name}</h3>
        <ul className='ingredients-list'>
            {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
        </ul>
    </div>
  )
}

export default Recipe