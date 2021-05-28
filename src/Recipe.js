import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    
    return (
        <div className="card">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients => {
                    <li>{ingredients.text}</li>
                })}
            </ol>
            <p>{calories}</p>
            <img src={image} className="img-container"/>
        </div>
    );
};

export default Recipe;