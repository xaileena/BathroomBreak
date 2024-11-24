import { AdvancedMarker } from "@vis.gl/react-google-maps";
import coords from "./../data/coords.json";
import accessibleBathrooms from "./../data/accessible.json";
import accessibleBathroomIcon from "./../static/accessibleIcon.png";
import { useState } from "react";

const AccessibleBathroomMarker = ({isVisible}) => {
  const [hoveredMarker, setHoveredMarker] = useState(null);
    if (!isVisible) {
        return null;
    }
    const accessibleBathroomCoords = coords.filter(coord => 
        accessibleBathrooms.some(building => building.Building === coord.Building)
    );
    return (
        <>
        {accessibleBathroomCoords.map((building) => {
          return (
          <AdvancedMarker
            key={building.Building}
            position={{ lat: building.Latitude - 0.0000300000000, lng: building.Longitude - 0.0000300000000}}
            onMouseEnter={() => setHoveredMarker(building.Building)}
            onMouseLeave={() => setHoveredMarker(null)}
          >
            <img src={accessibleBathroomIcon} alt="Accessible Bathroom"
            className={`w-6 h-10 transition-all duration-300 
              ${hoveredMarker ? 'scale-110 w-8 h-12' : ''}`} />
          </AdvancedMarker>
          );
        })}
      </>
    );
}

export { AccessibleBathroomMarker };