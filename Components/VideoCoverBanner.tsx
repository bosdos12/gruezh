"use client"
import React, { useEffect } from 'react'
import "@/Styles/CoverBanner.css";
import "@/Styles/Header.css";



const VideoCoverBanner = () => {

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
    <div className={`video__banner`} id='coverbanner'>
      <video autoPlay loop muted playsInline style={{ objectFit: 'cover', width: '100%', height: '100%' }}>
        <source src="/tapopening.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoCoverBanner