import React, { useState, useEffect } from 'react';
import './Nav.css'

const Nav = () => {

  const [show, handleShow] = useState(false); 

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        handleShow(true)
      }else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
      className="nav_logo"
      src= 'https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png'
      alt='Netflix Logo'/>

  <img
  className="nav_avatar"
    src='https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png'
    alt='small logo'/>
    </div>
  )
}

export default Nav
