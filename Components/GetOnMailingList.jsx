import React from 'react'

import "@/Styles/Getonmailinglist.css";

const GetOnMailingList = () => {
  return (
    <div className='getonmailinglist__container' style={{marginTop: "100px"}}>
      <div className="getonmailinglist__container-cover">
        <p className="large__text" style={{color: "white", fontSize: "26px", fontWeight: "bold"}}>Bleiben Sie<br/>auf dem Laufenden</p>
        <p className="smaller__text" style={{color: "white", marginTop: "12px"}}>Erhalten Sie Updates über unsere NeuigKeiten</p>
        <input type="email" className='email__eingeben-input' placeholder='E-Mail eingeben'/>
        {/* <i class="fa-solid fa-arrow-right-long" style={{color: "white",fontSize: "20px", marginRight: "-280px", marginTop: "-25px"}}></i> */}
      </div>
    </div>
  )
}

export default GetOnMailingList