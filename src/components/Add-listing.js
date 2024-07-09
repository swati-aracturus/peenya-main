import React, {useRef, useState, useEffect} from "react";
import Drop from "./Drops";
export const Add_listing = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    setHeights(
      contentRefs.current.map((ref) => (ref ? ref.scrollHeight : 0))
    );
  }, []);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };



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
      setImage1(file)
    }
  };
  return (
    <div>
      <div className="container px-28 mx-auto z-50">
        <input type="checkbox" name="check" id="check" />
        <div className="logo-container">
          <img src="/logopeenyainfo.png" height={100} width={200} ></img>
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
              <img src="/user.svg" height={35} width={35} alt="user img"></img>
            </a>
            <a href="#" className="svg-btn ">
              <img src="/heart.svg" height={32} width={32} alt="user img"></img>
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

      <div className="px-5 ">
        <div
          className="w-full h-[28rem] overflow-hidden  bg-cover bg-center relative rounded-3xl "
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/07.jpg"})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
          <div className="relative z-3 m-auto lg:w-[50%] lg:mt-12 flex flex-col gap-4">
            <h2 className="text1 text-center mt-8 lg:text-[3rem] text-white font-semibold">
              Find Your <span className="text-red-500">Dream</span> Place
            </h2>
            <p className="text-center text-white text-[18px] sm:text-[16px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <div className="relative z-3 lg:px-64  mx-auto  w-full">
            <div className="lg:flex lg:flex-wrap lg:justify-center h-28 sd:h-56 mt-12 lg:rounded-full pm:rounded-xl pm:mx-6 align-center items-center px-[5%] my-8 bg-white">
              <form className="w-[30%] sd:w-full px-2 sd:pt-4 mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div iv className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center sd-3 pointer-events-none">
                    <img src="/search.png" height={20} width={20} />
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
                    <img
                      src="location.png"
                      height={23}
                      width={23}
                      className="z-50"
                    />
                  </div>
                  <div className="relative">
                    <select
                      id="default-search"
                      className="block w-full p-4 sd-10 text-sm   border-b-2 border-t-0 border-r-0 border-l-0 border-gray-300 text-[#F84525] hover:ring-0 focus:border-[#F84525] focus:border-b-4 focus:ring-0 transition-all duration-500 "
                      required
                    >
                      <option value="hjjk">
                        &nbsp;&nbsp;&nbsp; Paris, Italy
                      </option>

                      <option value="dxfgyhbjk">&nbsp;&nbsp;&nbsp;Ohio</option>
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
              <div className="w-[20%] sd:w-full p-3 mx-auto bg-[#F84525] text-center text-white rounded-3xl pm:mt-8">
                Search Places
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-5 lg:pt-10 pm:pt-5 pm:px-4">
        <div className="bg-[#f8f4f3] rounded-3xl lg:px-20  lg:py-20 pm:py-10">
          <div className="lg:px-60 pm:px-3">
            <div className="px-20 flex flex-col justify-center items-center pm:px-10 ">
              <p className="text-red-500 text-[2.2rem] my-2 font-semibold pm:text-[15px] pm:mt-1">
                Lisitng
              </p>
              <p className="text-[3rem] my-4 font-semibold pm:text-[30px] pm:mb-3">Add Listing</p>
              <p className="text-">
                Discover exciting categories.{" "}
                <span className="text-red-500">
                  {" "}
                  Find what you’re looking for.
                </span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl pm:mt-8">
              <div className="bg-[#f8f4f3] p-10 flex pm:flex-col  justify-start items-center gap-4 rounded-lg">
                <div className="flex justify-start gap-2">
                  <p className="font-semibold">01/</p>
                  <div className="bg-red-500 w-20 h-20 rounded-full flex justify-center items-center">
                    <i className="fa-solid fa-user text-white fa-xl"></i>
                  </div>
                </div>
                <div>
                  <p className="text-2xl mb-3 ">Basic Informations</p>
                  <p className="mb-4">
                    There are many variations of passages of Lorem Ipsum
                    <br />
                    available, but the majority have
                  </p>
                </div>
              </div>
              <div>
                <form className="w-full mx-auto p-4">
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
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block  text-gray-700 mb-2">
                        Category
                      </label>
                      <select
                        id="category"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* 2nd div */}
            <div className="bg-white p-6 rounded-3xl my-6">
              <div className="bg-[#f8f4f3] p-10 flex pm:flex-col justify-start items-center gap-4 rounded-lg">
                <div className="flex justify-start gap-2">
                  <p className="font-semibold">01/</p>
                  <div className="bg-red-500 w-20 h-20 rounded-full flex justify-center items-center">
                    <i className="fa-solid fa-location-dot text-white fa-xl"></i>
                  </div>
                </div>
                <div>
                  <p className="text-2xl mb-3">Location</p>
                  <p className="mb-4">
                    There are many variations of passages of Lorem Ipsum
                    <br />
                    available, but the majority have
                  </p>
                </div>
              </div>
              <div>
                <form className="w-full mx-auto p-4">
                  <div className="grid grid-cols-2 gap-4 pm:grid-cols-1">
                    <div>
                      <label htmlFor="city" className="block  text-gray-700 mb-2">
                        City
                      </label>
                      <select
                        id="city"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="address" className="block   text-gray-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        placeholder="8706 Herrick Ave, Valley"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 my-4 pm:grid-cols-1">
                    <div>
                      <label htmlFor="state" className="block  text-gray-700 mb-2">
                        State
                      </label>
                      <input
                        type="number"
                        id="state"
                        placeholder="State"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block   text-gray-700 mb-2">
                        Zip-Code
                      </label>
                      <input
                        type="text"
                        id="address"
                        placeholder="3870"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* 3rd div */}
            <div className="bg-white p-6 rounded-3xl my-6">
              <div className="bg-[#f8f4f3] p-10 flex pm:flex-col justify-start items-center gap-4 rounded-lg">
                <div className="flex justify-start gap-2">
                  <p className="font-semibold">01/</p>
                  <div className="bg-red-500 w-20 h-20 rounded-full flex justify-center items-center">
                    <i className="fa-solid fa-image text-white fa-xl"></i>
                  </div>
                </div>
                <div>
                  <p className="text-2xl mb-3">Gallery</p>
                  <p className="mb-4">
                    There are many variations of passages of Lorem Ipsum
                    <br />
                    available, but the majority have
                  </p>
                </div>
              </div>
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
                          <img src={URL.createObjectURL(image1)} className="w-20 rounded-xl"></img><p>Selected file: {fileName}</p>
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
            {/* 4th div */}
            <div className="bg-white p-6 rounded-3xl my-6">
              <div className="bg-[#f8f4f3] p-10 flex pm:flex-col justify-start items-center gap-4 rounded-lg">
                <div className="flex justify-start gap-2">
                  <p className="font-semibold">01/</p>
                  <div className="bg-red-500 w-20 h-20 rounded-full flex justify-center items-center">
                    <i className="fa-solid fa-info text-white fa-xl"></i>
                  </div>
                </div>
                <div>
                  <p className="text-2xl mb-3">Details</p>
                  <p className="mb-4">
                    There are many variations of passages of Lorem Ipsum
                    <br />
                    available, but the majority have
                  </p>
                </div>
              </div>
              <div>
                <form className="w-full mx-auto p-4">
                  <div className="space-y-4 my-3">
                    <div>
                      <label htmlFor="description" className="block   text-gray-700">
                        Description
                      </label>
                      <textarea
                        type="text"
                        rows="7"
                        id="description"
                        placeholder="Please Enter up to 4000 characters"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-5 pm:grid-cols-1">
                    <div>
                      <label htmlFor="phone" className="block  text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="number"
                        id="phone"
                        placeholder="(123) 456 - 789"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block  text-gray-700 mb-2">
                        Company website{" "}
                      </label>
                      <input
                        type="text"
                        id="website"
                        placeholder="https://company.com"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block   text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="example@email.com"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <hr className="border-1 border-gray-400 my-10"></hr>
                  <div className="grid grid-cols-2 gap-4 my-4 pm:grid-cols-1">
                    <div>
                      <label htmlFor="facebook" className="block  text-gray-700 mb-2">
                        Facebook Page(optional)
                      </label>
                      <input
                        type="text"
                        id="facebook"
                        placeholder="https://facebook.com"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="twitter" className="block   text-gray-700 mb-2">
                        Twitter profile(optional)
                      </label>
                      <input
                        type="text"
                        id="twitter"
                        placeholder="https://twitter.com"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 my-6 pm:grid-cols-1">
                    <div>
                      <label htmlFor="instagram" className="block  text-gray-700 mb-2">
                        Instagram profile(optional)
                      </label>
                      <input
                        type="text"
                        id="instagram"
                        placeholder="https://instagram.com"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="linkedin" className="block   text-gray-700 mb-2">
                        Linkedin page(optional)
                      </label>
                      <input
                        type="text"
                        id="linkedin"
                        placeholder="https://linkedin.com"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <hr className="border-1 border-gray-400 my-10"></hr>
                  <div>
                    <label htmlFor="linkedin" className="block text-gray-700 mb-4">
                      Property amenities(optional)
                    </label>
                    <div className="flex flex-wrap gap-5 ">
                    <div className="flex items-center">
                        <input id="garden" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                        <label for="garden" className="ml-2 block  text-gray-900">Garden</label>
                    </div>
                    <div className="flex items-center">
                        <input id="security-cameras-1" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                        <label for="security-cameras-1" className="ml-2 block  text-gray-900">Security cameras</label>
                    </div>
                    <div className="flex items-center">
                        <input id="laundry" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                        <label for="laundry" className="ml-2 block  text-gray-900">Laundry</label>
                    </div>
                    <div className="flex items-center">
                        <input id="internet" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                        <label for="internet" className="ml-2 block  text-gray-900">Internet</label>
                    </div>
                    <div className="flex items-center">
                        <input id="pool" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                        <label for="pool" className="ml-2 block  text-gray-900">Pool</label>
                    </div>
                    <div className="flex items-center">
                        <input id="video-surveillance" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                        <label for="video-surveillance" className="ml-2 block  text-gray-900">Video surveillance</label>
                    </div>
                    <div className="flex items-center">
                        <input id="laundry-room" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                        <label for="laundry-room" className="ml-2 block  text-gray-900">Laundry room</label>
                    </div>
                    <div className="flex items-center">
                        <input id="jacuzzi" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                        <label for="jacuzzi" className="ml-2 block  text-gray-900">Jacuzzi</label>
                    </div>
                    <div className="flex items-center">
                        <input id="security-cameras-2" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                        <label for="security-cameras-2" className="ml-2 block  text-gray-900">Security cameras</label>
                    </div>
                </div>
                  </div>
                </form>
              </div>
            </div>
        <div className="bg-white p-6 rounded-3xl my-6">
              <div className="bg-[#f8f4f3] p-10 flex pm:flex-col justify-start items-center gap-4 rounded-lg">
                <div className="flex justify-start gap-2">
                  <p className="font-semibold">01/</p>
                  <div className="bg-red-500 w-20 h-20 rounded-full flex justify-center items-center">
                    <i className="fa-solid fa-location-dot text-white fa-xl"></i>
                  </div>
                </div>
                <div>
                  <p className="text-2xl mb-3">Location</p>
                  <p className="mb-4">
                    There are many variations of passages of Lorem Ipsum
                    <br />
                    available, but the majority have
                  </p>
                </div>
              </div>
              <div>
                <form className="w-full mx-auto p-4">
                <Drop/>
                  
                </form>
              </div>
            </div>    
              {/* 6th div */}
            <div className="bg-white p-6 rounded-3xl my-6">
            <div className="bg-[#f8f4f3] p-10 flex pm:flex-col justify-start items-center gap-4 rounded-lg">
                <div className="flex justify-start gap-2">
                  <p className="font-semibold">06/</p>
                  <div className="bg-red-500 w-20 h-20 rounded-full flex justify-center items-center">
                    <i className="fa-solid fa-money-check-dollar text-white fa-xl"></i>
                  </div>
                </div>
                <div>
                  <p className="text-2xl mb-3">Details</p>
                  <p className="mb-4">
                    There are many variations of passages of Lorem Ipsum
                    <br />
                    available, but the majority have
                  </p>
                </div>
              </div>

            
              <div className="grid grid-cols-4 gap-5 my-5 pm:grid-cols-1">
                    <div>
                      <label htmlFor="title" className="block  text-gray-700 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        placeholder=""
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
          <div className="flex justify-center items-center mt-16"> <button className="bg-red-600 px-6 py-4 text-white rounded-xl">Submit for Approval  | →</button></div>
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
              <h1 className="mb-8 text-2xl font-semibold pm:-mt-20">Get In Touch</h1>
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
              <img src={process.env.PUBLIC_URL + "/brand.png"} className="w-40"></img>
              <hr className="lg:border border-gray-500 h-10 mx-4"></hr>
              <p className="text-white text-lg pm:-mt-12">© 2022 ListOn - All Rights Reserved- All Rights Reserved</p>
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
  );
};
