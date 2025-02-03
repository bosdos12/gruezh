

import React from 'react'

interface Props {
  openPopup: (url: string) => void;
  theImage: string;
  theTitle: string;
}

const LeistungenContainerSingle = ({
  openPopup,
  theImage,
  theTitle
}: Props) => {
  return (
    <div className="leistungen__container-single">
    <div
      className="leistungen__container-single__image"
      style={{backgroundImage: `url(${theImage})`}}>
    </div>
    <div className='leistungen__container-single__text-container'>
      <p className="small__text" style={{color: "black"}}>{theTitle}</p>
    </div>
  </div>
  )
}

export default LeistungenContainerSingle