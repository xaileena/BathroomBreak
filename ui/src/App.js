import './App.css';
import MapUI from './components/MapUI';
import { SidebarUI } from './components/SidebarUI';
import { FilterbarUI } from './components/FilterbarUI';

function App() {
  return (
    <div className="App">
      <SidebarUI />
      <FilterbarUI />
      <div className="MapUI">
        <MapUI />
      </div>
    </div>
  );
}

export default App;