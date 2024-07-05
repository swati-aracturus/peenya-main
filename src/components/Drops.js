import React, { useState, useRef, useEffect } from "react";
// import './App.css'; // Ensure you have TailwindCSS setup in your project

const Accordion = ({ title, children, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <div className=" mx-auto mt-4">
      <div className="border rounded-md">
        <button
          onClick={handleClick}
          className="w-full p-4 text-left bg-gray-200 rounded-md"
        >
          <div className="flex justify-between items-center">
            <span>{title}</span>
            <svg
              className={`w-5 h-5 transition-transform transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </button>
        <div
          ref={contentRef}
          style={{ maxHeight }}
          className="transition-max-height duration-500 ease-in-out overflow-hidden"
        >
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

const Drop = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="App w-full">
      <Accordion
        title={
          <React.Fragment>
            <i className="fa-solid fa-calendar mr-3 text-xl text-red-600"></i>
            Add schedule plan (optional)
          </React.Fragment>
        }
        isOpen={openIndex === 0}
        onClick={() => handleAccordionClick(0)}
      >
        <div className="w-full">
          <form className="w-full mx-auto p-4">
            <div className="grid grid-cols-4 gap-5 pm:grid-cols-1">
              <div>
                <label htmlFor="date" className="block  text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  placeholder=""
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="time" className="block  text-gray-700 mb-2">
                  Time
                </label>
                <input
                  type="datetime-local"
                  id="time"
                  placeholder=""
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="place" className="block  text-gray-700 mb-2">
                  Place
                </label>
                <input
                  type="text"
                  id="place"
                  placeholder="Place"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="address" className="block   text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="Address"
                  placeholder="8709 herrickAve, Valley"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-9">
              <button className="bg-gray-200 px-4 py-4 rounded-xl">
                + Add Another Schedule Time
              </button>
            </div>
          </form>
        </div>
      </Accordion>

      <Accordion
        title={
          <React.Fragment>
            <i className="fa-solid fa-mug-hot mr-3 text-2xl text-red-600"></i>
            Add schedule plan (optional)
          </React.Fragment>
        }
        isOpen={openIndex === 1}
        onClick={() => handleAccordionClick(1)}
      >
        <div className="w-full">
          <form className="w-full mx-auto p-4">
            <div className="grid grid-cols-3 gap-5 pm:grid-cols-1">
              <div>
                <label htmlFor="date" className="block  text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="date"
                  id="date"
                  placeholder=""
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block  text-gray-700 mb-2"
                >
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
                <label htmlFor="place" className="block  text-gray-700 mb-2">
                  Meal Type
                </label>
                <select
                  id="category"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Select Meal Type</option>
                  <option>Starter</option>
                  <option>Soup</option>
                  <option>Main Course</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center items-center mt-9">
              <button className="bg-gray-200 px-4 py-4 rounded-xl">
                + Add Another Schedule Time
              </button>
            </div>
          </form>
        </div>
      </Accordion>

      <Accordion
        title={
          <React.Fragment>
            <i className="fa-solid fa-clock mr-3 text-2xl text-red-600"></i>
            Add schedule plan (optional)
          </React.Fragment>
        }
        isOpen={openIndex === 2}
        onClick={() => handleAccordionClick(2)}
      >
        <div>
          <form className="w-full mx-auto p-4">
            <div className="grid grid-cols-3 gap-5 pm:grid-cols-1">
              <div>
                <p>Monday</p>
              </div>
              <div>
                <input
                  type="text"
                  id="date"
                  placeholder="Open"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="time"
                  placeholder="Open"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Tuesday</p>
              </div>
              <div>
                <input
                  type="text"
                  id="date"
                  placeholder="Open"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="time"
                  placeholder="Open"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Wednesday</p>
              </div>
              <div>
                <input
                  type="text"
                  id="date"
                  placeholder="Open"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="time"
                  placeholder="Open"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Thursday</p>
              </div>
              <div>
                <input
                  type="text"
                  id="date"
                  placeholder="Open"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="time"
                  placeholder="Open"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Friday</p>
              </div>
              <div>
                <input
                  type="text"
                  id="date"
                  placeholder="Open"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="time"
                  placeholder="Open"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Saturday</p>
              </div>
              <div>
                <input
                  type="text"
                  id="date"
                  placeholder="Open"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="time"
                  placeholder="Open"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <p>Sunday</p>
              </div>
              <div>
                <input
                  type="text"
                  id="date"
                  placeholder="Open"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="time"
                  placeholder="Open"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </form>
        </div>
      </Accordion>
    </div>
  );
};

export default Drop;
