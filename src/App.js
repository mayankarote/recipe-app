import React, { useEffect , useState} from 'react';
import './App.css';
import Recipe from './Recipe';
import Footer from './Footer';
import logo from './logo2.png';

const App = () => {
  const APP_ID = "087d0d95";
  const APP_KEY = "ba7ebf6b028795b0f6f1500387926d6c	";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('sweet');

  useEffect(() => {
    getRecipes();
  }, [query]);
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`);

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
        <form onSubmit={getSearch} className="search-form">
        <img src={logo} alt="store" style={{ width: 100, marginRight: 50, marginTop: 10, borderRadius: 100 }} />
        <input className="search-bar" placeholder="Search" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      <Footer />
        </div>
      );
}
export default App;
