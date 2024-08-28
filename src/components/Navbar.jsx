import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // Correctly import Link

import { styles } from "../styles";  // Make sure this path is correct
import { navLinks } from "../constants";  // Make sure this path is correct
import { logo, menu, close } from "../assets";  // Ensure 'logoo', 'menu', and 'close' are correctly imported

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Adrian <span className="sm:block hidden">| Tousif Tamboli</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
