import React, { useState } from "react";
import Articles from "./Articles";
export default function Footer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    },
    {
      text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    },
    { text: "Third Slide Text" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <div
        className="w-full h-[40rem] overflow-hidden  bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/07.jpg"})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 m-auto p-8 flex flex-col gap-4 pm:p-2">
          <h2 className="text-red-500 text-center text-[29px] font-caveat">Testimonial</h2>
          <h2 className="text-[48px] text-center mx-[30%] text-white font-bold pm:mx-[2%] pm:text-[30px]">
            See What Our Clients Say About Us
          </h2>
          <p className="text-center text-white text-[18px] ">
            Discover exciting categories.{" "}
            <span className="text-red-500">Find what you’re looking for.</span>
          </p>
        </div>

        <div className="relative z-10 px-40  mx-auto  w-full h-[20rem] pm:px-5">
          <div className="relative mx-auto">
            <div className="overflow-hidden rounded-lg ">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-transform duration-500 ease-in-out w-full h-full ${
                    index === currentIndex ? "block" : "hidden"
                  }`}
                >
                  <div className="p-20  text-white text-center text-[2rem] h-full w-full pm:text-[20px] pm:px-2">
                    {slide.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Slider controls */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-2 bg-gray-600 text-white rounded-full"
            >
              ←
            </button>

            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-2 bg-gray-600 text-white rounded-full"
            >
              →
            </button>
          </div>
          </div>
          </div>

      <Articles />

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
}
