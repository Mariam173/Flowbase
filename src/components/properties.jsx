import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Properties = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);

  const [house, setHouse] = useState([]);
  const api = "https://fakestoreapi.com/products";

  const getHouse = async () => {
    const res = await fetch(api);
    const data = await res.json();
    setHouse(data);
  };

  useEffect(() => {
    getHouse();
  }, []);

  return (
    <div className="bg-gray-100 py-0 pt-10 sm:pt-16 md:pt-30">
      {/* Filter Section */}
      <div className="px-4 sm:px-8 md:px-20 lg:px-36" data-aos="fade-right">
        <img
          src="Desktop Images/images/swipe.png"
          alt="Swipe"
          className="w-20 sm:w-24 h-1.5 mb-2"
        />
        <h5 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
          Find your next place to live
        </h5>
        <div className="bg-white rounded-3xl shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-0 w-full">
          {["Looking for", "Location", "Property Type", "Price"].map(
            (value, index) => (
              <div
                key={index}
                className={`flex items-center text-gray-700 h-12 sm:h-14 font-bold text-sm sm:text-base px-4 sm:px-6 ${
                  index !== 0 ? "sm:border-l border-gray-300" : ""
                } w-full sm:w-44`}
              >
                {value}
                <span className="ml-1 text-xs sm:text-sm">˅</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Property Listings */}
      <div
        className="mt-12 sm:mt-16 md:mt-24 px-4 sm:px-8 md:px-20 lg:px-36 pb-20 sm:pb-40"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {house.map((step, index) => (
            <div key={index} className="px-2 sm:px-4 mb-6 sm:mb-8 py-5">
              <div className="bg-white pb-6 sm:pb-8 h-[220px] sm:h-[250px] rounded-2xl shadow-md overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-32 sm:h-40 object-cover"
                />
                <div className="p-3 sm:p-4 text-left">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2">
                    {step.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="pt-10 sm:pt-16 md:pt-20 bg-white">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-16 px-4 sm:px-8 md:pl-20 lg:pl-62">
          <div className="max-w-full md:max-w-xl">
            <img
              src="/Desktop Images/images/Group 7.png"
              alt="Top icon"
              className="w-16 sm:w-20 md:w-30 mb-2"
            />

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              You're in good hands
            </h1>

            <p className="text-base sm:text-lg font-light leading-relaxed pb-6 sm:pb-10 md:pb-20">
              In oculis quidem se esse admonere interesse enim maxime placeat,
              facere possimus, omnis. Et quidem faciunt, ut labore et accurate
              disserendum et harum quidem exercitus quid. In oculis quidem se
              esse admonere interesse enim maxime placeat, facere possimus,
              omnis. Et quidem faciunt, ut labore et accurate disserendum et
              harum quidem exercitus quid
            </p>

            <h6 className="flex items-center bg-black text-white font-medium py-2 px-4 rounded-tr-lg w-fit md:w-40">
              Learn more
              <img
                src="Desktop Images/svg image/Arrow Tellow.svg"
                alt="Arrow"
                className="ml-2 w-4 h-4"
              />
            </h6>
          </div>
          <img
            src="/Desktop Images/images/Rectangle2.png"
            alt="Main visual"
            className="w-full sm:w-[500px] md:w-[700px] object-cover -mt-6 md:-mt-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Properties;
