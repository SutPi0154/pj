import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" flex justify-between my-5 items-center container mx-auto">
     <div className="flex gap-1 items-center ">
     <h1 className=" text-purple text-2xl text-primary">Jl</h1>
     <p className=" text-2xl">Sut Pi</p>
     </div>
      <div className=" flex justify-evenly">
        <NavLink className="nav-link nav-link-hover hover:underline mr-20">
          <button>Home</button>
        </NavLink>
        <NavLink className="nav-link nav-link-hover hover:underline mr-20">
          <button>About</button>
        </NavLink>
        <NavLink className="nav-link nav-link-hover hover:underline mr-20">
          <button>Skills</button>
        </NavLink>
        <NavLink className="nav-link nav-link-hover hover:underline mr-20">
          <button>Pricing</button>
        </NavLink>
        <NavLink className="nav-link nav-link-hover hover:underline mr-20">
          <button>Contact</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
