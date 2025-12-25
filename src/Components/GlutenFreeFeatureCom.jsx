import React from "react";
import barista from "../Images/image4.jpg"; // left image
import storefront from "../Images/image5.jpg"; // right image
import drink from "../Images/image6.png"; // drink image

const GlutenFreePromo = () => {
  return (
    <section className="bg-[rgb(244,239,230)] px-4 sm:px-6 md:px-[10%] py-12">
      {/* Top Images */}
      <div className="flex justify-center gap-4 mb-12">
        <div className="w-[45%] max-w-[250px] rounded-lg overflow-hidden shadow-lg">
          <img
            src={barista}
            alt="Barista"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[45%] max-w-[250px] rounded-lg overflow-hidden shadow-lg">
          <img
            src={storefront}
            alt="Storefront"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="space-y-6 text-gray-800">
          <h2 className="text-4xl md:text-2xl font-serif font-bold leading-tight text-gray-900">
            We're A Dedicated Gluten-Free Café.
          </h2>
          <p className="text-lg text-gray-700">
            But you'd never know if we didn't mention it.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            You see, our creations redefine what gluten-free means. Impossibly moist layer cakes,
            decadent desserts, pillowy rolls, tender crumbs—everything we make is a reflection of
            our commitment to flavor, texture and artistry of the highest caliber. Informed by
            classical French pastry technique and inspired by California's spirit of creativity,
            we bake because life's too short for anyone to skip cake.
          </p>
          <button className="mt-6 bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold px-8 py-3 rounded shadow-md transition-colors">
            Read More
          </button>
        </div>

        {/* Drink Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[250px] border-4 border-white rounded-lg overflow-hidden shadow-xl">
            <img
              src={drink}
              alt="Iced Coffee Drink"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlutenFreePromo;