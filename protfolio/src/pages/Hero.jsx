import React from "react";
// import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className=" container mt-20 mx-auto flex justify-center items-center flex-wrap">
        <div className="w-[40%]">
          <div className=" ">
            <p className=" text-2xl mb-5">Hello , I'm </p>

            <div className="text-primary mt-5 text-5xl">
              {/* <Typewriter
                options={{
                  strings: ["Jl Sut Pi"],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
            </div>
            <p className=" text-xl font-bold mt-5">Front-end Developer</p>
          </div>
          <p className=" mt-5 text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            harum tempora voluptatum ea quas ad nobis quia accusamus a maxime ex
          </p>
          <button className=" bg-primary hover:bg-hover mt-7  text-white px-7  py-3 rounded-lg">
            Hire Me
          </button>
          <div className=" flex gap-5 mt-20">
            <Link>
              <button className="  bg-primary image p-2">
                <AiFillGithub className=" text-xl  text-white" />
              </button>
            </Link>
            <Link>
              <button className="  bg-primary image p-2">
                <BsFacebook className=" text-xl  text-white" />
              </button>
            </Link>
            <Link>
              <button className="  bg-primary image p-2">
                <AiFillInstagram className=" text-xl  text-white" />
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-[50%]">
          <img
            className=" image"
            src="https://png.pngtree.com/png-vector/20220718/ourlarge/pngtree-javascript-abstract-concept-vector-illustration-png-image_5914492.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
