import React, { useState, useEffect, useRef } from "react";

const cards = [
  {
    id: 1,
    image: process.env.PUBLIC_URL + "/07.jpg",
    date: "June 28, 2023",
    title: "Praesent sit amet augue tincidunt, venenatis risus ut.",
    by: "Alaxander Kaminski",
    post: "Data Analyst",
  },
  {
    id: 2,
    image: process.env.PUBLIC_URL + "/07.jpg",
    date: "June 28, 2023",
    title: "Praesent sit amet augue tincidunt, venenatis risus ut.",
    by: "Alaxander Kaminski",
    post: "Data Analyst",
  },
  {
    id: 3,
    image: process.env.PUBLIC_URL + "/07.jpg",
    date: "June 28, 2023",
    title: "Praesent sit amet augue tincidunt, venenatis risus ut.",
    by: "Alaxander Kaminski",
    post: "Data Analyst",
  },
  {
    id: 4,
    image: process.env.PUBLIC_URL + "/07.jpg",
    date: "June 28, 2023",
    title: "Praesent sit amet augue tincidunt, venenatis risus ut.",
    by: "Alaxander Kaminski",
    post: "Data Analyst",
  },
  {
    id: 5,
    image: process.env.PUBLIC_URL + "/07.jpg",
    date: "June 28, 2023",
    title: "Praesent sit amet augue tincidunt, venenatis risus ut.",
    by: "Alaxander Kaminski",
    post: "Data Analyst",
  },
];

const Articles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3; // Number of cards visible at once on larger screens
  const cardsToShowMobile = 1; // Number of cards visible at once on mobile
  const totalCards = cards.length;
  const sliderRef = useRef(null);

  useEffect(() => {
    // Auto slide every 3 seconds
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      const totalVisibleCards = window.innerWidth < 768 ? cardsToShowMobile : cardsToShow;
      sliderRef.current.style.transition = currentIndex === 0 || currentIndex === totalCards * 2 ? 'none' : 'transform 0.3s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${currentIndex * (100 / totalVisibleCards)}%)`;
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalCards - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalCards * 2 - 1 ? totalCards : prevIndex + 1));
  };

  const handleTransitionEnd = () => {
    if (currentIndex === totalCards * 2) {
      setCurrentIndex(totalCards);
    } else if (currentIndex === 0) {
      setCurrentIndex(totalCards);
    }
  };

  return (
    <div className="relative w-[90%] py-8 m-auto mt-12 mb-20">
      <div className="px-[20rem] mb-12 pm:px-0">
        <div>
          <h2 className="text-red-500 text-[2.5rem] text-center pm:text-xl font-caveat">
            Our Latest Articles
          </h2>
        </div>
        <div>
          <p className="text-[3rem] font-semibold text-center pm:text-3xl">
            Discover Our Latest News And Articles
          </p>
        </div>
        <div>
          <p className="text-center">
            Discover exciting categories.{" "}
            <span className="text-red-500 font-semibold">
              Find what you’re looking for.
            </span>{" "}
          </p>
        </div>
      </div>

      <div className="overflow-hidden mb-[3%] relative">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          ref={sliderRef}
          onTransitionEnd={handleTransitionEnd}
        >
          {[...cards, ...cards, ...cards].map((card, index) => (
            <div key={card.id + "-" + index} className={`flex-shrink-0 ml-2 p-2 ${window.innerWidth < 768 ? 'w-full' : 'w-[430px]'}`}>
              <div className="relative rounded-2xl overflow-hidden h-[490px] border-2">
                <div className="flex flex-col">
                  <div className="overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-cover w-full h-[60%] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"
                    />
                  </div>
                  <div className="p-3">
                    <div className="p-2 flex justify-start items-center gap-3">
                      <p>{card.date}</p>{" "}
                      <button className="text-red-500 py-1 px-2 text-sm border border-red-700 rounded-lg ">
                        Events
                      </button>
                    </div>
                    <h2 className="text-2xl mb-3 p-2 pm:text-xl">{card.title}</h2>
                    <hr className="border-0 h-[1px] bg-slate-300 mb-4" />
                    <div className="flex justify-start items-center gap-2">
                      <img src={card.image} className="w-12 h-12 rounded-full" />
                      <div className="ml-2">
                        <h3>By {card.by}</h3>
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
          className="absolute  right-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition mr-2"
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
          className="absolute left-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition ml-2"
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
