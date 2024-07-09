import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [Nav, setNav] = useState(false);
  const [profile, setProfile] = useState(false);

  // const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div className="bg-[#f8f4f3] container mx-auto px-4 py-4 flex justify-start items-center  pm:hidden ">
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
            {/* <li>wefsdf</li>
            <li>dsfdsf</li>
            <li>dfsd</li>
            <li>dfsdf</li> */}
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
              {/* <p className="text-sm">
                Naeem Khan <br />{" "}
                <span className="text-xs text-gray-500">example@gmail.com</span>
              </p> */}
            </div>
            <div className="flex jus items-center">
              {" "}
              <button
                className="text-gray-400 focus:outline-none  bg-white px-2 rounded-full w-9 h-9 relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setNav(!Nav)}
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
          </div>
        </nav>
      </div>

     
     {Nav  && 

     
      <div className=" relative border-2 shadow-lg">

        <ul className=" ml-40 flex flex-col gap-3 w-[80%] py-3  bg-white text-black px-2 rounded-lg ">
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 lg:hidden absolute top-1 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setNav(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
          <li className="bg-gray-300 px-4 py-1 rounded-lg mt-2">Home</li>
          <li className="bg-gray-300 px-4 py-1 rounded-lg">Dashboard</li>
          <li className="bg-gray-300 px-4 py-1 rounded-lg">Listing</li>
          <li className="bg-gray-300 px-4 py-1 rounded-lg">Explore</li>
          <li className="bg-gray-300 px-4 py-1 rounded-lg">Template</li>
        </ul>
      </div>
      
      }


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
