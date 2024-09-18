import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from '../../assets/nav_underline.svg'

const Navbar = () => {
  const [menu,setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li><p >Home</p>{menu==="home"?<img src={underline} alt="" />:<></> }</li>
        <li><p >About Me</p>{menu==="about"?<img src={underline} alt="" />:<></> }</li>
        <li><p >Services</p>{menu==="services"?<img src={underline} alt="" />:<></> }</li>
        <li><p >Portfolio</p>{menu==="portfolio"?<img src={underline} alt="" />:<></> }</li>
        <li><p >Contact</p>{menu==="contact"?<img src={underline} alt="" />:<></> }</li>
      </ul>

      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
