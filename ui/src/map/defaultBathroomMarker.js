import { AdvancedMarker } from "@vis.gl/react-google-maps";
import coords from "./../data/coords.json";
import toiletIcon from "./../static/toilet_icon.png";

const DefaultBathroomMarker = ({isVisible}) => {
    if (!isVisible) {
        return null;
    }
    return (
        <>
        {coords.map((building) => {
          return (
          <AdvancedMarker
            key={building.Building}
            position={{ lat: building.Latitude, lng: building.Longitude }}
          >
            <img src={toiletIcon} alt="Default Bathroom" style={{ width: '40px', height: '40px' }} />
          </AdvancedMarker>
          );
        })}
      </>
    );
}

export { DefaultBathroomMarker };