import React, { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slidenav from "./slidenav";



export default function Header() {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to close dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Effect to add click outside listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to calculate dropdown position
  const calculateDropdownPosition = () => {
    if (!dropdownRef.current) return;
    const { top, height } = dropdownRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return top > windowHeight / 2 ? "top-0 mt-2" : "bottom-0";
  };
  return (
    <>
      <div className="bg-custom-image bg-dark relative">
        <Slidenav />
        <div className="inset-0 bg-gradient-to-b from-transparent to-[#191e25]/100 relative z-10 flex justify-center align-center items-center px-[15%] lx:px-[5%]">
          <div className="pt-[38%]">
            <p className="text-center text-white">WE ARE #1 ON THE MARKET</p>
            <h1 className="text-7xl text-white font-semibold sd:text-4xl text-center py-4 pm:text-2xl">
              We're Here To Help You <span className="font-caveat italic custom-underline z-10 text-red-60066">Navigate</span> While Traveling
            </h1>
            <p className="text-center text-white text-lg font-medium py-6">
              You'll get comprehensive results based on the provided location.
            </p>
            <div className="flex flex-wrap justify-center h-24 sd:h-56 rounded-[40px] align-center items-center px-[5%] my-8 bg-white">
              <form className="w-[30%] sd:w-full px-2 sd:pt-4 mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center sd-3 pointer-events-none">
                 <img src="/search.png" height={20} width={20}/>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 sd-10 text-sm  border-b-2 border-t-0 border-r-0 border-l-0
                    border-gray-300 text-[#F84525] ring-0 hover:ring-0 focus:border-[#F84525] focus:border-b-4 focus:ring-0 transition-all duration-500  sd:duration-0"
                    placeholder="&nbsp;&nbsp;&nbsp;What are you looking for ?"
                    required
                  />
                </div>
              </form>
              <form className="w-[30%] sd:w-full px-2 mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search Location
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center sd-3 pointer-events-none transition-all duration-500 ">
                  <img src="location.png" height={23} width={23} className="z-50"/>
                  </div>
                  <div className="relative">
                    <select
                      id="default-search"
                      className="block w-full p-4 sd-10 text-sm   border-b-2 border-t-0 border-r-0 border-l-0 border-gray-300 text-[#F84525] hover:ring-0 focus:border-[#F84525] focus:border-b-4 focus:ring-0 transition-all duration-500 "
                      required
                    >
                      <option value="hjjk"   >
                      &nbsp;&nbsp;&nbsp; Paris, Italy
                      </option>

                      <option value="dxfgyhbjk">
                      &nbsp;&nbsp;&nbsp;Ohio
                      </option>
                      <option value="ytfdcghbn">
                      &nbsp;&nbsp;&nbsp;London
                      </option>
                      <option value="jnm,m">&nbsp;&nbsp;&nbsp;London</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12l-6-6H4l6 6 6-6h-2l-6 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>
              <div className="w-[20%] sd:w-full p-3 mx-auto bg-[#F84525] text-center text-white rounded-3xl">
                Search Places
              </div>

            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
