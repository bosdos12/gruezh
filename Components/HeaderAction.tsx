"use client"
import React, {useEffect} from 'react'
import "@/Styles/HeaderAction.css";

interface Props {
  titleText: string;
  descriptionText: string;
  TStyle?: object;
  PStyle?: object;
  hasButton?: boolean;
  buttonText?: string;
  lineBreakText?: string;
}

const HeaderAction = ({
  titleText, descriptionText, TStyle, PStyle, hasButton, buttonText, lineBreakText
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
    <div className='header__action-container'>

      <p className="large__text-inter bottomtotop" style={TStyle}>{titleText}</p><br />
      <p className="smaller__text-inter bottomtotop" style={PStyle}>{descriptionText}</p>
      {lineBreakText && (
        <br />
      )}
      {lineBreakText && (
        <p className="smaller__text-inter bottomtotop" style={PStyle}>{lineBreakText}</p>
      )}

      {
        hasButton && (
          <div className="header__action-action__button bottomtotop">
            <p className='small__text-inter' style={{color: "white"}}>{buttonText}</p>
          </div>
        )
      }
    </div>
  )
}

export default HeaderAction