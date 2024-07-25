import React, { useState, useEffect, useRef } from "react";
import Header2 from "./Header2";
import Sidebar from "./Sidebar";
import Drop from "./Drops";
import axios from "axios";

export const Add_listing2 = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 450);
  const [fileName, setFileName] = useState("");
  const [image1, setImage1] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const checkIsOpen = () => {
      setIsOpen(window.innerWidth > 450);
    };

    window.addEventListener("resize", checkIsOpen);
    checkIsOpen();
    return () => window.removeEventListener("resize", checkIsOpen);
  }, []);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", event.target["listing-title"].value);
    formData.append("category", event.target["category"].value);
    formData.append("tags", event.target["tags"].value);
    formData.append("city", event.target["city"].value);
    formData.append("address", event.target["address"].value);
    formData.append("state", event.target["state"].value);
    formData.append("zip_code", event.target["zip-code"].value);
    formData.append("description", event.target["description"].value);
    formData.append("phone", event.target["phone"].value);
    formData.append("website", event.target["website"].value);
    formData.append("email", event.target["email"].value);
    formData.append("facebook", event.target["facebook"].value);
    formData.append("twitter", event.target["twitter"].value);
    formData.append("instagram", event.target["instagram"].value);
    formData.append("linkedin", event.target["linkedin"].value);
    formData.append("amenities", JSON.stringify([
      event.target["garden"].checked,
      event.target["security-cameras-1"].checked,
      event.target["laundry"].checked,
      event.target["internet"].checked,
      event.target["pool"].checked,
      event.target["video-surveillance"].checked,
      event.target["laundry-room"].checked,
      event.target["jacuzzi"].checked,
      event.target["security-cameras-2"].checked,
    ]));
    formData.append("opening_hours", JSON.stringify([
      // Add your opening hours data
    ]));
    formData.append("pricing_plan", JSON.stringify([
      {
        title: event.target["pricing-title"].value,
        description: event.target["pricing-description"].value,
        price: event.target["pricing-price"].value,
      }
    ]));
    if (image1) {
      formData.append("gallery", image1);
    }

    try {
      const response = await axios.post("http://api.peenya.info/api/user/add_listing", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`${
        isOpen ? "ml-[20.5rem] pm:ml-0 " : "ml-[5.7rem] pm:ml-0"
      } bg-[#f8f4f3] pb-6`}
    >
      <div className="fixed w-full -ml-4 pm:-ml-28">
        <Header2 sidebarOpen={isOpen} setSidebarOpen={setIsOpen} />
      </div>
      <div className="w-full pt-24 px-6 flex flex-col gap-4">
        <div className="bg-white rounded-3xl pm:mt-8">
          <div className="p-5 flex justify-start items-center gap-4 rounded-lg lg:relative z-0">
            <div className="lg:absolute pm:left-0 w-1 h-8 rounded-xl bg-[#f84525] -ml-5"></div>
            <h1 className="text-xl ml-2">Basic Informations</h1>
          </div>
          <hr />
          <div>
            <form className="w-full mx-auto p-4 mt-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 pm:grid-cols-1">
                <div>
                  <label
                    htmlFor="listing-title"
                    className="block text-gray-700 mb-2"
                  >
                    Listing Title
                  </label>
                  <input
                    type="text"
                    id="listing-title"
                    name="listing-title"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block text-gray-700 mb-2"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
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
                  <label htmlFor="tags" className="block text-gray-700">
                    Tags
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    placeholder="+ Add Tags"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pm:grid-cols-1">
                <div>
                  <label htmlFor="city" className="block text-gray-700 mb-2">
                    City
                  </label>
                  <select
                    id="city"
                    name="city"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  >
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="address" className="block text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pm:grid-cols-1 mt-4">
                <div>
                  <label htmlFor="state" className="block text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="State"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="zip-code" className="block text-gray-700 mb-2">
                    Zip-Code
                  </label>
                  <input
                    type="text"
                    id="zip-code"
                    name="zip-code"
                    placeholder="3870"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="description" className="block text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="5"
                  placeholder="Description"
                  className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                ></textarea>
              </div>
              <div className="space-y-4 mt-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="(123) 456-7890"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-4">
                <div>
                  <label htmlFor="website" className="block text-gray-700">
                    Website
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    placeholder="www.google.com"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Example@Gmail.com"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 pm:grid-cols-1 mt-4">
                <div>
                  <label htmlFor="facebook" className="block text-gray-700">
                    Facebook
                  </label>
                  <input
                    type="text"
                    id="facebook"
                    name="facebook"
                    placeholder="https://"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="twitter" className="block text-gray-700">
                    Twitter
                  </label>
                  <input
                    type="text"
                    id="twitter"
                    name="twitter"
                    placeholder="https://"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="instagram" className="block text-gray-700">
                    Instagram
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    placeholder="https://"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="linkedin" className="block text-gray-700">
                    Linkedin
                  </label>
                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    placeholder="https://"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-bold">Amenities</h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="garden"
                      name="garden"
                      className="form-checkbox h-5 w-5 text-red-600"
                    />
                    <span className="text-gray-900">Garden</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="security-cameras-1"
                      name="security-cameras-1"
                      className="form-checkbox h-5 w-5 text-red-600"
                    />
                    <span className="text-gray-900">Security Cameras 1</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="laundry"
                      name="laundry"
                      className="form-checkbox h-5 w-5 text-red-600"
                    />
                    <span className="text-gray-900">Laundry</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="internet"
                      name="internet"
                      className="form-checkbox h-5 w-5 text-red-600"
                    />
                    <span className="text-gray-900">Internet</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="pool"
                      name="pool"
                      className="form-checkbox h-5 w-5 text-red-600"
                    />
                    <span className="text-gray-900">Pool</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="video-surveillance"
                      name="video-surveillance"
                      className="form-checkbox h-5 w-5 text-red-600"
                    />
                    <span className="text-gray-900">Video Surveillance</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="laundry-room"
                      name="laundry-room"
                      className="form-checkbox h-5 w-5 text-red-600"
                    />
                    <span className="text-gray-900">Laundry Room</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="jacuzzi"
                      name="jacuzzi"
                      className="form-checkbox h-5 w-5 text-red-600"
                    />
                    <span className="text-gray-900">Jacuzzi</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="security-cameras-2"
                      name="security-cameras-2"
                      className="form-checkbox h-5 w-5 text-red-600"
                    />
                    <span className="text-gray-900">Security Cameras 2</span>
                  </label>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-bold">Opening Hours</h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center space-x-3">
                    <label className="w-1/3">Monday</label>
                    <div className="flex-grow flex space-x-2">
                      <input
                        type="time"
                        id="monday-open"
                        name="monday-open"
                        className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                      <input
                        type="time"
                        id="monday-close"
                        name="monday-close"
                        className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <label className="w-1/3">Tuesday</label>
                    <div className="flex-grow flex space-x-2">
                      <input
                        type="time"
                        id="tuesday-open"
                        name="tuesday-open"
                        className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                      <input
                        type="time"
                        id="tuesday-close"
                        name="tuesday-close"
                        className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <label className="w-1/3">Wednesday</label>
                    <div className="flex-grow flex space-x-2">
                      <input
                        type="time"
                        id="wednesday-open"
                        name="wednesday-open"
                        className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                      <input
                        type="time"
                        id="wednesday-close"
                        name="wednesday-close"
                        className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <label className="w-1/3">Thursday</label>
                    <div className="flex-grow flex space-x-2">
                      <input
                        type="time"
                        id="thursday-open"
                        name="thursday-open"
                        className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                      <input
                        type="time"
                        id="thursday-close"
                        name="thursday-close"
                        className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <label className="w-1/3">Friday</label>
                    <div className="flex-grow flex space-x-2">
                      <input
                        type="time"
                        id="friday-open"
                        name="friday-open"
                        className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                      <input
                        type="time"
                        id="friday-close"
                        name="friday-close"
                        className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <label className="w-1/3">Saturday</label>
                    <div className="flex-grow flex space-x-2">
                      <input
                        type="time"
                        id="saturday-open"
                        name="saturday-open"
                        className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                      <input
                        type="time"
                        id="saturday-close"
                        name="saturday-close"
                        className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <label className="w-1/3">Sunday</label>
                    <div className="flex-grow flex space-x-2">
                      <input
                        type="time"
                        id="sunday-open"
                        name="sunday-open"
                        className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                      <input
                        type="time"
                        id="sunday-close"
                        name="sunday-close"
                        className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-[#f8f4f3] text-[#ba8f8b] font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#e0d7d6] focus:outline-none focus:ring-2 focus:ring-[#ba8f8b] focus:ring-opacity-75"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingFormPage