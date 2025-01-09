import React from "react";

const DashboardCard = ({ title, value, image }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 flex items-center justify-between">
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-xl">{value}</p>
      </div>

      {image && (
        <div className="w-16 h-16">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
