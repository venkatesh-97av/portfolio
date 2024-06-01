import React, { useState,useRef } from 'react'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {
  const[menu,setMenu]=useState('about')
  const menuRef=useRef()

  const openMenu=()=>{
    menuRef.current.style.right='0';
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-352px";
  };

  return (
    <div className="navbar">
      {/* <img src={logo} alt="" /> */}
      <img src={menu_open} alt="" className='nav-mob-open' onClick={openMenu}/>
      <h1 className="title">VENKATESH ARUMUGAM</h1>
      <ul className="nav-menu " ref={menuRef}>
        <img className='nav-mob-close' src={menu_close} alt="" onClick={closeMenu} />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setMenu("contact")}>Projects</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} /> : <></>}
        </li>
        {/* <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("projects")}>Contact</p>
          </AnchorLink>
          {menu === "projects" ? <img src={underline} /> : <></>}
        </li> */}
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p onClick={() => setMenu("projects")}>Connect With me</p>
        
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar
