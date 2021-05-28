import React from 'react';

const Recipe = ({title, image, ingredients}) => {
    
    return (
            <div className="card2">
                <h2>{title}</h2>
                <img src={image} alt="" className="img-container" />
                {ingredients.map(ingredient => {
                    return <p styled={{textAlign: 'justify'}}>{ingredient.text}</p>   
                })}
            </div>
            
    );
};

export default Recipe;