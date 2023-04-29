import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <a className="navbar-brand d-flex align-items-center " href="#">
          <span className="material-symbols-outlined fs-1 text-primary">
            restaurant
          </span>
          <h4 className=" text-primary m-0">Bites</h4>
        </a>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
          <div className="my-5">
            <h3>
              Subscribe Our <br />
              Newsletter
            </h3>
            <div className="my-4">
              <input
                type="text"
                placeholder="Enter Your Email"
                className=" w-50 rounded-pill icon py-2 border-0 px-3"
              />
              <button className="btn btn-small bg-primary  rounded-circle">
                <i className="  bi bi-arrow-right text-white fs-6"></i>
              </button>
            </div>

            <div>
              <a href="" className=" pe-2 list-unstyled">
                <i className=" bi bi-facebook fs-2  rounded-circle text-secondary p-1"></i>
              </a>
              <a href="" className=" pe-2 list-unstyled">
                <i className=" bi bi-twitter fs-2  rounded-circle text-secondary p-1"></i>
              </a>
              <a href="" className=" pe-2 list-unstyled">
                <i className=" bi bi-instagram fs-2  rounded-circle text-secondary p-1"></i>
              </a>
              <a href="" className=" pe-2 list-unstyled">
                <i className=" bi bi-youtube fs-2  rounded-circle text-secondary p-1"></i>
              </a>
            </div>
          </div>
        </div>
        <div className=" col-12 col-md-8 col-lg-6 col-xl-8">
          <div className="mt-5">
            <ul className=" d-flex justify-content-between gap-2 list-unstyled">
              <li>
                <ul>
                  <li className=" list-unstyled ">
                    <a className=" text-decoration-none text-black " href="">
                      <h4 className="mb-4">Service</h4>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none mb-2 text-black-50"
                      href=""
                    >
                      <p className=" mb-2"> Online Order</p>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none mb-2 text-black-50"
                      href=""
                    >
                      <p className="mb-2"> Pre-Reservation</p>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none mb-2 text-black-50"
                      href=""
                    >
                      <p className="mb-2"> 24/7 Service</p>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none mb-2 text-black-50"
                      href=""
                    >
                      <p className=" mb-2"> Foodie Place</p>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none mb-2 text-black-50"
                      href=""
                    >
                      Super Chefs
                    </a>
                  </li>
                </ul>
              </li>
              <li className=" list-unstyled ">
                <ul>
                  <li className=" list-unstyled ">
                    <a className=" text-decoration-none text-black" href="">
                      <h4 className=" mb-4">Quick Links</h4>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none text-black-50 text-black"
                      href=""
                    >
                      <p className=" mb-2">Menu</p>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none text-black-50 text-black"
                      href=""
                    >
                      <p className=" mb-2"> Reviews</p>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none text-black-50 text-black"
                      href=""
                    >
                      <p className=" mb-2"> Reserve Table</p>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none text-black-50 text-black"
                      href=""
                    >
                      <p className=" mb-2"> Reserve Table</p>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none text-black-50 text-black"
                      href=""
                    >
                      <p>Order Foods</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className=" list-unstyled ">
                <ul>
                  <li className=" list-unstyled ">
                    <a className=" text-decoration-none text-black" href="">
                      <h4 className=" mb-4">About</h4>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none text-black-50 text-black"
                      href=""
                    >
                      <p className=" mb-2">Our Story</p>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none text-black-50 text-black"
                      href=""
                    >
                      <p className=" mb-2">Benefits</p>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none text-black-50 text-black"
                      href=""
                    >
                      <p className=" mb-2"> Career</p>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none text-black-50 text-black"
                      href=""
                    >
                      <p className=" mb-2"> Our Chefs</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className=" list-unstyled ">
                <ul>
                  <li className=" list-unstyled ">
                    <a className=" text-decoration-none text-black" href="">
                      <h4 className=" mb-4">Help</h4>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none text-black-50 text-black"
                      href=""
                    >
                      <p className=" mb-2">Contact</p>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none text-black-50 text-black"
                      href=""
                    >
                      <p className=" mb-2"> Support</p>
                    </a>
                  </li>
                  <li className=" list-unstyled ">
                    <a
                      className=" text-decoration-none text-black-50 text-black"
                      href=""
                    >
                      <p className=" mb-2"> FAQ</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
