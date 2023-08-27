import CalendarTable from "../components/CalendarTable";
import { useLocation } from "react-router-dom";

const Planner = () => {

  const location = useLocation();
  var recipeTitlePassed = location.state?.recipeTitle || "Meal";

  //console.log(location);
  //console.log(recipeTitlePassed);

  return (
    <div className="planner-container">
      <div className="planner-contents">
      <h1 className="planner-header">Monthly Lunch Plan</h1>
        <CalendarTable title={recipeTitlePassed}/>
      </div>
    </div>
  );
};

export default Planner;
