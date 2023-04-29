import React from "react";
// import "../src/App.css"
// import "../../App.css"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar mt-4 navbar-expand-lg  bg-body-tertiary">
        <div className="container-fluid ">
          <a className="navbar-brand d-flex align-items-center " href="#">
            <span className="material-symbols-outlined fs-1 text-primary">
              restaurant
            </span>
            <h4 className=" text-primary m-0">Bites</h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className=" ms-4">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className=" ms-4">
                <NavLink to={"/about"}>About Us</NavLink>
              </li>
              <li className=" ms-4">
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
              <li className=" ms-4">
                <NavLink to={"/review"}>Review</NavLink>
              </li>
              <li className=" ms-4">
                  <NavLink to={"/contact"}>Contacts</NavLink>
              </li>
            </ul>
          </div>
          <button className=" fs-5 px-4 py-2 btn btn-primary rounded-pill text-white">
            Cart <i className=" bi bi-cart-check-fill"></i>{" "}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
