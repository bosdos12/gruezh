"use client";
import Image from 'next/image';
import React, { SetStateAction, useEffect, useState } from 'react'

import "@/Styles/Header.css";
import Link from 'next/link';


interface Props {
  logoPosition?: string;
  setLogoPosition?: React.Dispatch<SetStateAction<string>>;
  coverBannerPosition?: string;
  setCoverBannerPosition?: React.Dispatch<SetStateAction<string>>;
}

const Header = ({
  logoPosition,
  setLogoPosition,
  coverBannerPosition,
  setCoverBannerPosition
}: Props) => {





  let targetWidth = 600;
  let [staticLogo, setStaticLogo] = useState("/bluelogo.svg");

  if (typeof window !== "undefined") {

    const initialWidth = window.innerWidth;

    if (initialWidth < 769) {
      targetWidth = 150;
    };

  }
  const debounce = (func: Function, delay: number) => {
    let inDebounce: ReturnType<typeof setTimeout>;
    return function(this: any) {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };


  const handleScroll = () => {


    // Select the header and logo image
    const header = (document.getElementById("header") as HTMLElement);
    const logoImage = (document.getElementById('logo__image') as HTMLImageElement);

    
    // Select all p elements inside divs with the class 'header__texts-single__container'
    const headerTexts = document.querySelectorAll<HTMLElement>('.header__texts-single__container p');

    // Dont do any scroll related action if logo__image id doesnt exist (it only exists on the landing page);
    if (!logoImage) {
      return;
    }

    // Dont try to reference any window property if window doesnt exist
    if (!window) {
      return;
    }


    const viewPortWidth = window.innerWidth;
    const viewportHeight = (window.innerHeight / 100) * (viewPortWidth < 769 ? 94 : 100); // height of the banner in vh
    const initialWidth = window.innerWidth;

    const scrollDistance = window.pageYOffset || document.documentElement.scrollTop;
    const scrollRatio = scrollDistance / viewportHeight;

    const widthReduction = initialWidth - targetWidth;
    const currentWidth = initialWidth - (scrollRatio * widthReduction);
    const largestOne = Math.max(currentWidth, targetWidth);
    const widthAt80Percent = (largestOne / 100) * 60
    if (viewPortWidth < 769) {
      logoImage.style.width = `${largestOne}px`;
    } else {
      logoImage.style.width = `${widthAt80Percent}px`;
    }

    // const newPosition = (viewportHeight - scrollDistance);

    // Check if 1 full screen - height of header width has been scrolled,
    // so a smooth animation can put the header in place
    if (scrollDistance >= viewportHeight- (viewPortWidth < 769 ? 70 : 100)) {
      if (viewPortWidth < 769) {
        logoImage.style.top = "18px";
      } else {
        logoImage.style.top = "8px";
      }
      
      header.style.backgroundColor = "white";
      if (!logoImage.src.includes("bluelogo.svg")) {
        logoImage.src = "/bluelogo.svg";
      }
      // console.log("set new src")
      
      if (typeof setCoverBannerPosition !== "undefined") {
        setCoverBannerPosition("");
      }
      if (typeof setLogoPosition !== "undefined") {
        setLogoPosition("logo__fixed")
      }

      headerTexts.forEach(function(element) {
        element.style.color = 'black';
      });

      (document.getElementById("header__texts-hamburger-icon") as HTMLElement).style.color = "#0057a4";
    } else {
      // if (viewPortWidth < 769) {
      //   logoImage.style.left = "0px";
      // }

      header.style.backgroundColor = "";
      if (!logoImage.src.includes("whitelogo.svg")) {
        logoImage.src = "/whitelogo.svg";
      }
      logoImage.style.top = "auto";
      logoImage.style.bottom = "0px";


      if (typeof setCoverBannerPosition !== "undefined") {
        setCoverBannerPosition("cover__relative");
      }
      if (typeof setLogoPosition !== "undefined") {
        setLogoPosition("logo__absolute")
      }

      headerTexts.forEach(function(element) {
        element.style.color = 'white';
      });

      (document.getElementById("header__texts-hamburger-icon") as HTMLElement).style.color = "white";

    }
    
  };

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', debounce(handleScroll, 10));
  }

  const viewSlidebar = () => {
    (document.getElementById("fatimes") as HTMLElement).style.visibility = "visible";
    const slideBar = (document.getElementById("slide__bar") as HTMLElement);
    slideBar.style.visibility = "visible";
    slideBar.style.transform = 'translateX(-100%)'; // Start from the left
    setTimeout(() => {
      slideBar.style.transition = 'transform 0.5s ease-out';
      slideBar.style.transform = 'translateX(0)';
    }, 10); // Timeout to allow CSS to register the starting position
  }
  
  useEffect(() => {
    const header = (document.getElementById("header") as HTMLElement);
    // const logoImage = (document.getElementById('logo__image') as HTMLElement);


    if (!logoPosition) {
      header.style.backgroundColor = "white";
      document.body.style.paddingTop = "150px";
      const headerTexts = document.querySelectorAll<HTMLElement>('.header__texts-single__container p');
      headerTexts.forEach(function(element) {
        element.style.color = 'black';
      });
      (document.getElementById("header__texts-hamburger-icon") as HTMLElement).style.color = "#0057a4";

      const nonanimated__logoimage = (document.getElementById("nonanimated__logoimage") as HTMLElement)
      nonanimated__logoimage.style.position = "absolute";

      if (typeof window !== "undefined") {
        const viewPortWidth = window.innerWidth;
        if (viewPortWidth < 769) {
          nonanimated__logoimage.style.width = "150px";
          nonanimated__logoimage.style.top = "18px";
        } else {
          nonanimated__logoimage.style.width = "300px";
          nonanimated__logoimage.style.top = "13px";
        }
      }

    } else {
      document.body.style.paddingTop = "0px";
    }

    // if (typeof window !== "undefined") {
    //   const viewPortWidth = window.innerWidth;
    //   if (logoImage !== null && viewPortWidth > 769){ 
    //     logoImage.style.left = "50%";
    //     logoImage.style.transform = "translateX(-50%)";
    //   }
    // }
    
  }, [])
  return (
    <div className="header" id="header">


      <div className="header__texts-container">
        <Link href="/" style={{textDecoration: "none"}}>
          <div className="header__texts-single__container"><p className='medium__text'>Startseite</p></div>
        </Link>
        <Link href="/leistungen" style={{textDecoration: "none"}}>
          <div className="header__texts-single__container"><p className='medium__text'>Leistungen</p></div>
        </Link>       
      </div>

      {!logoPosition && (
        <Link href="/" style={{textDecoration: "none"}}>
          <div className="logo__container">
            <img src={staticLogo} alt='logo image' className={`logo__image`} id='nonanimated__logoimage'/>
          </div>
        </Link>
      )}
      
      <div className="header__content">
        <div className="header__texts-container">
          <Link href="/uberuns" style={{textDecoration: "none"}}>
            <div className="header__texts-single__container"><p className='medium__text'>Über uns</p></div>
          </Link>
          <Link href="/kontakt" style={{textDecoration: "none"}}>
            <div className="header__texts-single__container"><p className='medium__text'>Kontakt</p></div>
          </Link>
          <div className="header__texts-single__container burger" style={{zIndex: "900"}}>
            <i id='header__texts-hamburger-icon' className="fa-sharp fa-solid fa-grip-lines" onClick={viewSlidebar}></i>
          </div>        
        </div>
      </div>

    </div>
  )
}

export default Header