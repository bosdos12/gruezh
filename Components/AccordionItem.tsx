"use client"
import React, { useState, useRef, useEffect } from 'react'


interface AccordionItemProps {
  header: string;
  isOpen: boolean;
  bgImg: string;
  theId?: string;
}

const AccordionItem = ({ header, isOpen, bgImg, theId}: AccordionItemProps) => {

  const accordionRef = useRef<HTMLDivElement>(null); // Ref with type HTMLDivElement
  const [stateIsOpen, setStateIsOpen] = useState(isOpen);


  useEffect(() => {
    if (stateIsOpen) {
      accordionRef.current!.style.height = "350px";
    } else {
      accordionRef.current!.style.height = "50px";
    }
  }, [stateIsOpen]);


  return (
    <div className={`services__accordions-accordion ${stateIsOpen ? "" : "closed"}`} ref={accordionRef}>

      <div className="services__acordions-accordion__content-general__container">
        <div className="services__accordions-accordion__content-container">
          <p className="services__accordions-accordion__content-header"
            onClick={() => stateIsOpen ? setStateIsOpen(false) : setStateIsOpen(true)} title='Read More' id={theId}>{header}</p>
        </div>

        <div className={`services__accordions-accordion__content-image__container ${stateIsOpen ? "" : "closed"}`}>
          <div
            className={`services__accordions-accordion__content-image ${stateIsOpen ? "" : "closed"}`}
            style={{backgroundImage: `url(${bgImg})`}}
            ></div>
        </div>
      </div>

      <div className="services__accordions-accordion__content-button__container">
        <div className={`services__accordions-accordion__content-button__container-text__container ${stateIsOpen ? "" : "closed"}`}>
          <p className="services__accordions-accordion__content-button__container-text"
            onClick={() => stateIsOpen ? setStateIsOpen(false) : setStateIsOpen(true)} title='Read More'>
            <i className={`fa-solid fa-arrow-${stateIsOpen ? "up" : "down"}`}></i>
          </p>
        </div>
      </div>

    </div>
  )
}

export default AccordionItem