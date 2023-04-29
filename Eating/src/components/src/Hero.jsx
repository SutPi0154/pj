import React from "react";

const Hero = () => {
  return (
    <div className=" spacer-100">
      <div className=" row justify-content-center flex-wrap align-items-center">
        <div className=" col-12 col-lg-6 col-xl-6">
          <div className="ms-5">
            <span className=" text-primary dancing-fm fs-5 "> Best choice</span>
            <h1 className=" display-1"> Enjoy Delicious Food </h1>
            <p className=" text-muted">
              Enjoy a good dinner with the best dishes in the restaurant and
              improve your day.
            </p>
            <button className="btn btn-primary mt-4 px-4 py-2 rounded-pill text-white ">
              Order Now
            </button>
          </div>
        </div>
        <div className=" col-12 col-lg-5 col-xl-5">
          <img
            className="w-100 rounded-5"
            src="https://i.pinimg.com/564x/16/73/38/167338ad75ff2ccc82460da76e3a2475.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
