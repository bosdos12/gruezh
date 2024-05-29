"use client"
import React, { useState } from 'react'

import Header from "@/Components/Header";
import CoverBanner from "@/Components/CoverBanner";

const AnimatedLanding = () => {

  const [logoPosition, setLogoPosition] = useState("logo__absolute");
  const [coverBannerPosition, setCoverBannerPosition] = useState("cover__relative");

  return (
    <div style={{width: "100%", height: "fit-content"}}>
      <Header
        logoPosition={logoPosition}
        setLogoPosition={setLogoPosition}
        coverBannerPosition={coverBannerPosition}
        setCoverBannerPosition={setCoverBannerPosition}
        />
      <CoverBanner coverBannerPosition={coverBannerPosition} logoPosition={logoPosition}/>
    </div>
  )
}

export default AnimatedLanding