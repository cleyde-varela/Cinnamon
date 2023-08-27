/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchIcon from "../assets/search.svg";

// ApiKey a597b371eba14f32905af33cdb8136dd
const API_URL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=a597b371eba14f32905af33cdb8136dd";

/* Test Static Data
const recipe1 = {
  id: 654959,
  title: "Pasta With Tuna",
  image: "https://spoonacular.com/recipeImages/654959-312x231.jpg",
  imageType: "jpg",
}; */

const Search = () => {
  // States
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  // Get data from api in json format
  const searchRecipes = async (title) => {
    const response = await fetch(`${API_URL}&query=${title}`);
    const data = await response.json();

    // Shows data in console
    //console.log(data.results);

    setRecipes(data.results);
  };

  useEffect(() => {
    searchRecipes("pasta"); // Has a title set as soon the page is loaded
  }, []);

  return (
    <div className="search-section">
      <h1 className="search-header">Search for recipes</h1>

      <div className="search">
        <input
          placeholder="Pasta"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 'e' stands for event
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchRecipes(searchTerm)}
        />
      </div>

      {
        // Dynamic block of code
        recipes?.length > 0 ? (
          <div className="search-container">
            {
              // Dynamic block of code
              recipes.map((recipe) => (
                <RecipeCard recipe={recipe} />
              ))
            }
          </div>
        ) : (
          <div className="empty">
            <h2 className="search-subheader">Sorry! No recipes found.</h2>
          </div>
        )
      }
    </div>
  );
};

export default Search;
