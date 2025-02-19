import React from "react";

import img from "../images/Web-developer.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import img4 from "../images/consultation.svg";
import "./product.css";
import { Link } from "react-router-dom";

function Products() {
  const callouts = [
    {
      name: 'All in One',
      
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'hardware',
      href: "/hardware",
    },
    {
      name: 'desktop',
   
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '/desktop',
    },
    
    {
      name: 'Laptops',
   
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '/laptop',
    },
    {
      name: 'tablets',
     
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '/tabs',
    },
    {
      name: 'projectors',
   
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '/project',
    },
    {
      name: 'servers',
   
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '/server',
    },
    {
      name: 'accessories',
     
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    {
      name: 'printers',
  
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    
  ]
  return (
    
  
    <div className="bg-gray-100" >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h3 className="my-2 text-center text-2xl text-blue-900 uppercase font-bold">Hardware</h3>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <Link
              to={callout.href}>
              <div key={callout.name} className="group relative" data-aos="zoom-in" data-aos-delay="200" >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />

                </div>
                
                <h1 className="text-center text-lg text-blue-900 py-5 uppercase  font-bold ">{callout.name}</h1>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Products;
