import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Properties = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);

  const stepsData = [
    {
      image: "/Desktop Images/images/House Example 1.png",
      title: "Malto House",
    },
    {
      image: "/Desktop Images/images/House Example 2.png",
      title: "Malto House",
    },
    {
      image: "/Desktop Images/images/House Example 3.png",
      title: "Malto House",
    },
    {
      image: "/Desktop Images/images/House Example 4.png",
      title: "Malto House",
    },
    {
      image: "/Desktop Images/images/House Example 5.png",
      title: "Malto House",
    },
    {
      image: "/Desktop Images/images/House Example 1.png",
      title: "Malto House",
    },
  ];

  return (
    <div className="bg-gray-100 py-0 pt-30 ">
      <div className="px-36" data-aos="fade-right">
        <img
          src="Desktop Images/images/swipe.png"
          alt="Swipe"
          className="w-24 h-1.5 mb-2"
        />
        <h5 className="text-2xl font-semibold mb-8">
          Find your next place to live
        </h5>
        <div className="bg-white rounded-3xl shadow-md p-6 flex items-center justify-between w-320">
          {["Looking for", "Location", "Property Type", "Price"].map(
            (value, index) => (
              <div
                key={index}
                className={`flex items-center text-gray-700 h-14 font-bold text-base px-6 ${
                  index !== 0 ? "border-l border-gray-300 " : ""
                } w-44`}
              >
                {value}
                <span className="ml-1 text-sm">˅</span>
              </div>
            )
          )}
        </div>
      </div>
      <div
        className="mt-24 px-36 pb-70"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <div className="flex flex-wrap -mx-4">
          {stepsData.map((step, index) => (
            <div key={index} className="w-1/3 px-4 mb-8">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-20 bg-white">
        <div className="flex items-center pl-62 gap-16">
          <div className="max-w-xl">
            <img
              src="/Desktop Images/images/Group 7.png"
              alt="Top icon"
              className="w-30 mb-2"
            />

            <h1 className="text-4xl font-bold mb-4">You're in good hands</h1>

            <p className="text-lg font-light leading-relaxed pb-20">
              In oculis quidem se esse admonere interesse enim maxime placeat,
              facere possimus, omnis. Et quidem faciunt, ut labore et accurate
              disserendum et harum quidem exercitus quid. In oculis quidem se
              esse admonere interesse enim maxime placeat, facere possimus,
              omnis. Et quidem faciunt, ut labore et accurate disserendum et
              harum quidem exercitus quid
            </p>

            <h6 className="flex items-center bg-black text-white font-medium py-2 px-4 rounded-tr-lg w-40">
              Learn more
              <img
                src="/Desktop Images/svg image/Arrow Tellow.svg"
                alt="Arrow"
                className="ml-2 w-4 h-4"
              />
            </h6>
          </div>
          <img
            src="/Desktop Images/images/Rectangle2.png"
            alt="Main visual"
            className="w-[700px] object-cover -mt-40  "
          />
        </div>
      </div>
    </div>
  );
};

export default Properties;
