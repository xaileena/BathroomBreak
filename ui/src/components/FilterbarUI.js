import React from 'react';

export function FilterbarUI({ activeFilters, setActiveFilters }) {
    const toggleFilter = (filter) => {
        if (filter === 'default') {
            // Reset to only default bathrooms when "Clear Filters" is clicked
            setActiveFilters(['default']);
        } else {
            // Remove 'default' when any other filter is selected
            const updatedFilters = activeFilters.includes(filter)
                ? activeFilters.filter((f) => f !== filter) // Remove if already active
                : [...activeFilters.filter((f) => f !== 'default'), filter]; // Add and remove 'default'

            setActiveFilters(updatedFilters);
        }
    };
    return (
        <div className="filterbar">
            <button onClick={() => toggleFilter('default')}>Clear Filters</button>
            <button
                onClick={() => toggleFilter('genderNeutral')}
                className={activeFilters.includes('genderNeutral') ? 'active' : ''}
            >
                Gender Neutral
            </button>
            <button
                onClick={() => toggleFilter('shower')}
                className={activeFilters.includes('shower') ? 'active' : ''}
            >
                Showers
            </button>
            <button
                onClick={() => toggleFilter('hygieneProducts')}
                className={activeFilters.includes('hygieneProducts') ? 'active' : ''}
            >
                Free Hygiene Products
            </button>
            <button
                onClick={() => toggleFilter('accessible')}
                className={activeFilters.includes('accessible') ? 'active' : ''}
            >
                Accessible Bathrooms
            </button>
        </div>
    );
}
