import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="   flex justify-between mt-5">
      <div>
        <p className=" font-sans text-2xl font-bold">Jl Sut Pi</p>
      </div>
      <div className=" flex gap-7 ">
        <NavLink className=" text-lg text-textColor  font-medium active:text-firstColor  hover:text-firstColor">
          <button>Home</button>
        </NavLink>
        <NavLink className=" text-lg text-textColor  font-medium active:text-firstColor hover:text-firstColor">
          <button>About</button>
        </NavLink>
        <NavLink className=" text-lg text-textColor  font-medium active:text-firstColor hover:text-firstColor">
          <button>Skills</button>
        </NavLink>
        <NavLink className=" text-lg text-textColor  font-medium active:text-firstColor hover:text-firstColor">
          <button>Services</button>
        </NavLink>
        <NavLink className=" text-lg text-textColor  font-medium active:text-firstColor hover:text-firstColor">
          <button>Protfolio</button>
        </NavLink>
        <NavLink className=" text-lg text-textColor  font-medium active:text-firstColor hover:text-firstColor">
          <button>Contact me</button>
        </NavLink>
        <button></button>
      </div>
    </nav>
  );
};

export default Navbar;
