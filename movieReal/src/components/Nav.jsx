import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    navigate(`search/${searchKey}`);
  };
  return (
    <>
      <nav className=" px-10 py-4 bg-black text-white flex justify-between items-center">
        <NavLink to={"/"} className=" text-5xl font-bold font-mono text-white">
          URMV
        </NavLink>
        <div className=" flex items-center space-x-3  ">
          <NavLink
            to={"/"}
            // `   `
            className={({ isActive }) =>
              isActive
                ? "active text-xl font-medium text-red-500"
                : "non-active text-xl font-medium"
            }
          >
            Popular
          </NavLink>
          <NavLink
            to={"/upcoming"}
            className={({ isActive }) =>
              isActive
                ? "active text-xl font-medium text-red-500"
                : "non-active text-xl font-medium"
            }
          >
            Upcoming
          </NavLink>
        </div>
        <form
           onSubmit={search}
          className=" flex items-center"
        >
          <input
            onChange={(e) => setSearchKey(e.target.value)}
            type="text"
            className=" text-xl text-white bg-transparent border-b-2  border-slate-300 focus:outline-none "
          />
          <button type="submit ">
            <MagnifyingGlassIcon className=" w-8 h-8" />
          </button>
        </form>
      </nav>
    </>
  );
};

export default Nav;
