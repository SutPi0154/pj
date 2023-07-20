import React from "react";
import webDesign from "/webDesign.png";

const Services = () => {
  return (
    <div className=" my-56 container mx-auto">
      <div className="flex  flex-col items-center">
        <h1 className=" mt-10 text-5xl gap-5 font-bold">
          <span className=" text-primary">Our</span> Services
        </h1>
        <p className=" mt-3 text-muted text-xl">What we Offer</p>
      </div>
      <div className=" mt-20 flex justify-center items-center gap-5">
        <div className=" border border-muted rounded shadow-xl flex flex-col justify-center items-center  w-[400px]">
          <div>
            <img src={webDesign} className=" mt-2 h-44 mx-auto" alt="" />
          </div>
          <div className=" flex flex-col p-10 ">
            <p className=" text-2xl mx-auto text-primary"> Web Design</p>
            <p className=" mt-5 text-muted">
              About your business Easily share your services online with your
              contacts and gain the trust of your costumers
            </p>
            <p></p>
            <button className="   px-5 py-1 mt-5 rounded border bg-primary hover:bg-hover text-white border-primary self-center">
              See More
            </button>
          </div>
        </div>
        <div className=" border border-muted rounded shadow-xl flex flex-col justify-center items-center  w-[400px]">
          <div>
            <img src={webDesign} className=" mt-2 h-44 mx-auto" alt="" />
          </div>
          <div className=" flex flex-col p-10 ">
            <p className=" text-2xl mx-auto text-primary"> Web Develop</p>
            <p className=" mt-5 text-muted">
              About your business Easily share your services online with your
              contacts and gain the trust of your costumers
            </p>
            <p></p>
            <button className="   px-5 py-1 mt-5 rounded border bg-primary hover:bg-hover text-white border-primary self-center">
              See More
            </button>
          </div>
        </div>
        <div className=" border border-muted rounded shadow-xl flex flex-col justify-center items-center  w-[400px]">
          <div>
            <img src={webDesign} className=" mt-2 h-44 mx-auto" alt="" />
          </div>
          <div className=" flex flex-col p-10 ">
            <p className=" text-2xl mx-auto text-primary"> Web Design</p>
            <p className=" mt-5 text-muted">
              About your business Easily share your services online with your
              contacts and gain the trust of your costumers
            </p>
            <p></p>
            <button className=" px-5 py-1 mt-5 rounded border bg-primary hover:bg-hover text-white border-primary self-center">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
