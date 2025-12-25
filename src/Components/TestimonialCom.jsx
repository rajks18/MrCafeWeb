// import coffeeImg from "../Images/cappuccino.png";

// const TestimonialSection = () => {
//   return (
//     <section className="relative py-16 px-6 bg-stone-50 overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-10 text-8xl text-amber-900">☕</div>
//         <div className="absolute bottom-10 right-20 text-6xl text-amber-900">☕</div>
//         <div className="absolute top-1/2 left-1/4 text-4xl text-amber-900">☕</div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Left Content */}
//           <div className="flex-1">
//             <h2 className="text-2xl md:text-3xl font-bold text-amber-950 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
//               What Our Customer Say
//             </h2>

//             <div className="relative">
//               {/* Opening Quote */}
//               <span className="absolute -top-4 -left-2 text-5xl text-amber-800 font-serif leading-none">"</span>
              
//               <p className="text-amber-900 italic text-sm md:text-base leading-relaxed pl-6 pr-8 max-w-md">
//                 I Like The Coffee But A Little Expensive To Recommend To Friends. Can Buy Acceptable Equivalent In Waitrose For Half The Price
//               </p>

//               {/* Closing Quote */}
//               <span className="absolute -bottom-6 right-20 text-5xl text-amber-800 font-serif leading-none">"</span>
//             </div>

//             {/* Customer Info */}
//             <div className="mt-10">
//               <p className="font-semibold text-amber-950">Esther Howard</p>
              
//               {/* Stars */}
//               <div className="flex gap-0.5 mt-1">
//                 {[1, 2, 3, 4].map((star) => (
//                   <span key={star} className="text-amber-500 text-sm">★</span>
//                 ))}
//                 <span className="text-gray-300 text-sm">★</span>
//               </div>

//               {/* Verified + Social */}
//               <div className="flex items-center gap-4 mt-3">
//                 <div className="flex items-center gap-1.5">
//                   <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
//                     <span className="text-white text-xs">✓</span>
//                   </span>
//                   <span className="text-xs text-gray-600">Verified Customer</span>
//                 </div>
                
//                 <div className="flex items-center gap-3 text-amber-900">
//                   <button className="hover:text-amber-700 transition-colors">
//                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                     </svg>
//                   </button>
//                   <button className="hover:text-amber-700 transition-colors">
//                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                     </svg>
//                   </button>
//                   <button className="hover:text-amber-700 transition-colors">
//                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Pagination Dots */}
//             <div className="flex gap-2 mt-8">
//               <span className="w-2 h-2 rounded-full bg-amber-800"></span>
//               <span className="w-2 h-2 rounded-full bg-amber-300"></span>
//               <span className="w-2 h-2 rounded-full bg-amber-300"></span>
//               <span className="w-2 h-2 rounded-full bg-amber-300"></span>
//               <span className="w-2 h-2 rounded-full bg-amber-300"></span>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="flex-shrink-0">
//             <img
//               src={coffeeImg}
//               alt="Coffee illustration"
//               className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-xl"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;
















import { useState } from 'react';
import coffeeImg from "../Images/cappuccino.png";

const testimonials = [
  {
    id: 1,
    name: "Esther Howard",
    text: "I Like The Coffee But A Little Expensive To Recommend To Friends. Can Buy Acceptable Equivalent In Waitrose For Half The Price",
    rating: 4
  },
  {
    id: 2,
    name: "John Cooper",
    text: "Absolutely Amazing Coffee! The Rich Flavor And Perfect Roast Make Every Morning Special. Worth Every Penny For Premium Quality",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    text: "Good Coffee With Excellent Service. The Aroma Is Fantastic And The Taste Is Consistently Great. My Go-To Choice For Daily Brew",
    rating: 5
  }
];

const TestimonialSection = () => {
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
    <section className="relative py-16 px-6 bg-stone-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl text-amber-900">☕</div>
        <div className="absolute bottom-10 right-20 text-6xl text-amber-900">☕</div>
        <div className="absolute top-1/2 left-1/4 text-4xl text-amber-900">☕</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-950 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              What Our Customer Say
            </h2>

            <div className="relative min-h-[150px] ">
              {/* Opening Quote */}
              <span className="absolute -top-6 -left-2 text-5xl text-amber-800 font-serif leading-none">"</span>
              
              <p className="text-amber-900 italic text-sm md:text-3xl leading-relaxed pl-6 pr-8 max-w-5xl text-center">
                {currentTestimonial.text}
              </p>

              {/* Closing Quote */}
              <span className="absolute -bottom-0 left-full text-5xl text-amber-800 font-serif leading-none">"</span>
            </div>

            {/* Customer Info */}
            <div className="mt-10">
              <p className="font-semibold text-amber-950">{currentTestimonial.name}</p>
              
              {/* Stars */}
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span 
                    key={star} 
                    className={`text-sm ${star <= currentTestimonial.rating ? 'text-amber-500' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Verified + Social */}
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-xs text-gray-600">Verified Customer</span>
                </div>
                
                <div className="flex items-center gap-3 text-amber-900">
                  <button className="hover:text-amber-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="hover:text-amber-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button className="hover:text-amber-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Arrows and Dots */}
            <div className="flex items-center gap-4 mt-8">
              {/* Previous Arrow */}
              <button 
                onClick={prevSlide}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-800 hover:bg-amber-700 text-white transition-colors"
              >
                ←
              </button>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-amber-800' : 'bg-amber-300'
                    }`}
                  />
                ))}
              </div>

              {/* Next Arrow */}
              <button 
                onClick={nextSlide}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-800 hover:bg-amber-700 text-white transition-colors"
              >
                →
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0">
            <img
              src={coffeeImg}
              alt="Coffee illustration"
              className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;