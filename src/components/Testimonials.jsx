// src/components/Testimonial.jsx
import React from 'react';
const Testimonial = () => {
  return (
    <section className="bg-white py-16 px-4 flex flex-col items-center text-center">
      <img
        src="/Desktop Images/images/Group 7.png"
        alt="decorative line"
        className="mb-4"
      />
      <p className="max-w-2xl text-gray-700 font-medium text-lg leading-relaxed mb-12">
        “Certe, inquam, pertinax non existimant oportere<br />
        exquisitis rationibus conquisitis de quo enim ipsam.<br />
        Torquem detraxit hosti et quidem faciunt,<br />
        ut aut.”
      </p>
      <div className="flex flex-col items-center md:flex-row justify-center gap-6">
        <div className="flex flex-col items-center">
          <img
            src="/Desktop Images/images/Oval2.png"
            alt="Lara Madrigal"
            className="w-12 h-12 rounded-full"
          />
          <p className="text-sm text-gray-700 mt-1">Lara Madrigal</p>
          <p className="text-xs text-gray-400">Client</p>
        </div>

        <div className="bg-black  text-white px-15 py-1 rounded shadow-lg">
          <div className="flex flex-col items-center">
            <img
              src="/Desktop Images/images/Oval2.png"
              alt="Lara Madrigal"
              className=" w-12 h-12 rounded-full mb-2"
            />
            <p className="font-semibold">Lara Madrigal</p>
            <p className="text-sm text-gray-400">Client</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/Desktop Images/images/Oval2.png"
            alt="Lara Madrigal"
            className="w-12 h-12 rounded-full"
          />
          <p className="text-sm text-gray-700 mt-1">Lara Madrigal</p>
          <p className="text-xs text-gray-400">Client</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
