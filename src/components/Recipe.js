import React from 'react'

const Recipe = ({name, ingredients}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
    </div>
  )
}

export default Recipe