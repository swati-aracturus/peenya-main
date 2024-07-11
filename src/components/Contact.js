import React, { useState } from "react";
import FAQ from "./F&Qs";

export const Contact = () => {
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

      {/* Main div */}
      <div className="mt-[6rem] pm:mt-[7rem] mx-6 pm:mx-3">
      <div
      className="relative w-full h-[31rem] overflow-hidden bg-cover bg-center rounded-3xl px-32 py-20 pm:h-[45rem] pm:px-4 bg-black"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/07.jpg"})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
      <div className="relative flex justify-start items-center lg:gap-48 pm:flex-col pm:items-start">
        <div className="w-1/2 pm:w-full">
          <button className="bg-red-500 px-5 py-2 rounded-3xl text-white text-sm">
            CONTACT US
          </button>
          <h1 className="text-[2.9rem] text-white my-4 font-semibold pm:text-3xl">
            Do You Have Any Questions?{" "}
            <span className="text-red-600"> Let Us Know!</span>
          </h1>
          <p className="text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
        </div>
        <div className="flex flex-col gap-4 pm:mt-9">
          <p className="text-white text-xl font-semibold">General contact</p>
          <p className="text-white">1123 Fictional St, San Francisco, CA 94103</p>
          <div>
            <div className="flex justify-start items-center gap-2 text-white mb-2">
              <i className="fa-solid fa-phone"></i>
              <p>(123) 456-7890</p>
            </div>
            <div className="flex justify-start items-center gap-2 text-white">
              <i className="fa-solid fa-envelope"></i>
              <p>support@ListOn.com</p>
            </div>
          </div>
          <p className="mt-4 text-white font-semibold">Follow us</p>
          <div className="flex justify-start items-center gap-3 text-xl text-white">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
        <div className="mx-1 my-7">
          <div className="bg-[#f8f4f3] rounded-3xl px-32 pb-20 pm:px-2">
            <div className=" py-24 flex justify-between items-start lg:gap-48 pm:flex-col">
              {/* left form */}
              <div className="w-1/2 pm:w-full">
                <p className="text-3xl text-red-500">My contact data</p>
                <div className="mt-10">
                  <div class="mb-4">
                    <label class="block  mb-2" for="name">
                      Full Name
                    </label>
                    <input
                      class="mb-3 shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block mb-2" for="email">
                      Your Email
                    </label>
                    <input
                      class="mb-3 shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="mb-6">
                    <label class="block mb-2" for="message">
                      Your Phone
                    </label>
                    <input
                      class="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>
              {/* right form */}
              <div className="w-1/2 pm:w-full pm:mt-5">
                <p className="text-3xl text-red-500">My message</p>
                <div class="mb-6">
                  <label class="block mb-2 mt-8 " for="message">
                    Your Comments
                  </label>
                  <textarea
                    class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    rows={8}
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="flex justify-start items-start gap-2">
                  <input type="checkbox" className="rounded mt-1"></input>
                  <p>
                    YES, I AUTHORIZE THE USE OF MY PERSONAL DATA IN ACCORDANCE
                    WITH THE PRIVACY POLICY DESCRIBED ON THE WEBSITE.
                  </p>
                </div>
                <div className="mt-6">
                  <button className="px-6 py-3 bg-red-500 text-white rounded-xl">
                    Send Message | &rarr;
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[2.5rem] pm:text-2xl">
                Are you coming to see us? Make an <br />
                <span className="text-red-500"> appointment</span> at any of our
                huts.
              </p>
            </div>
            <div className="text-white flex justify-between items-center mt-7 pm:flex-col pm:gap-6 ">
              <div className="border-8 border-gray-500 bg-gray-400 rounded-xl px-7 pb-5 pt-8">
                <p className="text-3xl mb-3">Paris</p>
                <p className="mb-5 mt-4">
                  1123 Fictional St, San Francisco , CA 94103
                </p>
                <div className="flex justify-start items-center gap-2">
                  <i className="fa-solid fa-phone"></i>
                  <p>(123) 456-7890</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <i className="fa-solid fa-envelope"></i>
                  <p>support@ListOn.com</p>
                </div>
              </div>
              <div className="border-8 border-gray-500 bg-gray-400 rounded-xl px-7 pb-5 pt-8">
                <p className="text-3xl mb-3">London</p>
                <p className="mb-5 mt-4">
                  1123 Fictional St, San Francisco , CA 94103
                </p>
                <div className="flex justify-start items-center gap-2">
                  <i className="fa-solid fa-phone"></i>
                  <p>(123) 456-7890</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <i className="fa-solid fa-envelope"></i>
                  <p>support@ListOn.com</p>
                </div>
              </div>
              <div className="border-8 border-gray-500 bg-gray-400 rounded-xl px-7 pb-5 pt-8">
                <p className="text-3xl mb-3">New York</p>
                <p className="mb-5 mt-4">
                  1123 Fictional St, San Francisco , CA 94103
                </p>
                <div className="flex justify-start items-center gap-2">
                  <i className="fa-solid fa-phone"></i>
                  <p>(123) 456-7890</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <i className="fa-solid fa-envelope"></i>
                  <p>support@ListOn.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-1 my-7">
          <div className="bg-[#f8f4f3] rounded-3xl px-32 pb-20 pm:px-2">
            <div className="pt-20 pb-12">
                <div className="flex flex-col justify-center items-center gap-3">
                    <p className="text-red-500 text-3xl">F.A.Q.</p>
                    <p className="text-[2.8rem] font-semibold">Frequently Asked Questions</p>
                    <p className="">Discover exciting categories. <span className="text-red-500"> Find what you’re looking for.</span></p>
                </div>
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
