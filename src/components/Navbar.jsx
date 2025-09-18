import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    //  alert('I have been clicked')
  };

  const closeMenu = () => {
    setMenuOpen(false)
  }
  return (
    <>
      <nav className="flex justify-between items-center pt-5 px-36">
        <img
          src="Desktop Images/svg image/Logo RealEstate.svg"
          alt="flowbase Logo"
          className="h-6"
        />
        <ul className="hidden lg:flex items-center gap-8 text-white font-bold">
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Our works</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center bg-yellow-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-tr-lg"
            >
              Work with us
              <img
                src="Desktop Images/svg image/Arrow White.svg"
                alt="Arrow"
                className="ml-2 w-4 h-4"
              />
            </a>
          </li>
        </ul>
        <div className="block lg:hidden cursor-pointer" onClick={handleMenu}>
          <div className="bg-white h-1 w-10 mb-2"></div>
          <div className="bg-white h-1 w-10 mb-2"></div>
          <div className="bg-white h-1 w-10"></div>
        </div>
      </nav>

      {menuOpen && <MobileMenu close={closeMenu}/>}
    </>
  );
};

export default Navbar;

const MobileMenu = ({close}) => {
  return (
    <div>
      <ul className="flex flex-col items-center h-screen gap-8 text-white bg-black/30 font-bold backdrop-blur-2xl absolute w-full top-0 pt-10">
      <div>
        <button className="bg-red-600 px-2 py-1 rounded-full cursor-pointer absolute right-5 top-2" onClick={close}>X</button>
      </div>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Our works</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center bg-yellow-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-tr-lg"
          >
            Work with us
            <img
              src="Desktop Images/svg image/Arrow White.svg"
              alt="Arrow"
              className="ml-2 w-4 h-4"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
