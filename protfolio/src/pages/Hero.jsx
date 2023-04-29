import React from "react";
import {
  BsGithub,
  BsFacebook,
  BsTelegram,
  BsMouse,
  BsArrowDownShort,
} from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" flex justify-around items-center gap-5">
      <div className="  h-screen flex flex-col gap-10  items-center justify-center">
        <Link to={"https://github.com/SutPi0154"} className="">
          <BsGithub className=" text-firstColor rounded-full  hover:text-firstColorAlt text-3xl" />
        </Link>
        <Link to={"https://telegram.org/"} className="">
          <BsTelegram className=" text-firstColor rounded-full  hover:text-firstColorAlt text-3xl" />
        </Link>
        <Link
          to={"https://www.facebook.com/profile.php?id=100087893903639"}
          className=""
        >
          <BsFacebook className=" text-firstColor rounded-full  hover:text-firstColorAlt text-3xl" />
        </Link>
      </div>
      <div className=" mt-60 flex flex-col items-start justify-between w-[30%]">
        <div>
          <p className=" text-5xl font-bold text-titleColor">
            Hi, I'm Jl Sut Pi
          </p>
          <p className=" my-5 text-2xl text-titleColor"> Frontend developer</p>
          <p className=" text-md text-textColorLight text">
            High level experience in web design and development knowledge,
            producing quality work.
          </p>
          <button className=" mt-10 gap-3 hover:bg-firstColorAlt bg-firstColor py-3 px-3 rounded-lg flex justify-center items-center">
            <span className=" text-lg text-bodyColor font-bold ">
              Contact Me
            </span>
            <IoIosSend className=" text-bodyColor font-bold  text-lg" />
          </button>
        </div>
        <div className=" mt-40">
          <div className=" flex  justify-center items-center">
            <BsMouse className=" text-3xl text-firstColor" />
            <p className=" text-textColor"> scroll down</p>
            <button className="animate__animated animate__bounce">
              <BsArrowDownShort className="  text-3xl text-firstColor" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/image/Profile.png"
          className="profile bg-firstColor w-[500px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
