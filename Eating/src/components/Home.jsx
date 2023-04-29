import React, { useEffect, useState } from "react";
import Card from "./src/Card";
import Hero from "./src/Hero";
import Mobile from "./src/Mobile";
import About from "./src/About";
import Popular from "./src/Popular";
import Ask from "./src/Ask";

const Home = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetchMeals();
  }, []);
  const fetchMeals = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const data = await api.json();
    console.log(data.meals);
    setMeals(data.meals);
  };

  return (
    <div>
      <Hero />
      <Popular />
      <About />
      <div className="spacer-100 ">
        <h1 className=" display-3 text-center mb-5">Our Regular Menu Pack</h1>

        <div className="d-flex justify-content-center gap-5 flex-wrap">
          {meals.map((meal) => (
            <Card key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>
      <Ask />
      <Mobile />
    </div>
  );
};

export default Home;
