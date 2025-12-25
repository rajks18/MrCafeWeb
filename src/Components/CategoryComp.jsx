import cardBg from "../Images/card-background.png";
import coffee1 from "../Images/coffee1.png";
import food1 from "../Images/food1.png";
import food2 from "../Images/food2.png";
import food3 from "../Images/food3.png";
import drink1 from "../Images/drink1.png";
import drink2 from "../Images/drink2.png";
import drink3 from "../Images/drink3.png";



const MenuCategory = () => {
  const categories = [
    {
      title: "Coffee",
      items: [
        { id: "espresso", name: "Espresso", image: coffee1 },
        { id: "latte", name: "Latte", image: coffee1 },
        { id: "cappuccino", name: "Cappuccino", image: coffee1 },
      ],
    },
    {
      title: "Food",
      items: [
        { id: "meat-lovers", name: "Meat Lovers", image: food1 },
        { id: "sides", name: "Sides", image: food2 },
        { id: "chicken", name: "Chicken Items", image: food3 },
      ],
    },
    {
      title: "Drinks",
      items: [
        { id: "lemonade", name: "Frozen Lemonade", image: drink1 },
        { id: "smoothies", name: "Smoothies", image: drink2 },
        { id: "protein-shakes", name: "Protein Shakes", image: drink3 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4efe6] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-center text-3xl sm:text-4xl font-semibold text-amber-900 font-serif">
          Our Category
        </h1>

        {categories.map((category) => (
          <section key={category.title} className="mb-10">
            <h3 className="mb-5 text-2xl font-medium text-amber-700">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 pt-16">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer"
                >
                  <div 
                    className="relative overflow-visible bg-white rounded-xl p-4 pt-20 transition-all duration-300 max-w-[260px] mx-auto min-h-[240px]
 hover:shadow-lg border border-amber-100 hover:border-amber-200"
                    style={{ 
                      backgroundImage: `url(${cardBg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-36 sm:h-36">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <p className="text-xl mt-16 text-center font-medium text-amber-800 italic">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
