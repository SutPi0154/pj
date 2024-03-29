import React from "react";

const Mobile = () => {
  return (
    <div>
      <div className="spacer-100 row">
        <div className="col-12 col-md-10 col-lg-8 col-xl-8">
          <h1 className=" display-3">
            Never Feel Hungry!
            <br />
            Download Our Mobile App
            <br />
            Enjoy Delicious Foods
          </h1>
          <p className="my-5 text-muted">
            Make online reservation, read restaurant reviews from dinners, and
            earn point towards free meals.OpenTable is a real time online
            reservation.
          </p>
          <button className="btn me-3 px-4 py-2 rounded-5 btn-primary text-white">
          <div className="row">
              <div className="col-3">
                <i className=" text-black bi bi-apple fs-2"></i>
              </div>
              <div className="col-8">
                <p className=" small m-0">Get from it</p>
                <h6>Apple store</h6>
              </div>
            </div>
          </button>
          <button className="btn rounded-5 px-4 py-2 btn-outline-primary btn-color ">
            <div className="row">
              <div className="col-3">
                <img
                width="50px"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div className="col-8">
                <p className=" small m-0">Get from it</p>
                <h6>Google play</h6>
              </div>
            </div>
          </button>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
