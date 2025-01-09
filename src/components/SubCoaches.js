import React from "react";

const SubCoaches = ({ avatars }) => {
  return (
    <div className="mt-6 p-2">
      {/* Header */}
      <div className="flex justify-evenly items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Sub Coaches</h3>
        <button className="text-black text-sm font-medium hover:underline">
          Add Sub Coach
        </button>
      </div>

      {/* Avatar Grid */}
      <div className="flex flex-wrap gap-4 justify-center">
        {avatars.map((imagePath, index) => (
          <div
            key={index}
            className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden"
          >
            <img
              src={imagePath}
              alt={`Sub Coach ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCoaches;
