"use client"
import React, { useEffect } from 'react'

import {
  HeaderAction,
  Footer,
  SlideBar,
  Header,
  KontaktFormularClean,
  VideoCoverBanner,
  CoverBanner,
  PhotoCoverBanner
} from '@/Components'

const page = () => {

  return (
    <div className="main__container" style={{marginTop: typeof window !== "undefined" ? window.innerWidth < 769 ? "-50px" : "0px" : "0px"}}>
      
      <Header />

      {/* <VideoCoverBanner /> */}
      {/* <PhotoCoverBanner /> */}


      <div id="kontaktandtextcontainer" style={{width: "100%", maxHeight: "fit-content"}}>



        <div style={{width: "100%", height: "fit-content", marginTop: "20px"}}>
          <div id="input__header-text__container">
            <p className="small__text bottomtotop" id='kontaktinfotext'>
                Wir würden uns sehr freuen, von Ihnen zu hören, um mögliche Projekte im Bereich
                Heizung, Sanitär und Planung gemeinsam zu besprechen.
            </p>
          </div>
        </div>

        <KontaktFormularClean />
        
      </div>


      <Footer extraClasses=" contactFooter"/>

      <SlideBar />


    </div>  )
}

export default page
