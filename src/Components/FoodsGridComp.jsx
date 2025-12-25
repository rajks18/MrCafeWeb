import React from "react";
import food1 from "../Images/image7.png";
import food2 from "../Images/image8.png";
import food3 from "../Images/image9.png";
import cardBg from "../Images/card-background.png"; // Add your background image

const foods = [
  {
    image: food1,
    name: "Platter Of Grilled Lamb",
    price: "$10",
    description: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz",
    offer: "10% Off for new Customer",
  },
  {
    image: food2,
    name: "Round Pizza",
    price: "$10",
    description: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz",
    offer: "10% Off for new Customer",
  },
  {
    image: food3,
    name: "Burger And Potato Fries",
    price: "$10",
    description: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz",
    offer: "10% Off for new Customer",
  },
  {
    image: food1,
    name: "Platter Of Grilled Lamb",
    price: "$10",
    description: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz",
    offer: "10% Off for new Customer",
  },
  {
    image: food2,
    name: "Round Pizza",
    price: "$10",
    description: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz",
    offer: "10% Off for new Customer",
  },
  {
    image: food3,
    name: "Burger And Potato Fries",
    price: "$10",
    description: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz",
    offer: "10% Off for new Customer",
  },
];

const FoodiesGrid = () => {
  return (
    <section className="px-4 sm:px-6 md:px-[10%] py-12 bg-[rgb(244,239,230)]">
      {/* Header */}
      <div className="text-center mb-28">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Foods for Foodies
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          We Collect The Best Quality Of Ingredients From Market. With The Best
          Execution We Provide Our Guest Fresh & Very Delicious Food.
        </p>
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {foods.map((food, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg border-2 border-gray-200 pt-24 pb-6 px-6 flex flex-col items-center text-center mb-20"
            style={{
              backgroundImage: `url(${cardBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-white/85 -z-10 rounded-lg"></div>

            {/* Price Badge */}
            <div className="absolute top-4 left-4 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded z-10">
              {food.price}
            </div>

            {/* Food Image - positioned to overflow at top */}
            <div className="absolute -top-16 -right-16 transform -translate-x-1/2 z-10">
              <img
                src={food.image}
                alt={food.name}
                className="w-40 h-40 object-contain drop-shadow-2xl"
              />
            </div>

            {/* Food Name */}
            <h3 className="text-lg font-bold mb-2 text-gray-800 relative z-10">
              {food.name}
            </h3>

            {/* Description */}
            <p className="text-xs text-gray-600 mb-4 relative z-10">
              {food.description}
            </p>

            {/* Offer and Button */}
            <div className="flex items-center justify-between w-full gap-3 relative z-10">
              <p className="text-xs text-red-600 font-medium">
                {food.offer}
              </p>
              <button className="bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold px-4 py-2 rounded shadow-md flex items-center gap-1 transition-colors">
                <span>🛒</span> Add
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="flex justify-center">
        <button className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-3 rounded shadow-md transition-colors">
          See All
        </button>
      </div>
    </section>
  );
};

export default FoodiesGrid;