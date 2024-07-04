import React from 'react'
import Header from './header'
import Slide from './slidenav'
export const Add_listing = () => {
  return (
    <div>
      <div className="container px-28 mx-auto">
            <input type="checkbox" name="check" id="check" />
            <div className="logo-container">
              <img src="/logopeenyainfo.png" height={100} width={200}></img>
            </div>

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
              <div className="log-sign">
                <a href="#" className="svg-btn ">
                  <img
                    src="/user.svg"
                    height={35}
                    width={35}
                    alt="user img"
                  ></img>
                </a>
                <a href="#" className="svg-btn ">
                  <img
                    src="/heart.svg"
                    height={32}
                    width={32}
                    alt="user img"
                  ></img>
                </a>

                <a href="#" className="btn transparent">
                  Log in
                </a>
                <a href="#" className="btn solid">
                  Sign up
                </a>
              </div>
            </div>

            <div className="hamburger-menu-container">
              <div className="hamburger-menu">
                <div></div>
              </div>
            </div>
          </div>    
    

    <div className='px-5 '>
          <div
        className="w-full h-[28rem] overflow-hidden  bg-cover bg-center relative rounded-3xl "
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/07.jpg"})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
        <div className="relative z-10 m-auto w-[50%] mt-12 flex flex-col gap-4">
          <h2 className=" text-center mt-8 text-[3rem] text-white font-semibold">Find Your <span className='text-red-500'>Dream</span> Place</h2>
          <p className="text-center text-white text-[18px]">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="relative z-10 px-64  mx-auto  w-full">
        <div className="flex flex-wrap justify-center h-28 sd:h-56 mt-12 rounded-full align-center items-center px-[5%] my-8 bg-white">
              <form className="w-[30%] sd:w-full px-2 sd:pt-4 mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div  iv className="relative">
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


    <div className='px-5 pt-10'>
        <div className='bg-[#f8f4f3] rounded-3xl px-20 py-20'>
       <div className='px-80'>
       <div className='px-20 flex flex-col justify-center items-center'>
            <p className='text-red-500 text-[2.2rem] my-2 font-semibold'>Lisitng</p>
            <p className='text-[3rem] my-4 font-semibold'>Add Listing</p>
            <p className='text-'>Discover exciting categories. <span className='text-red-500'> Find what you’re looking for.</span></p>
        </div>
       </div>
        </div>



    </div>




    </div>
  )
}
