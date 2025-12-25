import React from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../Images/mr-cafe-logo.png";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md text-sm">
      {/* Top Bar */}
      <div className="bg-gray-600 text-white flex justify-between items-center px-[10%] py-2 text-gray-700 w-">
        <span>
          Sign up for our Loyalty Program today and receive 15% OFF your first
          order.
        </span>
        <div className="flex gap-4 items-center">
          <span>Need Help?</span>
          <span className="underline">(+302)-555-0107-122</span>
          <div className="flex items-center gap-4 text-white">
            <div className="flex items-center gap-2">
              <FaClock />
              <span>08:00am - 10:00pm</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <a href="#" className="hover:underline">
                Our Locations
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex justify-between items-center px-[10%] py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="MR. CAFE logo" className="w-12 h-12" />
          <h3 className="text-2xl font-bold tracking-wide">MR. CAFE</h3>
        </div>

        {/* Menu */}
        <ul className="flex gap-6 items-center text-gray-700 font-medium">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Coffee & Drinks</a>
          </li>
          <li className="relative group">
            <a href="#">Food Menu ▾</a>
            <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 p-2">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Breakfast
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Lunch
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Dinner
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Reservation</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <div className="flex items-center gap-6 text-black">
          {/* Search Icon */}
          <button>
            <FaSearch size={18} />
          </button>

          {/* Cart */}
          <div className="flex items-center gap-2">
            <span>$ 00.0 / 0</span>
            <FaShoppingCart size={18} />
          </div>

          {/* User */}
          <div className="flex items-center gap-2">
            <FaUser size={18} />
            <span>Jacob</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { FaClock, FaMapMarkerAlt, FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md text-sm">
//       {/* Top Bar */}
//       <div className="bg-gray-600 text-white flex justify-between items-center px-4 sm:px-8 md:px-[10%] py-2">
//         <span className="text-xs sm:text-sm">
//           Sign up for our Loyalty Program today and receive 15% OFF your first order.
//         </span>
//         <div className="flex gap-4 items-center text-xs sm:text-sm">
//           <span>Need Help?</span>
//           <span className="underline">(+302)-555-0107-122</span>
//           <div className="hidden sm:flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               <FaClock />
//               <span>08:00am - 10:00pm</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaMapMarkerAlt />
//               <a href="#" className="hover:underline">Our Locations</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <nav className="flex justify-between items-center px-4 sm:px-8 md:px-[10%] py-4">
//         {/* Logo */}
//         <div className="text-xl font-bold text-gray-800">MR. CAFE</div>

//         {/* Hamburger for mobile */}
//         <button className="md:hidden text-gray-800" onClick={() => setOpen(true)}>
//           <FaBars size={22} />
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">About Us</a></li>
//           <li><a href="#">Coffee & Drinks</a></li>
//           <li><a href="#">Food Menu ▾</a></li>
//           <li><a href="#">Reservation</a></li>
//           <li><a href="#">Contact Us</a></li>
//         </ul>

//         {/* Desktop Icons */}
//         <div className="hidden md:flex items-center gap-6 text-black">
//           <button><FaSearch size={18} /></button>
//           <div className="flex items-center gap-2"><span>$ 00.0 / 0</span><FaShoppingCart size={18} /></div>
//           <div className="flex items-center gap-2"><FaUser size={18} /><span>Jacob</span></div>
//         </div>
//       </nav>

//       {/* Mobile Drawer */}
//       <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${open ? "translate-x-0" : "-translate-x-full"}`}>
//         <div className="flex justify-between items-center p-4 border-b">
//           <span className="text-xl font-bold text-gray-800">MR. CAFE</span>
//           <button onClick={() => setOpen(false)}><FaTimes size={22} /></button>
//         </div>
//         <ul className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">About Us</a></li>
//           <li><a href="#">Coffee & Drinks</a></li>
//           <li><a href="#">Food Menu ▾</a></li>
//           <li><a href="#">Reservation</a></li>
//           <li><a href="#">Contact Us</a></li>
//         </ul>
//         <div className="flex flex-col gap-4 p-4 border-t text-black">
//           <button className="flex items-center gap-2"><FaSearch size={18} /> Search</button>
//           <div className="flex items-center gap-2"><FaShoppingCart size={18} /><span>$ 00.0 / 0</span></div>
//           <div className="flex items-center gap-2"><FaUser size={18} /><span>Jacob</span></div>
//         </div>
//       </div>

//       {/* Overlay when drawer is open */}
//       {open && <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setOpen(false)}></div>}
//     </header>
//   );
// };

// export default Navbar;
