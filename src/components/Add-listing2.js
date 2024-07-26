
import axios from 'axios';
import React, { useState, useEffect, useRef } from "react";
import Header2 from "./Header2";
import Sidebar from "./Sidebar";
import Drop from "./Drops";
const ListingFormPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    phone: '',
    website: '',
    email: '',
    password: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    garden: false,
    securityCameras1: false,
    laundry: false,
    internet: false,
    pool: false,
    videoSurveillance: false,
    laundryRoom: false,
    jacuzzi: false,
    securityCameras2: false,
    openingHours: {
      monday: { open: '', close: '' },
      tuesday: { open: '', close: '' },
      wednesday: { open: '', close: '' },
      thursday: { open: '', close: '' },
      friday: { open: '', close: '' },
      saturday: { open: '', close: '' },
      sunday: { open: '', close: '' },
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (name.includes('-open') || name.includes('-close')) {
      const day = name.split('-')[0];
      const timeType = name.split('-')[1];
      setFormData({
        ...formData,
        openingHours: {
          ...formData.openingHours,
          [day]: { ...formData.openingHours[day], [timeType]: value },
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addListing2(formData);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error adding the listing:', error);
    }
  };

  const addListing2 = async (listingData) => {
    try {
      const response = await axios.post('/api/add-listing', listingData);
      return response;
    } catch (error) {
      console.error('Error in addListing2:', error);
      throw error;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold">Listing Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 mt-4">
                <div>
                  <label htmlFor="title" className="block text-gray-700">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-[#f8f4f3] sm:text-sm"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="description" className="block text-gray-700 mb-2">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    rows="5"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-[#f8f4f3] sm:text-sm"
                  ></textarea>
                </div>
                <div className="space-y-4 mt-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-4">
                  <div>
                    <label htmlFor="website" className="block text-gray-700">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="www.google.com"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Example@Gmail.com"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-4">
                  <div>
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4 pm:grid-cols-1 mt-4">
                  <div>
                    <label htmlFor="facebook" className="block text-gray-700">Facebook</label>
                    <input
                      type="text"
                      id="facebook"
                      name="facebook"
                      value={formData.facebook}
                      onChange={handleChange}
                      placeholder="https://"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="twitter" className="block text-gray-700">Twitter</label>
                    <input
                      type="text"
                      id="twitter"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleChange}
                      placeholder="https://"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="instagram" className="block text-gray-700">Instagram</label>
                    <input
                      type="text"
                      id="instagram"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      placeholder="https://"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="linkedin" className="block text-gray-700">LinkedIn</label>
                    <input
                      type="text"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="https://"
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="garden"
                        name="garden"
                        checked={formData.garden}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-red-600"
                      />
                      <span className="text-gray-900">Garden</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="securityCameras1"
                        name="securityCameras1"
                        checked={formData.securityCameras1}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-red-600"
                      />
                      <span className="text-gray-900">Security Cameras</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="laundry"
                        name="laundry"
                        checked={formData.laundry}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-red-600"
                      />
                      <span className="text-gray-900">Laundry</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="internet"
                        name="internet"
                        checked={formData.internet}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-red-600"
                      />
                      <span className="text-gray-900">Internet</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="pool"
                        name="pool"
                        checked={formData.pool}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-red-600"
                      />
                      <span className="text-gray-900">Pool</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="videoSurveillance"
                        name="videoSurveillance"
                        checked={formData.videoSurveillance}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-red-600"
                      />
                      <span className="text-gray-900">Video Surveillance</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="laundryRoom"
                        name="laundryRoom"
                        checked={formData.laundryRoom}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-red-600"
                      />
                      <span className="text-gray-900">Laundry Room</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="jacuzzi"
                        name="jacuzzi"
                        checked={formData.jacuzzi}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-red-600"
                      />
                      <span className="text-gray-900">Jacuzzi</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="securityCameras2"
                        name="securityCameras2"
                        checked={formData.securityCameras2}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-red-600"
                      />
                      <span className="text-gray-900">Security Cameras</span>
                    </label>
                  </div>
                </div>
                <div className="mt-8">
                  <h2 className="text-xl font-bold">Opening Hours</h2>
                  <div className="space-y-4 mt-4">
                    {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
                      <div key={day} className="flex items-center space-x-3">
                        <label className="w-1/3 capitalize">{day}</label>
                        <div className="flex-grow flex space-x-2">
                          <input
                            type="time"
                            id={`${day}-open`}
                            name={`${day}-open`}
                            value={formData.openingHours[day].open}
                            onChange={handleChange}
                            className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-[#f8f4f3] sm:text-sm"
                          />
                          <input
                            type="time"
                            id={`${day}-close`}
                            name={`${day}-close`}
                            value={formData.openingHours[day].close}
                            onChange={handleChange}
                            className="block w-1/2 border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-[#f8f4f3] sm:text-sm"
                          />
                        </div>
                      </div>
                    ))}
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
  );
};

export default ListingFormPage;