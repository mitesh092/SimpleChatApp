import React from "react";
import { BiLogoMessenger } from "react-icons/bi";
import { GrUserAdd } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import "./Navbar.css"; // import css for Navbar

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  
  const shouldHide = currentPath !== "/DashBoard";
  console.log(currentPath, shouldHide)

  return (
    <div className="navbar">
      <div className="app-Title">
        <BiLogoMessenger />
        <p id="title">SimpleChat</p>
      </div>
      
      {!shouldHide && (
        <div className="add-friend-icon">
          <GrUserAdd />
        </div>
      )}
    </div>
  );
};

export default Navbar;
