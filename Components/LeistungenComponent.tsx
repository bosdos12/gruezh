"use client";
import React, {useState} from 'react'

import "@/Styles/LeistungenComponent.css";

import { ImagePopup, LeistungenContainerSingle } from '@/Components';

const LeistungenComponent = () => {

  const [popupImage, setPopupImage] = useState<string | null>(null);

  const openPopup = (imageSrc: string) => {
    setPopupImage(imageSrc);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className='leistungen__container'>
      

      <LeistungenContainerSingle 
        theTitle='Beratung'
        theImage='/4.webp'
        openPopup={openPopup}
      />


      <LeistungenContainerSingle 
        theTitle='Gebäudetechnikplanung'
        theImage='/7.webp'
        openPopup={openPopup}
      />



      <LeistungenContainerSingle 
        theTitle='Sanitärinstallationen für Neu- und Umbauten'
        theImage='/10.webp'
        openPopup={openPopup}
      />



      <LeistungenContainerSingle 
        theTitle='Heizungsinstallationen für Neu- und Umbauten'
        theImage='/2.webp'
        openPopup={openPopup}
      />


      <LeistungenContainerSingle 
        theTitle='Reparaturarbeiten für Sanitär'
        theImage='/6.webp'
        openPopup={openPopup}
      />

      <LeistungenContainerSingle 
        theTitle='Servicedienstleistungen für Sanitär- und Heizungsanlagen'
        theImage='/5.webp'
        openPopup={openPopup}
      />

      <div style={{width: "100%", height: "1px"}}></div>



      <LeistungenContainerSingle 
        theTitle='24h Notfallservice'
        theImage='/9.webp'
        openPopup={openPopup}
      />


      {popupImage && <ImagePopup imageSrc={popupImage} onClose={closePopup} />}

    </div>
  )
}

export default LeistungenComponent