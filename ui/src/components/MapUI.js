import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { DefaultBathroomMarker } from '../markers/defaultBathroomMarker';
import { GenderNeutralBathroomMarker } from '../markers/genderNeutralBathroomMarker';
import { ShowerMarker } from '../markers/showerMarker';
import { HygieneProductsBathroomMarker } from '../markers/hygieneProductBathroomMarker';
import { AccessibleBathroomMarker } from '../markers/accessibleBathroomMarker';

export default function MapUI({ activeFilters }) {
    const bounds = {
        north: 45.5096,
        south: 45.5012,
        east: -73.5707,
        west: -73.5815,
    };

    const renderMarkers = () => {
        return (
            <>
                {activeFilters.includes('default') && <DefaultBathroomMarker isVisible={true}/>}
                {activeFilters.includes('genderNeutral') && <GenderNeutralBathroomMarker isVisible={true}/>}
                {activeFilters.includes('shower') && <ShowerMarker isVisible={true}/>}
                {activeFilters.includes('hygieneProducts') && <HygieneProductsBathroomMarker isVisible={true}/>}
                {activeFilters.includes('accessible') && < AccessibleBathroomMarker isVisible={true}/>}
            </>
        );
    };

    return (
        <APIProvider
            apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
            onLoad={() => console.log('Maps API has loaded.')}
        >
            <Map
                style={{ width: '100vw', height: '100vh' }}
                defaultCenter={{ lat: 45.504501, lng: -73.576124 }}
                zoom={17}
                gestureHandling="none"
                zoomControl={false}
                disableDefaultUI={true}
                mapId={'3b1974584796597b'}
                heading={305}
                colorScheme="LIGHT"
                options={{
                    restriction: {
                        latLngBounds: bounds,
                        strictBounds: true,
                    },
                }}
            >
                {renderMarkers()}
            </Map>
        </APIProvider>
    );
}
