import React, { useState } from "react";
import coffeeImage1 from "../Images/image2.png";
import coffeeImage2 from "../Images/image2.png";
import coffeeImage3 from "../Images/image2.png";

const QuoteSlider = () => {
  const slides = [coffeeImage1, coffeeImage2, coffeeImage3];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative px-4 sm:px-8 md:px-[10%] py-12 bg-[rgb(244,239,230)]">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Coffee Reflections
      </h2>

      {/* Slider wrapper */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((src, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 bg-white rounded shadow-md p-4"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded"
              />
              <p className="mt-4 text-center text-gray-600 italic">
                “Coffee is a way of stealing time which should by rights belong to your older self.”
              </p>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-700 text-white px-3 py-2 rounded-full hover:bg-gray-900"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-700 text-white px-3 py-2 rounded-full hover:bg-gray-900"
        >
          ›
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default QuoteSlider;
