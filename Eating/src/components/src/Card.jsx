import React from "react";

const Card = ({ meal }) => {
  return (
    <>
      <div className="card shadow-lg bg-success border-0 p-2 " style={{ width: "18rem" }}>
        <img src={meal.strMealThumb} height="250px" alt="" />
        <div className=" card-body">
          <h5 className=" text-truncate mb-4">{meal.strMeal}</h5>
          <button className="btn btn-sm text-success btn-primary ">Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
