import './App.css';
import MapUI from './components/MapUI';
import { SidebarUI } from './components/SidebarUI';

function App() {
  return (
    <div className="App">
      <SidebarUI />
      <div className="MapUI">
        <MapUI />
      </div>
    </div>
  );
}

export default App;