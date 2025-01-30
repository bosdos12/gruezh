
import AnimatedLanding from "@/Components/AnimatedLanding";
import HeaderAction from "@/Components/HeaderAction";
import TextAndImage from "@/Components/TextAndImage";
import SlideBar from "@/Components/SlideBar";
import GetOnMailingList from "@/Components/GetOnMailingList";
import Footer from "@/Components/Footer";
import { KontaktFormular } from "@/Components";

export default function Home() {


  return (
    <div className="main__container">

      <AnimatedLanding />

      {/* 
      <HeaderAction
        PStyle={{textDecoration: "underline", textDecorationColor: "#0057a4"}}
        titleText="Sanitar / Heizung / Plannung"
        descriptionText="Mehr Finden"
      /> */}


      <div style={{width: "100%", height: "100px"}}></div>
      {/* <div style={{width: "100%", height: "fit-content", textAlign: "center"}}>
        <p className="large__text bottomtotop text__blacker" id="sanitarheizungplanung">SANITÄR / HEIZUNG / PLANUNG</p><br />
        <div style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          <p className="small__text bottomtotop">Ihre vertrauenswürdige und fachkundige Anlaufstelle für Sanitär-<br/> und Heizungssysteme sowie erstklassige Planungsdienstleistungen.</p>
        </div>
      </div> */}

      {/* <TextAndImage
        rightImg="/squarefloor.webp"
        leftImg="/3.webp"
        centerImg="/2.webp"
        titleText="Leistungen"
        paragraphText="Von der Planung bis zur Ausführung, durchgeführt mit Verlässlichkeit, Kompetenz und Qualitat."
        hasButton
        buttonHref="leistungen"
        TClass="scalableimgtitle"
      /> */}

      {/* <TextAndImage 
        rightImg="/8_right.webp"
        leftImg="/8.webp"
        centerImg="/8_center.webp"
        titleText="Über uns"
        paragraphText="Langjährige Erfahrung, innovative Ansätze, herausragende Handwerkskunst."
        hasButton
        buttonHref="uberuns"
        direction="right"
        ContainerStyle={{marginBottom: "50px"}}
        TClass="scalableimgtitle"
      /> */}
{/* 


      <KontaktFormular /> */}


    <div className="services__cards-container">
        <div className="service-card">
          <img src="/10.webp" alt="Service 1"/>
          <p className="medium__text">Sanitar</p>
        </div>
        <div className="service-card">
          <img src="/2.webp" alt="Service 2"/>
          <p className="medium__text">Heizung</p>
        </div>
        <div className="service-card">
          <img src="/7.webp" alt="Service 3"/>
          <p className="medium__text">Planung</p>
        </div>
        <div className="service-card">
          <img src="/4.webp" alt="Service 4"/>
          <p className="medium__text">Beratung</p>
        </div>
        <div className="service-card">
          <img src="/9.webp" alt="Service 5"/>
          <p className="medium__text">24h Notfallservice</p>
        </div>
      </div>


      <div style={{width: "100%", height: "100px"}}></div>



      <Footer />

      <SlideBar />


    </div>
  );
}
