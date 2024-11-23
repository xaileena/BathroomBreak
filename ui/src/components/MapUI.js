import {APIProvider, Map} from '@vis.gl/react-google-maps';

// Top right corner of the map 45.507663, -73.579306
// Bottom right corner of the map 45.504801, -73.573163
// Bottom left corner of the map 45.501995, -73.576622
// Top left corner of the map 45.505224, -73.581498

export default function MapUI() {
    const bounds = {
        north: 45.5096, 
        south: 45.5012,
        east: -73.5707,
        west: -73.5815,
    };
    return (
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
            <Map
                style={{ width: '100vw', height: '100vh' }}
                defaultCenter={{ lat: 45.504501, lng: -73.576124 }}
                zoom={17}
                gestureHandling={'none'}
                zoomControl={false}
                disableDefaultUI={true}
                mapId={'3b1974584796597b'}
                heading={305}
                colorScheme='DARK'
                options={{
                    restriction: {
                        latLngBounds: bounds,
                        strictBounds: true, 
                    },
                }}
                
            />
        </APIProvider>
    )
}