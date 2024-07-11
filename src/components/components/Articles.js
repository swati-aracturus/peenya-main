import React, { useState } from "react";

const cards = [
  {
    id: 1,
    image: process.env.PUBLIC_URL + "/07.jpg",
    date: "June 28, 2023",
    title: "Praesent sit amet augue tincidunt, venenatis risus ut.",
    by: "Alaxander  kaminski",
    post: "Data Analyst",
  },
  {
    id: 2,
    image: process.env.PUBLIC_URL + "/07.jpg",
    date: "June 28, 2023",
    title: "Praesent sit amet augue tincidunt, venenatis risus ut.",
    by: "Alaxander  kaminski",
    post: "Data Analyst",
  },
  {
    id: 3,
    image: process.env.PUBLIC_URL + "/07.jpg",
    date: "June 28, 2023",
    title: "Praesent sit amet augue tincidunt, venenatis risus ut.",
    by: "Alaxander  kaminski",
    post: "Data Analyst",
  },
  {
    id: 4,
    image: process.env.PUBLIC_URL + "/07.jpg",
    date: "June 28, 2023",
    title: "Praesent sit amet augue tincidunt, venenatis risus ut.",
    by: "Alaxander  kaminski",
    post: "Data Analyst",
  },
  {
    id: 5,
    image: process.env.PUBLIC_URL + "/07.jpg",
    date: "June 28, 2023",
    title: "Praesent sit amet augue tincidunt, venenatis risus ut.",
    by: "Alaxander  kaminski",
    post: "Data Analyst",
  },
  //   {
  //     id: 6,
  //     image: process.env.PUBLIC_URL + '/06.jpg',
  //     location: 'Italy',
  //     city: 'Vanish City',
  //     listings: '120+ listings',
  //     link: 'listings-map-grid-1.html',
  //   }
];

const Articles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3; // Number of cards visible at once
  const totalCards = cards.length;
  const maxIndex = Math.ceil(totalCards / cardsToShow) - 1;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  return (
    <div className="relative w-[90%] py-8 m-auto mt-12  mb-20">
      <div className="px-[20rem] mb-12 pm:px-0">
        <div>
          <h2 className="text-red-500 text-3xl text-center pm:text-xl">
            Our Latest Articles
          </h2>
        </div>
        <div>
          <p className="text-[3.4rem] font-semibold text-center pm:text-3xl">
            Discover Our Latest News And Articles
          </p>
        </div>
        <div>
          <p className="text-center">
            {" "}
            Discover exciting categories.{" "}
            <span className="text-red-500 font-semibold">
              Find what you’re looking for.
            </span>{" "}
          </p>
        </div>
      </div>

      <div className="overflow-hidden mb-[3%]">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {cards.map((card) => (
            <div key={card.id} className="flex-shrink-0 ml-2 p-2 ">
              <div className="relative rounded-2xl overflow-hidden w-[430px] h-[490px] border-2">
                <div className="flex flex-col">
                  <div>
                    <img
                      src={card.image}
                      alt={card.image}
                      className="  object-fit w-full "
                    />
                  </div>
                  <div className="p-3">
                    <div className="p-2 flex justify-start items-center gap-3">
                      <p>{card.date}</p>{" "}
                      <button className="text-red-500 py-1 px-2 text-sm border border-red-700 rounded-lg ">
                        Events
                      </button>
                    </div>
                    <h2 className="text-2xl  mb-3 p-2">{card.title}</h2>
                    <hr className=" border-0 h-[1px] bg-slate-300 mb-4"></hr>
                    <div className="flex justify-start items-center gap-2 ">
                     
                        <img src={card.image} className="w-12 h-12 rounded-full "></img>
                      <div className="ml-2">
                      <h3 className="">By {card.by}</h3>
                      <h3>{card.post}</h3>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute bottom-0 right-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition mr-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.293 12.293a1 1 0 0 0 0-1.414L6.414 7.5l4.879-4.879a1 1 0 0 0-1.414-1.414l-5.5 5.5a1 1 0 0 0 0 1.414l5.5 5.5a1 1 0 0 0 1.414 0z"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute bottom-0 left-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition ml-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.707 3.707a1 1 0 0 1 0 1.414L9.586 8l-4.879 4.879a1 1 0 0 1-1.414-1.414L7.586 8 3.293 3.707a1 1 0 0 1 1.414-1.414l5.5 5.5a1 1 0 0 1 0 1.414l-5.5 5.5a1 1 0 0 1-1.414-1.414L7.586 8 3.293 3.707z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Articles;
