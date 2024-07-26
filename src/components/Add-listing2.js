import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import Header2 from "./Header2";
import Sidebar from "./Sidebar";

export const Add_listing2 = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 450);
  const [formData, setFormData] = useState({
    listingTitle: "",
    category: "",
    tags: "",
    city: "",
    address: "",
    state: "",
    zipCode: "",
    description: "",
    phone: "",
    website: "",
    email: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    amenities: {
      garden: false,
      securityCameras1: false,
      laundry: false,
      internet: false,
      pool: false,
      videoSurveillance: false,
      laundryRoom: false,
      jacuzzi: false,
      securityCameras2: false,
    },
    pricingPlans: [{ title: "", description: "", price: "", status: "" }],
  });

  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [image1, setImage1] = useState("");

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

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        amenities: {
          ...prev.amenities,
          [id]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handlePricingChange = (index, event) => {
    const { id, value } = event.target;
    const newPricingPlans = [...formData.pricingPlans];
    newPricingPlans[index][id] = value;
    setFormData((prev) => ({
      ...prev,
      pricingPlans: newPricingPlans,
    }));
  };

  const handleAddPricingPlan = () => {
    setFormData((prev) => ({
      ...prev,
      pricingPlans: [
        ...prev.pricingPlans,
        { title: "", description: "", price: "", status: "" },
      ],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Prepare form data
      const data = new FormData();
      data.append("listingTitle", formData.listingTitle);
      data.append("category", formData.category);
      data.append("tags", formData.tags);
      data.append("city", formData.city);
      data.append("address", formData.address);
      data.append("state", formData.state);
      data.append("zipCode", formData.zipCode);
      data.append("description", formData.description);
      data.append("phone", formData.phone);
      data.append("website", formData.website);
      data.append("email", formData.email);
      data.append("facebook", formData.facebook);
      data.append("twitter", formData.twitter);
      data.append("instagram", formData.instagram);
      data.append("linkedin", formData.linkedin);

      // Append amenities
      for (const [key, value] of Object.entries(formData.amenities)) {
        data.append(`amenities[${key}]`, value);
      }

      // Append pricing plans
      formData.pricingPlans.forEach((plan, index) => {
        data.append(`pricingPlans[${index}][title]`, plan.title);
        data.append(`pricingPlans[${index}][description]`, plan.description);
        data.append(`pricingPlans[${index}][price]`, plan.price);
        data.append(`pricingPlans[${index}][status]`, plan.status);
      });

      // Append file
      if (image1) {
        data.append("image1", image1);
      }

      // Make API request
      const response = await Axios.post("https://api.peenya.info/api/user/add_listing", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle success
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      className={`${
        isOpen ? "ml-[20.5rem] pm:ml-0 " : "ml-[5.7rem] pm:ml-0"
      } bg-[#f8f4f3] pb-6  `}
    >
      <div className="fixed w-full -ml-4 pm:-ml-28">
        <Header2 sidebarOpen={isOpen} setSidebarOpen={setIsOpen} />
      </div>
      <div className="w-full pt-24 px-6 flex flex-col gap-4">
        <div className="bg-white rounded-3xl pm:mt-8">
          <div className="p-5 flex justify-start items-center gap-4 rounded-lg lg:relative z-0">
            <div className="lg:absolute pm:left-0 w-1 h-8 rounded-xl bg-[#f84525] -ml-5 "></div>
            <h1 className="text-xl ml-2">Basic Informations</h1>
          </div>
          <hr />
          <form className="w-full mx-auto p-4 mt-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 pm:grid-cols-1">
              <div>
                <label htmlFor="listingTitle" className="block text-gray-700 mb-2">Listing Title</label>
                <input
                  type="text"
                  id="listingTitle"
                  value={formData.listingTitle}
                  onChange={handleChange}
                  className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-gray-700 mb-2">Category</label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                >
                  <option value="">Select Category</option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  <option value="category3">Category 3</option>
                </select>
              </div>
            </div>
            <div className="space-y-4 my-3">
              <div>
                <label htmlFor="tags" className="block text-gray-700">Tags</label>
                <input
                  type="text"
                  id="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="+ Add Tags"
                  className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                />
              </div>
            </div>
            <div className="my-3">
              <label htmlFor="description" className="block text-gray-700">Description</label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 pm:grid-cols-1">
              <div>
                <label htmlFor="city" className="block text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pm:grid-cols-1">
              <div>
                <label htmlFor="state" className="block text-gray-700">State</label>
                <input
                  type="text"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-gray-700">Zip Code</label>
                <input
                  type="text"
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pm:grid-cols-1">
              <div>
                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-gray-700">Website</label>
                <input
                  type="text"
                  id="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pm:grid-cols-1">
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="facebook" className="block text-gray-700">Facebook</label>
                <input
                  type="text"
                  id="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pm:grid-cols-1">
              <div>
                <label htmlFor="twitter" className="block text-gray-700">Twitter</label>
                <input
                  type="text"
                  id="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="instagram" className="block text-gray-700">Instagram</label>
                <input
                  type="text"
                  id="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pm:grid-cols-1">
              <div>
                <label htmlFor="linkedin" className="block text-gray-700">LinkedIn</label>
                <input
                  type="text"
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-700">Upload Image</label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="mt-1"
                />
                {fileName && <p>Selected file: {fileName}</p>}
              </div>
            </div>
            <div className="my-3">
              <label className="block text-gray-700">Amenities</label>
              <div className="space-y-2">
                {Object.keys(formData.amenities).map((amenity) => (
                  <div key={amenity}>
                    <input
                      type="checkbox"
                      id={amenity}
                      checked={formData.amenities[amenity]}
                      onChange={handleChange}
                    />
                    <label htmlFor={amenity} className="ml-2 text-gray-700">{amenity}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-3">
              <label className="block text-gray-700">Pricing Plans</label>
              {formData.pricingPlans.map((plan, index) => (
                <div key={index} className="border p-4 rounded-md mb-4">
                  <div>
                    <label htmlFor={`pricingPlans[${index}][title]`} className="block text-gray-700">Title</label>
                    <input
                      type="text"
                      id={`pricingPlans[${index}][title]`}
                      value={plan.title}
                      onChange={(e) => handlePricingChange(index, e)}
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor={`pricingPlans[${index}][description]`} className="block text-gray-700">Description</label>
                    <input
                      type="text"
                      id={`pricingPlans[${index}][description]`}
                      value={plan.description}
                      onChange={(e) => handlePricingChange(index, e)}
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor={`pricingPlans[${index}][price]`} className="block text-gray-700">Price</label>
                    <input
                      type="text"
                      id={`pricingPlans[${index}][price]`}
                      value={plan.price}
                      onChange={(e) => handlePricingChange(index, e)}
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor={`pricingPlans[${index}][status]`} className="block text-gray-700">Status</label>
                    <input
                      type="text"
                      id={`pricingPlans[${index}][status]`}
                      value={plan.status}
                      onChange={(e) => handlePricingChange(index, e)}
                      className="mt-1 block w-full border bg-[#f8f4f3] border-gray-300 rounded-md shadow-sm focus:ring-[#f8f4f3] focus:shadow-lg focus:border-ring-[#f8f4f3] sm:text-sm"
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddPricingPlan}
                className="text-blue-600"
              >
                + Add Pricing Plan
              </button>
            </div>
            <div className="my-4">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Sidebar sidebarOpen={isOpen} setSidebarOpen={setIsOpen} />
    </div>
  );
};

export default Add_listing2;