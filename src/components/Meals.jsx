import { useState, useEffect } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    const featchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");
      const mealsData = await response.json();
      setLoadedMeals(mealsData);
      console.log("mealsData", mealsData);
    };

    featchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
