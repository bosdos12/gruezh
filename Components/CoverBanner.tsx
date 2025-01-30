"use client"
import React from 'react'
import "@/Styles/CoverBanner.css";
import "@/Styles/Header.css";


interface Props {
  logoPosition: string;
  coverBannerPosition: string;
}

const CoverBanner = ({
  logoPosition,
  coverBannerPosition
}: Props) => {
  return (
    <div className={`cover__banner ${coverBannerPosition}`} id='coverbanner'>
      <div className="cover__banner-fadein"></div>
      <div className="cover__banner-bg"></div>
      <img src="/gruezhwhitelogo.png" alt='logo image' className={`logo__image ${logoPosition}`} style={{
        left: "50%",
        transform: "translateX(-50%)",
      }} id='logo__image' />
    </div>
  )
}

export default CoverBanner