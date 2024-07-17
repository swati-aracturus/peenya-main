import React, { useState, useEffect, useRef } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

import CardSwiper from "./Testing";

export const Home = () => {


  useEffect(() => {
    AOS.init({ duration: 1200 });

    // Force a reinitialization of AOS after the component has mounted
    setTimeout(() => {
      AOS.refresh();
    }, 500); // Delay to ensure the DOM is fully loaded
  }, []);



 
  const cards = Array.from({ length: 9 }, (_, index) => (
    <div key={index} className="card mr-10 pm:mx-4 flex p-0 pm:flex-wrap transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
      <img
        alt="ecommerce"
        className="w-full h-64 object-cover object-center rounded lg:w-1/2 lg:h-auto"
        src="/07.jpg"
      />
      <div className="w-full mt-6 ml-4 ps:ml-0 px-3">
        <div className="flex justify-between items-center">
          <div className="align-items-center d-flex flex-wrap gap-1 text-primary text-justify text-red-500 card-justify mb-2">
            <i className="fa-solid fa-star pm:text-sm"></i>
            <span className="fw-medium text-primary pm:text-sm">
              <span className="text-xl mx-1 pm:text-sm">(4.5)</span>2,391
              reviews
            </span>
          </div>
          <div className="flex justify-justify items-center mr-6">
            <a
              href=""
              className="mr-2 btn-icon shadow-md p-2 flex align-center justify-center bg-white rounded-circle"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Bookmark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
              </svg>
            </a>
            <a
              href=""
              className="btn-icon shadow-md p-2 flex align-center justify-center text-primary bg-white rounded-circle"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Quick View"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="pm:mx-4 ">
          {" "}
          <h1 className="text-gray-900 text-2xl pm:text-lg title-font font-medium mb-1 mt-4 text-justify">
            Green Mart Apartments
          </h1>
          <p className="leading-relaxed pm:text-sm text-justify">
            Dui urna vehicula tincidunt pretium consequat luctus mi, platea
            fermentum conubia tempus ac orci.
          </p>
        </div>
        <div className="flex mt-9 pm:mt-4 pm:mb-10 justify-justify items-center gap-4">
          <a
            href="tel:+4733378901"
            className="flex gap-2 items-center fs-13 fw-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="#9b9b9b"
              className="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
            </svg>
            <span className="leading-relaxed pm:text-[12px] text-justify">
              (123) 456-7890
            </span>
          </a>
          <a href="#" className="flex gap-2 items-center fs-13 fw-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#9b9b9b"
              className="bi bi-compass"
              viewBox="0 0 16 16"
            >
              <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
              <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
            </svg>
            <span className="leading-relaxed pm:text-[12px] text-justify">
              Directions
            </span>
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <Header />
      <div className="bg-[#191e25] from-gray-900 to-black">
        <div className="flex justify-center ">
          <div
            className="pt-[10%] pm:pt-[20%] aos-init aos-animate"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <p className="text-center font-caveat text-[2.5rem] pm:text-lg text-[#F84525] pm:text-[1.37rem]">
              Categories
            </p>
            <h1 className="text-[3rem] text-white  pm:text-2xl text-center pt-4 pb-0 pm:pb-2 pm:leading-3 pm:text-[1.8rem] pm:my-1">
              Featured Categories
            </h1>
            <p className="text-center text-white text-[16px] font-medium py-6 pm:pt-1 pm:text-[15px] pm:mt-2 ">
              Discover exciting categories.{" "}
              <span className="text-[#F84525]">
                Find what you’re looking for
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap w-[95%] pm:w-[95%] mx-auto pt-[5%] ">
          <div className=" pm:w-full px-2 mb-4 transition-transform duration-300 ease-in-out hover:translate-y-[-10px] w-1/4">
            <div className="bg-[#434343] py-4 px-5 text-sm text-grey-dark flex items-center rounded-xl justify-between">
              <div className="py-1 px-1 bg-[#121111] rounded-xl">
                <img src="/fg.png" />
              </div>
              <h1 className="text-white text-xl pbold">
                Apartment&nbsp;
                <br />
                <span className="text-white text-sm">99+ listings</span>
              </h1>
              <button className="text-white text-3xl rotate-45 bold">
                <a href="#">↑ &nbsp;&nbsp;</a>
              </button>
            </div>
          </div>
          <div className="w-1/4 pm:w-full px-2 mb-4 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <div className="bg-[#434343] py-4 px-5 text-sm text-grey-dark flex items-center rounded-xl justify-between">
              <div className="py-1 px-1 bg-[#121111] rounded-xl">
                <img src="/fg.png" />
              </div>
              <h1 className="text-white text-xl pbold">
                Apartment&nbsp;
                <br />
                <span className="text-white text-sm">99+ listings</span>
              </h1>
              <button className="text-white text-3xl rotate-45 bold">
                <a href="#">↑ &nbsp;&nbsp;</a>
              </button>
            </div>
          </div>
          <div className="w-1/4 pm:w-full px-2 mb-4 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <div className="bg-[#434343] py-4 px-5 text-sm text-grey-dark flex items-center rounded-xl justify-between">
              <div className="py-1 px-1 bg-[#121111] rounded-xl">
                <img src="/fg.png" />
              </div>
              <h1 className="text-white text-xl pbold">
                Apartment&nbsp;
                <br />
                <span className="text-white text-sm">99+ listings</span>
              </h1>
              <button className="text-white text-3xl rotate-45 bold">
                <a href="#">↑ &nbsp;&nbsp;</a>
              </button>
            </div>
          </div>
          <div className="w-1/4 pm:w-full px-2 mb-4 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <div className="bg-[#434343] py-4 px-5 text-sm text-grey-dark flex items-center rounded-xl justify-between">
              <div className="py-1 px-1 bg-[#121111] rounded-xl">
                <img src="/fg.png" />
              </div>
              <h1 className="text-white text-xl pbold">
                Apartment&nbsp;
                <br />
                <span className="text-white text-sm">99+ listings</span>
              </h1>
              <button className="text-white text-3xl rotate-45 bold">
                <a href="#">↑ &nbsp;&nbsp;</a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-[95%] pm:w-[95%] mx-auto pb-[2%]">
          <div className="w-1/4 pm:w-full px-2 mb-4 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <div className="bg-[#434343] py-4 px-5 text-sm text-grey-dark flex items-center rounded-xl justify-between">
              <div className="py-1 px-1 bg-[#121111] rounded-xl">
                <img src="/fg.png" />
              </div>
              <h1 className="text-white text-xl pbold">
                Apartment&nbsp;
                <br />
                <span className="text-white text-sm">99+ listings</span>
              </h1>
              <button className="text-white text-3xl rotate-45 bold">
                <a href="#">↑ &nbsp;&nbsp;</a>
              </button>
            </div>
          </div>
          <div className="w-1/4 pm:w-full px-2 mb-4 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <div className="bg-[#434343] py-4 px-5 text-sm text-grey-dark flex items-center rounded-xl justify-between">
              <div className="py-1 px-1 bg-[#121111] rounded-xl">
                <img src="/fg.png" />
              </div>
              <h1 className="text-white text-xl pbold">
                Apartment&nbsp;
                <br />
                <span className="text-white text-sm">99+ listings</span>
              </h1>
              <button className="text-white text-3xl rotate-45 bold">
                <a href="#">↑ &nbsp;&nbsp;</a>
              </button>
            </div>
          </div>
          <div className="w-1/4 pm:w-full px-2 mb-4 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <div className="bg-[#434343] py-4 px-5 text-sm text-grey-dark flex items-center rounded-xl justify-between">
              <div className="py-1 px-1 bg-[#121111] rounded-xl">
                <img src="/fg.png" />
              </div>
              <h1 className="text-white text-xl pbold">
                Apartment&nbsp;
                <br />
                <span className="text-white text-sm">99+ listings</span>
              </h1>
              <button className="text-white text-3xl rotate-45 bold">
                <a href="#">↑ &nbsp;&nbsp;</a>
              </button>
            </div>
          </div>  
          <div className="w-1/4 pm:w-full px-2 mb-4 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <div className="bg-[#434343] py-4 px-5 text-sm text-grey-dark flex items-center rounded-xl justify-between">
              <div className="py-1 px-1 bg-[#121111] rounded-xl">
                <img src="/fg.png" />
              </div>
              <h1 className="text-white text-xl pbold">
                Apartment&nbsp;
                <br />
                <span className="text-white text-sm">99+ listings</span>
              </h1>
              <button className="text-white text-3xl rotate-45 bold">
                <a href="#">↑ &nbsp;&nbsp;</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="pt-[5%] pm:pt-[20%]">
          <p className="text-center text-[2.5rem] pm:text-lg text-[#F84525] font-caveat">
            Best Way
          </p>
          <h1 className="text-[3rem] font-semibold w-4/5 mx-auto pm:text-4xl text-center pt-4 pm:pt-1 pm:leading-10">
            Find Your Dream Place The Best Way
          </h1>
          <p className="text-center mx-auto text-lg font-medium py-6 pm:pt-2 pm:text-sm pm:w-[80%]">
            Discover exciting categories.{" "}
            <span className="text-[#F84525]">Find what you’re looking for</span>{" "}
          </p>
        </div>
      </div>

      <div className="bg-no-repeat numbers-wrapper pb-[5%]">
        <div className="row g-4 pm:pb-[3%]">
          <div className="col-md-4 pm:my-[5%]">
            <div
              className="mx-xl-4 number-wrap text-center aos-init aos-animate"
              data-aos="fade"
              data-aos-delay="400"
            >
              <div
                className="align-items-center bg-primary text-[40px] d-flex font-caveat pm:w-[80px] pm:h-[80px] w-[100px] h-[100px] fs-1 
                            justify-content-center mb-4 mx-auto number-circle rounded-circle text-white "
              >
                {" "}
                <div className="translate-y-4 pm:translate-y-2">1</div>
              </div>
              <h4 className="pm:w-[80%] font-semibold pm:mx-auto">
                Input your location to start looking for landmarks.
              </h4>
              <p className="fs-15 pm:px-2 pm:mx-auto m-0 opacity-75">
                orem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
                vitae quam integer semper.
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-[4%] pm:my-[5%]">
            <div
              className="mx-xl-4 number-wrap text-center second aos-init aos-animate"
              data-aos="fade"
              data-aos-delay="700"
            >
              <div
                className="align-items-center bg-primary text-[40px] d-flex font-caveat pm:w-[80px] pm:h-[80px] w-[100px] h-[100px] fs-1 
                            justify-content-center mb-4 mx-auto number-circle rounded-circle text-white"
              >
                {" "}
                <div className="translate-y-4 pm:translate-y-2">2</div>
              </div>
              <h4 className="pm:w-[90%] font-semibold pm:mx-auto">
                Make an appointment at the place you want to visit.
              </h4>
              <p className="fs-15 m-0 pm:px-2 opacity-75">
                orem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
                vitae quam integer.
              </p>
            </div>
          </div>
          <div className="col-md-4 pm:my-[5%]">
            <div
              className="mx-xl-4 number-wrap text-center aos-init aos-animate"
              data-aos="fade"
              data-aos-delay="1000"
            >
              <div
                className="align-items-center bg-primary d-flex text-[40px] font-caveat pm:w-[80px] pm:h-[80px] w-[100px] h-[100px] fs-1 
                            justify-content-center mb-4 mx-auto number-circle rounded-circle text-white"
              >
                {" "}
                <div className="translate-y-4 pm:translate-y-2">3</div>
              </div>
              <h4 className="pm:w-[90%] font-semibold pm:mx-auto">
                Visit the place and enjoy the experience.
              </h4>
              <p className="fs-15 m-0 pm:px-2 opacity-75">
                orem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
                vitae quam integer aenean.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F84525]">
        <div className="flex justify-center pb-12 ">
          <div
            className="pt-[10%] pm:pt-[20%] aos-init aos-animate w-full"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <p className="text-center text-[2.5rem] pm:text-lg text-white font-caveat">
              Top Regions
            </p>
            <h1 className="text-[3rem] text-white font-semibold pm:text-2xl text-center pt-4 pb-0 pm:pb-2 pm:leading-3">
              Explore Cities
            </h1>
            <p className="text-center text-white text-md font-medium py-6 pm:pt-1 pm:text-xs">
              Discover exciting categories.{" "}
              <span className="text-white ">Find what you’re looking for</span>{" "}
            </p>

            <CardSwiper />

            <div className="flex pm:flex-wrap justify-center align-center w-full pm:px-0 px-16">
              <div className="w-1/2 pm:w-full">
                <h1 className="pl-[10%] pm:px-4 py-6 pm:text-3xl text-[3.5rem] justify-center text-white">
                  Find your perfect Place based on  <span className="font-caveat text-[40px] pm:text-[26px]"> your interest</span>
                </h1>
                <img
                  className="px-[5%] rounded-[10%] "
                  alt="book"
                  src="https://dummyimage.com/600x350/000/fff"
                />
              </div>

              <div className="w-1/2 pm:w-full flex justify-center items-center">
                <div>
                  <p className="mb-2 text-xl pm:text-sm px-[10%] pt-[5%] text-white">
                    Want to have a fantastic travel experience? Let us connect
                    you with diverse categories of businesses, public spots, and
                    famous landmarks so that you can create unforgettable
                    memories.
                  </p>
                  <ul className="list-disc pm:text-sm mx-4 text-xl text-white pl-[10%] pr-[25%] pm:pr-[5%]">
                    <li className="mb-2 py-2 pm:py-0 ">
                      Find popular businesses and important sites near you.
                    </li>
                    <li className="mb-2 py-2">
                      Get place recommendations based on your preferences.
                    </li>
                    <li className="mb-2 py-2">
                      Explore major spots and landmarks around your location.
                    </li>
                    <li className="mb-2 py-2">
                      Discover diverse categories to navigate various areas.
                    </li>{" "}
                  </ul>
                  <button className="bg-white rounded my-4 mx-[10%] p-2">
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex pm:flex-wrap justify-center align-center w-full py-[5%]  mx-auto">
      {/* <div className=""> */}
        <div className="w-[35%] pm:w-full pl-[10%] pm:px-[5%] pt-6 lg:overflow-y-auto lg:sticky lg:top-0 lg:h-screen">
          <p className=" text-[2rem] pm:text-lg text-[#F84525] pm:text-center font-caveat pm:text-[1.37rem]">
            Places
          </p>
          <h1 className="text-[2.3rem] font-medium pm:text-[1.8rem] pm:my-2 pm:text-center pt-4 pm:pt-1 pm:leading-6 pb-0 pm:pb-2 ">
            Discover Your Favourite Place
          </h1>
          <p className="text-justify text-md  py-6 pm:pt-1 pm:text-sm pm:text-center">
            Our publications can provide quality and useful tips and advice for
            companies on how to evaluate SaaS providers and choose the best one
            for their needs, taking into account factors such as price, features
            and support.
          </p>
          <div className="flex justify-center items-center text-center">
            <button className="bg-[#F84525] rounded text-white my-4 pm:text-sm pm:p-4 p-3 ">
              View All Places
            </button>
          </div>
          <svg
            className="text-primary mt-4 d-none d-lg-block svg-responsive"
            width="200"
            height="211"
            viewBox="0 0 200 211"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
              fill="#F84525"
            ></path>
          </svg>
        </div>
        {/* </div> */}
        <div className="w-[60%] pm:w-[100%] pm:pl-0 pl-[4%] ">
          <div className="">{cards}</div>
        </div>
      </div>


      <Footer />
    </>
  );
};


