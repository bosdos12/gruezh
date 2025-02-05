"use client"
import React, {useState} from 'react'

import {
  HeaderAction,
  TextAndImage,
  GetOnMailingList,
  Footer,
  SlideBar,
  Header,
  LeistungenComponent,
  AccordionItem
} from '@/Components'

const page = () => {

  return (
    <div className="main__container">


      <Header />
      

      <div style={{width: "100%", height: "fit-content", textAlign: "center"}}>
        <p className="large__text text__blacker">Leistungen</p><br />
        <p className="medium__text" style={{color: 'black', fontSize: "23px"}}>Unser Angebot auf einen Blick</p>
      </div>
      
      <LeistungenComponent />

      
      {/* <div className="services__accordions-container">
        
        
        <AccordionItem
          header="Beratung"
          isOpen={true}
          bgImg='/4.webp'
        />

        <AccordionItem
          header="Gebäudetechnikplanung"
          isOpen={false}
          bgImg='/7.webp'
        />

        <AccordionItem
          header="Sanitärinstallationen für Neu- und Umbauten"
          isOpen={false}
          bgImg='/6.webp'
          theId='sanitarinstallationen'
        />

        <AccordionItem
          header="Heizungsinstallationen für Neu- und Umbauten"
          isOpen={false}
          bgImg='/2.webp'
          theId='heizungsinstallationen'
        />

        <AccordionItem
          header="Servicedienstleistungen für Sanitär- und Heizungsanlagen"
          isOpen={false}
          bgImg='/3.webp'
          theId='serviceddienstleistungen'
        />

        <AccordionItem
          header="Reparaturarbeiten für Sanitär"
          isOpen={false}
          bgImg='/5.webp'
        />

        <AccordionItem
          header="24h Notfallservice"
          isOpen={false} 
          bgImg='/9.webp'
        />

      </div> */}

      <Footer />

      <SlideBar />

    </div>  )
}

export default page