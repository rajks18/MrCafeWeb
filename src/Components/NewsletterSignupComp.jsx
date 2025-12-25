import React from "react";

const CoffeeNewsletterExact = () => {
  return (
    <section className="bg-[#f4efe6] px-4 sm:px-6 md:px-[10%] py-28 flex justify-center mb-10">
      <div className="w-full max-w-xl">
        {/* Card area centered, no extra border */}
        <div className="bg-transparent flex flex-col items-center">
          {/* Heading */}
          <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-6">
            Want To Hear Coffee News From Us?
          </h2>

          {/* Form: input and subscribe button inline on md+, stacked on small screens */}
          <form className="w-full ">
            <div className="flex flex-col md:flex-row items-stretch gap-3">
              <input
                type="email"
                aria-label="Your E-Mail Address"
                placeholder="Your E-Mail Address"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
              />

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 rounded-md bg-[#c68600] hover:bg-[#b36f00] text-white text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </div>

            {/* Checkbox and policy text aligned left, small text */}
            <label className="mt-3 pl-24 inline-flex items-center text-xs text-gray-600 gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
              />
              <span className="leading-tight">
                Please Read The Coffee Address Personal Data Processing Policy{" "}
                <a href="#" className="text-[#c68600] underline">
                  Here
                </a>
              </span>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CoffeeNewsletterExact;
