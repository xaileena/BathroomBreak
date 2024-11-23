import './App.css';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
console.log(process.env.REACT_APP_GOOGLE_API_KEY);

function App() {
  return (
    <div className="App">
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
        <Map
        style={{width: '100vw', height: '100vh'}}
        defaultCenter={{lat: 22.54992, lng: 0}}
        defaultZoom={3}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      />
      </APIProvider>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
