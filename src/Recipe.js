import React from 'react';

const Recipe = ({title, image, ingredients}) => {
    
    return (
               <div className="card2">
                    <h2>{title}</h2>
                    <ol>
                        {ingredients.map(ingredient => {
                            <li>{ingredient.text}</li>
                        })}
                    </ol>
                    <img src={image} className="img-container"/>
                </div>
            
    );
};

export default Recipe;