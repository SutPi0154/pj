import React from "react";

const About = () => {
  return (
    <div className=" spacer-100 ">
      <div className=" row justify-content-between align-items-center">
        <div className=" col-12 col-md-6 col-lg-4 col-xl-4">
          <h4 className="text-center text-primary dancing-fm">The Best Food</h4>

          <h1 className="display-2">We Provide Healthy Food</h1>
          <p className="">
            Food comes to us from our relatives, whether they have wings or
            roots. This is how we consider food, it also has a culture. It has a
            history that passes from generation to generation.
          </p>
        </div>
        <div className=" col-12 col-md-8 col-lg-8 col-xl-8">
          <img
            src="https://cdn.media.amplience.net/i/japancentre/guide-page-sushi-79-maki-sushi/guide-page-sushi-79-maki-sushi?$poi$&w=700&sm=aspect&aspect=16:9&fmt=auto"
            alt=""
            className="w-100 rounded-2"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
