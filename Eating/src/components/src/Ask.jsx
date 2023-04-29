import React from "react";

const Ask = () => {
  return (
    <div>
      <div className="row spacer-100 justify-content-center align-items-center">
        <div className="col-12 col-md-12 col-lg-8 col-xl-8">
          <div className="ms-5">
            <h1 className=" display-3">
              {" "}
              Do You Have An Dinner Plan Today? Reserve Your Table{" "}
            </h1>
            <p className=" text-muted">
              Make online reservation, read restaurant reviews from dinners, and
              earn point towards free meals.OpenTable is a real time online reservation.
            </p>
            <button className="btn btn-primary mt-4 px-3 py-2 rounded-pill text-white ">
              Make Reservation
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
            <img src="https://i.pinimg.com/564x/09/c5/58/09c5585a9713c65e74a0634f26c10678.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ask;
