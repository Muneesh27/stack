import { useState } from "react";
import logo from "../assets/Logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

   const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
   };

   return (
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
         <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center py-3">
               {/* Logo */}
               <div className="flex items-center flex-shrink-0">
                  <img className="h-10 w-10" src={logo} alt="logo" />
               </div>

               {/* Centered Navigation Menu for Desktop */}
               <ul className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-gray-700 font-medium">
                  {navItems.map((item, index) => (
                     <li key={index} className="hover:text-blue-500">
                        <a href={item.href}>{item.label}</a>
                     </li>
                  ))}
               </ul>

               {/* Hamburger Menu for small screens */}
               <div className="lg:hidden flex items-center">
                  <button onClick={toggleNavbar}>
                     {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
               </div>
            </div>

            {/* Drawer for Small Screens */}
            {mobileDrawerOpen && (
               <div className="fixed top-0 right-0 z-20 w-3/4 h-full bg-white shadow-lg flex flex-col items-center lg:hidden">
                  <button
                     onClick={toggleNavbar}
                     className="absolute top-4 right-4 text-gray-600"
                  >
                     <X size={24} />
                  </button>
                  <ul className="mt-20 space-y-6 w-full text-center">
                     {navItems.map((item, index) => (
                        <li key={index} className="py-4 border-b hover:bg-gray-100">
                           <a
                              href={item.href}
                              className="block text-lg text-gray-800 hover:text-blue-500"
                           >
                              {item.label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
