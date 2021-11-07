import React from "react";
import { FiUser } from "react-icons/fi";

function Nav() {
  return (
    <div>
      <nav class="navbar flex flex-wrap items-center justify-between p-3  ">
        {" "}
        <img className="lg:ml-16" src="/White.png" alt="Nav-Logo" width="140" />
        <div class="flex md:hidden ">
          <button id="hamburger ">
            <img
              class="toggle block"
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
            />
            <img
              class="toggle hidden"
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
            />
          </button>
        </div>
        <div class="tracking-widest toggle lg:mr-20 md:mr-2 sm:mr-2 xl:mr-18   text-xl hidden md:flex w-full md:w-auto  text-right mt-6 md:mt-0 border-t-2 border-gray-900 md:border-none">
          <a
            href="/Home"
            className="block md:inline-block font-bold    hover:text-white px-2  py-3 border-b-2  md:border-none"
          >
            <div className="dropdown inline-block relative">
              <button className=" font-semibold py-2  rounded inline-flex items-center">
                <span className="mr-1 tracking-widest">Home</span>
              </button>
            </div>
          </a>

          {/* Quran  */}
          <a
            href="#"
            className="block md:inline-block font-bold    hover:text-white px-2 py-3 border-b-2  md:border-none"
          >
            <div className="dropdown inline-block relative">
              <button className=" font-semibold py-2  rounded inline-flex items-center">
                <span className="mr-1 tracking-widest">Quran</span>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                  <a
                    className="truncate rounded-t bg-gray-200 hover:bg-pink-200 hover:text-black py-2 px-4 block whitespace-no-wrap"
                    href="/Quran"
                  >
                    Full Quran
                  </a>
                </li>
                <li className="">
                  <a
                    className=" truncate bg-gray-200 hover:bg-pink-200 hover:text-black py-2 px-4 block whitespace-no-wrap"
                    href="/Tafseer"
                  >
                    Quran Tafseer
                  </a>
                </li>
              </ul>
            </div>
          </a>
          <a
            href="/Hadees"
            className="block md:inline-block font-bold    hover:text-white px-2 py-3 border-b-2  md:border-none"
          >
            <div className="dropdown inline-block relative">
              <button className=" font-semibold py-2  rounded inline-flex items-center">
                <span className="mr-1 tracking-widest">Hadees</span>
              </button>
            </div>
          </a>
          <a
            href="#"
            className="block md:inline-block font-bold    hover:text-white px-2 py-3 border-b-2  md:border-none"
          >
            <div className="dropdown inline-block relative">
              <button className=" font-semibold py-2  rounded inline-flex items-center">
                <span className="mr-1 tracking-widest">Magazines</span>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                  <a
                    className="truncate rounded-t bg-gray-200 hover:bg-pink-200 hover:text-black py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Islamic Magazines
                  </a>
                </li>
                <li className="">
                  <a
                    className="truncate bg-gray-200 hover:bg-pink-200 hover:text-black py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Party Magazines
                  </a>
                </li>
              </ul>
            </div>
          </a>
          <a
            href="#"
            className="block md:inline-block font-bold    hover:text-white px-2  py-3 border-b-2  md:border-none"
          >
            <div className="dropdown inline-block relative">
              <button className=" font-semibold py-2  rounded inline-flex items-center">
                <span className="mr-1 tracking-widest">News</span>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                  <a
                    className="truncate rounded-t bg-gray-200 hover:bg-pink-200 hover:text-black py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Islamic News
                  </a>
                </li>
                <li className="">
                  <a
                    className="truncate bg-gray-200 hover:bg-pink-200 hover:text-black py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Party News
                  </a>
                </li>
              </ul>
            </div>
          </a>
          <a
            href="#"
            className="block md:inline-block font-bold    hover:text-white px-2 py-3 border-b-2  md:border-none"
          >
            <div className="dropdown inline-block relative">
              <button className=" font-semibold py-2  rounded inline-flex items-center">
                <span className="mr-1 tracking-widest">Chat</span>
              </button>
            </div>
          </a>
          <a
            href="/Feedback"
            className="block md:inline-block font-bold    hover:text-white px-2 py-3 border-b-2  md:border-none"
          >
            <div className="dropdown inline-block relative">
              <button className=" font-semibold py-2  rounded inline-flex items-center">
                <span className="mr-1 tracking-widest">Feedback</span>
              </button>
            </div>
          </a>

          <a
            href="#"
            className="block md:inline-block font-bold    hover:text-white px-2  py-3 border-b-2  md:border-none"
          >
            <div className="dropdown inline-block relative">
              <button className=" font-semibold py-2  rounded inline-flex items-center">
                <span className="mr-1 tracking-widest">
                  {" "}
                  <FiUser />
                </span>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    SignOut
                  </a>
                </li>
              </ul>
            </div>
          </a>
          {/* <a
            href="#"
            className="block md:inline-block font-bold text-2xl   hover:text-white px-3 py-3 border-b-2  md:border-none"
          >
            <FiUser />
          </a> */}
        </div>
      </nav>
      <div className="hidden md:block">
        <img
          className="object-center mx-auto pt-6"
          src="Black.png"
          alt="logo"
          width="300"
        />
      </div>
    </div>
  );
}

export default Nav;
