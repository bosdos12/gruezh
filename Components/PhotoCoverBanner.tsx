"use client"
import React, { useEffect } from 'react'
import "@/Styles/CoverBanner.css";
import "@/Styles/Header.css";


interface Props {
  bgImg?: string;
}

const PhotoCoverBanner = ({bgImg}: Props) => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      const viewPortWidth = window.innerWidth;
      if (viewPortWidth < 769) {
        document.body.style.paddingTop = "70px";
      } else {
        document.body.style.paddingTop = "100px";
      }
    }
  }, [])
  return (
    <div className={`cover__banner`} style={{backgroundImage: `url(${bgImg ? bgImg : '/8.webp'})`}}>
      <div style={{width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", position: "relative"}}>
        <p className="large__text" id='ausderleitungtextdesktop' style={{color: "white", left: "auto", right: "75px", position: "absolute", top: "auto", bottom: "25px", fontSize: "48px"}}>Gruezh aus der Leitung</p>
      </div>
    </div>
  )
}

export default PhotoCoverBanner