import React from "react";
import CodeImg from "/public.avif";

const About = () => {
  return (
    <div className=" my-10">
      <h2 className=" text-5xl flex  justify-center my-10">
        About <span className=" ml-3 text-primary">Me</span>
      </h2>
      <div className=" flex items-center justify-center gap-10">
        <div className=" w-[40%]">
          <img src={CodeImg} className=" rounded-lg" alt="" />
        </div>
        <div className=" w-[40%]">
          <p className=" mb-5 text-2xl font-light font-serif tracking-wide text-gray-dark"> Hello! I'm Jl Sut Pi</p>
          <p className=" text-muted tracking-wider">
            I am 20 years old. I am currently attending 
            <span className=" ml-1 text-primary select-none mr-1">
              a Special Web Design
            </span>
            course at <span className="text-primary select-none">MMS IT</span>
            .Gentlemen, contact me now without getting frustrated with the
            technical difficulties required for your business. Thank You ..
          </p>
          <button className=" bg-primary text-white px-6 py-3 rounded-lg mt-5">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
