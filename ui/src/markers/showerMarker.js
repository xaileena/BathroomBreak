import { AdvancedMarker } from "@vis.gl/react-google-maps";
import coords from "./../data/coords.json";
import showers from "./../data/showers.json"
import showerIcon from "./../static/showerIcon.png";
import { useState } from "react";

const ShowerMarker = ({isVisible}) => {
  const [hoveredMarker, setHoveredMarker] = useState(null);
    if (!isVisible) {
        return null;
    }
    const showerCoords = coords.filter(coord => 
        showers.some(building => building.Building === coord.Building)
    );
    return (
        <>
        {showerCoords.map((building) => {
          const isHovered = hoveredMarker === building.Building;
          return (
          <AdvancedMarker
            key={building.Building}
            position={{ lat: building.Latitude - 0.0000300000000, lng: building.Longitude - 0.0000300000000}}
            onMouseEnter={() => setHoveredMarker(building.Building)}
            onMouseLeave={() => setHoveredMarker(null)}
          >
            <img src={showerIcon} alt="Shower"
            className={`w-6 h-10 transition-all duration-300 
              ${isHovered ? 'scale-110 w-8 h-12' : ''}`} />
          </AdvancedMarker>
          );
        })}
      </>
    );
}

export { ShowerMarker };