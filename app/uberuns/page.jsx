"use client"
import React from 'react'

import {
  HeaderAction,
  TextAndImage,
  GetOnMailingList,
  Footer,
  SlideBar,
  Header,
  TextAndSingleImage,
  CoverBanner,
  PhotoCoverBanner,
  KontaktFormular,
  SmallAreaHorizontalImage
} from '@/Components'

const page = () => {

  return (
    <div className="main__container">

      <Header />

      {/* <PhotoCoverBanner bgImg='/1.webp'/> */}

      <div id='uberunsheadertitle' style={{width: "100%", height: "fit-content", textAlign: "center"}}>
        <p className="medium__text bottomtotop text__blacker scalableimgtitle">Gruezh aus der Leitung</p>
      </div>

      
      


      <TextAndSingleImage 
        titleText='Über uns'
        paragraphText='Ihr Partner für hochwertige Lösungen in den Bereichen Wasser, Wärme und Komfort. Von der ersten Beratung bis zur erfolgreichen Umsetzung stehen wir Ihnen mit unserem Fachwissen und unserem herausragenden Kundenservice zur Seite.'
        lineBreakText='Unser Unternehmen legt großen Wert auf qualitativ hochwertige und zuverlässige Arbeit. Dank der langjährigen Erfahrung unserer Mitarbeiter im Bereich der Heizungs- und Sanitärsysteme, innovativer Ansätze und herausragender Handwerkskunst, können wir sicherstellen, dass die Anforderungen unserer Kunden optimal erfüllt werden.'
        centerImg='/wearehereforu.webp'  
        TClass='scalableimgtitle'
      />


      <TextAndSingleImage 
        titleText='Unser Team'
        paragraphText='Das Team der Gruezh AG besteht aus erfahrenen Fachleuten und kreativen Köpfen, die sich durch ihre umfassende Expertise in den Bereichen Heizung, Sanitär und Planung auszeichnen. Unsere Mitarbeiter sind das Herzstück unseres Unternehmens und bringen ihre Leidenschaft sowie ihr Engagement für Qualität in jedem unserer Projekte zum Ausdruck.'
        TClass='scalableimgtitle unserteamtclass'
        centerImg='/zurich.webp'
        direction='right'
        ContainerStyle={{marginBottom: "50px", marginTop: "50px"}}
      />
      

{/* 
      <SmallAreaHorizontalImage /> */}


      <Footer />

      <SlideBar />


    </div>  )
}

export default page