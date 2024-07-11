import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [Nav, setNav] = useState(false);
  const [profile, setProfile] = useState(false);


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




  // const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div className="bg-[#f8f4f3] container mx-auto px-4 py-4 flex justify-start items-center z-[888] pm:hidden ">
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 focus:outline-none  bg-[#f84525] px-3 py-3 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="relative lg:flex lg:items-center pm:hidden">
          <form
            className={`relative ${searchOpen ? "block" : "hidden"} lg:block`}
            onFocus={() => setSearchOpen(true)}
            onBlur={() => setSearchOpen(false)}
          >
            <input
              type="text"
              className={`${sidebarOpen ? 'w-60' : 'w-68'} border rounded-lg py-2 px-4    ml-6`}
              placeholder="Search (Ctrl+/)"
            />
          </form>
          <nav className={`${sidebarOpen ? 'ml-4' : 'ml-28'} hidden lg:flex lg:items-center pm:hidden`}>
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

            <div className={`${sidebarOpen ? 'ml-0' : 'ml-28' } bg-white px-4 py-3 rounded-lg`}>
              <i className="fa-regular fa-square fa-lg"></i>
            </div>
            <div className="ml-2 bg-white px-4 py-3 rounded-lg">
              <i className="fa-solid fa-moon fa-lg"></i>
            </div>
            <div className="flex justify-start items-center ml-2">
              <div className=" rounded-full w-10 h-10">
                <img src="/acc.png" className="w-full"></img>
              </div>
              <p className="text-sm">
                Naeem Khan <br />{" "}
                <span className="text-xs text-gray-500">example@gmail.com</span>
              </p>
            </div>
          </nav>
          
        </div>
      </div>








      <div
        className={`${
          sidebarOpen && "pm:inset-0 pm:bg-black pm:bg-opacity-50 pm:z-0"
        } bg-[#f8f4f3] flex h-20 p-3 ml-28 lg:hidden pm:w-full`}
      >
        <nav className="flex justify-between items-center w-full ">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 focus:outline-none  bg-[#f84525] px-2 rounded-full w-10 h-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex justify-center items-center list-none gap-2">
            <div className="ml-40 bg-white px-4 py-3 rounded-lg">
              <i className="fa-regular fa-square fa-lg"></i>
            </div>
            <div className="ml-2 bg-white px-4 py-3 rounded-lg">
              <i className="fa-solid fa-moon fa-lg"></i>
            </div>
            <div className="flex justify-start items-center ml-2">
              <div className=" rounded-full w-10 h-10">
                <img src="/acc.png" className="w-full" onClick={() => setProfile(!profile)}></img>
              </div>
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
        className={`transition-all duration-300 ease-in-out shadow-lg fixed w-full top-20 left-0 lg:hidden ${
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
    


{profile  && 
<div className="bg-white w-[65%] ml-40 p-4 rounded-xl border-2 shadow-lg relative">

 <div className="flex justify-center items-center ">
 <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 lg:hidden absolute top-3 right-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setProfile(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      <div className="flex flex-col justify-center items-center">
        <img src="/acc.png" className="w-20"></img>
        <h1>Naeem Khan </h1>
        <p>example@gmail.com</p>
      </div>
      
 </div>

 <div className="mt-8">
      <div className="flex justify-start items-center ml-3 mt-2 text-gray-500 gap-3 mb-2"><i class="fa-solid fa-user"></i><p>My Profile</p></div>
      <hr/>
      <div className="flex justify-start items-center ml-3 mt-2 text-gray-500 gap-3 mb-2"><i class="fa-solid fa-pen"></i><p>Edit Profile</p></div>
      <hr/>
      <div className="flex justify-start items-center ml-3 mt-2 text-gray-500 gap-3 mb-2"><i class="fa-solid fa-arrow-down-up-across-line"></i><p>Activity Logs</p></div>
      <hr/>
      <div className="flex justify-start items-center ml-3 mt-2 text-gray-500 gap-3 mb-2"><i className="fa-solid fa-gear "></i><p>Account Settings</p></div>
      <hr/>
      <div className="flex justify-start items-center ml-3 mt-2 text-gray-500 gap-3 mb-2  "><i className="fa-solid fa-right-from-bracket "></i><p>Sign out</p></div>
 </div>

</div>


}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
    </>
  );
};

export default Header;
