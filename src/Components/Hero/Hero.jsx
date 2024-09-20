import React from 'react'
import "./Hero.css"
import profile_img from '../../assets/Opentowork.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Ariba Junejo,</span> Laravel Developer based in Pakistan.</h1>
        <p>I'm Ariba Junejo , Laravel Developer</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
            <div className='hero-resume'>My Resume</div>
        </div>
    </div>
  )
}

export default Hero