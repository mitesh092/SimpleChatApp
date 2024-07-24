import React from 'react'
import { BiLogoMessenger } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='app-Title'>
        <BiLogoMessenger />
        <p id='title'>SimpleChat</p>
      </div>
      <div className='setting-icon'>
        <IoSettingsSharp/>
      </div>

    </div>
  )
}

export default Navbar
