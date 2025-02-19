import React from "react";
import heroImg from "./web-dev.svg";
function Crm() {
  return (
    <div className="hero" id="hero">
      <div
        className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 "
        data-aos="zoom-in"
      >
        <div className="flex flex-col lg:flex-row  justify-between text-center lg:text-left">
          <div
            className="lg:w-1/2 flex flex-col justify-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
           
              CRM
            </h1>
            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
            Aligning your organization around your customers is now more important than ever. Your Marketing, Sales and Customer Service teams are the front line to the customer. They need to harness your end-to-end enterprise, along with deep customer insight and personalized engagement in order to stand-out from the competition and deliver a relevant experience at every step of the customer journey.
            </div>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8"></div>
          </div>
          <div
            className="flex lg:justify-end w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <img
              alt="card img"
              className="rounded-t float-right duration-1000 w-full"
              src={heroImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crm;
