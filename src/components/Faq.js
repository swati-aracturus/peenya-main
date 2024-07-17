import React, { useState } from "react";
import FAQ from "./F&Qs";

export const Faq = () => {
  const [Nav, setNav] = useState(false);

  const [openSubMenu, setOpenSubMenu] = useState(null); 
  const [openNestedSubMenu, setOpenNestedSubMenu] = useState(null); 

  // Function to toggle main menu items
  const toggleSubMenu = (index) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null); 
    } else {
      setOpenSubMenu(index); 
      setOpenNestedSubMenu(null); 
    }
  };

  // Function to toggle nested sub-menus
  const toggleNestedSubMenu = (index) => {
    if (openNestedSubMenu === index) {
      setOpenNestedSubMenu(null); 
    } else {
      setOpenNestedSubMenu(index); 
    }
  };



  return (
    <>
      {/* Header */}
      <div className="fixed top-0 bg-white w-full z-50">
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
                            <a href="/dashboard">Dasboard</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Bookings</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">
                              Message
                            </a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Wallet</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Edit Profile</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="/listing2">Add Listing</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">My Listing</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Reviews</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Bookmark</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Settings</a>
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
                            <a href="#">List View<i className="fas fa-caret-down"></i></a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">Left Sidebar</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Right Sidebar</a>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Grid View 1<i className="fas fa-caret-down"></i></a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="/listing-grid">Left Sidebar</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Right Sidebar</a>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">
                            Grid View 2<i className="fas fa-caret-down"></i>
                            </a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">Left Sidebar</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Right Sidebar</a>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Half Map + Sidebar<i className="fas fa-caret-down"></i></a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">Half Map List</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Half Map List (Car)</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Half Map Grid 1</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Half Map Grid 2</a>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li><li className="dropdown-link">
                            <a href="#">Listing Details<i className="fas fa-caret-down"></i></a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">Listing Deatils 1</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Listing Deatils 2</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Listing Deatils Car</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-link">
                      <a href="#">Explore</a>
                    </li>
                    <li className="nav-link">
                      <a href="#">
                        Template<i className="fas fa-caret-down"></i>
                      </a>
                      <div className="dropdown">
                        <ul>
                          <li className="dropdown-link">
                            <a href="#">About <i className="fas fa-caret-down"></i></a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">About us 1</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">About us 2</a>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Agent<i className="fas fa-caret-down"></i></a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">Agent</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Agent Deatils</a>
                                </li>
                                <div className="arrow"></div>
                              </ul>
                            </div>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">
                            Blog<i className="fas fa-caret-down"></i>
                            </a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">Blog</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Blog Details</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="dropdown-link">
                            <a href="/listing">Add Listing </a>
                          </li>
                          <li className="dropdown-link">
                            <a href="/contact">Contact</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="/pricing">Pricing</a>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Authentication<i className="fas fa-caret-down"></i></a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="sign-in">Sign In</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="sign-up">Sign Up</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Forgot Password</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Two Factor Authentication</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Speciality<i className="fas fa-caret-down"></i></a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">404 Page</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Help Center<i className="fas fa-caret-down"></i></a>
                            <div className="dropdown second">
                              <ul>
                                <li className="dropdown-link">
                                  <a href="#">Faq Page</a>
                                </li>
                                <li className="dropdown-link">
                                  <a href="#">Terms and Conditions</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="dropdown-link">
                            <a href="#">Study Guide</a>
                          </li>
                        </ul>
                      </div>
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
              <i className="fa-solid fa-heart fa-lg"></i>
              <div className="px-2 py-1 text-xs bg-red-600 rounded-full flex justify-center items-center text-white absolute left-4 bottom-5">
                0
              </div>
            </div>
            <div className="ml-2  ">
              <i className="fa-solid fa-user-plus fa-lg"></i>
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
        className={`transition-all duration-300 ease-in-out shadow-lg fixed w-full z-[999] top-20 lg:hidden ${
          Nav ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="bg-white shadow-lg p-4">
          <ul className="space-y-4">
            <li className="bg-[#f8f4f3] px-3 py-2 rounded-lg">
              <button
                className="flex justify-between w-full"
                onClick={() => toggleSubMenu(0)}
              >
                Home <i className="fas fa-chevron-down"></i>
              </button>
              {openSubMenu === 0 && (
                <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out text-sm">
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg"><a href="#">Home Item 1</a></li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg"><a href="#">Home Item 2</a></li>
                </ul>
              )}
            </li>
            <li className="bg-[#f8f4f3] px-3 py-2 rounded-lg">
              <button
                className="flex justify-between w-full"
                onClick={() => toggleSubMenu(1)}
              >
                Dashboard <i className="fas fa-chevron-down"></i>
              </button>
              {openSubMenu === 1 && (
                <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out text-sm">
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg"><a href="/dashboard">Dashboard</a></li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg"><a href="#">Bookings</a></li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg"><a href="#">Message</a></li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg"><a href="#">Wallet</a></li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg"><a href="#">Edit Profile</a></li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg"><a href="/listing2">Add Listing</a></li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg"><a href="#">My Listing</a></li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg"><a href="#">Reviews</a></li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg"><a href="#">Bookmark</a></li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg"><a href="#">Settings</a></li>
                </ul>
              )}
            </li>
            <li className="bg-[#f8f4f3] px-3 py-2 rounded-lg">
              <button
                className="flex justify-between w-full"
                onClick={() => toggleSubMenu(2)}
              >
                Listing <i className="fas fa-chevron-down"></i>
              </button>
              {openSubMenu === 2 && (
                <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out">
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg">
                    <button
                      className="flex justify-between w-full text-sm"
                      onClick={() => toggleNestedSubMenu(3)}
                    >
                      List View <i className="fas fa-chevron-down"></i>
                    </button>
                    {openNestedSubMenu === 3 && (
                      <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out text-xs">
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg" ><a href="#">Left Sidebar</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg" ><a href="#">Right Sidebar</a></li>
                      </ul>
                    )}
                  </li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg">
                    <button
                      className="flex justify-between w-full text-sm"
                      onClick={() => toggleNestedSubMenu(4)}
                    >
                      Grid View 1 <i className="fas fa-chevron-down"></i>
                    </button>
                    {openNestedSubMenu === 4 && (
                      <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out text-xs">
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="/listing-grid">Left Sidebar</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Right Sidebar</a></li>
                      </ul>
                    )}
                  </li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg">
                    <button
                      className="flex justify-between w-full text-sm"
                      onClick={() => toggleNestedSubMenu(5)}
                    >
                      Grid View 2 <i className="fas fa-chevron-down"></i>
                    </button>
                    {openNestedSubMenu === 5 && (
                      <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out text-xs">
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Left Sidebar</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Right Sidebar</a></li>
                      </ul>
                    )}
                  </li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg">
                    <button
                      className="flex justify-between w-full text-sm"
                      onClick={() => toggleNestedSubMenu(6)}
                    >
                      Half Map + Sidebar <i className="fas fa-chevron-down"></i>
                    </button>
                    {openNestedSubMenu === 6 && (
                      <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out text-xs">
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Half Map List</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Half Map List (Car)</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Half Map Grid 1</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Half Map Grid 2</a></li>
                      </ul>
                    )}
                  </li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg">
                    <button
                      className="flex justify-between w-full text-sm"
                      onClick={() => toggleNestedSubMenu(7)}
                    >
                      Listing Details <i className="fas fa-chevron-down"></i>
                    </button>
                    {openNestedSubMenu === 7 && (
                      <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out text-xs">
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Listing Details 1</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Listing Details 2</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Listing Details Car</a></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li className="bg-[#f8f4f3] px-3 py-2 rounded-lg">
              <button
                className="flex justify-between w-full"
                onClick={() => toggleSubMenu(8)}
              >
                Explore <i className="fas fa-chevron-down"></i>
              </button>
              {openSubMenu === 8 && (
                <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out text-sm">
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg"><a href="#">Explore Item 1</a></li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg"><a href="#">Explore Item 2</a></li>
                </ul>
              )}
            </li>
            <li className="bg-[#f8f4f3] px-3 py-2 rounded-lg">
              <button
                className="flex justify-between w-full"
                onClick={() => toggleSubMenu(9)}
              >
                Template <i className="fas fa-chevron-down"></i>
              </button>
              {openSubMenu === 9 && (
                <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out">
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg">
                    <button
                      className="flex justify-between w-full text-sm"
                      onClick={() => toggleNestedSubMenu(10)}
                    >
                      About <i className="fas fa-chevron-down"></i>
                    </button>
                    {openNestedSubMenu === 10 && (
                      <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out text-xs">
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">About us 1</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">About us 2</a></li>
                      </ul>
                    )}
                  </li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg ">
                    <button
                      className="flex justify-between w-full text-sm"
                      onClick={() => toggleNestedSubMenu(11)}
                    >
                      Agent <i className="fas fa-chevron-down"></i>
                    </button>
                    {openNestedSubMenu === 11 && (
                      <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out text-xs">
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Agent</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Agent Details</a></li>
                      </ul>
                    )}
                  </li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg">
                    <button
                      className="flex justify-between w-full text-sm"
                      onClick={() => toggleNestedSubMenu(12)}
                    >
                      Blog <i className="fas fa-chevron-down"></i>
                    </button>
                    {openNestedSubMenu === 12 && (
                      <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out text-xs">
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Blog</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Blog Details</a></li>
                      </ul>
                    )}
                  </li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg text-sm"><a href="/listing">Add Listing </a></li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg text-sm"><a href="/contact">Contact</a></li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg text-sm"><a href="/pricing">Pricing</a></li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg text-sm">
                    <button
                      className="flex justify-between w-full text-sm"
                      onClick={() => toggleNestedSubMenu(13)}
                    >
                      Authentication <i className="fas fa-chevron-down"></i>
                    </button>
                    {openNestedSubMenu === 13 && (
                      <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out text-xs">
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="/login">Login</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="/register">Register</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="/forgot-password">Forgot Password</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="/reset-password">Reset Password</a></li>
                      </ul>
                    )}
                  </li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg text-sm">
                    <button
                      className="flex justify-between w-full"
                      onClick={() => toggleNestedSubMenu(14)}
                    >
                      Speciality <i className="fas fa-chevron-down"></i>
                    </button>
                    {openNestedSubMenu === 14 && (
                      <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out text-xs">
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">404 Page</a></li>
                      </ul>
                    )}
                  </li>
                  <li className="bg-[#e7cbc4] px-3 py-2 rounded-lg">
                    <button
                      className="flex justify-between w-full text-sm"
                      onClick={() => toggleNestedSubMenu(15)}
                    >
                      Help Center <i className="fas fa-chevron-down"></i>
                    </button>
                    {openNestedSubMenu === 15 && (
                      <ul className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out text-xs">
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Faq Page</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Terms & Conditions</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Icons</a></li>
                        <li className="bg-[#ddac9f] px-3 py-2 rounded-lg"><a href="#">Tables</a></li>
                      </ul>
                    )}
                  </li>
                  <li><a href="/listing">Study Guide </a></li>
                </ul>
              )}
            </li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-xl w-full">
            Add Listing
          </button>
        </div>
      </div>
    

      {/* Main div */}
      <div className="mt-[6rem] pm:mt-[7rem] mx-6 pm:mx-3">
      <div
      className="relative w-full h-[24rem] overflow-hidden bg-cover bg-center rounded-3xl px-32 py-20 pm:h-[30rem] pm:px-4 bg-black pm:pb-8"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/07.jpg"})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
      <div className="relative flex flex-col justify-center items-center text-white gap-5 lg:px-64  ">
        <button className="bg-red-600  px-6 py-1 rounded-3xl">FAQ</button>
        <p className="text-[3rem] text-center">Frequently Asked <span className=""> Questions</span></p>
        <p className="text-center">Many desktop publishing packages and web page editors now use Lorem Ipsum as their
        default model text, and a search for 'lorem ipsum' will uncover many.</p>
      </div>
    </div>

        <div className="mx-1 ">
          <div className="rounded-3xl px-32 pb-20 pm:px-2">
            <div className="pt-20 pb-12">
                <div className="px-48 mt-16 pm:px-1">
                <FAQ/>
                </div>
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
                It is a long established fact that a reader will be distracted
                by the readable content.
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
                Join our newsletter and receive the best job openings of the
                week, right on your inbox.
              </p>
              <div className="w-[25rem] h-32 border border-gray-700 rounded-2xl p-10 mb-8">
                <p className="text-xl text-gray-500 mb-2">Join our Whatapp:</p>
                <i className="fa-brands fa-whatsapp text-2xl">
                  {" "}
                  (123) 456-7890
                </i>
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
                  <i className="fa-solid fa-phone text mr-2"> </i> (123)
                  456-7890
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
