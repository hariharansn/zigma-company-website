import React from "react";

import HP200G422 from "./hp 200 G4 22-Left .jpg";
import HP205G422 from "./hp 204 G4 Right.jpg";
import HPEliteOne800G624 from "./hp Elite One 800 G6 24-Left.jpg";
import HPEliteOne800G627 from "./HP EliteOne 800 G6 27 All-in-One Non Touch-Right.jpg";
import HPEliteOne800G627Touch from "./HP EliteOne 800 G6 27 All-in-One Non Touch-Right.jpg";
import HPProOne400G624 from "./HP ProOne 400 G6 24 All-in-One PC ( Non-Touch)-Right.jpg";

import HPProOneG624NonTouch from "./hp ProOne 400 G6 24-Left.jpg";
import { Link } from "react-router-dom";

function Hardware() {
  const products = [
    {
      id: 1,
      name: "HP 200 G4 22",
      href: "/singlepro",
      imageSrc: HP200G422,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 2,
      name: "HP 205 G4 22",
      href: "/singlepro",
      imageSrc: HP205G422,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 3,
      name: "HP EliteOne 800 G6 24",
      href: "/singlepro",
      imageSrc: HPEliteOne800G624,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 4,
      name: "HP EliteOne 800 G6 27 (Non Touch)",
      href: "/singlepro",
      imageSrc: HPEliteOne800G627,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 5,
      name: "HP EliteOne 800 G6 27 (Touch)",
      href: "/singlepro",
      imageSrc: HPEliteOne800G627Touch,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 6,
      name: "HP ProOne 400 G6 24",
      href: "/singlepro",
      imageSrc: HPProOne400G624,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 7,
      name: "HP ProOne G6 24 (Non Touch)",
      href: "/singlepro",
      imageSrc: HPProOne400G624,
      imageAlt: "Front of men's Basic Tee in black.",
    },

    // More products...
  ];
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-20 lg:overflow-visible lg:px-0">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-2xl uppercase font-bold tracking-tight text-blue-900">
              All in One
            </h2>
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  “With abundant responsiveness and detailing The Zigma
                  Technologies offers products of the best in class with much
                  competitive price to suit the various requirements and for
                  diversified purpose”
                </p>
              </blockquote>
              <figcaption className="mt-10"></figcaption>
            </figure>
          </div>

          <div className="px-12" data-aos="fade-down" data-aos-delay="300">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <Link to={product.href}>
                 
                  <div
                    key={product.id}
                    className="group relative"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-100 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
                      <img
                        src={product.imageSrc}
                        width={1}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-lg font-bold  text-blue-900">
                          {" "}
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                 
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    
       

    </div>
  );
}

export default Hardware;
