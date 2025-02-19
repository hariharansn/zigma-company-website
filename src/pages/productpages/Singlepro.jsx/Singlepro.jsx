import React from 'react'
import HP200G422 from  "./hp 200 G4 22-Left.jpg"
const Singlepro=(props) =>{
    const features = [
        { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
        { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
        { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
        { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
        { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
        { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
      ]
  return (
    <div>
      <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">HP 200 G4 22</h2>
          <p className="mt-4 text-gray-500">
          Choice of Windows 10 Pro, Windows 10 Home, and FreeDOS
          </p>
          <p className="mt-4 text-gray-500">
          Integrated All-in-One form factor
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        
        

          <div className="lg:justify-center w-full" data-aos="fade-up" data-aos-delay="100">
                            <img  alt="card img" className="rounded-t float-right duration-1000 w-full"  src={HP200G422} />
                        </div>
          
     
      </div>
    </div>
    </div>
  )
}

export default Singlepro
