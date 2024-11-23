import { AdvancedMarker } from "@vis.gl/react-google-maps";
import coords from "./../data/coords.json";
import toiletIcon from "./../static/toiletIcon.png";
import { useState } from "react";

const DefaultBathroomMarker = ({isVisible}) => {
  const [hoveredMarker, setHoveredMarker] = useState(null);
    if (!isVisible) {
        return null;
    }
    return (
        <>
        {coords.map((building) => {
          const isHovered = hoveredMarker === building.Building;
          return (
          <AdvancedMarker
            key={building.Building}
            position={{ lat: building.Latitude, lng: building.Longitude}}
            onMouseEnter={() => setHoveredMarker(building.Building)}
            onMouseLeave={() => setHoveredMarker(null)}
          >
            <img src={toiletIcon} alt="Default Bathroom" 
            className={`w-6 h-10 transition-all duration-300 
              ${isHovered ? 'scale-110 w-8 h-12' : ''}`} />
          </AdvancedMarker>
          );
        })}
      </>
    );
}

export { DefaultBathroomMarker };