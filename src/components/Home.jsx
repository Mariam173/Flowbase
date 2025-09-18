import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="pt-10 sm:pt-16 md:pt-20 bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src="/Desktop Images/images/Content Image large.png"
          alt="Main visual"
          className="w-full sm:w-[500px] md:w-[700px] object-cover -mb-10 md:-mb-40"
        />

        <div className="mt-6 md:mt-0 md:pl-16 max-w-full md:max-w-xl px-4 sm:px-6 md:px-0">
          <img
            src="/Desktop Images/images/Group 7.png"
            alt="Top icon"
            className="w-16 sm:w-20 md:w-30 mb-2"
          />

          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            You're in good hands
          </h1>

          <p
            className="text-base sm:text-lg font-light leading-relaxed pb-6 sm:pb-10 md:pb-20"
            data-aos="fade-down"
            data-aos-delay="1000"
          >
            In oculis quidem se esse admonere interesse enim maxime placeat,
            facere possimus, omnis. Et quidem faciunt, ut labore et accurate
            disserendum et harum quidem exercitus quid. In oculis quidem se esse
            admonere interesse enim maxime placeat, facere possimus, omnis. Et
            quidem faciunt, ut labore et accurate disserendum et harum quidem
            exercitus quid
          </p>

          <h6 className="flex items-center bg-black text-white font-medium py-2 px-4 rounded-tr-lg w-fit md:w-40 relative md:-top-15">
            Learn more
            <img
              src="Desktop Images/svg image/Arrow Tellow.svg"
              alt="Arrow"
              className="ml-2 w-4 h-4"
            />
          </h6>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
