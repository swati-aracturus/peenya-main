import React, { useState } from "react";

export const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  const [Nav, setNav] = useState(false);

  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
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
        className={`transition-all duration-300 ease-in-out shadow-lg fixed w-full z-[999] top-20 ${
          Nav ? 'max-h-screen' : 'max-h-0'
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



      {/* Main div */}
      <div className="mt-[10rem] pm:mt-[7rem]">
        <div className=" ml-20 mr-25 pl-15 pr-20  pm:ml-5 pm:mr-10 pm:pl-5 pm:pr-5">
          <div
            className="flex justify-center items-center flex-col px-52 pm:px-0"
            style={{ backgroundImage: `url("/pattern.svg")` }}
          >
            <button className="bg-red-500 rounded-3xl px-7 py-2 text-white pm:px-4">
              7+ YEARS EXPERIENCED IN FIELD
            </button>
            <p className="text-[3rem] lg:font-semibold text-center mt-3 pm:text-3xl">
              ListOn Was Founded In 2023 By Alexander With A{" "}
              <span className="text-red-600">Vision To Your Original </span>
              Vision Or Inspiration.
            </p>
          </div>

          {/*  */}
          <div className="relative w-full mt-10 mx-auto">
            <img
              src="/masonry/06.jpg"
              className="w-[90%] mx-auto h-[34rem] rounded-lg pm:h-[27rem] pm:w-full"
              alt="Thumbnail"
            />
            <div
              className="absolute top-[50%] left-[50%] bg-gray-300 transform -translate-x-1/2 -translate-y-1/2 hover:bg-white p-4 rounded-full cursor-pointer"
              onClick={toggleVideo}
            >
              <i className="fa-solid fa-circle-play text-[6rem]"></i>
            </div>

            {isPlaying && (
              <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-75">
                <div className="relative w-[90%] h-[34rem] mx-auto">
                  <iframe
                    src="/nature.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full rounded-lg"
                    title="Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <button
                    className="absolute top-4 right-4 bg-white p-2 rounded-full"
                    onClick={toggleVideo}
                  >
                    <i className="fa-solid fa-times text-[2rem]"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
          {/*  */}
        </div>

        <div className="flex px-40 pt-20 pb-8 w-full gap-16 pm:px-4 pm:flex-col ">
          <div className="w-1/2 flex justify-end mr-2 pt-3 pm:w-full">
            <p>OUR STORY:</p>
          </div>
          <div className="w-1/2 ml-3 flex flex-col gap-5 pm:w-full">
            <p className="text-[2.5rem] ">About ListOn Brand</p>
            <p className="text-xl">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <a href="#" className="text-red-500">
              Let’s Check open position
            </a>
          </div>
        </div>

        <div className="mx-36 mb-3 pm:mx-10">
          <hr />
          <p className="mt-3 mb-16 pm:text-xl">OUR ACHIEVEMENTS</p>
          <div className="flex justify-around items-center pm:flex-col pm:gap-8 ">
            <div className="flex flex-col justify-center items-center gap-2 ">
              <div className="w-48 h-48 bg-[#f8f4f3] p-3 rounded-full flex justify-center items-center text-red-500 text-[2.7rem]">
                300+
              </div>
              <p>Job posted</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-48 h-48 bg-[#f8f4f3] p-3 rounded-full flex justify-center items-center text-red-500 text-[2.7rem]">
                250+
              </div>
              <p>Successful hires</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-48 h-48 bg-[#f8f4f3] p-3 rounded-full flex justify-center items-center text-red-500 text-[2.7rem]">
                10M+
              </div>
              <p>Monthly visits</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 mb-16">
              <div className="w-48 h-48 bg-[#f8f4f3] p-3 rounded-full flex justify-center items-center text-red-500 text-[2.7rem]">
                593+
              </div>
              <p>Verified companies</p>
            </div>
          </div>
          <hr />
        </div>
        <div className="px-20 pb-4 pt-16 pm:px-1">
          <div className="flex justify-center items-center flex-col px-52 pm:px-1">
            <p className="text-3xl text-red-500 pm:text-2xl">About Us</p>
            <p className="text-[3rem] font-semibold text-center mt-3 pm:text-3xl">
              Explore Over 2.5 Million People Travel Around The World.
            </p>
            <p className="mt-4 text-center">
              Discover exciting categories.{" "}
              <span className="text-red-600">
                {" "}
                Find what you’re looking for.
              </span>
            </p>
          </div>
        </div>
        <div className="mb-8 px-36 flex items-start justify-between gap-40 pm:px-5 pm:flex-col pm:mt-7">
          {/* left */}
          <div className="w-1/2 pm:w-full">
            <div className="flex justify-start items-center gap-3">
              <hr className=" w-32 border-red-600 pm:w-16" />
              <p className="text-red-500">ABOUT LISTON GROUP</p>
            </div>
            <div>
              <p className="text-[2.6rem]  mt-3 pm:text-3xl pm:mb-3">
                Innovative Buildings with new materials
              </p>
              <p>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <div className="text-[2rem] border-l-4 px-6 my-6 border-red-500 pm:text-xl">
                <p>
                  It uses a dictionary of over 200 Latin words, combined with a
                  handful of model sentence.
                </p>
              </div>
            </div>
            <div>
              <div>
                <div className="flex justify-between items-center font-semibold my-3">
                  <p>Prosperity</p>
                  <p>60%</p>
                </div>
                <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                  <div className="h-1 bg-primary w-[60%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center font-semibold my-3">
                  <p>Quality</p>
                  <p>85%</p>
                </div>
                <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                  <div className="h-1 bg-primary w-[85%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center font-semibold my-3">
                  <p>Guaranty</p>
                  <p>40%</p>
                </div>
                <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                  <div className="h-1 bg-primary w-[40%]"></div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-1/2 h-full relative pm:w-full pm:-mt-20">
            <div className="grid grid-cols-4 gap-4 p-4 h-[36rem]">
              <div className="col-span-2 row-span-10 bg-gray-300  rounded-lg border-4 border-red-500 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl">1000x667</p>
                </div>
              </div>
              <div className="col-span-2 row-span-8 bg-gray-300 rounded-lg  border-4 border-red-500 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl">1000x667</p>
                </div>
              </div>
              <div className="col-span-2 row-span-10 bg-gray-300 rounded-lg border-4 border-red-500 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl">1000x667</p>
                </div>
              </div>
              <div className="col-span-2 row-span-8 bg-gray-300 rounded-lg border-4 border-red-500 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl">1000x667</p>
                </div>
              </div>
            </div>
            <img
              src="/about-shape-1.png"
              className="absolute -top-8 -right-12 pm:hidden"
            ></img>
            <img
              src="/about-shape-2.png"
              className="absolute top-60 -left-20 pm:hidden"
            ></img>
          </div>
        </div>
        <div className="px-8 pm:px-3">
          <div className="bg-[#191e25] px-10 w-full pt-10 rounded-3xl mt-20 pb-16 mb-10 pm:px-3 ">
            <div className="flex flex-col justify-between items-center py-10 px-40 gap-3 ">
              <p className="text-red-500 text-3xl">Awards</p>
              <p className="text-white text-[3rem] font-semibold">Our Awards</p>
              <p className="text-white">
                Find a job you love.{" "}
                <span className="text-red-600">Set your career interests.</span>
              </p>
            </div>
            <div className="flex justify-around pm:flex-wrap pm:justify-start pm:">
              <div className="flex flex-col justify-center items-center gap-4 pm:w-1/2 ">
                <div className="">
                  <img
                    src="/masonry/04.jpg"
                    className="w-60 h-60 pm:w-44 pm:h-44"
                  ></img>
                </div>
                <p className="text-red-600 pm:text-center">
                  World Architecture Festival
                </p>
                <p className="text-white pm:text-center">Jun 23, 2023</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 pm:w-1/2">
                <div className="">
                  <img
                    src="/masonry/04.jpg"
                    className="w-60 h-60 pm:w-44 pm:h-44"
                  ></img>
                </div>
                <p className="text-red-600 pm:text-center pm:break-normal">
                  Venice Biennale of Architecture
                </p>
                <p className="text-white pm:text-center">Jun 23, 2023</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 pm:w-1/2 ">
                <div className="">
                  <img
                    src="/masonry/04.jpg"
                    className="w-60 h-60 pm:w-44 pm:h-44"
                  ></img>
                </div>
                <p className="text-red-600 pm:text-center">
                  Tamayouz Excellence Award for Architecture
                </p>
                <p className="text-white pm:text-center">Jun 23, 2023</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 pm:w-1/2 ">
                <div className="">
                  <img
                    src="/masonry/04.jpg"
                    className="w-60 h-60 pm:w-44 pm:h-44"
                  ></img>
                </div>
                <p className="text-red-600 pm:text-center">
                  RIBA President's Medals
                </p>
                <p className="text-white pm:text-center">Jun 23, 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-32 mt-16 pm:px-4 ">
          <div className="w-1/2 flex flex-col justify-center items-start gap-2 mb-4 pm:w-full">
            <p className="text-red-600 text-2xl">Our Team</p>
            <p className="text-[2.5rem]">Meet Our Team</p>
            <p>
              A team of experienced and dedicated professionals who are
              passionate about helping our clients find their dream properties.
              From our agents to our support staff, everyone on our team is
              committed to providing personalized service, expert guidance, and
              exceptional results.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
              <div className="relative">
                <img
                  src="/masonry/04.jpg"
                  className="w-[19rem] h-[21rem] rounded-2xl pm:w-[22rem] pm:h-[24rem] "
                ></img>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full text-white right-20 top-2  mr-12 ">
                  <i class=" fa-brands fa-facebook-f"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full  text-white right-10 top-2 mr-8 ">
                  <i class=" fa-brands fa-twitter"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full   text-white right-5 top-2 ">
                  <i class="fa-brands fa-linkedin"></i>
                </button>
                <p className="text-center">Ethan Blackwood</p>
                <p className="text-center">Co-founder</p>
              </div>
              <div className="relative">
                <img
                  src="/masonry/04.jpg"
                  className="w-[19rem] h-[21rem] rounded-2xl pm:w-[22rem] pm:h-[24rem] "
                ></img>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full text-white right-20 top-2  mr-12 ">
                  <i class=" fa-brands fa-facebook-f"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full  text-white right-10 top-2 mr-8 ">
                  <i class=" fa-brands fa-twitter"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full   text-white right-5 top-2 ">
                  <i class="fa-brands fa-linkedin"></i>
                </button>
                <p className="text-center">Ethan Blackwood</p>
                <p className="text-center">Co-founder</p>
              </div>
              <div className="relative">
                <img
                  src="/masonry/04.jpg"
                  className="w-[19rem] h-[21rem] rounded-2xl pm:w-[22rem] pm:h-[24rem] "
                ></img>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full text-white right-20 top-2  mr-12 ">
                  <i class=" fa-brands fa-facebook-f"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full  text-white right-10 top-2 mr-8 ">
                  <i class=" fa-brands fa-twitter"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full   text-white right-5 top-2 ">
                  <i class="fa-brands fa-linkedin"></i>
                </button>
                <p className="text-center">Ethan Blackwood</p>
                <p className="text-center">Co-founder</p>
              </div>
              <div className="relative">
                <img
                  src="/masonry/04.jpg"
                  className="w-[19rem] h-[21rem] rounded-2xl pm:w-[22rem] pm:h-[24rem] "
                ></img>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full text-white right-20 top-2  mr-12 ">
                  <i class=" fa-brands fa-facebook-f"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full  text-white right-10 top-2 mr-8 ">
                  <i class=" fa-brands fa-twitter"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full   text-white right-5 top-2 ">
                  <i class="fa-brands fa-linkedin"></i>
                </button>
                <p className="text-center">Ethan Blackwood</p>
                <p className="text-center">Co-founder</p>
              </div>
              <div className="relative">
                <img
                  src="/masonry/04.jpg"
                  className="w-[19rem] h-[21rem] rounded-2xl pm:w-[22rem] pm:h-[24rem] "
                ></img>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full text-white right-20 top-2  mr-12 ">
                  <i class=" fa-brands fa-facebook-f"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full  text-white right-10 top-2 mr-8 ">
                  <i class=" fa-brands fa-twitter"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full   text-white right-5 top-2 ">
                  <i class="fa-brands fa-linkedin"></i>
                </button>
                <p className="text-center">Ethan Blackwood</p>
                <p className="text-center">Co-founder</p>
              </div>
              <div className="relative">
                <img
                  src="/masonry/04.jpg"
                  className="w-[19rem] h-[21rem] rounded-2xl pm:w-[22rem] pm:h-[24rem] "
                ></img>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full text-white right-20 top-2  mr-12 ">
                  <i class=" fa-brands fa-facebook-f"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full  text-white right-10 top-2 mr-8 ">
                  <i class=" fa-brands fa-twitter"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full   text-white right-5 top-2 ">
                  <i class="fa-brands fa-linkedin"></i>
                </button>
                <p className="text-center">Ethan Blackwood</p>
                <p className="text-center">Co-founder</p>
              </div>
              <div className="relative">
                <img
                  src="/masonry/04.jpg"
                  className="w-[19rem] h-[21rem] rounded-2xl pm:w-[22rem] pm:h-[24rem] "
                ></img>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full text-white right-20 top-2  mr-12 ">
                  <i class=" fa-brands fa-facebook-f"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full  text-white right-10 top-2 mr-8 ">
                  <i class=" fa-brands fa-twitter"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full   text-white right-5 top-2 ">
                  <i class="fa-brands fa-linkedin"></i>
                </button>
                <p className="text-center">Ethan Blackwood</p>
                <p className="text-center">Co-founder</p>
              </div>
              <div className="relative">
                <img
                  src="/masonry/04.jpg"
                  className="w-[19rem] h-[21rem] rounded-2xl pm:w-[22rem] pm:h-[24rem] "
                ></img>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full text-white right-20 top-2  mr-12 ">
                  <i class=" fa-brands fa-facebook-f"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full  text-white right-10 top-2 mr-8 ">
                  <i class=" fa-brands fa-twitter"></i>
                </button>
                <button className="px-4 py-2 bg-gray-300 absolute rounded-full   text-white right-5 top-2 ">
                  <i class="fa-brands fa-linkedin"></i>
                </button>
                <p className="text-center">Ethan Blackwood</p>
                <p className="text-center">Co-founder</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f8f4f3] px-20 py-20 pm:px-2">
          <div className="px-16 pm:px-2">
            <div className="px-40 flex flex-col justify-center items-center gap-3 pm:px-3">
              <p className="text-red-600 text-3xl  pm:text-2xl">
                Our Customers
              </p>
              <p className="text-[3rem] text-center pm:text-3xl">
                Trusted By Thousands News Of Companies
              </p>
              <p className="text-center">
                Discover exciting categories.{" "}
                <span className="text-red-500">
                  Find what you’re looking for.
                </span>
              </p>
            </div>
            <div>
              <div className="flex justify-around items-center mt-12 pm:flex-wrap pm:gap-4">
                <div className="px-4 py-3 bg-white rounded-lg ">
                  <img src="/masonry/01.jpg" className="w-full h-16"></img>
                </div>
                <div className="px-4 py-3 bg-white rounded-lg ">
                  <img src="/masonry/01.jpg" className="w-full h-16"></img>
                </div>
                <div className="px-4 py-3 bg-white rounded-lg ">
                  <img src="/masonry/01.jpg" className="w-full h-16"></img>
                </div>
                <div className="px-4 py-3 bg-white rounded-lg ">
                  <img src="/masonry/01.jpg" className="w-full h-16"></img>
                </div>
                <div className="px-4 py-3 bg-white rounded-lg ">
                  <img src="/masonry/01.jpg" className="w-full h-16"></img>
                </div>
                <div className="px-4 py-3 bg-white rounded-lg ">
                  <img src="/masonry/01.jpg" className="w-full h-16"></img>
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
        
      </div>
    </>
  );
};
