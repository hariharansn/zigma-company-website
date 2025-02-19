import React from 'react';

import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>  
         <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/">
        Home
    </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/service">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/product">
                Products
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/career">
                Careers
                
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact">
                Contact Us
            </HashLink>
           
        </>
    )
}

export default NavLinks;