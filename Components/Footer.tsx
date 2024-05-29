"use client"
import React, {useEffect} from 'react';
import "@/Styles/Footer.css";
import Link from 'next/link';

interface Props {
  extraClasses?: string;
}

const Footer = ({
  extraClasses
}: Props) => {


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
  })

  return (
    <div className={`footer__container ${extraClasses}`}>
      <img className='bottomtotop' src='/gruezhwhitelogo.png' alt='Gruezh Logo' style={{width: "300px", height: "auto", marginLeft: "auto", marginRight: "auto", marginTop: "66px"}}/>
      {/* <p className="smaller__text" style={{color: "white", marginTop: "0px", maxWidth: "90%", marginLeft: "auto", marginRight: "auto"}}>
        <Link href="/" style={{textDecoration: "none", color: "white"}}>Startseite</Link> <Link href="/leistungen" style={{textDecoration: "none", color: "white"}}>Leistungen</Link> <Link href="/uberuns" style={{textDecoration: "none", color: "white"}}>Über Uns</Link> <Link href="/kontakt" style={{textDecoration: "none", color: "white"}}>Kontakt</Link>
      </p> */}
      <p className="smaller__text" style={{color: "white", marginTop: "8px", maxWidth: "90%", marginLeft: "auto", marginRight: "auto"}}>Lättenstrasse&nbsp;&nbsp;37,&nbsp;&nbsp;8952&nbsp;&nbsp;Schlieren</p>
      <Link href="mailto:info@gruezh.ch" style={{textDecoration: "none"}}>
        <p className="smaller__text" style={{color: "white", marginTop: "8px", maxWidth: "90%", marginLeft: "auto", marginRight: "auto"}}>info@gruezh.ch</p>
      </Link>
      <Link href="tel:+41 44 521 14 14" style={{textDecoration: "none"}}>
        <p className="smaller__text" style={{color: "white", marginTop: "8px", maxWidth: "90%", marginLeft: "auto", marginRight: "auto"}}>+41 44 521 14 14</p>
      </Link>
      <p className="smaller__text" style={{color: "white", marginTop: "8px", maxWidth: "90%", marginLeft: "auto", marginRight: "auto", marginBottom: "66px"}}>ALL RIGHTS RESERVED 2024 GRUEZH AG</p>
    </div>
  )
}

export default Footer