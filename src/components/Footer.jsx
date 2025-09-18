// src/components/Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-16 px-6 md:px-20 text-center">
      <div className="space-y-12 max-w-5xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-bold">
            Make your dreams a{" "}
            <span className="text-orange-400">reality</span>
          </h2>
          <button className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-tr-lg">
            Work with us →
          </button>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <img
            src="/Desktop Images/svg image/Logo RealEstate.svg"
            alt="Logo"
            className="h-8"
          />
          <div className="flex gap-4 justify-center">
            <img
              src="/Desktop Images/images/facebook.png"
              alt="Facebook"
              className="w-5 h-5"
            />
            <img
              src="/Desktop Images/images/twitter.png"
              alt="Twitter"
              className="w-5 h-5"
            />
            <img
              src="/Desktop Images/images/instagram.png"
              alt="Instagram"
              className="w-5 h-5"
            />
          </div>
        </div>

        {/* Bottom Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm text-center">
          {[1, 2, 3].map((col) => (
            <div key={col}>
              <h4 className="font-semibold mb-4">Column Heading</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#">Link goes here</a>
                </li>
                <li>
                  <a href="#">Link goes here</a>
                </li>
                <li>
                  <a href="#">Link goes here</a>
                </li>
                <li>
                  <a href="#">Link goes here</a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

