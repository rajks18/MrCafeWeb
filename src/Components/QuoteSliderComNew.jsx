import { useState } from 'react';
import coffeeImg from "../Images/cappuccino.png";
import bgImg from "../Images/backgroundQuote.png"; // Add your background image

const testimonials = [
  {
    id: 1,
    text: "Coffee Is A Way Of Stealing Time Which Should By Rights Belong To Your Older Self."
  },
  {
    id: 2,
    text: "Behind Every Successful Person Is A Substantial Amount Of Coffee."
  },
  {
    id: 3,
    text: "Life Happens, Coffee Helps. It's Always A Good Idea To Have Coffee In Your Hand."
  }
];

const QuoteSliderComNew = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="relative  flex items-center justify-center overflow-hidden py-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={bgImg} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6  text-center">
        {/* Opening Quote */}
        <div className="absolute left-0 top-0 text-8xl text-amber-900 font-serif leading-none mb-6">
          "
        </div>

        {/* Testimonial Text */}
        <h2 
          className="text-3xl md:text-5xl lg:text-5xl font-bold text-amber-950 mb-8 leading-tight px-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          {currentTestimonial.text}
        </h2>

        {/* Closing Quote */}
        <div className="absolute bottom-0 right-0 text-8xl text-amber-900 font-serif leading-none mb-12 flex justify-end px-12">
          "
        </div>

        {/* Coffee Icon */}
        <div className="flex justify-center mb-8">
          <img
            src={coffeeImg}
            alt="Coffee"
            className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-3 h-3 bg-amber-900' 
                  : 'w-2.5 h-2.5 bg-amber-400 hover:bg-amber-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows - Hidden but functional */}
        <div className="flex items-center justify-center gap-8 mt-8 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-900/80 hover:bg-amber-900 text-white transition-all text-xl"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-900/80 hover:bg-amber-900 text-white transition-all text-xl"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuoteSliderComNew;