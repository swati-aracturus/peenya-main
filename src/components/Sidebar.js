import React, { useState } from "react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDropdown2 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 transform bg-[#f8f4f3] transition-transform duration-300  ease-in-out  z-50  ${
      
        isOpen ? "w-80  pm:z-50" : "w-24"
      } ${
        isOpen
          ? "translate-x-0  pm:z-100 "
          : "-translate-x-5  pm:translate-x-[-100%] "
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">
          {isOpen ? (
            <img src="/brand.png" className="w-40" alt="Brand Logo" />
          ) : (
            <img src="/brand.png" className="w-24" alt="Brand Logo" />
          )}
        </h1>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setIsOpen(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="mt-4 mx-2">
        <ul className="space-y-2 mb-3">
          <li>
            <p
              className={`text-gray-500 text-sm py-2 px-4 ${
                isOpen ? "" : "text-center"
              }`}
            >
              {isOpen ? "MAIN MENU" : <i className="fa-solid fa-ellipsis"></i>}
            </p>
          </li>
          <li>
            <a
              href="#"
              className={`py-2 px-4 flex items-center gap-3 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 ${
                !isOpen ? "justify-center mb-4" : ""
              }`}
            >
              <i className="fa-solid fa-gauge fa-xl"></i>
              {isOpen && <p>Dashboard</p>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`py-2 px-4 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 flex items-center gap-3 ${
                !isOpen ? "justify-center mb-4" : ""
              }`}
            >
              <i className="fa-solid fa-house fa-xl"></i>
              {isOpen && <p>Add Listing</p>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`py-2 px-4 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 flex items-center gap-3 ${
                !isOpen ? "justify-center mb-4" : ""
              }`}
            >
              <i className="fa-solid fa-wallet fa-xl"></i>
              {isOpen && <p>Wallet</p>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`py-2 px-4 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 flex items-center gap-3 ${
                !isOpen ? "justify-center mb-4" : ""
              }`}
            >
              <i className="fa-solid fa-message fa-xl"></i>
              {isOpen && <p>Message</p>}
              {isOpen && (
                <p className="bg-green-500 px-2 py-1 rounded-full text-sm text-white ml-16">
                  2
                </p>
              )}
            </a>
          </li>
        </ul>
        <ul className="space-y-2 mb-3">
          <li>
            <p
              className={`text-gray-500 text-sm py-2 px-4 ${
                isOpen ? "" : "text-center"
              }`}
            >
              {isOpen ? "LISTING" : <i className="fa-solid fa-ellipsis"></i>}
            </p>
          </li>
          <li>
            <button
              type="button"
              className={`w-full p-2 px-4 text-base transition duration-75 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 flex items-center gap-3 ${
                !isOpen ? "justify-center mb-4" : ""
              }`}
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={toggleDropdown1}
            >
              <i className="fa-solid fa-sheet-plastic fa-xl"></i>
              {isOpen && <p>My Listing</p>}

              {isOpen && (
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
                    isOpen2 ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
            <ul
              id="dropdown-example"
              className={`py-2 space-y-2 ${isOpen2 ? "" : "hidden"}`}
            >
              <li>
                <a
                  href="#"
                  className={`flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 pl-10 ${
                    !isOpen ? "hidden" : ""
                  }`}
                >
                  Active
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 pl-10 ${
                    !isOpen ? "hidden" : ""
                  }`}
                >
                  Pending
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 pl-10 ${
                    !isOpen ? "hidden" : ""
                  }`}
                >
                  Expired
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className={`py-2 px-4 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 flex items-center gap-3 ${
                !isOpen ? "justify-center mb-4" : ""
              }`}
            >
              <i className="fa-solid fa-star fa-xl"></i>
              {isOpen && <p>Reviews</p>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`py-2 px-4 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 flex items-center gap-3 ${
                !isOpen ? "justify-center mb-4" : ""
              }`}
            >
              <i className="fa-solid fa-book fa-xl"></i>
              {isOpen && <p>Bookings</p>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`py-2 px-4 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 flex items-center gap-3 ${
                !isOpen ? "justify-center mb-4" : ""
              }`}
            >
              <i className="fa-solid fa-heart fa-xl"></i>
              {isOpen && <p>Bookmark</p>}
            </a>
          </li>
          <li>
            <button
              type="button"
              className={`w-full p-2 px-4 text-base transition duration-75 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 flex items-center gap-3 ${
                !isOpen ? "justify-center mb-4" : ""
              }`}
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={toggleDropdown2}
            >
              <i className="fa-solid fa-bars-staggered fa-xl"></i>
              {isOpen && <p>Multi Level Menu</p>}
              {isOpen && (
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
                    isOpen3 ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
            <ul
              id="dropdown-example"
              className={`py-2 space-y-2 ${isOpen3 ? "" : "hidden"}`}
            >
              <li>
                <a
                  href="#"
                  className={`flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 pl-11 ${
                    !isOpen ? "hidden" : ""
                  }`}
                >
                  Menu 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 pl-11 ${
                    !isOpen ? "hidden" : ""
                  }`}
                >
                  Menu 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 pl-11 ${
                    !isOpen ? "hidden" : ""
                  }`}
                >
                  Menu 3
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="space-y-2 mb-3">
          <li>
            <p
              className={`text-gray-500 text-sm py-2 px-4 ${
                isOpen ? "" : "text-center"
              }`}
            >
              {isOpen ? "Accounts" : <i className="fa-solid fa-ellipsis"></i>}
            </p>
          </li>
          <li>
            <a
              href="#"
              className={`py-2 px-4 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 flex items-center gap-3 ${
                !isOpen ? "justify-center mb-4" : ""
              }`}
            >
              <i className="fa-solid fa-sheet-plastic fa-xl"></i>
              {isOpen && <p>Edit Profile</p>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`py-2 px-4 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 flex items-center gap-3 ${
                !isOpen ? "justify-center mb-4" : ""
              }`}
            >
              <i className="fa-solid fa-gear fa-xl"></i>
              {isOpen && <p>Setting</p>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`py-2 px-4 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 flex items-center gap-3 ${
                !isOpen ? "justify-center mb-4" : ""
              }`}
            >
              <i className="fa-solid fa-headphones-simple fa-xl"></i>
              {isOpen && <p>Support</p>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`py-2 px-4 rounded-lg group hover:bg-[#f8e2de] dark:text-white dark:hover:bg-gray-700 flex items-center gap-3 ${
                !isOpen ? "justify-center mb-4" : ""
              }`}
            >
              <i className="fa-solid fa-right-from-bracket fa-xl"></i>
              {isOpen && <p>Logout</p>}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
