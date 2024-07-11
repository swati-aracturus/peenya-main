/* global ApexCharts */
import React, { useState, useEffect, useRef } from "react";
import Header2 from "./Header2";
import Sidebar from "./Sidebar";
import Drop from "./Drops";

export const Profile = () => {
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

  const fileInputRef2 = useRef(null);
  const [fileName2, setFileName2] = useState("");
  const [image2, setImage2] = useState("");

  const handleIconClick2 = () => {
    fileInputRef2.current.click();
  };

  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName2(file.name);
      setImage2(file);
    }
  };

  return (
    <div
      className={`${
        isOpen ? "ml-[20.5rem] pm:ml-0 " : "ml-[5.7rem] pm:ml-0"
      } bg-[#f8f4f3] pb-6  `}
    >
      <div className=" fixed w-full  -ml-4 pm:-ml-28 z-[999]">
        <Header2 sidebarOpen={isOpen} setSidebarOpen={setIsOpen} />
      </div>
      <div className="w-full pt-24 px-6 flex flex-col gap-4">
        <div className="bg-white  rounded-3xl p-3 ">
          <div className="w-full lg:relative">
          <img
        src={fileName ?  URL.createObjectURL(image1) : '/banner3.png'}
        className="h-52 object-center rounded-xl  z-0"
        alt="Uploaded"
      ></img>
            <img
              src={fileName2 ? URL.createObjectURL(image2) : '/masonry/04.jpg'}
              className=" rounded-full object-cover w-28 h-28 lg:absolute lg:top-[74%] lg:left-[45%] pm:-mt-12 pm:ml-28 border-4 border-white shadow-lg cursor-pointer"
              onClick={handleIconClick2}
            ></img>
             <input
              ref={fileInputRef2}
              className="hidden"
              type="file"
              onChange={handleFileChange2}
            ></input>

            <button
              className=" lg:absolute lg:right-1  lg:top-1 pm:-mt-[3.7rem] pm:ml-[15rem]  flex justify-center items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
              onClick={handleIconClick}
            >
              <i className="fa-solid fa-image"></i>{" "}
              <p className="text-xs text-gray-500">Upload Header</p>
            </button>
            <input
              ref={fileInputRef}
              className="hidden"
              type="file"
              onChange={handleFileChange}
            ></input>
            
          </div>
          <div className="w-full  flex justify-center items-center lg:pt-24 pm:mt-16">
            <div className="flex justify-center items-center gap-1">
              {" "}
              <h1 className="text-2xl font-semibold">Alexander Kamin</h1>
              <img src="/tick.png " className="w-5"></img>
            </div>
          </div>
          <div className="flex pm:flex-wrap justify-center items-center lg:gap-3 pm:gap-1 text-sm my-4 text-gray-500">
            <div className="flex  justify-end items-center gap-2 ">
              {" "}
              <i className="fa-solid fa-building"></i>
              <p> Pixeel Ltd.</p>
            </div>{" "}
            /
            <div className="flex  justify-end items-center gap-2">
              {" "}
              <i className="fa-solid fa-location-dot"></i>
              <p> San Francisco, US</p>
            </div>
            /
            <div className="flex  justify-end items-center gap-2">
              {" "}
              <i className="fa-solid fa-calendar-day"></i>
              <p> Joined Oct 2023</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl pm:mt-8">
          <div className=" p-5 flex  justify-start items-center gap-4 rounded-lg lg:relative  z-0">
            <div className=" lg:absolute pm:left-0 w-1 h-8 rounded-xl bg-[#f84525] -ml-5 "></div>
            <h1 className="text-xl ml-2">Details</h1>
          </div>

          <hr />
          <div>
            <form className="w-full mx-auto p-4 mt-4">
              <div className="grid grid-cols-3 gap-4 pm:grid-cols-1">
                <div>
                  <label htmlFor="Name" className="block   text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="Name"
                    placeholder="Name"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="Phone" className="block   text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="Phone"
                    placeholder="(123) 456 789"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block  text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="exaample@mail.com"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
              </div>
              <div className="space-y-4 my-4">
                <div>
                  <label
                    htmlFor="Description"
                    className="block   text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    rows={7}
                    type="text"
                    id="Description"
                    placeholder="Please enter up to 4000 characters."
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
                    Facebook Page{" "}
                    <span className="text-xs text-gray-400">(optional)</span>
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
                    Twitter profile
                    <span className="text-xs text-gray-400">(optional)</span>
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
                    Instagram profile
                    <span className="text-xs text-gray-400">(optional)</span>
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
                    Linkedin page
                    <span className="text-xs text-gray-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="linkedin"
                    placeholder="https://linkedin.com"
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
            <h1 className="text-xl ml-2">Change Password</h1>
          </div>
          <hr />
          <div>
            <form className="w-full mx-auto p-4 mt-4">
              <div className="grid grid-cols-2 gap-4 pm:grid-cols-1">
                <div>
                  <label htmlFor="city" className="block   text-gray-700 mb-2">
                    Current Password
                  </label>
                  <input
                    type="text"
                    id="password"
                    placeholder=""
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block  text-gray-700 mb-2"
                  >
                    New Password
                  </label>
                  <input
                    type="text"
                    id="password"
                    placeholder="Address"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 pm:grid-cols-1 mt-4">
                <div>
                  <label
                    htmlFor="password"
                    className="block   text-gray-700 mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    id="password"
                    placeholder=""
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
