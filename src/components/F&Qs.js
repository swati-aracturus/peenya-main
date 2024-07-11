import React, { useState, useRef, useEffect } from "react";

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
    <div className="mx-auto mt-4">
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="App w-full">
      <Accordion
        title="What Types Of Houses Are Available For Rent?"
        isOpen={openIndex === 0}
        onClick={() => handleAccordionClick(0)}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions.
        </p>
      </Accordion>

      <Accordion
        title="What Is The Rental Application Process?"
        isOpen={openIndex === 1}
        onClick={() => handleAccordionClick(1)}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions.
        </p>
      </Accordion>

      <Accordion
        title="What Are Your Rental Rates?"
        isOpen={openIndex === 2}
        onClick={() => handleAccordionClick(2)}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions.
        </p>
      </Accordion>

      <Accordion
        title="What Are The Lease Terms?"
        isOpen={openIndex === 3}
        onClick={() => handleAccordionClick(3)}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions.
        </p>
      </Accordion>

      <Accordion
        title="What Is Your Policy On Pets?"
        isOpen={openIndex === 4}
        onClick={() => handleAccordionClick(4)}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions.
        </p>
      </Accordion>
    </div>
  );
};

export default FAQ;
