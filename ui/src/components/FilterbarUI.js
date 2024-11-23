import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  SiFramer,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiCss3,
} from "react-icons/si";

export const FilterbarUI = () => {
  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg flex space-x-4 z-10">
      <SideNav />
    </div>
  );
};

const SideNav = () => {
  const [selected, setSelected] = useState([]);

  const toggleSelection = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <nav className="w-full max-w-[1200px] h-[70px] bg-slate-950 p-4 flex justify-center items-center gap-4 rounded-md shadow-lg">
      <NavItem
        selected={selected.includes(0)}
        id={0}
        toggleSelection={toggleSelection}
      >
        <SiTailwindcss />
      </NavItem>
      <NavItem
        selected={selected.includes(1)}
        id={1}
        toggleSelection={toggleSelection}
      >
        <SiReact />
      </NavItem>
      <NavItem
        selected={selected.includes(2)}
        id={2}
        toggleSelection={toggleSelection}
      >
        <SiJavascript />
      </NavItem>
      <NavItem
        selected={selected.includes(3)}
        id={3}
        toggleSelection={toggleSelection}
      >
        <SiFramer />
      </NavItem>
      <NavItem
        selected={selected.includes(4)}
        id={4}
        toggleSelection={toggleSelection}
      >
        <SiCss3 />
      </NavItem>
    </nav>
  );
};

const NavItem = ({ children, selected, id, toggleSelection }) => {
  return (
    <motion.button
      className="p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative"
      onClick={() => toggleSelection(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="block relative z-10">{children}</span>
      <AnimatePresence>
        {selected && (
          <motion.span
            className="absolute inset-0 rounded-md bg-indigo-600 z-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          ></motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
