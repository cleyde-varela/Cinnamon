/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div className="recipe">
      <div>
        <p>{recipe.id}</p>
      </div>
      <div>
        <img
          src={
            recipe.image !== "N/A"
              ? recipe.image
              : "https://via.placeholder.com/400"
          }
          alt={recipe.title}
        ></img>
      </div>
      <div>
        <h3 className="search-result-title">{recipe.title}</h3>
        <button
          className="search-add-btn"
          onClick={() => {
            navigate("/planner", { state: { recipeTitle: recipe.title } });
          }}
        >
          Add to planner
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
