import React from "react";

const Contact = () => {
  return (
    <div>
      <div className=" container-fluid my-5">
        <form
          action=""
          className="margin-50 p-5 border row align-items-center "
        >
          <div className="col-12 col-md-8 col-lg-6 col-xl-6">
            <div className="p-3 bEnd ">
              <div className="mb-4">
                <label htmlFor="" className=" form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className=" form-control"
                  placeholder="John Smith"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className=" form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className=" form-control"
                  placeholder="Emaxple@giaml.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className=" form-label">
                  Your Name
                </label>
                <input
                  type="number"
                  className=" form-control"
                  placeholder="xxxxxxxxxx"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-6 col-xl-6">
            <div
              className=" p-5
             "
            >
              <label htmlFor="" className=" form-label">
                Text Message Here
              </label>
              <textarea
                name=""
                id=""
                cols="50"
                rows="10"
                className=" form-control"
              ></textarea>
            </div>
          </div>
          <div className="">
            <button className=" btn btn-primary text-white w-25">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
