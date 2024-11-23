import { AdvancedMarker } from "@vis.gl/react-google-maps";
import coords from "../data/coords.json";
import hygieneProducts from "../data/HygieneProducts.json";
import hygieneProductIcon from "./../static/menstrualIcon.png";
import { useState } from "react";

const HygieneProductsBathroomMarker = ({ isVisible }) => {
  const [hoveredMarker, setHoveredMarker] = useState(null);
  // Hygiene products
  if (!isVisible) {
    return null;
  }
  const hygieneProductsBathroomsCoords = coords.filter(
    (
      coord // Hygiene products
    ) =>
      hygieneProducts.some((building) => building.Building === coord.Building) // Hygiene products
  );
  return (
    <>
      {hygieneProductsBathroomsCoords.map((building) => {
        const isHovered = hoveredMarker === building.Building;
        // Hygiene products
        return (
          <AdvancedMarker
            key={building.Building}
            position={{ lat: building.Latitude, lng: building.Longitude }}
            onMouseEnter={() => setHoveredMarker(building.Building)}
            onMouseLeave={() => setHoveredMarker(null)}
          >
            <img
              src={hygieneProductIcon}
              alt="Female Hygiene Bathroom"
              className={`w-6 h-10 transition-all duration-300 
              ${isHovered ? "scale-110 w-8 h-12" : ""}`}
            />
          </AdvancedMarker>
        );
      })}
    </>
  );
};

export { HygieneProductsBathroomMarker }; // Hygiene products
