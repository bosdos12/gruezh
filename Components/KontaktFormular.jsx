"use client"
import React, {useEffect} from 'react'

import "@/Styles/KontaktFormular.css"

const KontaktFormular = () => {


  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0 // Adjust as needed
    });
    const animatedTexts = document.querySelectorAll('.bottomtotop');
    animatedTexts.forEach(text => {
      observer.observe(text);
    });



    // Name Input animation handlers
    const nameinput = document.getElementById("nameinput");
    const nameptag = document.getElementById("nameptag");
    nameinput.addEventListener('focus', function() {
      nameptag.classList.add("typing");
    });
    nameinput.addEventListener('blur', function() {
      if (nameinput.value.length <= 0) {
        nameptag.classList.remove("typing");
      }
    });

    // Vorname Input animation handlers
    const vornameinput = document.getElementById("vornameinput");
    const vornameptag = document.getElementById("vornameptag");
    vornameinput.addEventListener('focus', function() {
      vornameptag.classList.add("typing");
    });
    vornameinput.addEventListener('blur', function() {
      if (vornameinput.value.length <= 0) {
        vornameptag.classList.remove("typing");
      }
    });

    // Vorname Input animation handlers
    const emailinput = document.getElementById("emailinput");
    const emailptag = document.getElementById("emailptag");
    emailinput.addEventListener('focus', function() {
      emailptag.classList.add("typing");
    });
    emailinput.addEventListener('blur', function() {
      if (emailinput.value.length <= 0) {
        emailptag.classList.remove("typing");
      }
    });

    // Vorname Input animation handlers
    const telefonnummerinput = document.getElementById("telefonnummerinput");
    const telefonnummerptag = document.getElementById("telefonnummerptag");
    telefonnummerinput.addEventListener('focus', function() {
      telefonnummerptag.classList.add("typing");
    });
    telefonnummerinput.addEventListener('blur', function() {
      if (telefonnummerinput.value.length <= 0) {
        telefonnummerptag.classList.remove("typing");
      }
    });

    // Nachricht Input animation handlers
    const nachrichtinput = document.getElementById("nachrichtinput");
    const nachrichtptag = document.getElementById("nachrichtptag");
    nachrichtinput.addEventListener('focus', function() {
      nachrichtptag.classList.add("typing");
    });
    nachrichtinput.addEventListener('blur', function() {
      if (nachrichtinput.value.length <= 0) {
        nachrichtptag.classList.remove("typing");
      }
    });

  })
  

  const pTagClicked = (pTagId, inputItself) => {
    console.log(document.getElementById(pTagId).classList);
    document.getElementById(inputItself).focus();
  };


  


  return (
    <div style={{width: "100%",
                minheight: "50vh",
                maxHeight: "fit-content",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: "url('/10.webp')"}}>

      
      <div style={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        {/* <div style={{width: "100%", height: 'fit-content', textAlign: "center", marginTop: "100px"}}>
          <p className="medium__text bottomtotop" style={{fontWeight: "bold", color: "white"}}>Kontaktformular</p>
          <p className="small__text bottomtotop" id='kontaktformullartext' style={{color: "white", marginTop: "12px", marginLeft: "auto", marginRight: "auto"}}>
            Es wäre uns eine große Freude, von Ihnen zu hören, um potenzielle Projekte
            im Bereich Heizung, Sanitär und Planung zu besprechen und gemeinsam zu erkunden.
          </p>
        </div> */}
        <div className='regular-kontaktformular__container'>
          <div className="regular-kontaktformular__container-horizontal">
            {/* <input type="text" name="" id="" className="" placeholder='Name'>            </input> */}
            <div className="regular-kontaktformular-input__container">
              <p className="regular-kontaktformular-input__placeholder"
                onClick={() => pTagClicked("nameptag", "nameinput")} id='nameptag'>Name</p>
              <input type="text" name="" id="nameinput" className="regular-kontaktformular-input"/>
            </div>

            <div className="regular-kontaktformular-input__container">

                <p className="regular-kontaktformular-input__placeholder"
                  onClick={() => pTagClicked("vornameptag", "vornameinput")} id='vornameptag'>Vorname</p>
                <input type="text" name="" id="vornameinput" className="regular-kontaktformular-input"/>
              </div>
          </div>
          <div className="regular-kontaktformular__container-horizontal">
          <div className="regular-kontaktformular-input__container">
              <p className="regular-kontaktformular-input__placeholder"
                onClick={() => pTagClicked("emailptag", "emailinput")} id='emailptag'>E-Mail</p>
              <input type="text" name="" id="emailinput" className="regular-kontaktformular-input"/>
            </div>
            <div className="regular-kontaktformular-input__container">
              <p className="regular-kontaktformular-input__placeholder"
                onClick={() => pTagClicked("telefonnummerptag", "telefonnummerinput")} id='telefonnummerptag'>Telefon Nummer</p>
              <input type="text" name="" id="telefonnummerinput" className="regular-kontaktformular-input"/>
            </div>
          </div>

          <div className="regular-kontaktformular-input__container">
              <p className="regular-kontaktformular-input__placeholder"
                onClick={() => pTagClicked("nachrichtptag", "nachrichtinput")} id='nachrichtptag'>Nachricht</p>
              <input type="text" name="" id="nachrichtinput" className="regular-kontaktformular-input"/>
          </div>
            
              
          <div style={{width: "100%", height: "fit-content"}}>
              <div className="regular-kontaktformular-senden__button" style={{marginLeft: "auto", marginRight: "auto"}}>
              <p className="medium__text" style={{color: "#0057a4"}}>Senden</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default KontaktFormular