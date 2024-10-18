import { useState } from "react";

import menuIcon from "../assets/Icons/menu.png";
import { navLinks } from "../constants";
const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <header className=" py-4 w-full sm:px-16 px-8">
      <nav className=" flex justify-between items-center max-container relative z-10">
        <a href="/">
          <p className="font-bold text-3xl font-Kumbh text-white">YGA</p>
        </a>

        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden font-Kumbh text-white text-xl">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="leading-normal lext-lg">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-3 max-lg:hidden">
          <button className="p-77 py-4 border-2 border-gray-600 text-bold text-lg rounded-xl font-Kumbh text-white">
            CLASSES
          </button>
        </div>

        <div className="hidden max-lg:block">
          <img
            src={menuIcon}
            alt="Menu Icon"
            onClick={() => setToggleDropdown((prev) => !prev)}
          />
          {toggleDropdown && (
            <ul className=" absolute right-0 top-full mt-3 w-full p-5 rounded-lg min-w-[210px] flex flex-col gap-2 justify-end items-end bg-black text-lg">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="leading-normal text-slate-900">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
