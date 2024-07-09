/* global ApexCharts */
import React, { useState, useEffect, useRef } from "react";
import Header2 from "./Header2";
import Sidebar from "./Sidebar";
import Drop from "./Drops";

export const Add_listing2 = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 450);

  useEffect(() => {
    const checkIsOpen = () => {
      setIsOpen(window.innerWidth > 450);
    };

    window.addEventListener("resize", checkIsOpen);
    checkIsOpen();
    return () => window.removeEventListener("resize", checkIsOpen);
  }, []);

  
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [image1, setImage1] = useState("");

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setImage1(file);
    }
  };

  return (
    <div
      className={`${
        isOpen ? "ml-[20.5rem] pm:ml-0 " : "ml-[5.7rem] pm:ml-0"
      } bg-[#f8f4f3] pb-6  `}
    >
      <div className=" fixed w-full  -ml-4 pm:-ml-28">
        <Header2 sidebarOpen={isOpen} setSidebarOpen={setIsOpen} />
      </div>
      <div className="w-full pt-24 px-6 flex flex-col gap-4">
        <div className="bg-white rounded-3xl pm:mt-8">
        <div className=" p-5 flex  justify-start items-center gap-4 rounded-lg lg:relative  z-0">
            <div className=" lg:absolute pm:left-0 w-1 h-8 rounded-xl bg-[#f84525] -ml-5 "></div>
            <h1 className="text-xl ml-2">Basic Informations</h1>
          </div>
          
          <hr />
          <div>
            <form className="w-full mx-auto p-4 mt-4">
              <div className="grid grid-cols-2 gap-4 pm:grid-cols-1">
                <div>
                  <label
                    htmlFor="listing-title"
                    className="block   text-gray-700 mb-2"
                  >
                    Listing Title
                  </label>
                  <input
                    type="text"
                    id="listing-title"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block  text-gray-700 mb-2"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  >
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4 my-3">
                <div>
                  <label htmlFor="tags" className="block   text-gray-700">
                    Tags
                  </label>
                  <input
                    type="text"
                    id="tags"
                    placeholder="+ Add Tags"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-3xl pm:mt-8">
        <div className=" p-5 flex  justify-start items-center gap-4 rounded-lg lg:relative  z-0">
            <div className=" lg:absolute pm:left-0 w-1 h-8 rounded-xl bg-[#f84525] -ml-5 "></div>
            <h1 className="text-xl ml-2">Location</h1>
          </div>
          <hr />
          <div>
            <form className="w-full mx-auto p-4 mt-4">
              <div className="grid grid-cols-2 gap-4 pm:grid-cols-1">
                <div>
                  <label htmlFor="city" className="block   text-gray-700 mb-2">
                    City
                  </label>
                  <select
                    id="City"
                    placeholder="Select City"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  >
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="Address"
                    className="block  text-gray-700 mb-2"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="Address"
                    placeholder="Address"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pm:grid-cols-1 mt-4">
                <div>
                  <label htmlFor="State" className="block   text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    id="State"
                    placeholder="City"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Zip-Code"
                    className="block  text-gray-700 mb-2"
                  >
                    Zip-Code
                  </label>
                  <input
                    type="text"
                    id="Zip-Code"
                    placeholder="3870"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-3xl pm:mt-8">
        <div className=" p-5 flex  justify-start items-center gap-4 rounded-lg lg:relative  z-0">
            <div className=" lg:absolute pm:left-0 w-1 h-8 rounded-xl bg-[#f84525] -ml-5 "></div>
            <h1 className="text-xl ml-2">Gallery</h1>
          </div>
          <hr />
          <div>
            <form className="w-full mx-auto p-4">
              <div className="grid gap-4 my-4">
                <div>
                  <label htmlFor="state" className="block  text-gray-700 mb-2">
                    Gallery
                  </label>
                  <div className="w-full border-2 border-dashed border-red-500 h-44 rounded-xl flex justify-center items-center">
                    <i
                      className="fa-solid fa-cloud-arrow-up text-[4rem] text-red-500 cursor-pointer"
                      onClick={handleIconClick}
                    ></i>
                    <input
                      ref={fileInputRef}
                      className="hidden"
                      type="file"
                      onChange={handleFileChange}
                    ></input>
                  </div>
                  {fileName && (
                    <div className="mt-2 text-md text-gray-500 border border-gray-500 p-2 flex justify-start items-center gap-4 rounded-lg ">
                      <img
                        src={URL.createObjectURL(image1)}
                        className="w-20 rounded-xl"
                      ></img>
                      <p>Selected file: {fileName}</p>
                    </div>
                  )}
                  <p className="mt-2 text-gray-500">
                    Recommended to 350 x 350 px (png, jpg, jpeg).
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-3xl pm:mt-8">
        <div className=" p-5 flex  justify-start items-center gap-4 rounded-lg lg:relative  z-0">
            <div className=" lg:absolute pm:left-0 w-1 h-8 rounded-xl bg-[#f84525] -ml-5 "></div>
            <h1 className="text-xl ml-2">Details</h1>
          </div>
          <hr />
          <div>
            <div>
              <form className="w-full mx-auto p-4">
                <div className="space-y-4 my-3">
                  <div>
                    <label
                      htmlFor="description"
                      className="block   text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      rows="7"
                      id="description"
                      placeholder="Please Enter up to 4000 characters"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-5 pm:grid-cols-1">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block  text-gray-700 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      id="phone"
                      placeholder="(123) 456 - 789"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="website"
                      className="block  text-gray-700 mb-2"
                    >
                      Company website{" "}
                    </label>
                    <input
                      type="text"
                      id="website"
                      placeholder="https://company.com"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block   text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="example@email.com"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                </div>
                <hr className="border-1 border-gray-400 my-10"></hr>
                <div className="grid grid-cols-2 gap-4 my-4 pm:grid-cols-1">
                  <div>
                    <label
                      htmlFor="facebook"
                      className="block  text-gray-700 mb-2"
                    >
                      Facebook Page(optional)
                    </label>
                    <input
                      type="text"
                      id="facebook"
                      placeholder="https://facebook.com"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="twitter"
                      className="block   text-gray-700 mb-2"
                    >
                      Twitter profile(optional)
                    </label>
                    <input
                      type="text"
                      id="twitter"
                      placeholder="https://twitter.com"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 my-6 pm:grid-cols-1">
                  <div>
                    <label
                      htmlFor="instagram"
                      className="block  text-gray-700 mb-2"
                    >
                      Instagram profile(optional)
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      placeholder="https://instagram.com"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="linkedin"
                      className="block   text-gray-700 mb-2"
                    >
                      Linkedin page(optional)
                    </label>
                    <input
                      type="text"
                      id="linkedin"
                      placeholder="https://linkedin.com"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                </div>
                <hr className="border-1 border-gray-400 my-10"></hr>
                <div>
                  <label
                    htmlFor="linkedin"
                    className="block text-gray-700 mb-4"
                  >
                    Property amenities(optional)
                  </label>
                  <div className="flex flex-wrap gap-5 ">
                    <div className="flex items-center">
                      <input
                        id="garden"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <label for="garden" className="ml-2 block  text-gray-900">
                        Garden
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="security-cameras-1"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <label
                        for="security-cameras-1"
                        className="ml-2 block  text-gray-900"
                      >
                        Security cameras
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="laundry"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <label
                        for="laundry"
                        className="ml-2 block  text-gray-900"
                      >
                        Laundry
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="internet"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <label
                        for="internet"
                        className="ml-2 block  text-gray-900"
                      >
                        Internet
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="pool"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <label for="pool" className="ml-2 block  text-gray-900">
                        Pool
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="video-surveillance"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <label
                        for="video-surveillance"
                        className="ml-2 block  text-gray-900"
                      >
                        Video surveillance
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="laundry-room"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <label
                        for="laundry-room"
                        className="ml-2 block  text-gray-900"
                      >
                        Laundry room
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="jacuzzi"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <label
                        for="jacuzzi"
                        className="ml-2 block  text-gray-900"
                      >
                        Jacuzzi
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="security-cameras-2"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <label
                        for="security-cameras-2"
                        className="ml-2 block  text-gray-900"
                      >
                        Security cameras
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>


        <div className="bg-white rounded-3xl pm:mt-8">
        <div className=" p-5 flex  justify-start items-center gap-4 rounded-lg lg:relative  z-0">
            <div className=" lg:absolute pm:left-0 w-1 h-8 rounded-xl bg-[#f84525] -ml-5 "></div>
            <h1 className="text-xl ml-2">Opening Hours</h1>
          </div>
          <hr/>
          <div>
                <form className="w-full mx-auto p-4">
                <Drop/>
                  
                </form>
              </div>
          </div>


          <div className="bg-white rounded-3xl pm:mt-8 pm:pb-3">
          <div className=" p-5 flex  justify-start items-center gap-4 rounded-lg lg:relative  z-0">
            <div className=" lg:absolute pm:left-0 w-1 h-8 rounded-xl bg-[#f84525] -ml-5 "></div>
            <h1 className="text-xl ml-2">Add Pricing plan</h1>
          </div>
          <hr/>
          <div className="grid grid-cols-4 gap-5 my-5 pm:grid-cols- p-4">
                    <div>
                      <label htmlFor="title" className="block  text-gray-700 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        placeholder=""
                        className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="description" className="block  text-gray-700 mb-2">
                        Description
                      </label>
                      <input
                        type="text"
                        id="description"
                        placeholder=""
                        className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="price" className="block   text-gray-700 mb-2">
                        Price
                      </label>
                      <input
                        type="text"
                        id="price"
                        placeholder="USD"
                        className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="status" className="block   text-gray-700 mb-2">
                        Status
                      </label>
                      <div className="w-10 h-10 bg-red-600 flex justify-center items-center rounded-xl cur"><i className="fa-solid fa-trash fa-lg text-white"></i></div>
                    </div>

                  </div>
                  <div className="flex justify-center items-center mt-9"><button className="bg-gray-200 px-4 py-4 rounded-xl">+ Add New</button></div>

          </div>


        
      </div>
    </div>
  );
};
