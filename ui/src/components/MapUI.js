import {APIProvider, Map} from '@vis.gl/react-google-maps';

export default function MapUI() {
    return (
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
            <Map
                style={{ width: '100vw', height: '100vh' }}
                defaultCenter={{ lat: 45.504501, lng: -73.576124 }}
                zoom={17}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId={'3b1974584796597b'}
                heading={305}
                colorScheme='FOLLOW_SYSTEM'
            />
        </APIProvider>
    )
}