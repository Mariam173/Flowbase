import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Trusted = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-black py-20 flex justify-center items-center text-center">
      <div className="max-w-2xl">
        <img
          src="/Desktop Images/images/Group 7.png"
          alt="Top icon"
          className="w-30 mb-4 mx-auto"
        />

        <h1
          className="text-4xl font-bold mb-6 text-white"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          You're in good hands
        </h1>

        <p
          className="text-lg font-light text-white leading-relaxed mb-10"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          In oculis quidem se esse admonere interesse enim maxime placeat,
          facere possimus, omnis. Et quidem faciunt, ut labore et accurate
          disserendum et harum quidem exercitus quid. In oculis quidem se esse
          admonere interesse enim maxime placeat, facere possimus, omnis.
        </p>

        <button className="flex items-center justify-center bg-yellow-500 text-white font-medium py-2 px-4 rounded-tr-lg w-40 mx-auto">
          Learn more
          <img
            src="/Desktop Images/svg image/Arrow White.svg"
            alt="Arrow"
            className="ml-2 w-4 h-4"
          />
        </button>
      </div>
    </div>
  );
};

export default Trusted;
