import { AdvancedMarker } from "@vis.gl/react-google-maps";
import coords from "./../data/coords.json";
import showers from "./../data/showers.json"
import showerIcon from "./../static/showerIcon.png";

const ShowerMarker = ({isVisible}) => {
    if (!isVisible) {
        return null;
    }
    const showerCoords = coords.filter(coord => 
        showers.some(building => building.Building === coord.Building)
    );
    return (
        <>
        {showerCoords.map((building) => {
          return (
          <AdvancedMarker
            key={building.Building}
            position={{ lat: building.Latitude, lng: building.Longitude }}
          >
            <img src={showerIcon} alt="Shower" style={{ width: '40px', height: '40px' }} />
          </AdvancedMarker>
          );
        })}
      </>
    );
}

export { ShowerMarker };