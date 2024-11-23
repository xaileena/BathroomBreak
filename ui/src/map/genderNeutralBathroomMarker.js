import { AdvancedMarker } from "@vis.gl/react-google-maps";
import coords from "./../data/coords.json";
import genderNeutralBathrooms from "./../data/genderNeutral.json";
import genderNeutralIcon from "./../static/genderNeutralIcon.png";

const GenderNeutralBathroomMarker = ({isVisible}) => {
    if (!isVisible) {
        return null;
    }
    const genderNeutralBathroomCoords = coords.filter(coord => 
        genderNeutralBathrooms.some(building => building.Building === coord.Building)
    );
    return (
        <>
        {genderNeutralBathroomCoords.map((building) => {
          return (
          <AdvancedMarker
            key={building.Building}
            position={{ lat: building.Latitude, lng: building.Longitude }}
          >
            <img src={genderNeutralIcon} alt="Gender Neutral Bathroom" style={{ width: '40px', height: '40px' }} />
          </AdvancedMarker>
          );
        })}
      </>
    );
}

export { GenderNeutralBathroomMarker };