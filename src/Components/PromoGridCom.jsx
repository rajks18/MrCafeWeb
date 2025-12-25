import React from "react";
import promo1 from "../Images/image3.png";
import promo2 from "../Images/image3.png";
import promo3 from "../Images/image3.png";

const PromoGrid = () => {
  const promos = [
    {
      image: promo1,
      title: "Drink coffee and keep writing.",
      subtitle: "Welcome to our Cafe",
      offer: "Get 10% Discount for Office Coffee",
    },
    {
      image: promo2,
      title: "Fix Your Mind With Our Coffee",
      subtitle: "Welcome to our Cafe",
      offer: "Get 10% Discount for Office Coffee",
    },
    {
      image: promo3,
      title: "Coffee & A Favorite Book",
      subtitle: "",
      offer: "Enjoy Our 15% Discount For A Book Lover",
    },
  ];

  return (
    <section className="flex justify-center px-4 sm:px-8 md:px-[10%] py-12 bg-[rgb(244,239,230)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[80%]">
        {promos.map((promo, index) => (
          <div 
            key={index} 
            className="relative rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.4)] h-80 group border-2 border-white"
          >
            <img
              src={promo.image}
              alt={`Promo ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold leading-tight">{promo.title}</h3>
                {promo.subtitle && (
                  <p className="text-lg font-light italic">{promo.subtitle}</p>
                )}
              </div>
              
              {promo.offer && (
                <div className="bg-black bg-opacity-50 px-4 py-3 rounded">
                  <p className="text-sm font-semibold">{promo.offer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoGrid;