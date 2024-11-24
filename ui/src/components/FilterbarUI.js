import React, { useState } from 'react';

export function FilterbarUI({ activeFilters, setActiveFilters }) {
    const toggleFilter = (filter) => {
        if (activeFilters.includes(filter)) {
            // Remove filter if it's already active
            setActiveFilters(activeFilters.filter((f) => f !== filter));
        } else{
            // Add filter if it's not active
            setActiveFilters([...activeFilters, filter]);
        } 
        if (filter === 'default') {
            setActiveFilters(['default']);
        }
    };
    console.log(activeFilters);
    return (
        <div className="filterbar">
            <button
                onClick={() => toggleFilter('default')}
                className={activeFilters.includes('default') ? 'active' : ''}
            >
                Clear Filters
            </button>
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
        </div>
    );
}
