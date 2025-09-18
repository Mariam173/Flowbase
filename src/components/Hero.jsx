// src/components/Hero.jsx
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      className="relative bg-black bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/Desktop Images/images/Hero-img.jpg')" }}
    >
      <div className="bg-black inset-0 opacity-40 absolute"></div>
      <header className="relative overflow-hidden">
        <Navbar />
        <div className="px-4 sm:px-8 md:px-20 lg:px-36">
          <div>
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl p-2 sm:p-4 w-full md:w-[500px] pt-10 sm:pt-16 lg:pt-30 px-0">
              Beautiful homes made for you
            </h1>
            <p className="text-white font-light text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-full md:max-w-xl mt-2">
              In oculis quidem se esse admonere interesse enim maxime placeat,
              facere possimus, omnis. Et quidem faciunt, ut labore et accurate
              disserendum et harum quidem exercitus quid.
            </p>
          </div>

          <h6 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-bold pt-3 sm:pt-4 md:pt-5 bg-white mt-6 sm:mt-10 md:mt-16 lg:mt-25 px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 flex items-center gap-2 w-fit rounded-lg">
            See all listings
            <img
              src="Desktop Images/svg image/Arrow Tellow.svg"
              alt="Arrow"
              className="w-4 h-4 mt-1"
            />
          </h6>
        </div>
      </header>
    </div>
  );
};

export default Hero;

