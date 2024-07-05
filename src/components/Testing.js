import React, { useState } from 'react';

const cards = [
  {
    id: 1,
    image: process.env.PUBLIC_URL + '/01.jpg',
    location: 'Jamaica',
    city: 'Kingston',
    listings: '100+ listings',
    link: 'listings-map-grid-1.html',
  },
  {
    id: 2,
    image: process.env.PUBLIC_URL + '/02.jpg',
    location: 'Jordan',
    city: 'Amman',
    listings: '59+ listings',
    link: 'listings-map-grid-1.html',
  },
  {
    id: 3,
    image: process.env.PUBLIC_URL + '/03.jpg',
    location: 'Brazil',
    city: 'Atlanta',
    listings: '89+ listings',
    link: 'listings-map-grid-1.html',
  },
  {
    id: 4,
    image: process.env.PUBLIC_URL + '/04.jpg',
    location: 'Mexico',
    city: 'Cancun',
    listings: '80+ listings',
    link: 'listings-map-grid-1.html',
  },
  {
    id: 5,
    image: process.env.PUBLIC_URL + '/05.jpg',
    location: 'Canada',
    city: 'Toronto',
    listings: '120+ listings',
    link: 'listings-map-grid-1.html',
  },
  
];

const CardSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3; // Number of cards visible at once
  const totalCards = cards.length;
  const maxIndex = Math.ceil(totalCards / cardsToShow) - 1;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : maxIndex
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative w-[90%] py-8 mx-auto ">
      <div className="overflow-hidden  w-full">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 ml-2 p-2 "
            >
              <div className="relative rounded-2xl overflow-hidden text-white w-[326px] h-[490px]">
                <img
                  src={card.image}
                  alt={card.city}
                  className="  object-fit"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black bg-opacity-50">
                  <div>
                    <h4 className="text-xl font-caveat mb-3 ">{card.location}</h4>
                    <h3 className="text-4xl mb-3">{card.city}</h3>
                    <span>{card.listings}</span>
                  </div>
                  <a
                    href={card.link}
                    className="flex items-center justify-between mt-auto text-white font-semibold"
                  >
                    <div className="text-sm uppercase">Explore more</div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition">
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
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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

export default CardSwiper;

