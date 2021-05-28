import React, { component, useEffect , useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = "087d0d95";
  const APP_KEY = "ba7ebf6b028795b0f6f1500387926d6c	";
  
  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=sweet&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`);

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    
    <div className="App">
        <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}
export default App;
