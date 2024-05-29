"use client";
import React from 'react'
import "@/Styles/Header.css";
import Link from 'next/link';


const SlideBar = () => {
  
  function hideSlidebar() {
    const slideBar = document.getElementById("slide__bar");
    const fatimes = document.getElementById("fatimes");

    slideBar.style.transform = 'translateX(-100%)'; // Move the sidebar out of view
    setTimeout(() => {
      slideBar.style.visibility = 'hidden'; // Hide the sidebar after it slides out
      fatimes.style.visibility = 'hidden'; // Also hide the 'X' icon
    }, 500); // This timeout should match the transition time of the sidebar
  }

  return (
    <div className="slide__bar" id="slide__bar">
      <div className="header__texts-single__container" id="fatimes__container" style={{zIndex: "900"}} onClick={hideSlidebar}>
        <i className="fa-solid fa-times" id="fatimes"></i>
      </div>

      <img src='/gruezhwhitelogo.png' style={{
        width: "60%",
        height: 'auto',
        position: "absolute",
        top: "25%",
        transform: "translateY(-50%)",
        left: "20%",
        right: "20%"
      }}></img>

      <Link href="/" style={{textDecoration: "none"}}>
        <p className="medium__text" style={{color: "white"}}>Startseite</p>
      </Link>

      <Link href="/leistungen" style={{textDecoration: "none", marginTop: "16px"}}>
        <p className="medium__text" style={{color: "white"}}>Leistungen</p>
      </Link>

      <Link href="/uberuns" style={{textDecoration: "none", marginTop: "16px"}}>
        <p className="medium__text" style={{color: "white"}}>Über uns</p>
      </Link>

      <Link href="/kontakt" style={{textDecoration: "none", marginTop: "16px"}}>
        <p className="medium__text" style={{color: "white"}}>Kontakt</p>
      </Link>


    </div>
  )
}

export default SlideBar