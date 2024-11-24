import React from "react";

export const BuildingInfo = ({ building, onBack }) => {
  return (
    <div className="p-4 space-y-4">
      <button
        onClick={onBack}
        className="bg-gray-200 text-gray-700 px-3 py-2 rounded hover:bg-gray-300 transition"
      >
        Back
      </button>
      <h2 className="text-2xl font-bold">{building.Building}</h2>
      <p className="text-gray-600">
        Description about {building.Building} goes here.
      </p>
    </div>
  );
};