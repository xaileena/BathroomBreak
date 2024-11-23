import { AdvancedMarker } from "@vis.gl/react-google-maps";
import coords from "./../data/coords.json";
import toiletIcon from "./../static/toiletIcon.png";

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
            position={{ lat: building.Latitude, lng: building.Longitude}}
          >
            <img src={toiletIcon} alt="Default Bathroom" style={{ width: '25px', height: '40px' }} />
          </AdvancedMarker>
          );
        })}
      </>
    );
}

export { DefaultBathroomMarker };