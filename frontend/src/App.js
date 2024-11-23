import logo from './logo.svg';
import './App.css';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

function App() {
  return (
    <div className="App">
      <APIProvider apiKey={'AIzaSyA9jah1UU9DtuvDAPe4r91IHgbbuhvFrIw'} onLoad={() => console.log('Maps API has loaded.')}>
        <Map
        style={{width: '100vw', height: '100vh'}}
        defaultCenter={{lat: 22.54992, lng: 0}}
        defaultZoom={3}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      />
      </APIProvider>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
