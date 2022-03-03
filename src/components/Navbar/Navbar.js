import React from "react";
import Logo from '../../assets/images/logo_pink.png';
import {BsCart} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({toggleMenu,toggleCart}) {
  return (
    <nav class="bg-white px-2 sm:px-4 py-2.5  dark:bg-gray-800 border  text-secondary fixed top-0 left-0 right-0 z-[2000] max-h-[100px]">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
        {/* logo */}
        <a href="#" class="flex md:mr-8 max-h-18 ">
          <img src={Logo} className="w-32 h-[4.5rem]" />
        </a>
        {/* Links */}
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto"
          id="mobile-menu-2"
        >
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
            <li class="relative">
              <a
                href="#"
                class="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 dark:text-white hover:text-primary link-hover"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li class="relative">
              <a
                href="#"
                class="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 dark:text-white hover:text-primary link-hover"
                aria-current="page"
              >
                New Arrivals
              </a>
            </li>
            <li class="relative">
              <a
                href="#"
                class="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 dark:text-white hover:text-primary link-hover"
                aria-current="page"
              >
                Products
              </a>
            </li>
            <li class="relative">
              <a
                href="#"
                class="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 dark:text-white hover:text-primary link-hover"
                aria-current="page"
              >
                Shop By Set
              </a>
            </li>

            <li class="relative">
              <a
                href="#"
                class="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 dark:text-white hover:text-primary link-hover"
                aria-current="page"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* Icons */}
        <div className=" flex items-center text-3xl  gap-x-4">
          <div className="">
            <AiOutlineSearch />
          </div>
          <div className="cursor-pointer" onClick={toggleCart}>
            <BsCart />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
