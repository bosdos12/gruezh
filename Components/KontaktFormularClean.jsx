"use client"
import React, {useEffect} from 'react'


import "@/Styles/KontaktFormularClean.css"


const KontaktFormularClean = () => {


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


  const sendMessageF = () => {
    const name__entry = document.getElementById("nameinput").value;
    const vorname__entry = document.getElementById("vornameinput").value;
    const email__entry = document.getElementById("emailinput").value;
    const number__entry = document.getElementById("telefonnummerinput").value;
    const message__entry = document.getElementById("nachrichtinput").value;

    if (name__entry.length <= 0 ||
        vorname__entry.length <= 0 ||
        email__entry.length <= 0 ||
        number__entry.length <= 0 ||
        message__entry.length <= 0
    ) {
      alert("Bitte füllen Sie das Kontaktformular aus");
      return;
    };

    fetch("https://www.dimen-ks.com/klickcontacts/requestInquiry", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name__entry: name__entry,
        vorname__entry: vorname__entry,
        email__entry: email__entry,
        number__entry: number__entry,
        message__entry: message__entry
      })
    }).then(_raw_res => _raw_res.json()).then(_json_res => {
      if (_json_res.validity) {
        document.getElementById("nameinput").value = "";
        document.getElementById("vornameinput").value = "";
        document.getElementById("emailinput").value = "";
        document.getElementById("telefonnummerinput").value = "";
        document.getElementById("nachrichtinput").value = "";
      };

      alert(_json_res.cause);
    }).catch(err => {
      console.log(err);
      alert("Probleme mit der Netzwerkkonnektivität");
    });
  };

  return (
    <div>
      <div className='kontaktformular__container' style={{marginBottom: "50px", marginTop: "70px"}}>


      {/* <div style={{width: "100%", height: "20px", backgroundColor: "red"}}></div> */}
      <div className="kontaktformular__container-horizontal">
            {/* <input type="text" name="" id="" className="" placeholder='Name'>            </input> */}
            <div className="kontaktformular-input__container">
              <p className="kontaktformular-input__placeholder"
                onClick={() => pTagClicked("nameptag", "nameinput")} id='nameptag'>NAME</p>
              <input type="text" name="" id="nameinput" className="kontaktformular-input"/>
            </div>
            <div className="kontaktformular-input__container">
                <p className="kontaktformular-input__placeholder"
                  onClick={() => pTagClicked("vornameptag", "vornameinput")} id='vornameptag'>VORNAME</p>
                <input type="text" name="" id="vornameinput" className="kontaktformular-input"/>
              </div>
          </div>

          <div className='kontaktformular-input__spacer-gap'></div>

          <div className="kontaktformular__container-horizontal">
          <div className="kontaktformular-input__container">
              <p className="kontaktformular-input__placeholder"
                onClick={() => pTagClicked("emailptag", "emailinput")} id='emailptag'>E-MAIL</p>
              <input type="text" name="" id="emailinput" className="kontaktformular-input"/>
            </div>
            <div className="kontaktformular-input__container">
              <p className="kontaktformular-input__placeholder"
                onClick={() => pTagClicked("telefonnummerptag", "telefonnummerinput")} id='telefonnummerptag'>TELEFON</p>
              <input type="text" name="" id="telefonnummerinput" className="kontaktformular-input"/>
            </div>
          </div>

          <div className='kontaktformular-input__spacer-gap'></div>

        <div className="kontaktformular-input__container">
              <p className="kontaktformular-input__placeholder"
                onClick={() => pTagClicked("nachrichtptag", "nachrichtinput")} id='nachrichtptag'></p>
              <textarea type="text" name="" id="nachrichtinput" className="kontaktformular-input" rows={5} style={{border: "1px solid lightgray", resize: "vertical"}} placeholder='NACHRICHT' />
          </div>
          <div style={{width: "100%", height: "20px"}}></div>
        <div style={{width: "100%", height: "fit-content"}}>
          <div onClick={sendMessageF} className="kontaktformular-senden__button" style={{backgroundColor: "gray", marginLeft: "auto", marginRight: "auto", borderRadius: "0px"}}>
            <p className="small__text text__blacker" style={{color: "white"}}>Senden</p>
          </div>
        </div>

      </div>
    </div>

    
  )
}

export default KontaktFormularClean