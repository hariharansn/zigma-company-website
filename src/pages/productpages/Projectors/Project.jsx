import React from 'react'
import { Link } from 'react-router-dom'
import EpsonEBX14 from "./Epson-EB-X14-Projector.jpg"
import EpsonEB915W3LCD from "./Epson-EB-915W-3LCD-Multimedia-Projector.jpg"
import OptomaEX556DLP from "./Optoma-EX556-DLP-projector.jpg"
import OptomaEW556DLP from "./Optoma-EW556-DLP-projector.jpg"


function Project() {
    const products = [
        {
          id: 1,
          name: "Epson EB-X14",
          href: "/singlepro",
          imageSrc:EpsonEBX14
         ,
          imageAlt: "Front of men's Basic Tee in black.",
          size:800
          
        },
        {
          id: 1,
          name: "Epson EB–915W 3LCD",
          href: "#",
          imageSrc:
          EpsonEB915W3LCD,
          imageAlt: "Front of men's Basic Tee in black.",
          size:800
          
        },
        {
          id: 1,
          name: "Optoma EX556 DLP",
          href: "#",
          imageSrc:
          OptomaEX556DLP,
          imageAlt: "Front of men's Basic Tee in black.",
          size:800
        
        },
        {
          id: 1,
          name: "Optoma EW556 DLP",
          href: "#",
          imageSrc:
          OptomaEW556DLP,
          imageAlt: "Front of men's Basic Tee in black.",
          size:800
         
        },
    ]
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
             Projectors
              </h2>
    
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                
                  <Link to={product.href}>
                  <div key={product.id} className="group relative" data-aos="zoom-in" data-aos-delay="200"  >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 flex justify-center items-center">
                      <img 
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        
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

export default Project
