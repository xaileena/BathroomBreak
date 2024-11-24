import { useState } from "react";

export const SearchBar = ({ coords, setFilteredCoords }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filtered = coords.filter((building) =>
      building.Building.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCoords(filtered);
  };

  return (
    <div className="p-2">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search buildings..."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E2CDA7]"
      />
    </div>
  );
};
