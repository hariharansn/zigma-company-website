import React from 'react'
import HPProLiantDL580G7 from "./HP-ProLiant-DL580-G7-Server.jpg"
import HPProLiantDL380eGen8 from "./HP-ProLiant-DL380e-Gen8-Server.jpg"
import HPProLiantML350eGen8Tower from "./HP-ProLiant-ML350e-Gen8-Tower-Server.jpg"
import { Link } from 'react-router-dom';

function Server() {
    const products = [
        {
          id: 1,
          name: "HP ProLiant DL580 G7",
          href: "/singlepro",
          imageSrc:
          HPProLiantDL580G7 ,
          imageAlt: "Front of men's Basic Tee in black.",
          size:200
          
        },
        {
          id: 1,
          name: "HP ProLiant DL380e Gen8",
          href: "#",
          imageSrc:
          HPProLiantDL380eGen8,
          imageAlt: "Front of men's Basic Tee in black.",
          size:500
          
        },
        {
          id: 1,
          name: "HP ProLiant ML350e Gen8 Tower",
          href: "#",
          imageSrc:
          HPProLiantML350eGen8Tower,
          imageAlt: "Front of men's Basic Tee in black.",
          size:500
        
        },
        
        
       
        // More products...
      ];
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-20 lg:overflow-visible lg:px-0">
         
    
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
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
        <h2 className="text-2xl uppercase font-bold tracking-tight text-blue-900">
       Servers
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            
            <Link to={product.href}>
            <div key={product.id} className="group relative" data-aos="zoom-in" data-aos-delay="200"  >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 flex justify-center items-center">
                <img 
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={product.size}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-bold  text-blue-900">                 {product.name}
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
  )
}

export default Server
