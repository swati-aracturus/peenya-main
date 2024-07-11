import React, { useState } from "react";
import FAQ from "./F&Qs";

export const Pricing = () => {
  const [Nav, setNav] = useState(false);

  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const [activeTab, setActiveTab] = useState("monthly");

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
      <div className="mt-[6rem] pm:mt-[7rem] px-3">
        <div
          className="relative w-full h-[22rem] overflow-hidden bg-cover bg-center rounded-3xl px-32 py-20 pm:h-[20rem] pm:px-4 bg-black"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/07.jpg"})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
          <div className="relative flex flex-col justify-center items-center lg:gap-4  text-white pm:gap-4">
            <button className="px-6 py-3 bg-red-600 rounded-3xl ">
              PRICING TABLE
            </button>
            <h1 className="text-[2.8rem] font-semibold pm:text-3xl">
              Pricing Plan For <spaan>Startup!</spaan>
            </h1>
            <p className="text-center">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their
              <br className="pm:hidden" /> default model text, and a search for
              'lorem ipsum' will uncover many.
            </p>
          </div>
        </div>

        <div className=" mx-auto bg-[#F8F4F3] rounded-3xl mt-3 pt-16 mb-6 pb-4">
          <div className="text-center mb-9 relative">
            <div className="flex justify-center items-center">
              <div className="flex justify-between  p-2 rounded-3 bg-white w-72  rounded-xl">
                <button
                  className={`p-2 font-medium ${
                    activeTab === "monthly"
                      ? "text-white font-bold bg-red-500 rounded-xl px-4"
                      : ""
                  }`}
                  onClick={() => setActiveTab("monthly")}
                >
                  Monthly Plan
                </button>
                <button
                  className={`p-2 font-medium ${
                    activeTab === "annual"
                      ? "text-white font-bold bg-red-500 rounded-xl px-4"
                      : ""
                  }`}
                  onClick={() => setActiveTab("annual")}
                >
                  Annual Plan
                </button>
              </div>
            </div>
            <div className="hidden md:inline-block ml-4 absolute -top-7 right-[33%] save-text text-green-500">
              <div className=" text-sm font-bold mb-1">
                Save Upto 23%
              </div>
              <svg class="text-success ms-n4 d-none d-sm-block" width="52" height="38" viewBox="0 0 52 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50.5002 1C50.3336 5.33333 48.5 13 44.0002 20.5C39.5005 28 29.0002 32.5 28.5002 23C28.0002 13.5 39.5002 7 36.5002 14.5C33.5002 22 18.5 35.5 4 30" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path>
                        <path d="M3.83039 29.8565C6.35946 29.7566 8.93618 29.122 11.2178 28.1747L11.2178 28.1748L11.2196 28.1739C11.5476 28.0299 11.7182 27.6503 11.5867 27.3359C11.448 26.9871 11.0624 26.8028 10.7213 26.9517C7.91141 28.0931 4.64686 28.7829 1.62704 28.4553L1.62706 28.4551L1.62094 28.4549C1.27015 28.4384 0.944127 28.6914 0.902297 29.0451L0.902167 29.045L0.901827 29.0501C0.896722 29.1266 0.902407 29.2007 0.917743 29.2707C0.94057 29.4967 1.07932 29.7124 1.30195 29.8067C4.07984 31.0931 5.87728 34.0754 7.0096 36.882L7.00959 36.882L7.01015 36.8833C7.13957 37.1912 7.5283 37.3687 7.86577 37.2206L7.86579 37.2205C8.19919 37.0741 8.36065 36.6916 8.22031 36.3385L8.22006 36.3379C7.2736 34.0027 5.84935 31.53 3.83039 29.8565Z" fill="currentColor" stroke="currentColor" stroke-width="0.2"></path>
                </svg>
            </div>
          </div>

          <div className="tab-content mx-28 pm:mx-4">
            {activeTab === "monthly" && (
              <div className="tab-pane">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <div className="text-lg font-semibold h6 mb-2">
                            Plan & Features
                          </div>
                          <p className="mb-0 font-normal">
                            Hidden in the middle generators
                            <br /> tend repeat predefin.
                          </p>
                        </th>
                        <th
                          scope="col"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="font-caveat text-xl text-red-600 text-primary">
                            Basic
                          </span>
                          <div className="flex pt-3 items-baseline">
                            <span className="text-2xl">$</span>
                            <span className="text-4xl font-semibold">49</span>
                          </div>
                          <span className="text-sm font-normal">
                            Per user, billed monthly
                          </span>
                          <a
                            href="#"
                            className="btn block mt-4 border text-primary"
                          >
                            Get Basic
                          </a>
                        </th>
                        <th
                          scope="col"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="font-caveat text-xl text-red-600 text-primary">
                            Pro
                          </span>
                          <div className="flex pt-3 items-baseline">
                            <span className="text-2xl">$</span>
                            <span className="text-4xl font-semibold">69</span>
                          </div>
                          <span className="text-sm font-normal">
                            Per user, billed monthly
                          </span>
                          <a
                            href="#"
                            className="btn block mt-4 bg-primary text-white"
                          >
                            Get Pro
                          </a>
                        </th>
                        <th
                          scope="col"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="font-caveat text-xl text-red-600 text-primary">
                            Ultimate
                          </span>
                          <div className="flex pt-3 items-baseline">
                            <span className="text-2xl">$</span>
                            <span className="text-4xl font-semibold">89</span>
                          </div>
                          <span className="text-sm font-normal">
                            Per user, billed monthly
                          </span>
                          <a
                            href="#"
                            className="btn block mt-4 border text-primary"
                          >
                            Get Ultimate
                          </a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="block font-semibold h6 mb-0">
                            Unlimited E-Mail Notification
                          </span>
                        </th>
                        <td className="border border-gray-300 p-4">50GB</td>
                        <td className="border border-gray-300 p-4">100GB</td>
                        <td className="border border-gray-300 p-4">
                          Unlimited
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="block font-semibold h6 mb-0">
                            Display Personalized Message
                          </span>
                        </th>
                        <td className="border border-gray-300 p-4">20,000</td>
                        <td className="border border-gray-300 p-4">100,000</td>
                        <td className="border border-gray-300 p-4">
                          Unlimited
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="block font-semibold h6 mb-0">
                            Send Text Message Instant
                          </span>
                        </th>
                        <td className="border border-gray-300 p-4">100</td>
                        <td className="border border-gray-300 p-4">1,000</td>
                        <td className="border border-gray-300 p-4">
                          Unlimited
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="block font-semibold h6 mb-0">
                            Send Live Message Notification
                          </span>
                        </th>
                        <td className="border border-gray-300 p-4">
                          <i className="fa fa-check-circle text-green-500 text-xl"></i>
                        </td>
                        <td className="border border-gray-300 p-4">
                          <i className="fa fa-check-circle text-green-500 text-xl"></i>
                        </td>
                        <td className="border border-gray-300 p-4">
                          <i className="fa fa-check-circle text-green-500 text-xl"></i>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="block font-semibold h6 mb-0">
                            Organize Contacts Into Showing In System
                          </span>
                        </th>
                        <td className="border border-gray-300 p-4"></td>
                        <td className="border border-gray-300 p-4">
                          <i className="fa fa-check-circle text-green-500 text-xl"></i>
                        </td>
                        <td className="border border-gray-300 p-4">
                          <i className="fa fa-check-circle text-green-500 text-xl"></i>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="block font-semibold h6 mb-0">
                            Create Smart Segment Using Field Policy
                          </span>
                        </th>
                        <td className="border border-gray-300 p-4"></td>
                        <td className="border border-gray-300 p-4"></td>
                        <td className="border border-gray-300 p-4">
                          <i className="fa fa-check-circle text-green-500 text-xl"></i>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="block font-semibold h6 mb-0">
                            24x7 Online Outstanding Support
                          </span>
                        </th>
                        <td className="border border-gray-300 p-4"></td>
                        <td className="border border-gray-300 p-4"></td>
                        <td className="border border-gray-300 p-4">
                          <i className="fa fa-check-circle text-green-500 text-xl"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activeTab === "annual" && (
              <div className="tab-pane">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <div className="text-lg font-semibold h6 mb-2">
                            Plan & Features
                          </div>
                          <p className="mb-0 font-normal">
                            Hidden in the middle generators
                            <br /> tend repeat predefin.
                          </p>
                        </th>
                        <th
                          scope="col"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="font-caveat text-xl text-red-600 text-primary">
                            Basic
                          </span>
                          <div className="flex pt-3 items-baseline">
                            <span className="text-2xl">$</span>
                            <span className="text-4xl font-semibold">149</span>
                          </div>
                          <span className="text-sm font-normal">
                            Per user, billed monthly
                          </span>
                          <a
                            href="#"
                            className="btn block mt-4 border text-primary"
                          >
                            Get Basic
                          </a>
                        </th>
                        <th
                          scope="col"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="font-caveat text-xl text-red-600 text-primary">
                            Pro
                          </span>
                          <div className="flex pt-3 items-baseline">
                            <span className="text-2xl">$</span>
                            <span className="text-4xl font-semibold">269</span>
                          </div>
                          <span className="text-sm font-normal">
                            Per user, billed monthly
                          </span>
                          <a
                            href="#"
                            className="btn block mt-4 bg-primary text-white"
                          >
                            Get Pro
                          </a>
                        </th>
                        <th
                          scope="col"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="font-caveat text-xl text-red-600 text-primary">
                            Ultimate
                          </span>
                          <div className="flex pt-3 items-baseline">
                            <span className="text-2xl">$</span>
                            <span className="text-4xl font-semibold">389</span>
                          </div>
                          <span className="text-sm font-normal">
                            Per user, billed monthly
                          </span>
                          <a
                            href="#"
                            className="btn block mt-4 border text-primary"
                          >
                            Get Ultimate
                          </a>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="block font-semibold h6 mb-0">
                            Unlimited E-Mail Notification
                          </span>
                        </th>
                        <td className="border border-gray-300 p-4">50GB</td>
                        <td className="border border-gray-300 p-4">100GB</td>
                        <td className="border border-gray-300 p-4">
                          Unlimited
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="block font-semibold h6 mb-0">
                            Display Personalized Message
                          </span>
                        </th>
                        <td className="border border-gray-300 p-4">20,000</td>
                        <td className="border border-gray-300 p-4">100,000</td>
                        <td className="border border-gray-300 p-4">
                          Unlimited
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="block font-semibold h6 mb-0">
                            Send Text Message Instant
                          </span>
                        </th>
                        <td className="border border-gray-300 p-4">100</td>
                        <td className="border border-gray-300 p-4">1,000</td>
                        <td className="border border-gray-300 p-4">
                          Unlimited
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="block font-semibold h6 mb-0">
                            Send Live Message Notification
                          </span>
                        </th>
                        <td className="border border-gray-300 p-4">
                          <i className="fa fa-check-circle text-green-500 text-xl"></i>
                        </td>
                        <td className="border border-gray-300 p-4">
                          <i className="fa fa-check-circle text-green-500 text-xl"></i>
                        </td>
                        <td className="border border-gray-300 p-4">
                          <i className="fa fa-check-circle text-green-500 text-xl"></i>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="block font-semibold h6 mb-0">
                            Organize Contacts Into Showing In System
                          </span>
                        </th>
                        <td className="border border-gray-300 p-4"></td>
                        <td className="border border-gray-300 p-4">
                          <i className="fa fa-check-circle text-green-500 text-xl"></i>
                        </td>
                        <td className="border border-gray-300 p-4">
                          <i className="fa fa-check-circle text-green-500 text-xl"></i>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="block font-semibold h6 mb-0">
                            Create Smart Segment Using Field Policy
                          </span>
                        </th>
                        <td className="border border-gray-300 p-4"></td>
                        <td className="border border-gray-300 p-4"></td>
                        <td className="border border-gray-300 p-4">
                          <i className="fa fa-check-circle text-green-500 text-xl"></i>
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="border border-gray-300 p-4 text-left"
                        >
                          <span className="block font-semibold h6 mb-0">
                            24x7 Online Outstanding Support
                          </span>
                        </th>
                        <td className="border border-gray-300 p-4"></td>
                        <td className="border border-gray-300 p-4"></td>
                        <td className="border border-gray-300 p-4">
                          <i className="fa fa-check-circle text-green-500 text-xl"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <p className="text-center my-6">
              Interested in a custom plan?{" "}
              <span className="text-red-500">Get in touch</span>
            </p>
          </div>
        </div>

        <div className="px-40 pm:px-2">
        <div className="mx-1 my-7">
          <div className=" rounded-3xl px-32 pb-16 pm:px-2">
            <div className="pt-20 pb-12">
                <div className="flex flex-col justify-center items-center gap-3 px-32 pm:px-2">
                    <p className="text-red-500 text-3xl">F.A.Q.</p>
                    <p className="text-[2.8rem] font-semibold px-8 text-center pm:px-1 pm:text-[2rem]">Frequently Asked Questions</p>
                    <p className="text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="px-20 mt-16 pm:px-1">
                <FAQ/>
                </div>
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
