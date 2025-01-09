import React, { useState } from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    {
      id: 1,
      img: image1,
      label: "Coach Panel Discussion",
      time: "10 Nov, 13:00PM",
    },
    {
      id: 2,
      img: image2,
      label: "Coach Panel Discussion",
      time: "10 Nov, 13:00PM",
    },
    {
      id: 3,
      img: image3,
      label: "Coach Panel Discussion",
      time: "10 Nov, 13:00PM",
    },
    {
      id: 4,
      img: image1,
      label: "Coach Panel Discussion",
      time: "10 Nov, 13:00PM",
    },
    {
      id: 5,
      img: image2,
      label: "Coach Panel Discussion",
      time: "10 Nov, 13:00PM",
    },
  ];

  return (
    <div className="relative  w-full max-w-sm mx-auto">
      {/* Dropdown Container */}
      <div className=" bg-white shadow-md rounded-md">
        {/* Dropdown Toggle */}
        <button
          onClick={toggleDropdown}
          className="w-full text-black font-medium px-3 py-2 flex items-center justify-between rounded-t-lg"
          style={{
            paddingTop: "0.4rem",
            paddingBottom: "0.4rem",
          }}
        >
          <span className="flex items-center">
            <span className="leading-none">Running Practices</span>
          </span>
          <span
            className={`${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-transform`}
          >
            ▼
          </span>
        </button>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="max-h-96 overflow-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-3 px-3 py-0 hover:bg-gray-100 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-8 h-8 rounded"
                />
                {/* Label and Time */}
                <div>
                  <div className="font-medium text-sm">{item.label}</div>
                  <div className="text-gray-500 text-xs">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
