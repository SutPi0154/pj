import React from "react";
import { CgProfile } from "react-icons/cg";

const About = () => {
  return (
    <div className=" mt-20 mt mb-48">
      <div className=" flex  flex-col items-center ">
        <p className=" text-5xl text-titleColor font-bold">About Me</p>
        <p className=" text-textColor mt-3">My introduction</p>
      </div>
      <div className=" mt-20 flex flex-wrap gap-20 justify-center items-center">
        <div className="w-[40%] ">
          <img src="/image/about.jpg" className=" w-full  rounded-lg" alt="" />
        </div>
        <div className="w-[35%]">
          <p className=" text-textColor leading-9 tracking-wide  text-lg">
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and Ui / Ux design, delivering quality
            work.
          </p>
          <div className=" mt-20 flex flex-wrap gap-10">
            <div className=" flex flex-col  items-center">
              <p className=" text-3xl mb-1 font-bold text-titleColor">02+</p>
              <p className=" text-textColor">Years</p>
              <p className=" text-textColor">experience</p>
            </div>
            <div className=" flex flex-col  items-center">
              <p className=" text-3xl mb-1 font-bold text-titleColor">20+</p>
              <p className=" text-textColor">Complex</p>
              <p className=" text-textColor">project</p>
            </div>
            <div className=" flex flex-col  items-center">
              <p className=" text-3xl mb-1 font-bold text-titleColor">05+</p>
              <p className=" text-textColor">Companies</p>
              <p className=" text-textColor">worked</p>
            </div>
          </div>
          <button
            className=" bg-firstColor hover:bg-firstColorAlt rounded-xl mx-auto mt-20
           text-lg font-bold py-3 px-6  text-bodyColor "
          >
            <div className=" flex justify-center items-center gap-2">
              <span>Hire Me</span> <CgProfile className=" text-2xl" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
