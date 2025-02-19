import React from 'react'
import { Link } from 'react-router-dom';
import HP280ProG6MicrotowerPC from "./hp 280 Pro G6-Left.jpg"
import HPEliteDesk800G6SFPC from "./hp EliteDesk 800 G6 SFF PC-Right.jpg"
import HPProDesk4006DesktopminiPC from "./HP ProDesk 400 G6 Desktop Mini PC-Left.jpg"
import HPZ2G5Workstation from "./HP Z2 G5 Workstation.jpeg"

function Dersk() {
    const products = [
        {
          id: 1,
          name: "HP 280 Pro G6 Microtower PC",
          href: "/singlepro",
          imageSrc:
          HP280ProG6MicrotowerPC ,
          imageAlt: "Front of men's Basic Tee in black.",
          size:200
          
        },
        {
          id: 1,
          name: "HP Elite Desk 800 G6 SFF PC",
          href: "#",
          imageSrc:
          HPEliteDesk800G6SFPC,
          imageAlt: "Front of men's Basic Tee in black.",
          size:500
          
        },
        {
          id: 1,
          name: "HP ProDesk 400 G6 Desktop mini PC",
          href: "#",
          imageSrc:
          HPProDesk4006DesktopminiPC,
          imageAlt: "Front of men's Basic Tee in black.",
          size:500
        
        },
        {
          id: 1,
          name: "HP Z2 G5 Workstation",
          href: "#",
          imageSrc:
          HPZ2G5Workstation,
          imageAlt: "Front of men's Basic Tee in black.",
          size:200
         
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
             Desktops
              </h2>
    
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
      );
}

export default Dersk
