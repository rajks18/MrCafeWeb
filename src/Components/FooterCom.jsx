import React from "react";
import logo from "../Images/mr-cafe-logo.png";
import coffeeSack from "../Images/coffee-sack.png";
import paymentsCombined from "../Images/payments-combined.png";

const FooterAbsoluteSack = () => {
  return (
    <footer className="bg-white text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-14 pb-24 relative">
        {/* Logo and Name */}
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="MR. CAFE logo" className="w-12 h-12" />
          <h3 className="text-2xl font-bold tracking-wide">MR. CAFE</h3>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT */}
          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed max-w-[22rem] mb-6">
              We Collect The Best Quality Of Ingredients From Market. With The
              Best Execution We Provide Our Guest Fresh & Very Delicious Food.
            </p>

            <h4 className="text-sm font-semibold mb-2">Our Location</h4>
            <address className="not-italic text-sm leading-relaxed mb-2">
              Above It <br />
              House# 20, Road# 09 Sector# 11, <br />
              Dhaka 1230
            </address>

            <a
              href="#"
              className="text-amber-600 text-sm underline hover:text-amber-700"
            >
              Find Us On Map
            </a>
          </div>

          {/* RIGHT – 4 COLUMNS */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-10">
              <div className="lg:col-span-2">
                <h4 className="text-sm font-semibold mb-3">Company</h4>
                <ul className="text-sm space-y-2">
                  <li>
                    <a href="#" className="hover:text-amber-600">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-amber-600">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-amber-600">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-amber-600">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h4 className="text-sm font-semibold mb-3">Menu</h4>
                <ul className="text-sm space-y-2">
                  <li>
                    <a href="#" className="hover:text-amber-600">
                      Coffee
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-amber-600">
                      Drinks
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-amber-600">
                      Food Items
                    </a>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h4 className="text-sm font-semibold mb-3">Keep In Touch</h4>
                <ul className="text-sm space-y-2">
                  <li>
                    <a href="#" className="hover:text-amber-600">
                      E-Mail Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-amber-600">
                      Text Us
                    </a>
                  </li>
                  <li>(406) 555-0120</li>
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h4 className="text-sm font-semibold mb-3">Reservation</h4>
                <p className="text-sm leading-relaxed">
                  Reservations Are Available For Dinner, Starting At{" "}
                  <span className="text-amber-600 font-semibold">3pm</span> Each
                  Day.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COFFEE SACK */}
        <img
          src={coffeeSack}
          alt="Coffee beans sack"
          className="
            absolute
            -translate-x-1/2
            top-[190px]
            sm:top-[200px]
            lg:top-[220px] left-96
            w-52 sm:w-64 md:w-72 lg:w-80
            z-30
            object-contain
            drop-shadow-2xl
          "
        />

        {/* PAYMENTS + SOCIAL */}
        <div className="flex flex-col md:flex-row items-center justify-end gap-40">
          {/* payment */}
          <div className="flex items-center gap-6">
            <img
              src={paymentsCombined}
              alt="Payments"
              className="h-12 object-contain"
            />
          </div>

          {/* social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-black"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3V22c4.78-.8 8.44-4.94 8.44-9.93z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-black"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zm6.5-.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-black"
                >
                  <path d="M22 5.92c-.63.28-1.3.47-2 .56a3.48 3.48 0 0 0-6 2.38c0 .27.03.54.09.8A9.9 9.9 0 0 1 3.1 6.16a3.48 3.48 0 0 0 1.08 4.65c-.5 0-.98-.15-1.4-.38v.04c0 1.7 1.2 3.12 2.8 3.45-.46.12-.95.14-1.45.05.41 1.28 1.6 2.2 3.02 2.23A6.98 6.98 0 0 1 2 18.57a9.86 9.86 0 0 0 5.34 1.56c6.4 0 9.9-5.3 9.9-9.9v-.45c.68-.5 1.27-1.12 1.74-1.83a6.9 6.9 0 0 1-2-1.01z" />
                </svg>
              </a>
              <a
                href="mailto:info@coffeebusiness.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-black"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 text-center text-xs text-gray-600">
          <a href="#" className="hover:text-amber-600 underline">
            Privacy Policy
          </a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-amber-600 underline">
            Cookie Policy
          </a>
          <span className="mx-2">/</span>
          <span>All Rights Reserved. Coffee Address 2019</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterAbsoluteSack;
