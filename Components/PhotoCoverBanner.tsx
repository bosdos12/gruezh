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

    </div>
  )
}

export default PhotoCoverBanner