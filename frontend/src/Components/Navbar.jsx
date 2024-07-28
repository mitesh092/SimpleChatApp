import React, { useState } from "react";
import { BiLogoMessenger } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
