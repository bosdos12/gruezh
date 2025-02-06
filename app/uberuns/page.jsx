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

      <PhotoCoverBanner bgImg='/newbgimg.webp'/>


      <div id='uberunsheadertitle' style={{width: "100%", height: "fit-content", textAlign: "center", marginTop: "100px", marginBottom: "40px"}}>
        <p className="medium__text text__blacker scalableimgtitle" style={{color: "#0057a4"}}>Über uns</p>
        <p className="medium__text text__blacker scalableimgtitle" id='ausderleitungtextmobile'>Gruezh aus der Leitung</p>
      </div>


      <p className="medium__text-klavika" style={{width: "80%", marginLeft: "auto", marginRight: "auto", marginBottom: "80px", fontFamily: "ClearSansRegular", textAlign: "center"}}>
        Wir sind Ihr Partner für erstklassige Lösungen in den Bereichen Wasser, Wärme und Komfort.
        Von der ersten Beratung bis zur erfolgreichen Umsetzung stehen wir Ihnen mit unserem Fachwissen stets zur Seite. Unser Unternehmen legt großen Wert auf qualitativ hochwertige und zuverlässige Arbeit. Dank der langjährigen Erfahrung unserer Mitarbeiter im Bereich der Heizungs- und Sanitärsysteme, innovativer Ansätze und herausragender Handwerkskunst, können wir sicherstellen, dass die Anforderungen unserer Kunden optimal erfüllt werden.
        <br /><br />
        Das Team der Gruezh AG besteht aus erfahrenen Fachleuten und kreativen Köpfen, die sich durch ihre umfassende Expertise in den Bereichen Heizung, Sanitär und Planung auszeichnen. Unsere Mitarbeiter sind das Herzstück unseres Unternehmens und bringen ihre Leidenschaft sowie ihr Engagement für Qualität in jedem unserer Projekte zum Ausdruck.
      </p>


      <div className="services__cards-container team" style={{marginBottom: "80px"}}>
        <div className="service-card">
          <img src="/gruezh/Pictures/egzon.jpeg" alt="Service 1" style={{height: "300px"}}/>
          <p className="medium__text">Egzon Gjaferaj</p>
          <p className="small__text">Inhaber, Geschäftsführer</p>
          <br />
          <a href="mailto:e.gjaferaj@gruezh.ch"><i class="fa-solid fa-envelope" style={{fontSize: "24px", color: "#0057a4", cursor: "pointer"}}></i></a>
        </div>
        <div className="service-card">
          <img src="/gruezh/Pictures/philipp.jpeg" alt="Service 2" style={{height: "300px"}}/>
          <p className="medium__text">Philipp Bächler</p>
          <p className="small__text">Partner</p>
          <br />
          <a href="mailto:p.baechler@gruezh.ch"><i class="fa-solid fa-envelope" style={{fontSize: "24px", color: "#0057a4", cursor: "pointer"}}></i></a>
        </div>
        <div className="service-card">
          <img src="/gruezh/Pictures/murat.jpeg" alt="Service 4" style={{height: "300px"}}/>
          <p className="medium__text">Murat Sopjani</p>
          <p className="small__text">Projektleiter</p>
          <br />
          <a href="mailto:m.sopjani@gruezh.ch"><i class="fa-solid fa-envelope" style={{fontSize: "24px", color: "#0057a4", cursor: "pointer"}}></i></a>
        </div>
        <div className="service-card">
          <img src="/gruezh/Pictures/ermira.jpeg" alt="Service 3" style={{height: "300px"}}/>
          <p className="medium__text">Ermira Gjaferaj</p>
          <p className="small__text">Head Administration</p>
          <br />
          <a href="mailto:e.gja@gruezh.ch"><i class="fa-solid fa-envelope" style={{fontSize: "24px", color: "#0057a4", cursor: "pointer"}}></i></a>
        </div>
      </div>


      {/* <TextAndSingleImage 
        titleText='Über uns'
        paragraphText='Ihr Partner für hochwertige Lösungen in den Bereichen Wasser, Wärme und Komfort. Von der ersten Beratung bis zur erfolgreichen Umsetzung stehen wir Ihnen mit unserem Fachwissen und unserem herausragenden Kundenservice zur Seite.'
        lineBreakText='Unser Unternehmen legt großen Wert auf qualitativ hochwertige und zuverlässige Arbeit. Dank der langjährigen Erfahrung unserer Mitarbeiter im Bereich der Heizungs- und Sanitärsysteme, innovativer Ansätze und herausragender Handwerkskunst, können wir sicherstellen, dass die Anforderungen unserer Kunden optimal erfüllt werden.'
        centerImg='/wearehereforu.webp'  
        TClass='scalableimgtitle'
      /> */}


      {/* <TextAndSingleImage 
        titleText='Unser Team'
        paragraphText='Das Team der Gruezh AG besteht aus erfahrenen Fachleuten und kreativen Köpfen, die sich durch ihre umfassende Expertise in den Bereichen Heizung, Sanitär und Planung auszeichnen. Unsere Mitarbeiter sind das Herzstück unseres Unternehmens und bringen ihre Leidenschaft sowie ihr Engagement für Qualität in jedem unserer Projekte zum Ausdruck.'
        TClass='scalableimgtitle unserteamtclass'
        centerImg='/zurich.webp'
        direction='right'
        ContainerStyle={{marginBottom: "50px", marginTop: "50px"}}
      /> */}
      

{/* 
      <SmallAreaHorizontalImage /> */}


      <Footer />

      <SlideBar />


    </div>  )
}

export default page