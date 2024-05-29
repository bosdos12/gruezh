"use client";
import React, { useState, useEffect } from 'react'
import "@/Styles/TextAndImage.css";

import Link from 'next/link';

import { ImagePopup } from "@/Components";

interface Props {
  centerImg: string;
  direction?: string;
  titleText: string;
  paragraphText: string;
  hasButton?: boolean;
  buttonHref?: string;
  lineBreakText?: string;
  PStyle?: object;
  TStyle?: object;
  ContainerStyle?: object;
  TClass?: string;
}

const TextAndSingleImage = ({
  centerImg,
  direction,
  titleText,
  paragraphText,
  hasButton,
  buttonHref,
  lineBreakText,
  PStyle,
  TStyle,
  ContainerStyle,
  TClass
}: Props) => {
  
  const [popupImage, setPopupImage] = useState<string | null>(null);

  const openPopup = (imageSrc: string) => {
    setPopupImage(imageSrc);
  };

  const closePopup = () => {
    setPopupImage(null);
  };
  

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
    <div className='text__image-container' style={ContainerStyle}>
      
      <div className={`text__image-text__container ${direction}`}>
        <p className={`medium__text text__blacker ${TClass}`} style={TStyle}>{titleText}</p>
        <p className="small__text" style={{marginTop: "16px"}}>
          {paragraphText}
        </p>
        {lineBreakText && (
          <br />
        )}
        {lineBreakText && (
          <p className="small__text bottomtotop" style={PStyle}>{lineBreakText}</p>
        )}
          {
            (hasButton && buttonHref) && (
              <Link href={buttonHref} style={{textDecoration: "none"}}>
                <div className="text__image-text__container-button">
                  <p className='small__text' style={{color: "white"}}>Mehr</p>
                </div>
              </Link>
            )
          }
      </div>

      <div className="text__image-image__container single">
        <div
          onClick={() => openPopup(centerImg)}
          className="text__image-image__container-single__img"
          style={{backgroundImage: `url(${centerImg})`}}
        ></div>
      </div>

      {popupImage && <ImagePopup imageSrc={popupImage} onClose={closePopup} />}
    </div>
  )
}

export default TextAndSingleImage