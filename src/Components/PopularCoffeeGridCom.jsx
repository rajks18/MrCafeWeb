// import React from "react";
// import coffee1 from "../Images/image6.png";
// import coffee2 from "../Images/image6.png";
// import coffee3 from "../Images/image6.png";

// const coffees = [
//   {
//     image: coffee1,
//     name: "Iced Latte Vertical",
//     price: "$10",
//     rating: 4,
//     description: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz.",
//     offer: "10% Off for new Customer",
//   },
//   {
//     image: coffee2,
//     name: "Skinny Latte",
//     price: "$10",
//     rating: 4,
//     description: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz.",
//     offer: "10% Off for new Customer",
//   },
//   {
//     image: coffee3,
//     name: "Cappuccino",
//     price: "$9.99",
//     rating: 4,
//     description: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz.",
//     offer: "10% Off for new Customer",
//   },
// ];

// const PopularCoffeeGrid = () => {
//   return (
//     <section className="px-4 sm:px-6 md:px-[10%] py-12 bg-[rgb(244,239,230)]">
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-28 text-gray-800">
//         Our Most Popular Coffee
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {coffees.map((coffee, index) => (
//           <div
//             key={index}
//             className="relative bg-white rounded-lg shadow-lg border-2 border-gray-200 pt-24 pb-6 px-6 flex flex-col items-center text-center"
//           >
//             {/* Price Badge */}
//             <div className="absolute top-4 left-4 bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded">
//               {coffee.price}
//             </div>

//             {/* Coffee Image - positioned to overflow at top */}
//             <div className="absolute -top-28 -right-28 transform -translate-x-1/2">
//               <img
//                 src={coffee.image}
//                 alt={coffee.name}
//                 className="w-48 h-56 object-contain drop-shadow-xl"
//               />
//             </div>

//             {/* Star Rating */}
//             <div className="flex gap-1 text-amber-500 text-lg mb-3">
//               {[...Array(coffee.rating)].map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//             </div>

//             {/* Coffee Name */}
//             <h3 className="text-xl font-bold mb-2 text-gray-800">{coffee.name}</h3>

//             {/* Description */}
//             <p className="text-sm text-gray-600 mb-3">{coffee.description}</p>

//             {/* Offer */}
//             <p className="text-sm text-red-600 font-medium mb-4">{coffee.offer}</p>

//             {/* Add Button */}
//             <button className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-6 py-2 rounded shadow-md flex items-center gap-2 transition-colors">
//               <span>🛒</span> Add
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PopularCoffeeGrid;







import React from "react";
import coffee1 from "../Images/image6.png";
import coffee2 from "../Images/image6.png";
import coffee3 from "../Images/image6.png";
import cardBg from "../Images/card-background.png"; // Add your background image

const coffees = [
  {
    image: coffee1,
    name: "Iced Latte Vertical",
    price: "$10",
    rating: 4,
    description: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz.",
    offer: "10% Off for new Customer",
  },
  {
    image: coffee2,
    name: "Skinny Latte",
    price: "$10",
    rating: 4,
    description: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz.",
    offer: "10% Off for new Customer",
  },
  {
    image: coffee3,
    name: "Cappuccino",
    price: "$9.99",
    rating: 4,
    description: "Espresso, Milk, Ice and Choice of Flavor(s) - 20oz.",
    offer: "10% Off for new Customer",
  },
];

const PopularCoffeeGrid = () => {
  return (
    <section className="px-4 sm:px-6 md:px-[10%] py-12 bg-[rgb(244,239,230)]">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-28 text-gray-800">
        Our Most Popular Coffee
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {coffees.map((coffee, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg border-2 border-gray-200 pt-24 pb-6 px-6 flex flex-col items-center text-center"
            style={{
              backgroundImage: `url(${cardBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-white/80 -z-10 rounded-lg"></div>

            {/* Price Badge */}
            <div className="absolute top-4 left-4 bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded z-10">
              {coffee.price}
            </div>

            {/* Coffee Image - positioned to overflow at top with original positioning */}
            <div className="absolute -top-28 -right-28 transform -translate-x-1/2 z-10">
              <img
                src={coffee.image}
                alt={coffee.name}
                className="w-48 h-56 object-contain drop-shadow-xl"
              />
            </div>

            {/* Star Rating */}
            <div className="flex gap-1 text-amber-500 text-lg mb-3 relative z-10">
              {[...Array(coffee.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Coffee Name */}
            <h3 className="text-xl font-bold mb-2 text-gray-800 relative z-10">{coffee.name}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-3 relative z-10">{coffee.description}</p>

            {/* Offer */}
            <p className="text-sm text-red-600 font-medium mb-4 relative z-10">{coffee.offer}</p>

            {/* Add Button */}
            <button className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-6 py-2 rounded shadow-md flex items-center gap-2 transition-colors relative z-10">
              <span>🛒</span> Add
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCoffeeGrid;