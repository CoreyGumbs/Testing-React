import React from "react";
import "./App.css";
import StarWarsCharacters from "./components/StarWarsCharacters";

function App() {
  return (
    <div className="App" data-testid= "app-component">
      <header className="App-header">
        <img
          src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
          width="300"
          alt="logo"
          data-testid="logo-img"
        />
      </header>
      <StarWarsCharacters />
    </div>
  );
}

export default App;
