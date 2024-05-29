"use client"
import React, { useEffect, useState, useRef } from 'react'
import "@/Styles/TextAndImage.css";

import Link from 'next/link';

import { ImagePopup } from "@/Components";

import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {
  rightImg: string;
  leftImg: string;
  centerImg: string;
  direction?: string;
  titleText: string;
  paragraphText: string;
  hasButton?: boolean;
  buttonHref?: string;
  TStyle?: object;
  ContainerStyle?: object;
  TClass?: string;
}

const TextAndImage = ({
  rightImg,
  leftImg,
  centerImg,
  direction,
  titleText,
  paragraphText,
  hasButton,
  buttonHref,
  ContainerStyle,
  TClass,
  TStyle
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


  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end start']
  });

  // Inverting the movement for the first image to move downwards
  const invert = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Other images moving up as originally planned
  const md = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -200]);


  return (
    <div ref={container} className='text__image-container' style={ContainerStyle}>
      
      <div className={`text__image-text__container ${direction}`}>
        <p className={`medium__text bottomtotop text__blacker ${TClass}`} style={TStyle}>{titleText}</p>
        <p className="small__text bottomtotop" style={{marginTop: "16px"}}>
          {paragraphText}
        </p>
          {
            (hasButton && buttonHref) && (
              <Link href={buttonHref} style={{textDecoration: "none"}}>
                <div className="text__image-text__container-button bottomtotop">
                  <p className='smaller__text text__blacker' style={{color: "white"}}>Mehr</p>
                </div>
              </Link>
            )
          }
      </div>

      <div className="text__image-image__container bottomtotop">

        <motion.div className="text__image-image__container-right__img" style={{ y: md, backgroundImage: `url(${rightImg})`}}></motion.div>
        <motion.div className="text__image-image__container-left__img" style={{ y: lg, backgroundImage: `url(${leftImg})`}}></motion.div>
        <motion.div
          onClick={() => openPopup(centerImg)}
          className="text__image-image__container-center__img"
          style={{ y: invert, backgroundImage: `url(${centerImg})`}}
        ></motion.div>
      </div>


      {popupImage && <ImagePopup imageSrc={popupImage} onClose={closePopup} />}

    </div>
  )
}

export default TextAndImage