import { AdvancedMarker } from "@vis.gl/react-google-maps";
import coords from "./../data/coords.json";
import genderNeutralBathrooms from "./../data/genderNeutral.json";
import genderNeutralIcon from "./../static/genderNeutralIcon.png";
import { useState } from "react";

const GenderNeutralBathroomMarker = ({isVisible}) => {
  const [hoveredMarker, setHoveredMarker] = useState(null);
    if (!isVisible) {
        return null;
    }
    const genderNeutralBathroomCoords = coords.filter(coord => 
        genderNeutralBathrooms.some(building => building.Building === coord.Building)
    );
    return (
        <>
        {genderNeutralBathroomCoords.map((building) => {
          const isHovered = hoveredMarker === building.Building;
          return (
          <AdvancedMarker
            key={building.Building}
            position={{ lat: building.Latitude + 0.0000300000000, lng: building.Longitude + 0.0000300000000}}
            onMouseEnter={() => setHoveredMarker(building.Building)}
            onMouseLeave={() => setHoveredMarker(null)}
          >
            <img src={genderNeutralIcon} alt="Gender Neutral Bathroom"
            className={`w-6 h-10 transition-all duration-300 
              ${isHovered ? 'scale-110 w-8 h-12' : ''}`} />
          </AdvancedMarker>
          );
        })}
      </>
    );
}

export { GenderNeutralBathroomMarker };