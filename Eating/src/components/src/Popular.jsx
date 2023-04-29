import React from "react";
// import Product from "../Product";

const Popular = () => {
  const meals = [
    {
      strMeal: "Fish fofos",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
      idMeal: "53043",
    },
    {
      strMeal: "Fish pie",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
      idMeal: "52802",
    },

    {
      strMeal: "Kedgeree",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg",
      idMeal: "52887",
    },
    {
      strMeal: "Kung Po Prawns",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1525873040.jpg",
      idMeal: "52946",
    },
  ];
  return (
    <>
      <div className="row">
        <h1 className="col-12 mx-auto">Popular Dishes</h1>
      </div>
      <div className=" mt-5 d-flex justify-content-center gap-3 flex-wrap">
        {meals.map((m) => (
          <div
            key={m.idMeal}
            className="card shadow-lg bg-success border-0 p-2 "
            style={{ width: "18rem" }}
          >
            <img src={m.strMealThumb} height="250px" alt="" />
            <div className=" card-body">
              <h5 className=" text-truncate mb-4">{m.strMeal}</h5>
              <button className="btn btn-sm text-success btn-primary ">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Popular;
