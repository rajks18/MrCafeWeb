import cardBg from "../Images/card-background.png";

const MenuCategory = () => {
  const categories = [
    {
      title: "Coffee",
      items: [
        { id: "espresso", name: "Espresso", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=300&fit=crop" },
        { id: "latte", name: "Latte", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=300&h=300&fit=crop" },
        { id: "cappuccino", name: "Cappuccino", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop" },
      ],
    },
    {
      title: "Food",
      items: [
        { id: "meat-lovers", name: "Meat Lovers", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=300&fit=crop" },
        { id: "sides", name: "Sides", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=300&h=300&fit=crop" },
        { id: "chicken", name: "Chicken Items", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=300&fit=crop" },
      ],
    },
    {
      title: "Drinks",
      items: [
        { id: "lemonade", name: "Frozen Lemonade", image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=300&h=300&fit=crop" },
        { id: "smoothies", name: "Smoothies", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=300&fit=crop" },
        { id: "protein-shakes", name: "Protein Shakes", image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300&h=300&fit=crop" },
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
