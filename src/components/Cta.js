import React, { useState } from "react";

import "./cat.css";
const Cta = () => {
    const [para,setPara]=useState([<Paragr1/>])
   
    return (
    <div className="w-full flex items-center justify-center text-center text-white cta">
      <div className="mx-8 w-full h-200 text-center lg:text-left py-10 px-1 flex lg:justify-center items-center">
        <div className="w-full flex flex-col lg:flex-row lg:justify-around">
          <div className="mb-4">
            <p className="text-2xl md:text-4xl font-bold mb-4">
              Concern for the Environment
            </p>
            <p className="text-sm md:text-2xl">
              The Zigma Technologies has consideration on the note of
              environmental issues like air pollution, water pollution, fresh
              water shortages which leads to drastic change in the environment.
              We initiated several projects to safeguard both the employees and
              the environment.{" "}
            </p>
            <div className="green">
              <h1 onClick={()=>setPara(<Paragr1/>)} onMouseEnter={()=>setPara(<Paragr1/>)} id="para" ><u>GREEN ENERGY</u></h1>
              <h1 onClick={()=>setPara(<Paragr2/>)} onMouseEnter={()=>setPara(<Paragr2/>)} id="para"><u>ORGANIC FARMING</u></h1>
            </div>
            <div className=" subpara" data-aos="zoom-in" data-aos-delay="200">
              {para}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


function Paragr1(){
return(
    <div className=" subpara" data-aos="fade-in" data-aos-delay="200">
     <h1>
              GREEN ENERGY
              </h1>
              <p>The Zigma Technologies has a fond concern for ecology and environmental sustainability. This thirst provoked to produce green energy which in turn reduced greenhouse gas emission to an extent. The Zigma Technologies is producing around 1.65MW wind energy & 4MW solar energy in TamilNadu with the profit 1.3 Crore unit per annum. Fiscal incentives from the Central Government encourage as to enter in this field of generation and distribution of the renewable energy resources.</p>
    </div>
)
}
function Paragr2(){
    return(
        <div className=" subpara" data-aos="fade-in" data-aos-delay="200">
         <h1>
         ORGANIC FARMING
                  </h1>
                  <p>The Zigma Technologies has a fond concern for future generation ,piloted and planted fruit bearing trees in 10 acres in Paraplayam, Sivagiri TK which is 22 km away from Erode district. As future endurance we are planning to expand it to 250 acres in producing and managing the organic farming.</p>
        </div>
    )
    }


export default Cta;
