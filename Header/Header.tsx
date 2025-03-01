"use client";

import React, { useState } from "react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex flex-col pl-8 w-full max-md:pl-5 max-md:max-w-full">
      <nav className="w-full max-w-[1386px] max-md:max-w-full">
        <div className="flex gap-5 items-center max-md:flex-col">
          <div className="w-[17%] max-md:w-full max-md:flex max-md:justify-between max-md:items-center">
            <img
              src="/images/logo.png"
              alt="Beegum Shahijas Logo"
              className="object-contain max-w-full aspect-[1.63] w-[169px] max-md:w-[120px]"
            />
            <button
              className="hidden max-md:block text-rose-950 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          <div
            className={`ml-5 w-[62%] max-md:ml-0 max-md:w-full ${
              mobileMenuOpen ? "block" : "max-md:hidden"
            }`}
          >
            <ul className="flex gap-10 self-stretch my-auto text-2xl font-medium text-center whitespace-nowrap text-rose-950 max-md:flex-col max-md:items-center max-md:gap-6 max-md:py-4">
              <li className="cursor-pointer hover:text-rose-800 transition-colors">
                Home
              </li>
              <li className="cursor-pointer hover:text-rose-800 transition-colors">
                About
              </li>
              <li className="basis-auto cursor-pointer hover:text-rose-800 transition-colors">
                Products
              </li>
              <li className="cursor-pointer hover:text-rose-800 transition-colors">
                Contact
              </li>
            </ul>
          </div>

          <div
            className={`ml-5 w-1/5 max-md:ml-0 max-md:w-full ${
              mobileMenuOpen ? "block" : "max-md:hidden"
            }`}
          >
            <button className="gap-3 self-stretch px-9 py-3.5 my-auto w-full text-2xl font-medium text-orange-100 rounded-2xl bg-rose-950 min-h-[60px] max-md:px-5 hover:bg-rose-900 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
