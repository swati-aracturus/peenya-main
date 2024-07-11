import React, { useState } from "react";
import FAQ from "./F&Qs";

export const Sign_up = () => {
  const [Nav, setNav] = useState(false);

  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

 
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  return (
    <>
      {/* header */}
      <div className="fixed top-0 bg-white w-full z-50 ">
        <div className=" container  px-4 py-4 flex justify-start items-center  pm:hidden ">
          <div className="flex items-center lg:px-10">
            <img src="/brand.png" className="w-40"></img>
          </div>
          <div className="relative lg:flex lg:items-center pm:hidden">
            <nav className="ml-28 hidden lg:flex lg:items-center pm:hidden">
              <div className="nav-btn">
                <div className="nav-links">
                  <ul>
                    <li className="nav-link">
                      <a href="#">Home</a>
                    </li>
                    <li className="nav-link">
                      <a href="#">
                        Dashboard<i className="fas fa-caret-down"></i>
                      </a>
                      <div className="dropdown">
                        <ul>
                          <li className="dropdown-link">
                            <a href="#">Link 1</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Link 2</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">
                              Link 3<i className="fas fa-caret-down"></i>
                            </a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">Link 1</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Link 2</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Link 3</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">
                                    More<i className="fas fa-caret-down"></i>
                                  </a>
                                  <div className="dropdown second">
                                    <ul>
                                      <li className="dropdown-link">
                                        <a href="#">Link 1</a>
                                      </li>
                                      <li className="dropdown-link">
                                        <a href="#">Link 2</a>
                                      </li>
                                      <li className="dropdown-link">
                                        <a href="#">Link 3</a>
                                      </li>
                                      <div className="arrow"></div>
                                    </ul>
                                  </div>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Link 4</a>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-link">
                      <a href="#">
                        Listing<i className="fas fa-caret-down"></i>
                      </a>
                      <div className="dropdown">
                        <ul>
                          <li className="dropdown-link">
                            <a href="#">Link 1</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Link 2</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">
                              Link 3<i className="fas fa-caret-down"></i>
                            </a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">Link 1</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Link 2</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Link 3</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">
                                    More<i className="fas fa-caret-down"></i>
                                  </a>
                                  <div className="dropdown second">
                                    <ul>
                                      <li className="dropdown-link">
                                        <a href="#">Link 1</a>
                                      </li>
                                      <li className="dropdown-link">
                                        <a href="#">Link 2</a>
                                      </li>
                                      <li className="dropdown-link">
                                        <a href="#">Link 3</a>
                                      </li>
                                      <div className="arrow"></div>
                                    </ul>
                                  </div>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Link 4</a>
                          </li>
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-link">
                      <a href="#">Explore</a>
                    </li>
                    <li className="nav-link">
                      <a href="#">Template</a>
                    </li>
                    <li className="nav-link">
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="ml-40 relative">
                <i className="fa-solid fa-heart fa-lg"></i>
                <div className="px-2 py-1 text-xs bg-red-600 rounded-full flex justify-center items-center text-white absolute left-4 bottom-5">
                  0
                </div>
              </div>
              <div className="ml-6  ">
                <i className="fa-solid fa-user-plus fa-lg"></i>
              </div>

              <div className="ml-6">
                <i className="fa-solid fa-moon fa-lg"></i>
              </div>
              <div className="flex justify-start items-center ml-6">
                <button className="bg-red-500 px-4 py-2 rounded-3xl flex  gap-2">
                  <div className="bg-transparent rounded-full border border-white text-white w-6 ">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <p className="text-white">Add Listing</p>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="fixed top-0 bg-white w-full z-50 flex h-20 p-3  lg:hidden ">
        <nav className="flex justify-between items-center w-full ">
          <img src="/brand.png" className="w-28"></img>
          <div className="flex justify-center items-center list-none gap-2">
            <div className="ml-40 relative">
              <i class="fa-solid fa-heart fa-lg"></i>
              <div className="px-2 py-1 text-xs bg-red-600 rounded-full flex justify-center items-center text-white absolute left-4 bottom-5">
                0
              </div>
            </div>
            <div className="ml-2  ">
              <i class="fa-solid fa-user-plus fa-lg"></i>
            </div>

            <div className="ml-2">
              <i className="fa-solid fa-moon fa-lg"></i>
            </div>

            <div className="flex jus items-center">
              {" "}
              <button className="ml-2" onClick={() => setNav(!Nav)}>
                {Nav ? (
                  <i className="fas fa-times text-2xl"></i> // FontAwesome X icon
                ) : (
                  <i className="fas fa-bars text-2xl"></i> // FontAwesome bars icon
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out shadow-lg fixed w-full z-[999] top-20 ${
          Nav ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="bg-white shadow-lg p-4">
          <ul className="space-y-4">
            <li>
              <button
                className="flex justify-between w-full"
                onClick={() => toggleSubMenu(0)}
              >
                Home <i className="fas fa-chevron-down"></i>
              </button>
              {openSubMenu === 0 && (
                <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out">
                  <li>Home Item 1</li>
                  <li>Home Item 2</li>
                </ul>
              )}
            </li>
            <li>
              <button
                className="flex justify-between w-full"
                onClick={() => toggleSubMenu(1)}
              >
                Dashboard <i className="fas fa-chevron-down"></i>
              </button>
              {openSubMenu === 1 && (
                <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out">
                  <li>Overview</li>
                  <li>Stats</li>
                  <li>Reports</li>
                </ul>
              )}
            </li>
            <li>
              <button
                className="flex justify-between w-full"
                onClick={() => toggleSubMenu(2)}
              >
                Listing <i className="fas fa-chevron-down"></i>
              </button>
              {openSubMenu === 2 && (
                <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out">
                  <li>Active Listings</li>
                  <li>Pending Listings</li>
                  <li>Archived Listings</li>
                </ul>
              )}
            </li>
            <li>
              <button
                className="flex justify-between w-full"
                onClick={() => toggleSubMenu(3)}
              >
                Explore <i className="fas fa-chevron-down"></i>
              </button>
              {openSubMenu === 3 && (
                <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out">
                  <li>Explore Item 1</li>
                  <li>Explore Item 2</li>
                </ul>
              )}
            </li>
            <li>
              <button
                className="flex justify-between w-full"
                onClick={() => toggleSubMenu(4)}
              >
                Template <i className="fas fa-chevron-down"></i>
              </button>
              {openSubMenu === 4 && (
                <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out">
                  <li>Template 1</li>
                  <li>Template 2</li>
                  <li>Template 3</li>
                </ul>
              )}
            </li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full">
            Add Listing
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-[9rem] pm:mt-[7rem] px-3 flex mb-10">
        {/* left */}
        <div className="px-40 mb-6 w-1/2 pm:w-full pm:px-2 mx-auto ">
          <p className="text-[2rem] font-semibold pb-6 pm:text-center">
            {" "}
            Welcome back! Please <span className="text-red-600">
              Sign in
            </span>{" "}
            to continue.
          </p>
          <p className="pm:text-center">
            Unlock a world of exclusive content, enjoy special offers, and be
            the first to dive into exciting news and updates by joining our
            community!
          </p>
          <div className="mt-10 mb-6">
            <button className="flex justify-start items-center gap-5  w-full bg-black text-white rounded-lg px-6 py-2 mb-3">
              <i class="fa-brands fa-apple text-2xl"></i>
              <p>Sign in with Apple</p>
            </button>
            <button className="flex justify-start items-center gap-5 w-full bg-gray-100 text-black rounded-lg px-6 py-2">
              <i class="fa-brands fa-google text-2xl"></i>
              <p>Sign in with Google</p>
            </button>
          </div>
          <p>
            We won't post anything without your permission and your personal
            details are kept private
          </p>
          <div className="flex justify-start items-center gap-4 py-12">
            <div className="w-[40%] h-[1px] bg-gray-500"></div> <p className="font-semibold">Or</p>
            <div className="w-[40%] h-[1px] bg-gray-500"></div>
          </div>
          <div className="w-full mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="">
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Enter Email <span className="text-red-500">*</span>
                </label>
                <div className="">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="focus:outline-none"
                    >
                      {showPassword ? (
                        <svg
                          className="h-5 w-5 text-gray-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12h0M12 15h0m-2.208-2.208L9.757 12M9.757 12L8.879 11.122M9.757 12l2.12-2.122M9.757 12l.585-.585m1.036-1.036L12 9.172m-.622-.622L9.757 12m.878-.878l2.121-2.122m.636-.636L15 12h0m0 0H9M15 12a5 5 0 11-10 0 5 5 0 0110 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-gray-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A11.958 11.958 0 0112 19c-5.285 0-9.735-3.437-11.25-8.208A12.002 12.002 0 0112 4.857a12.002 12.002 0 0111.25 5.934c-.506 1.578-1.516 3.01-2.825 4.211M15 12a5 5 0 11-10 0 5 5 0 0110 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.879 12H15m4.121 0a11.978 11.978 0 01-2.121 3.879M9.879 12L4.121 6.121M15 12h0M9.879 12h.001"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 mb-1">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="focus:outline-none"
                    >
                      {showConfirmPassword ? (
                        <svg
                          className="h-5 w-5 text-gray-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12h0M12 15h0m-2.208-2.208L9.757 12M9.757 12L8.879 11.122M9.757 12l2.12-2.122M9.757 12l.585-.585m1.036-1.036L12 9.172m-.622-.622L9.757 12m.878-.878l2.121-2.122m.636-.636L15 12h0m0 0H9M15 12a5 5 0 11-10 0 5 5 0 0110 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-gray-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A11.958 11.958 0 0112 19c-5.285 0-9.735-3.437-11.25-8.208A12.002 12.002 0 0112 4.857a12.002 12.002 0 0111.25 5.934c-.506 1.578-1.516 3.01-2.825 4.211M15 12a5 5 0 11-10 0 5 5 0 0110 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.879 12H15m4.121 0a11.978 11.978 0 01-2.121 3.879M9.879 12L4.121 6.121M15 12h0M9.879 12h.001"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-start items-center gap-2">
                <input type="checkbox" className="rounded"></input>
                {/* <div className="flex gap-1"> */}
                  <p className="inline pm:text-[0.9rem]">By signing up, you agree to the <a href="#" className="underline">
                  terms of service
                  </a> </p>
                  
                {/* </div> */}
              </div>
              <button className="bg-red-600 w-full py-2 rounded-lg text-white">
                Sign Up
              </button>
                <div className="flex gap-1 pm:justify-center pm:items-center">
                  <p>Already have an account?</p>
                  <a href="#" className="underline">
                    Sign In
                  </a>
                </div>
            </form>
          </div>
        </div>

        {/* right */}
        <div className="bg-gray-100 flex  flex-col justify-center items-center pm:hidden mr-7 rounded-2xl w-1/2">
          <div className="mx-10 flex  flex-col justify-center items-center gap-8 ">
            <p className="text-[1.9rem] font-semibold text-center">
              {" "}
              Effortlessly organize your <br/> workspace with ease.
            </p>
            <p className="text-center">
              It is a long established fact that a reader will be distracted by
              the readable
              <br />
              content of a page when looking at its layout.
            </p>
            <div className="flex justify-center items-center">
              <img src="/07.jpg" className="h-[40rem]"></img>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bg-[#191e25] lg:px-40 pm:px-5 lg:pt-36 pm:pt-20 pb-2">
        <div className="bg-[#f84525] w-full lg:h-48 pm:h-[36rem] relative lg:px-32 pm:px-4 rounded-2xl pm:flex pm:flex-col pm:justify-start pm:items-center ">
          <img
            src={process.env.PUBLIC_URL + "/07.jpg"}
            className="absolute bottom-0 lg:w-[16rem] lg:h-[17rem] pm:w-52 pm:h-44  "
          ></img>
          <div className="lg:absolute lg:left-[33%] lg:py-11 lg:w-[30%] pm:flex pm:flex-col pm:justify-center pm:items-center pm:mt-12">
            <h1 className="text-2xl text-white  font-semibold mb-3  ">
              Download Our App
            </h1>
            <p className="text-lg text-white ">
              It is a long established fact that a reader will be distracted by
              the readable content.
            </p>
          </div>
          <div className="lg:flex lg:absolute lg:right-20 gap-3 py-16 text-white ">
            <button className="w-48 h-16 border border-white rounded-lg flex px-4 py-2 items-center pm:mb-4">
              <i className="fa-brands fa-apple text-3xl"></i>
              <p className="text-sm">
                Available on the <span className="text-xl">App Store</span>
              </p>
            </button>
            <button className="w-48 h-16 border border-white rounded-lg flex px-4 py-2 items-center">
              <i className="fa-brands fa-google-play text-3xl"></i>
              <p className="text-sm">
                Available on the <span className="text-xl">App Store</span>
              </p>
            </button>
          </div>
        </div>
        <hr className="mt-16 border-gray-500"></hr>
        <div className="flex pm:flex-col justify-between gap-20 items-start text-white lg:py-14 pm:mt-8 ">
          <div className="lg:w-1/3">
            <h1 className="text-2xl text-white font-semibold mb-8">
              Get In Touch
            </h1>
            <p className="mb-8">
              Join our newsletter and receive the best job openings of the week,
              right on your inbox.
            </p>
            <div className="w-[25rem] h-32 border border-gray-700 rounded-2xl p-10 mb-8">
              <p className="text-xl text-gray-500 mb-2">Join our Whatapp:</p>
              <i className="fa-brands fa-whatsapp text-2xl"> (123) 456-7890</i>
            </div>
            <h3 className="text-xl font-semibold lg:mb-8 pm:mb-1">
              Want to join ListOn? <br /> Write us !
            </h3>
            <p>support@ListOn.com</p>
          </div>
          <hr className="lg:border border-gray-500 lg:h-[27rem] pm:h-[0rem]"></hr>
          <div className="lg:w-1/3 pm:-mt-28">
            <h2 className="text-2xl font-semibold mb-8">Stay Connect</h2>
            <p className="mb-8 text-lg">
              1123 Fictional St, San Francisco, CA 94103
            </p>
            <div className="flex flex-col ">
              <div>
                <i className="fa-solid fa-phone text mr-2"> </i> (123) 456-7890
              </div>{" "}
              <br />
              <div>
                <i className="fa-solid fa-envelope text mr-2"> </i>
                support@ListOn.com
              </div>
            </div>
          </div>
          <hr className="lg:border border-gray-500 lg:h-[27rem]"></hr>

          <div>
            <div>
              <h1 className="mb-8 text-2xl font-semibold pm:-mt-20">
                Get In Touch
              </h1>
              <div className="relative w-[25rem]  h-16 ">
                <input
                  type="text"
                  placeholder="name@example.com"
                  className="bg-[#191e25] w-full h-16 rounded-full pl-8 pr-16"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#f84525] w-10 h-10 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-chevron-right text-white"></i>
                </div>
              </div>
            </div>
            <hr className="my-8 border-gray-500"></hr>
            <div>
              <h2 className="mb-8 text-2xl font-semibold">
                Follow the Location
              </h2>
              <div className="flex justify-start items-center gap-2">
                <div className="w-12 h-12 bg-gray-600 flex justify-center items-center rounded-full">
                  <i className="fa-brands fa-instagram fa-xl"></i>
                </div>
                <div className="w-12 h-12 bg-gray-600 flex justify-center items-center rounded-full">
                  <i className="fa-brands fa-twitter fa-xl"></i>
                </div>
                <div className="w-12 h-12 bg-gray-600 flex justify-center items-center rounded-full">
                  <i className="fa-brands fa-dribbble fa-xl"></i>
                </div>
                <div className="w-12 h-12 bg-gray-600 flex justify-center items-center rounded-full">
                  <i className="fa-brands fa-facebook-f fa-xl"></i>
                </div>
                <div className="w-12 h-12 bg-gray-600 flex justify-center items-center rounded-full">
                  <i className="fa-brands fa-whatsapp fa-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-6 mb-6 border-gray-500"></hr>
        <div className="flex pm:flex-col justify-between items-center">
          <div className="flex pm:flex-col justify-center pm:items-start items-center gap-4">
            <img
              src={process.env.PUBLIC_URL + "/brand.png"}
              className="w-40"
            ></img>
            <hr className="lg:border border-gray-500 h-10 mx-4"></hr>
            <p className="text-white text-lg pm:-mt-12">
              © 2022 ListOn - All Rights Reserved- All Rights Reserved
            </p>
          </div>
          <div className="text-gray-500 flex justify-start items-center  gap-3 text-lg">
            <a href="">Priavcy</a>
            <p>/</p>
            <a href="">Sitemap</a>
            <p>/</p>
            <a href="">Cookies</a>
          </div>
        </div>
      </div>
    </>
  );
};
