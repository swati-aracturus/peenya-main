import React, { useState } from "react";

export const Listings_grid = () => {
  // const Header = ({ sidebarOpen, setSidebarOpen }) => {
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

  //   selecte options with search bar
  const [searchTerm1, setSearchTerm1] = useState("");
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);

  const [searchTerm2, setSearchTerm2] = useState("");
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const options1 = [
    "Select Location",
    "It & Development",
    "Web & Mobile Dev",
    "Writing",
    "Sales & Marketing",
    "Music & Audio",
  ];

  const options2 = [
    "Accounting",
    "Finance",
    "Engineering",
    "Healthcare",
    "Legal",
    "Education",
  ];

  const filteredOptions1 = options1.filter((option) =>
    option.toLowerCase().includes(searchTerm1.toLowerCase())
  );

  const filteredOptions2 = options2.filter((option) =>
    option.toLowerCase().includes(searchTerm2.toLowerCase())
  );

  const handleInputChange1 = (e) => {
    setSearchTerm1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setSearchTerm2(e.target.value);
  };

  const handleOptionClick1 = (option) => {
    setSelectedOption1(option);
    setIsOpen1(false);
    setSearchTerm1("");
  };

  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
    setIsOpen2(false);
    setSearchTerm2("");
  };

  // price range
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(4000);
  const min = 0;
  const max = 5000;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 100);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 100);
    setMaxValue(value);
  };

  // sidebar
  const [isOpendiv, setIsOpenDiv] = useState(false);

  const toggleDiv = () => {
    setIsOpenDiv(!isOpendiv);
  };


  return (
    <>
      {/* Header */}
      <div className="fixed top-0 bg-white w-full z-50 ">
        <div className=" container  px-4 py-4 flex justify-start items-center  pm:hidden ">
          <div className="flex items-center lg:px-10">
            <img src="/brand.png" className="w-40"></img>
          </div>
          <div className="relative lg:flex lg:items-center pm:hidden">
            <nav className="ml-28 hidden lg:flex lg:items-center pm:hidden z-[999]">
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
                <i class="fa-solid fa-heart fa-lg"></i>
                <div className="px-2 py-1 text-xs bg-red-600 rounded-full flex justify-center items-center text-white absolute left-4 bottom-5">
                  0
                </div>
              </div>
              <div className="ml-6  ">
                <i class="fa-solid fa-user-plus fa-lg"></i>
              </div>

              <div className="ml-6">
                <i className="fa-solid fa-moon fa-lg"></i>
              </div>
              <div className="flex justify-start items-center ml-6">
                <button className="bg-red-500 px-4 py-2 rounded-3xl flex  gap-2">
                  <div className="bg-transparent rounded-full border border-white text-white w-6 ">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                  <p className="text-white">Add Listing</p>
                </button>
              </div>
            </nav>
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
                <button
                className="ml-2"
                onClick={() => setNav(!Nav)}
              >
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
    


        <div className="flex justify-center items-center w-full mt-3 pm:fixed pm:top-[4.2rem] py-4 fixed bg-white z-50 lg:hidden border-t-2 pb-4">
          <p className="text-2xl font-semibold">
            Find What <br />
            you <span className="text-red-500">want</span>
          </p>
        </div>

        <div className="bg-white  lg:border flex pm:fixed pm:top-44 pm:w-full pm:z-50">
          <div className="lg:w-1/2 flex justify-start pm:justify-between items-center lg:border-r-2 px-4 py-4 pm:py-2 pm:w-[24rem] pm:border-2 pm:ml-5  pm:rounded-3xl">
            <div className="flex ">
              <i class="fa-solid fa-map-location-dot text-xl"></i>
              <input
                className="ml-3 pm:ml-1 w-[32rem] py-2 px-2 text-sm focus:ring-0 pm:w-40"
                placeholder="What are you looking for?"
              ></input>
            </div>
            <div className="flex gap-4 justify-start items-center">
              <select class="border-0">
                <option value="brazil">0.5 Km</option>
                <option value="bucharest">1 Km</option>
                <option value="london">5 Km</option>
                <option value="washington">10 Km</option>
              </select>
              <i class="fa-solid fa-location-crosshairs text-2xl text-gray-500"></i>
            </div>
          </div>

          <div className="lg:hidden w-full fixed top-[14.7rem] bg-white flex justify-center items-center gap-3 py-3">
            <div
              className="flex justify-center items-center gap-2 border-r-2 px-3"
              onClick={toggleDiv}
            >
              <i class="fa-solid fa-arrow-up-wide-short"></i>
              <p>All filters</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i class="fa-solid fa-map-location-dot text-xl"></i>
              <p>Map</p>
            </div>
          </div>

          {/* sidebar */}
          <div
            className={`lg:hidden fixed top-0 right-0 w-full h-full bg-white shadow-lg z-[999] transform transition-transform duration-300 ease-in-out ${
              isOpendiv ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center px-4 py-3">
              <button onClick={toggleDiv} className="text-3xl text-gray-700 ">
                &times;
              </button>
              <p className="text-2xl">Filters</p>
              <p className="text-red-500">Clear</p>
            </div>
            <hr />
            <div className="">
              <div className="lg:hidden sticky top-0 h-full  p-4 ">
                <div className=" pr-10 shadow-xl px-5 sticky w-full">
                  <h1 className="text-xl mb-1">Price Filter</h1>
                  <p className="text-gray-500 text-sm mb-4">
                    Select min and max price range
                  </p>
                  <div className="w-full mt-3 mb-6">
                    {/* price */}
                    <div className="w-full max-w-md mx-auto py-20">
                <div className="relative">
                  <input
                    type="range"
                    min={min}
                    max={max}
                    value={minValue}
                    onChange={handleMinChange}
                    className="absolute z-20 w-full h-1 appearance-none bg-transparent pointer-events-auto"
                  />
                  <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxValue}
                    onChange={handleMaxChange}
                    className="absolute z-20 w-full h-1 appearance-none bg-transparent pointer-events-auto"
                  />
                  <div className="relative w-full h-1 bg-gray-300">
                    <div
                      className="absolute h-1 bg-blue-500"
                      style={{
                        left: `${(minValue / max) * 100}%`,
                        right: `${100 - (maxValue / max) * 100}%`,
                      }}
                    ></div>
                    <div
                      className="absolute w-4 h-4 rounded-full -mt-1 -ml-2 cursor-pointer"
                      style={{ left: `${(minValue / max) * 100}%` }}
                    ></div>
                    <div
                      className="absolute w-4 h-4 rounded-full -mt-1 -ml-2 cursor-pointer"
                      style={{ left: `${(maxValue / max) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <label
                      htmlFor="minValue"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Min Value
                    </label>
                    <input
                      type="number"
                      id="minValue"
                      value={minValue}
                      onChange={handleMinChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="maxValue"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Max Value
                    </label>
                    <input
                      type="number"
                      id="maxValue"
                      value={maxValue}
                      onChange={handleMaxChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
                    
                  </div>
                  <hr />
                  <div className="my-4 ">
                    <h1 className="text-xl mb-1">Categories</h1>
                    <p className="text-sm text-gray-500">
                      Duis a leo sit amet odio volutpat auctor ut a lorem.
                    </p>
                    <div className="flex flex-col items-start mt-3 gap-2">
                      <div className="flex justify-center items-center">
                        <input
                          id="garden"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          for="garden"
                          className="ml-2 block  text-gray-900"
                        >
                          Eat & Drink{" "}
                          <span className="text-sm text-gray-500">(62)</span>
                        </label>
                      </div>
                      <div className="flex justify-center items-center">
                        <input
                          id="garden"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          for="garden"
                          className="ml-2 block  text-gray-900"
                        >
                          Coaching{" "}
                          <span className="text-sm text-gray-500">(31)</span>
                        </label>
                      </div>
                      <div className="flex justify-center items-center">
                        <input
                          id="garden"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          for="garden"
                          className="ml-2 block  text-gray-900"
                        >
                          Apartments{" "}
                          <span className="text-sm text-gray-500">(20)</span>
                        </label>
                      </div>
                      <div className="flex justify-center items-center">
                        <input
                          id="garden"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          for="garden"
                          className="ml-2 block  text-gray-900"
                        >
                          Services{" "}
                          <span className="text-sm text-gray-500">(43)</span>
                        </label>
                      </div>
                      <div className="flex justify-center items-center">
                        <input
                          id="garden"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          for="garden"
                          className="ml-2 block  text-gray-900"
                        >
                          Classifieds{" "}
                          <span className="text-sm text-gray-500">(16)</span>
                        </label>
                      </div>
                      <div className="flex justify-center items-center">
                        <input
                          id="garden"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          for="garden"
                          className="ml-2 block  text-gray-900"
                        >
                          Fitness{" "}
                          <span className="text-sm text-gray-500">(22)</span>
                        </label>
                      </div>
                      <div className="flex justify-center items-center">
                        <input
                          id="garden"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          for="garden"
                          className="ml-2 block  text-gray-900"
                        >
                          Events{" "}
                          <span className="text-sm text-gray-500">(21)</span>
                        </label>
                      </div>
                      <div className="flex justify-center items-center">
                        <input
                          id="garden"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          for="garden"
                          className="ml-2 block  text-gray-900"
                        >
                          Other{" "}
                          <span className="text-sm text-gray-500">(17)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <h1 className="text-xl mb-1 mt-4">Order by</h1>
                    <p className="text-sm text-gray-500">
                      Duis a leo sit amet odio volutpat auctor ut a lorem.
                    </p>
                    <select className="text-gray-400 rounded-lg mt-4 mb-4 w-full">
                      <option value="Latest">Latest</option>
                      <option value="Nearby">Nearby</option>
                      <option value="Top Rated">Top Rated</option>
                      <option value="Random">Random</option>
                      <option value="A - Z">A - Z</option>
                    </select>
                  </div>
                  <hr />
                  <div className="mt-4">
                    <button className="bg-orange-500 text-white px-8 w-full py-2 rounded-lg">
                      Apply Filter
                    </button>
                    <button className="border-0 flex items-center justify-center gap-2 w-full py-2 px-8 ">
                      <i class="fa-solid fa-rotate-right"></i>
                      <p>Clear Filter</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 flex justify-start items-center gap-3 border-r-2 w-full pm:hidden z-0">
            <i class="fa-solid fa-location-dot text-2xl"></i>
            <div className="flex gap-4">
              <div className="relative w-60">
                <div
                  className="flex items-center cursor-pointer p-2 bg-white rounded-lg border-0 z-0 "
                  onClick={() => setIsOpen1(!isOpen1)}
                >
                  <span className="flex-1 text-gray-500 text-sm">
                    {selectedOption1 || "Select Location"}
                  </span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                {isOpen1 && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg ">
                    <input
                      type="text"
                      value={searchTerm1}
                      onChange={handleInputChange1}
                      className="w-full p-2 border-b border-gray-300 outline-none"
                      placeholder="Search..."
                    />
                    <ul className="max-h-48 overflow-y-auto">
                      {filteredOptions1.map((option) => (
                        <li
                          key={option}
                          className="p-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => handleOptionClick1(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="px-4 py-4 flex justify-start items-center gap-3 pm:hidden">
            <i class="fa-solid fa-layer-group text-2xl"></i>
            <div className="relative w-60">
              <div
                className="flex items-center cursor-pointer p-2 bg-white border-0 rounded-lg"
                onClick={() => setIsOpen2(!isOpen2)}
              >
                <span className="flex-1 text-gray-500 text-sm">
                  {selectedOption2 || "All Categories"}
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              {isOpen2 && (
                <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  <input
                    type="text"
                    value={searchTerm2}
                    onChange={handleInputChange2}
                    className="w-full p-2 border-b border-gray-300 outline-none"
                    placeholder="Search..."
                  />
                  <ul className="max-h-48 overflow-y-auto">
                    {filteredOptions2.map((option) => (
                      <li
                        key={option}
                        className="p-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleOptionClick2(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        
        
      </div>

      {/* Main content */}
      <div className="w-full lg:px-32 py-16 pt-60 flex bg-[#f8f4f3] ">
        {/* left side  */}
        <div className="w-[25%] sticky top-0 h-screen overflow-y-auto  p-4 pm:hidden">
          <div className=" pr-10 shadow-xl px-5 sticky w-full">
            <h1 className="text-xl mb-1">Price Filter</h1>
            <p className="text-gray-500 text-sm mb-4">
              Select min and max price range
            </p>
            <div className="w-full mb-6">
              {/* Price range  bar */}

              <div className="w-full max-w-md mx-auto py-20">
                <div className="relative">
                  <input
                    type="range"
                    min={min}
                    max={max}
                    value={minValue}
                    onChange={handleMinChange}
                    className="absolute z-20 w-full h-1 appearance-none bg-transparent pointer-events-auto"
                  />
                  <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxValue}
                    onChange={handleMaxChange}
                    className="absolute z-20 w-full h-1 appearance-none bg-transparent pointer-events-auto"
                  />
                  <div className="relative w-full h-1 bg-gray-300">
                    <div
                      className="absolute h-1 bg-blue-500"
                      style={{
                        left: `${(minValue / max) * 100}%`,
                        right: `${100 - (maxValue / max) * 100}%`,
                      }}
                    ></div>
                    <div
                      className="absolute w-4 h-4 rounded-full -mt-1 -ml-2 cursor-pointer"
                      style={{ left: `${(minValue / max) * 100}%` }}
                    ></div>
                    <div
                      className="absolute w-4 h-4 rounded-full -mt-1 -ml-2 cursor-pointer"
                      style={{ left: `${(maxValue / max) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <label
                      htmlFor="minValue"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Min Value
                    </label>
                    <input
                      type="number"
                      id="minValue"
                      value={minValue}
                      onChange={handleMinChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="maxValue"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Max Value
                    </label>
                    <input
                      type="number"
                      id="maxValue"
                      value={maxValue}
                      onChange={handleMaxChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

            </div>
            <hr />
            <div className="my-4 ">
              <h1 className="text-xl mb-1">Categories</h1>
              <p className="text-sm text-gray-500">
                Duis a leo sit amet odio volutpat auctor ut a lorem.
              </p>
              <div className="flex flex-col items-start mt-3 gap-2">
                <div className="flex justify-center items-center">
                  <input
                    id="garden"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label for="garden" className="ml-2 block  text-gray-900">
                    Eat & Drink{" "}
                    <span className="text-sm text-gray-500">(62)</span>
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    id="garden"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label for="garden" className="ml-2 block  text-gray-900">
                    Coaching <span className="text-sm text-gray-500">(31)</span>
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    id="garden"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label for="garden" className="ml-2 block  text-gray-900">
                    Apartments{" "}
                    <span className="text-sm text-gray-500">(20)</span>
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    id="garden"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label for="garden" className="ml-2 block  text-gray-900">
                    Services <span className="text-sm text-gray-500">(43)</span>
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    id="garden"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label for="garden" className="ml-2 block  text-gray-900">
                    Classifieds{" "}
                    <span className="text-sm text-gray-500">(16)</span>
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    id="garden"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label for="garden" className="ml-2 block  text-gray-900">
                    Fitness <span className="text-sm text-gray-500">(22)</span>
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    id="garden"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label for="garden" className="ml-2 block  text-gray-900">
                    Events <span className="text-sm text-gray-500">(21)</span>
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    id="garden"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label for="garden" className="ml-2 block  text-gray-900">
                    Other <span className="text-sm text-gray-500">(17)</span>
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <h1 className="text-xl mb-1 mt-4">Order by</h1>
              <p className="text-sm text-gray-500">
                Duis a leo sit amet odio volutpat auctor ut a lorem.
              </p>
              <select className="text-gray-400 rounded-lg mt-4 mb-4 w-full">
                <option value="Latest">Latest</option>
                <option value="Nearby">Nearby</option>
                <option value="Top Rated">Top Rated</option>
                <option value="Random">Random</option>
                <option value="A - Z">A - Z</option>
              </select>
            </div>
            <hr />
            <div className="mt-4">
              <button className="bg-orange-500 text-white px-8 w-full py-2 rounded-lg">
                Apply Filter
              </button>
              <button className="border-0 flex items-center justify-center gap-2 w-full py-2 px-8 ">
                <i class="fa-solid fa-rotate-right"></i>
                <p>Clear Filter</p>
              </button>
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className="lg:w-[75%] lg:pl-10 lg:pr-3 pm:px-5">
          <div className="flex justify-between items-center">
            <h1 className="text-lg">
              All <span className="font-semibold"> 9,069 </span> listing found
            </h1>
            <div className="p-1 bg-white flex justify-start items-center gap-1 rounded-md">
              <div className="bg-gray-300 py-1 px-2 rounded-lg">
                <i class="fa-solid fa-table-cells-large"></i>
              </div>
              <div className="bg-gray-300 py-1 px-2 rounded-lg">
                <i class="fa-solid fa-list"></i>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-start items-center gap-6 mt-4 mb-4">
            <div className="lg:w-[48%] bg-white rounded-lg pm:w-full">
              <div className="lg:position-relative">
                <img
                  src="/masonry/08.jpg"
                  className=" h-[18rem] w-full rounded-t-lg insert-0 bg-black"
                ></img>
                <div className="flex justify-between items-center ">
                  <div className="float-left">
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-0  ">
                      <i class="fa-solid fa-star"></i>
                      <p>Featured</p>
                    </button>
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-[3.4rem]  ">
                      <i class="fa-solid fa-tag"></i>
                      <p>$12.00 - $40.00</p>
                    </button>
                  </div>
                  <div className="rounded-full mr-4 shadow-lg flex justify-center items-center">
                    <i class="fa-regular fa-heart  text-xl"></i>
                  </div>
                </div>
              </div>
              <div className="px-5  py-5 flex flex-col gap-1">
                <div className="text-red-600 flex  justify-start items-center gap-1">
                  <i class="fa-solid fa-star"></i>
                  <p>
                    <span>(4.5)</span>2,391 reviews
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <h1 className="text-lg font-semibold">
                    Green Mart Apartment
                  </h1>
                  <img src="/tick.png" className="w-5"></img>
                </div>
                <div className="flex justify-start items-center gap-2 text-sm">
                  <i class="fa-solid fa-phone"></i>
                  <p>(123) 456 789</p> <i class="fa-solid fa-compass ml-2"></i>
                  <p>Directions</p>
                </div>
              </div>
            </div>

            <div className="lg:w-[48%] bg-white rounded-lg pm:w-full">
              <div className="lg:position-relative">
                <img
                  src="/masonry/08.jpg"
                  className=" h-[18rem] w-full rounded-t-lg insert-0 bg-black"
                ></img>
                <div className="flex justify-between items-center ">
                  <div className="float-left">
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-0  ">
                      <i class="fa-solid fa-star"></i>
                      <p>Featured</p>
                    </button>
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-[3.4rem]  ">
                      <i class="fa-solid fa-tag"></i>
                      <p>$12.00 - $40.00</p>
                    </button>
                  </div>
                  <div className="rounded-full mr-4 shadow-lg flex justify-center items-center">
                    <i class="fa-regular fa-heart  text-xl"></i>
                  </div>
                </div>
              </div>
              <div className="px-5  py-5 flex flex-col gap-1">
                <div className="text-red-600 flex  justify-start items-center gap-1">
                  <i class="fa-solid fa-star"></i>
                  <p>
                    <span>(4.5)</span>2,391 reviews
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <h1 className="text-lg font-semibold">
                    Green Mart Apartment
                  </h1>
                  <img src="/tick.png" className="w-5"></img>
                </div>
                <div className="flex justify-start items-center gap-2 text-sm">
                  <i class="fa-solid fa-phone"></i>
                  <p>(123) 456 789</p> <i class="fa-solid fa-compass ml-2"></i>
                  <p>Directions</p>
                </div>
              </div>
            </div>

            <div className="lg:w-[48%] bg-white rounded-lg pm:w-full">
              <div className="lg:position-relative">
                <img
                  src="/masonry/08.jpg"
                  className=" h-[18rem] w-full rounded-t-lg insert-0 bg-black"
                ></img>
                <div className="flex justify-between items-center ">
                  <div className="float-left">
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-0  ">
                      <i class="fa-solid fa-star"></i>
                      <p>Featured</p>
                    </button>
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-[3.4rem]  ">
                      <i class="fa-solid fa-tag"></i>
                      <p>$12.00 - $40.00</p>
                    </button>
                  </div>
                  <div className="rounded-full mr-4 shadow-lg flex justify-center items-center">
                    <i class="fa-regular fa-heart  text-xl"></i>
                  </div>
                </div>
              </div>
              <div className="px-5  py-5 flex flex-col gap-1">
                <div className="text-red-600 flex  justify-start items-center gap-1">
                  <i class="fa-solid fa-star"></i>
                  <p>
                    <span>(4.5)</span>2,391 reviews
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <h1 className="text-lg font-semibold">
                    Green Mart Apartment
                  </h1>
                  <img src="/tick.png" className="w-5"></img>
                </div>
                <div className="flex justify-start items-center gap-2 text-sm">
                  <i class="fa-solid fa-phone"></i>
                  <p>(123) 456 789</p> <i class="fa-solid fa-compass ml-2"></i>
                  <p>Directions</p>
                </div>
              </div>
            </div>

            <div className="lg:w-[48%] bg-white rounded-lg pm:w-full">
              <div className="lg:position-relative">
                <img
                  src="/masonry/08.jpg"
                  className=" h-[18rem] w-full rounded-t-lg insert-0 bg-black"
                ></img>
                <div className="flex justify-between items-center ">
                  <div className="float-left">
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-0  ">
                      <i class="fa-solid fa-star"></i>
                      <p>Featured</p>
                    </button>
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-[3.4rem]  ">
                      <i class="fa-solid fa-tag"></i>
                      <p>$12.00 - $40.00</p>
                    </button>
                  </div>
                  <div className="rounded-full mr-4 shadow-lg flex justify-center items-center">
                    <i class="fa-regular fa-heart  text-xl"></i>
                  </div>
                </div>
              </div>
              <div className="px-5  py-5 flex flex-col gap-1">
                <div className="text-red-600 flex  justify-start items-center gap-1">
                  <i class="fa-solid fa-star"></i>
                  <p>
                    <span>(4.5)</span>2,391 reviews
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <h1 className="text-lg font-semibold">
                    Green Mart Apartment
                  </h1>
                  <img src="/tick.png" className="w-5"></img>
                </div>
                <div className="flex justify-start items-center gap-2 text-sm">
                  <i class="fa-solid fa-phone"></i>
                  <p>(123) 456 789</p> <i class="fa-solid fa-compass ml-2"></i>
                  <p>Directions</p>
                </div>
              </div>
            </div>

            <div className="lg:w-[48%] bg-white rounded-lg pm:w-full">
              <div className="lg:position-relative">
                <img
                  src="/masonry/08.jpg"
                  className=" h-[18rem] w-full rounded-t-lg insert-0 bg-black"
                ></img>
                <div className="flex justify-between items-center ">
                  <div className="float-left">
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-0  ">
                      <i class="fa-solid fa-star"></i>
                      <p>Featured</p>
                    </button>
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-[3.4rem]  ">
                      <i class="fa-solid fa-tag"></i>
                      <p>$12.00 - $40.00</p>
                    </button>
                  </div>
                  <div className="rounded-full mr-4 shadow-lg flex justify-center items-center">
                    <i class="fa-regular fa-heart  text-xl"></i>
                  </div>
                </div>
              </div>
              <div className="px-5  py-5 flex flex-col gap-1">
                <div className="text-red-600 flex  justify-start items-center gap-1">
                  <i class="fa-solid fa-star"></i>
                  <p>
                    <span>(4.5)</span>2,391 reviews
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <h1 className="text-lg font-semibold">
                    Green Mart Apartment
                  </h1>
                  <img src="/tick.png" className="w-5"></img>
                </div>
                <div className="flex justify-start items-center gap-2 text-sm">
                  <i class="fa-solid fa-phone"></i>
                  <p>(123) 456 789</p> <i class="fa-solid fa-compass ml-2"></i>
                  <p>Directions</p>
                </div>
              </div>
            </div>

            <div className="lg:w-[48%] bg-white rounded-lg pm:w-full">
              <div className="lg:position-relative">
                <img
                  src="/masonry/08.jpg"
                  className=" h-[18rem] w-full rounded-t-lg insert-0 bg-black"
                ></img>
                <div className="flex justify-between items-center ">
                  <div className="float-left">
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-0  ">
                      <i class="fa-solid fa-star"></i>
                      <p>Featured</p>
                    </button>
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-[3.4rem]  ">
                      <i class="fa-solid fa-tag"></i>
                      <p>$12.00 - $40.00</p>
                    </button>
                  </div>
                  <div className="rounded-full mr-4 shadow-lg flex justify-center items-center">
                    <i class="fa-regular fa-heart  text-xl"></i>
                  </div>
                </div>
              </div>
              <div className="px-5  py-5 flex flex-col gap-1">
                <div className="text-red-600 flex  justify-start items-center gap-1">
                  <i class="fa-solid fa-star"></i>
                  <p>
                    <span>(4.5)</span>2,391 reviews
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <h1 className="text-lg font-semibold">
                    Green Mart Apartment
                  </h1>
                  <img src="/tick.png" className="w-5"></img>
                </div>
                <div className="flex justify-start items-center gap-2 text-sm">
                  <i class="fa-solid fa-phone"></i>
                  <p>(123) 456 789</p> <i class="fa-solid fa-compass ml-2"></i>
                  <p>Directions</p>
                </div>
              </div>
            </div>

            <div className="lg:w-[48%] bg-white rounded-lg pm:w-full">
              <div className="lg:position-relative">
                <img
                  src="/masonry/08.jpg"
                  className=" h-[18rem] w-full rounded-t-lg insert-0 bg-black"
                ></img>
                <div className="flex justify-between items-center ">
                  <div className="float-left">
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-0  ">
                      <i class="fa-solid fa-star"></i>
                      <p>Featured</p>
                    </button>
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-[3.4rem]  ">
                      <i class="fa-solid fa-tag"></i>
                      <p>$12.00 - $40.00</p>
                    </button>
                  </div>
                  <div className="rounded-full mr-4 shadow-lg flex justify-center items-center">
                    <i class="fa-regular fa-heart  text-xl"></i>
                  </div>
                </div>
              </div>
              <div className="px-5  py-5 flex flex-col gap-1">
                <div className="text-red-600 flex  justify-start items-center gap-1">
                  <i class="fa-solid fa-star"></i>
                  <p>
                    <span>(4.5)</span>2,391 reviews
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <h1 className="text-lg font-semibold">
                    Green Mart Apartment
                  </h1>
                  <img src="/tick.png" className="w-5"></img>
                </div>
                <div className="flex justify-start items-center gap-2 text-sm">
                  <i class="fa-solid fa-phone"></i>
                  <p>(123) 456 789</p> <i class="fa-solid fa-compass ml-2"></i>
                  <p>Directions</p>
                </div>
              </div>
            </div>

            <div className="lg:w-[48%] bg-white rounded-lg pm:w-full">
              <div className="lg:position-relative">
                <img
                  src="/masonry/08.jpg"
                  className=" h-[18rem] w-full rounded-t-lg insert-0 bg-black"
                ></img>
                <div className="flex justify-between items-center ">
                  <div className="float-left">
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-0  ">
                      <i class="fa-solid fa-star"></i>
                      <p>Featured</p>
                    </button>
                    <button className="bg-[#ababab] border text-sm border-white flex justify-center items-center gap-2 px-3 py-1 rounded-r-lg text-white position-absolute left-0 top-[3.4rem]  ">
                      <i class="fa-solid fa-tag"></i>
                      <p>$12.00 - $40.00</p>
                    </button>
                  </div>
                  <div className="rounded-full mr-4 shadow-lg flex justify-center items-center">
                    <i class="fa-regular fa-heart  text-xl"></i>
                  </div>
                </div>
              </div>
              <div className="px-5  py-5 flex flex-col gap-1">
                <div className="text-red-600 flex  justify-start items-center gap-1">
                  <i class="fa-solid fa-star"></i>
                  <p>
                    <span>(4.5)</span>2,391 reviews
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <h1 className="text-lg font-semibold">
                    Green Mart Apartment
                  </h1>
                  <img src="/tick.png" className="w-5"></img>
                </div>
                <div className="flex justify-start items-center gap-2 text-sm">
                  <i class="fa-solid fa-phone"></i>
                  <p>(123) 456 789</p> <i class="fa-solid fa-compass ml-2"></i>
                  <p>Directions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8">
            <p className="cursor-pointer">
              <span>&larr; </span> Previous Page{" "}
            </p>
            <div className="flex justify-center items-center gap-2 mx-7">
              <button className="px-3 py-1 bg-red-600 text-white flex justify-center items- rounded-lg">
                1
              </button>
              <button className="px-3 py-1 bg-red-600 text-white flex justify-center items- rounded-lg">
                2
              </button>
            </div>
            <p className="cursor-pointer">
              Next Page <span>&rarr;</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#191e25] lg:px-40 pm:px-5 lg:pt-36 pm:pt-20 pb-2">
        <div className="bg-[#f84525] w-full lg:h-48 pm:h-[36rem] relative lg:px-32 pm:px-4 rounded-2xl pm:flex pm:flex-col pm:justify-start pm:items-center ">
          <img
            src={process.env.PUBLIC_URL + "/07.jpg"}
            className="absolute bottom-0 lg:w-[18rem] lg:h-[17rem] pm:w-52 pm:h-44 "
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
