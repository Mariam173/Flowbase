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
    <div className="pt-20 bg-white">
      <div className="flex items-center">
        <img
          src="/Desktop Images/images/Content Image large.png"
          alt="Main visual"
          className="w-[700px] object-cover -mb-40"
        />

        <div className="pl-16 max-w-xl">
          <img
            src="/Desktop Images/images/Group 7.png"
            alt="Top icon"
            className="w-30 mb-2"
          />

          <h1
            className="text-4xl font-bold mb-4"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            You're in good hands
          </h1>

          <p
            className="text-lg font-light leading-relaxed pb-20"
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
          <h6 className="flex items-center bg-black text-white font-medium py-2 px-4 rounded-tr-lg w-40 relative -top-15">
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
