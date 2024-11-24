import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "./../assets/logo.svg";
import coords from "./../data/coords.json";
import { SearchBar } from "./SearchBar";
import { BuildingInfo } from "./BuildingInfo";

export const SidebarUI = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [filteredCoords, setFilteredCoords] = useState(coords);

  return (
    <motion.nav
      onHoverStart={() => setOpen((pv) => !pv)}
      onHoverEnd={() => setOpen(false)}
      layout
      className="fixed top-0 h-screen shrink-0 bg-[#E0EBF5] p-2 z-10 rounded-r-lg border border-gray-400"
      style={{
        width: open ? "400px" : "fit-content",
      }}
    >
      <TitleSection open={open}/>
      {selected ? (
        <BuildingInfo
          building={selected}
          onBack={() => setSelected(null)} // Back button handler
        />
      ) : (
        <>
          <SearchBar coords={coords} setFilteredCoords={setFilteredCoords} />
          <div className="space-y-1 overflow-y-auto h-full pb-40">
            {filteredCoords.map((building) => (
              <Option
                key={building.Building}
                title={building.Building}
                setSelected={setSelected}
                open={open}
              />
            ))}
          </div>
        </>
      )}
    </motion.nav>
  );
};

const Option = ({ title, selected, setSelected, open}) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected({Building : title})}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === title ? "bg-indigo-100 text-indigo-800" : "text-slate-500 hover:bg-slate-100"}`}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-lg"
      >
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium text-left"
        >
          {title}
        </motion.span>
      )}
    </motion.button>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3 pointer-events-none">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
        <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-m font-bold mx-20"> Bathroom Info</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <motion.div
      layout
      className="grid size-16 shrink-0 place-content-center "
    >
      <img src={logo} alt="logo" className="w-16 h-16" />
    </motion.div>
  );
};


  
