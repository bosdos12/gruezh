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
            <img src="/gruezh/Icons/location-tick.svg" alt="User Icon"/>
            <p style={{paddingLeft: "8px"}}>Name: John Doe</p>
          </div>
          <div className="contact-item">
            <img src="/gruezh/Icons/sms.svg" alt="User Icon"/>
            <p style={{paddingLeft: "8px"}}>Email: contact@example.com</p>
          </div>
          <div className="contact-item">
            <img src="/gruezh/Icons/global.svg" alt="User Icon"/>
            <p style={{paddingLeft: "8px"}}>Address: 123 Main Street, City</p>
          </div>
          <div className="contact-item">
            <img src="/gruezh/Icons/call-calling.svg" alt="User Icon"/>
            <p style={{paddingLeft: "8px"}}>Phone: +123456789</p>
          </div>
        </div>

        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95373631531575!3d-37.81627974202186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f8979f%3A0x5045675218ce7e0!2zTWFsYm91cm5lLCBNZWxib3VybmUgVklDIDMwMDAsIEF1c3RyYWxpYQ!5e0!3m2!1sen!2sus!4v1617795732889!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>


      <div style={{width: "100%", height: "100px"}}></div>


      <Footer extraClasses=" contactFooter"/>

      <SlideBar />


    </div>  )
}

export default page
