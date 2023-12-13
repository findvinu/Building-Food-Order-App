// import { useState, useEffect } from "react";
import useHttp from "../hooks/UseHttp";
import MealItem from "./MealItem";
import Error from "./Error";

const requestConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  /*  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    const featchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");
      const mealsData = await response.json();
      setLoadedMeals(mealsData);
      console.log("mealsData", mealsData);
    };

    featchMeals();
  }, []);
 */

  if (isLoading) {
    return <p className="center">Feaching meals....</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  console.log(loadedMeals);
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
