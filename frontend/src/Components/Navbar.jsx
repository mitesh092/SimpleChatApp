import React, { useState } from "react";
import { BiLogoMessenger } from "react-icons/bi"; // Logo Icon
import { IoSettingsSharp } from "react-icons/io5"; // Setting Icon
import "./Navbar.css"; // import css for Navbar

const Navbar = () => {
  // create useState hook on setting icon   
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // create  toggle event on setting icon
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="navbar">
      <div className="app-Title">
        <BiLogoMessenger />
        <p id="title">SimpleChat</p>
      </div>
      <div className="setting-icon" onClick={toggleDropdown}>
        <IoSettingsSharp />
        {dropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li>Profile</li>
              <li>Notifications</li>
              <li>Privacy</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
