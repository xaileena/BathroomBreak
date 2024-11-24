import React, { useState } from 'react';
import './App.css';
import { SidebarUI } from './components/SidebarUI';
import { FilterbarUI } from './components/FilterbarUI';
import MapUI from './components/MapUI';
import { DefaultBathroomMarker } from './markers/defaultBathroomMarker';
import { GenderNeutralBathroomMarker } from './markers/genderNeutralBathroomMarker';
import { ShowerMarker } from './markers/showerMarker';
import { AccessibleBathroomMarker } from './markers/accessibleBathroomMarker';
import { HygieneProductsBathroomMarker } from './markers/hygieneProductBathroomMarker';

function App() {
    const [activeFilters, setActiveFilters] = useState([]); // Tracks multiple filters

    // Render markers based on the active filters
    const renderMarkers = () => {
        return (
            <>
                {activeFilters.includes('default') && <DefaultBathroomMarker isVisible={true} />}
                {activeFilters.includes('genderNeutral') && <GenderNeutralBathroomMarker isVisible={true} />}
                {activeFilters.includes('shower') && <ShowerMarker isVisible={true} />}
                {activeFilters.includes('hygieneProducts') && <HygieneProductsBathroomMarker isVisible={true} />}
                {activeFilters.includes('accessible') && <AccessibleBathroomMarker isVisible={true} />}
            </>
        );
    };

    return (
        <div className="App">
            <FilterbarUI activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
            <SidebarUI />
            <div className="MapUI">
              <MapUI activeFilters={activeFilters} />
            </div>
        </div>
    );
}

export default App;
