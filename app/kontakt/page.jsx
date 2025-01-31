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


      <div style={{width: "100%", height: "100px"}}></div>

      <div className="contact-section">
        <div className="contact-info">
          <div className="contact-item">
            <img src="/gruezh/Icons/location-tick.svg" alt=""/>
            <p style={{paddingLeft: "8px"}}>LÄTTENSTRASSE 37 8952 SCHLIEREN</p>
          </div>
          <div className="contact-item">
            <img src="/gruezh/Icons/sms.svg" alt=""/>
            <p style={{paddingLeft: "8px"}}><a style={{textDecoration: "none", color: "black"}} href='mailto:info@gruezh.ch'>INFO@GRUEZH.CH</a></p>
          </div>
          <div className="contact-item">
            <img src="/gruezh/Icons/global.svg" alt=""/>
            <p style={{paddingLeft: "8px"}}>www.gruezh.ch</p>
          </div>
          <div className="contact-item">
            <img src="/gruezh/Icons/call-calling.svg" alt=""/>
            <p style={{paddingLeft: "8px"}}><a style={{textDecoration: "none", color: "black"}} href='tel:+41445211414'>+41 44 521 14 14</a></p>
          </div>
        </div>

        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.1426053090527!2d8.4411198!3d47.402671999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900d7fc5ddf767%3A0x715e36706a825bc1!2sGruezh%20AG!5e1!3m2!1sen!2s!4v1738297440217!5m2!1sen!2s" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>



      <div style={{width: "100%", height: "100px"}}></div>


      <Footer />

      <SlideBar />


    </div>  )
}

export default page
