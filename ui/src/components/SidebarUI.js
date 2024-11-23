import React, { useState } from "react";
import {
    FiBarChart,
    FiDollarSign,
    FiHome,
    FiMonitor,
    FiShoppingCart,
    FiTag,
    FiUsers,
  } from "react-icons/fi";
  import { motion } from "framer-motion";
  import logo from "./../assets/logo.svg";

  export const SidebarUI = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
  
    return (
      <motion.nav
        onHoverStart={() => setOpen((pv) => !pv)}
        onHoverEnd={() => setOpen(false)}
        layout
        className="fixed top-0 h-screen shrink-0 bg-[#E2CDA7] p-2 z-10 rounded-r-lg"
        style={{
          width: open ? "400px" : "fit-content",
        }}
      >
        <TitleSection open={open}/>
        <div className="space-y-1">
          <Option
            Icon={FiHome}
            title="Dashboard"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <Option
            Icon={FiDollarSign}
            title="Sales"
            selected={selected}
            setSelected={setSelected}
            open={open}
            notifs={3}
          />
          <Option
            Icon={FiMonitor}
            title="View Site"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <Option
            Icon={FiShoppingCart}
            title="Products"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <Option
            Icon={FiTag}
            title="Tags"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <Option
            Icon={FiBarChart}
            title="Analytics"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <Option
            Icon={FiUsers}
            title="Members"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </div>
        </motion.nav>
    );
  };
  
  const Option = ({ Icon, title, selected, setSelected, open, notifs }) => {
    return (
      <motion.button
        layout
        onClick={() => setSelected(title)}
        className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === title ? "bg-indigo-100 text-indigo-800" : "text-slate-500 hover:bg-slate-100"}`}
      >
        <motion.div
          layout
          className="grid h-full w-10 place-content-center text-lg"
        >
          <Icon />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            {title}
          </motion.span>
        )}
  
        {notifs && open && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            style={{ y: "-50%" }}
            transition={{ delay: 0.5 }}
            className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
          >
            {notifs}
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
                <span className="block text-m font-bold">BathroomBreak</span>
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
  

    
  