/* global ApexCharts */
import React, { useState, useEffect, useRef } from "react";
import Header2 from "./Header2";
import Sidebar from "./Sidebar";

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 450);

  useEffect(() => {
    // Function to check if screen width is greater than 450px
    const checkIsOpen = () => {
      setIsOpen(window.innerWidth > 450);
    };

    // Add event listener for window resize
    window.addEventListener('resize', checkIsOpen);

    // Call checkIsOpen to set the initial state based on the current screen width
    checkIsOpen();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkIsOpen);
  }, []);

  if(isOpen)
    console.log('opened');

  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: "area",
        height: 400,
        width: "100%",
      },
      series: [
        {
          name: "sales",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
      yaxis: false,
      // yaxis: {
      //     title: {
      //       text: 'Sales',
      //       style: {
      //         color: '#00E396',
      //         fontSize: '16px',
      //         fontFamily: 'Helvetica, Arial, sans-serif',
      //         fontWeight: 600,
      //         cssClass: 'apexcharts-yaxis-title',
      //       }
      //     },
      //     min: 0,
      //     max: 150,
      //     tickAmount: 7,
      //     decimalsInFloat: 2,
      //     labels: {
      //       formatter: (value) => `${value} units`,
      //       style: {
      //         colors: ['#00E396'],
      //         fontSize: '12px',
      //         fontFamily: 'Helvetica, Arial, sans-serif',
      //         fontWeight: 400,
      //         cssClass: 'apexcharts-yaxis-label',
      //       }
      //     },
      //     axisBorder: {
      //       show: true,
      //       color: '#00E396',
      //       offsetX: 0,
      //       offsetY: 0
      //     },
      //     axisTicks: {
      //       show: true,
      //       borderType: 'solid',
      //       color: '#00E396',
      //       width: 6,
      //       offsetX: 0,
      //       offsetY: 0
      //     }
      //   },

      stroke: {
        curve: "smooth",
      },
      fill: {
        colors: ["#facda0"],
        type: "solid",
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  // page to show
  const setPageSize = () => {
    // logic here
  };

  //tables
  const bookings = [
    {
      id: 1,
      name: "Ethan Blackwood",
      date: "18 Dec 2023",
      payment: "Paypal",
      status: "Approved",
    },
    {
      id: 2,
      name: "Alexander Kaminski",
      date: "15 Dec 2023",
      payment: "Payoneer",
      status: "Pending",
    },
    {
      id: 3,
      name: "Pranoti Deshpande",
      date: "15 Nov 2023",
      payment: "Payoneer",
      status: "Approved",
    },
    {
      id: 4,
      name: "Gabriel Nort",
      date: "10 Jul 2023",
      payment: "Swift",
      status: "Canceled",
    },
  ];

  const statusColors = {
    Approved: "text-green-500",
    Pending: "text-orange-500",
    Canceled: "text-red-500",
  };

  return (
    <div className={`${isOpen ? "ml-[20.5rem] pm:ml-0 " : "ml-[5.7rem] pm:ml-0 "} bg-[#f8f4f3] pb-6 z-0 `}>
      <div  iv className=" fixed w-full -ml-4 pm:-ml-28">
        <Header2 sidebarOpen={isOpen} setSidebarOpen={setIsOpen} />
      </div>
   
      <div className={`${
          isOpen && "pm:inset-0 pm:bg-black pm:bg-opacity-50 pm:z-0 "
        }  w-full pt-24 px-6 `}>
        <div
          className="w-full h-64 object-fill rounded-2xl flex justify-between pm:h-60"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        >
          <div className="px-7 pt-10 w-[32%] flex flex-col justify-start gap-4 pm:w-full pm:pt-4">
            <div className="flex justify-start items-center gap-2 pm:w-full">
              <img src="/masonry/02.jpg" className="w-10 "></img>
              <p className="text-xl text-white ">Adobe Photoshop</p>
            </div>
            <div>
              <p className="text-white text-sm mb-3">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
                their default.
              </p>
              <button className="bg-gray-300 px-3 py-3 rounded-xl">
                Start Free Trail
              </button>
            </div>
          </div>
          <div className="mr-10 mt-8">
            <img src="/masonry/02.jpg" className="w-52 pm:hidden"></img>
          </div>
        </div>

        <div className="mt-4  flex justify-around items-center pm:flex-col pm:justify-center pm:items-center pm:gap-3">
          <div className="bg-white w-[20.3rem] h-28 rounded-2xl flex justify-between items-center p-4 pl-10 pm:w-full">
            <div>
              <p className="text-gray-500">Time Bookmarked</p>
              <p className=" text-3xl">2:45</p>
            </div>
            <div>
              <img src="/pic1.png" className="w-24"></img>
            </div>
          </div>
          <div className="bg-white w-[20.3rem] h-28 rounded-2xl flex justify-between items-center p-4 pl-10 pm:w-full">
            <div>
              <p className="text-gray-500">Progress</p>
              <p className=" text-3xl">70%</p>
            </div>
            <div>
              <img src="/pic2.png" className="w-24"></img>
            </div>
          </div>
          <div className="bg-white w-[20.3rem] h-28 rounded-2xl flex justify-between items-center p-4 pl-10 pm:w-full">
            <div>
              <p className="text-gray-500">Revenue</p>
              <p className=" text-3xl">$100</p>
            </div>
            <div>
              <img src="/pic3.png" className="w-24"></img>
            </div>
          </div>
          <div className="bg-white w-[20.3rem] h-28 rounded-2xl flex justify-between items-center p-4 pl-10 pm:w-full">
            <div>
              <p className="text-gray-500">Time-Spent</p>
              <p className=" text-3xl">2:45</p>
            </div>
            <div>
              <img src="/pic1.png" className="w-24"></img>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 mt-4 rounded-2xl flex justify-center items-center pm:flex-col ">
          <div className="flex flex-col justify-between items-center h-48 py-4 w-1/3 px-2 border-r-2  border-gray-300 pm:w-full pm:border-0">
            <div className="flex justify-between items-center w-full px-4 ">
              <p className="text-lg">Total Income</p>
              <div className="border-2 border-gray-300  rounded-xl p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="w-full px-4">
              <p className="text-4xl mb-2">
                $5,899 <span className="text-gray-500 text-sm">(USD)</span>
              </p>
              <p className="text-green-600">
                20.9% <span className="text-black ml-2"> +18.4k this week</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center h-48 py-4 w-1/3 px-2 border-r-2  border-gray-300 pm:w-full pm:border-0 ">
            <div className="flex justify-between items-center w-full px-4 ">
              <p className="text-lg">Visitors</p>
              <div className="border-2 border-gray-300  rounded-xl p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="w-full px-4">
              <p className="text-4xl mb-2">780,192 </p>
              <p className="text-green-600">
                20% <span className="text-black ml-2"> +3.5k this week</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center h-48 py-4 w-1/3 px-2 border-r-2  border-gray-300 pm:w-full pm:border-0 ">
            <div className="flex justify-between items-center w-full px-4 ">
              <p className="text-lg">Total Orders</p>
              <div className="border-2 border-gray-300  rounded-xl p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="w-full px-4">
              <p className="text-4xl mb-2">796,542</p>
              <p className="text-green-600">
                9.01%{" "}
                <span className="text-black ml-2">
                  {" "}
                  decrease compared to last week
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl mt-4 p-4">
          <p className="text-lg m-4">Statistics</p>
          <hr className="mb-4" />
          <div id="chart" className={` ${isOpen && 'pm:opacity-5'  } h-10 w-full `} ref={chartRef}></div>
        </div>

        <div className="bg-white w-full h-[32rem] mt-4 rounded-2xl p-4 pm:overflow-x-auto pm:ml-0 ">
          <div className="p-4">
            <p className="text-xl">Recent Booking</p>
          </div>
          <hr />
          <div>
            <div className="flex justify-between items-center px-2">
              <div className="flex jus items-center gap-2 my-4">
                <p>Show</p>
                <select
                  className="w-20 h-10 bg-[#f8f4f3] border-2 border-gray-300 rounded-xl"
                  onChange={(e) => setPageSize(e.target.value)}
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <p>Entries</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p>Search:</p>
                <input
                  type="text"
                  className=" h-10 bg-[#f8f4f3] rounded-2xl w-full"
                />
              </div>
            </div>
            <div>
              <div className="lg:container  flex flex-col  pm:ml-3">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 bg-pink-100 z-0">SL</th>
                      <th className="py-2 px-4 bg-pink-100 z-0">LOGO</th>
                      <th className="py-2 px-4 bg-pink-100 z-0">NAME</th>
                      <th className="py-2 px-4 bg-pink-100 z-0">BOOKING DATE</th>
                      <th className="py-2 px-4 bg-pink-100 z-0">PAYMENT TYPE</th>
                      <th className="py-2 px-4 bg-pink-100 z-0">STATUS</th>
                      <th className="py-2 px-4 bg-pink-100 z-0">VIEW BOOKING</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking, index) => (
                      <tr key={booking.id} className="text-center">
                        <td className="py-2 px-4">
                          {String(index + 1).padStart(2, "0")}
                        </td>
                        <td className="py-2 px-4 ">
                          <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center">
                            <span>50x50</span>
                          </div>
                        </td>
                        <td className="py-2 px-4">{booking.name}</td>
                        <td className="py-2 px-4">{booking.date}</td>
                        <td className="py-2 px-4">{booking.payment}</td>
                        <td
                          className={`py-2 px-4 ${
                            statusColors[booking.status]
                          }`}
                        >
                          {booking.status}
                        </td>
                        <td className="py-2 px-4">
                          <button className="bg-red-500 text-white px-4 py-2 rounded">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-between items-center mt-6 pb-4">
                  <span>Showing 1 to 5 of {bookings.length} entries</span>
                  <div className="flex space-x-2">
                    <button className="bg-gray-200 px-4 py-2 rounded">
                      &larr;
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded">
                      1
                    </button>
                    <button className="bg-gray-200 px-4 py-2 rounded">
                      &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
