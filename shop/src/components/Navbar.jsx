import React from "react";
import Logo from "/public/Logo.jpg";
import { BsFillBagFill, BsMoon } from "react-icons/bs";
import { TextInput } from "@mantine/core";

const Navbar = () => {
  return (
    <div>
      <div className=" m-2 rounded border flex justify-around items-center">
        <div className=" p-2 ">
          <img src={Logo} className=" mx-auto w-10 h-10" alt="Shopping" />
          <p className=" text-xl ">
            <span className=" text-blue-500 text-2xl font-bold">S</span>hopping
          </p>
          <p></p>
        </div>
        <div></div>
        <div className=" flex justify-center gap-5 items-center">
          <div>
            <TextInput placeholder="" />
          </div>
          <div>
            <BsFillBagFill className=" text-2xl text-gray-700" />
          </div>
          <div className=" p-2 border rounded-lg flex justify-center items-center">
            <button>
              <BsMoon className=" text-lg text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
