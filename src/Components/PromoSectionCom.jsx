import React from "react";
import coffeeImage from "../Images/image1.png";

const PromoSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 md:px-[10%] py-12 bg-[rgb(244,239,230)]">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-[18px] text-gray-800 leading-snug">
          A Best Café House
          <br /> <br />
          <span className="text-amber-700 text-5xl">
            Start Your Day With <br />
            Morning Coffee
          </span>
        </h2>
        <p className="text-gray-600 font-medium text-[18px]">
          Colombian Andean coffee &nbsp; <span className="text-white">●</span> &nbsp; Ethiopian acidic coffee
        </p>
        <p className="text-gray-500">
          We love the idea of indulging in your health, and every item on our
          menu is full of lush, organic ingredients, bright flavor and beautiful
          color.
        </p>
        <div className="flex gap-4 justify-center md:justify-start pt-4">
          <button className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition">
            Get Yours Now
          </button>
          <button className="border border-gray-600 text-gray-800 px-6 py-2 rounded hover:bg-gray-100 transition">
            Reservation
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src={coffeeImage}
          alt="Morning Coffee Promo"
          className="w-full h-auto object-cover rounded"
        />
      </div>
    </section>
  );
};

export default PromoSection;
