import React, { Component, useEffect , useState} from 'react';
import './App.css';

const App = () => {
  const APP_ID = "087d0d95";
  const APP_KEY = "ba7ebf6b028795b0f6f1500387926d6c	";
  const exaampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Effect has been run ');
  },[counter ]);

  return (
    
    <div className="App">
        <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}
export default App;
