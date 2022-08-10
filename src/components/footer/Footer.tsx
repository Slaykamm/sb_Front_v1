import React from 'react'
import cl from './Footer.module.css'
import flower from './assets/flower-012.png'

export default function Footer() {
  console.log('test')
  return (
    <div className={cl.MainLayer}>
      <div className={cl.imgHeaderContainer}>
          <img src={flower} alt='flower'/>
      </div>
      
      <div
          className={cl.info}
          > <div>----- </div>
            <div>WebDesign: Slaykam Studio (c) </div>
            <div>Contact: destpoch@mail.ru</div>  
      </div>
      
      <div className={cl.imgHeaderContainer}>
          <img src={flower} alt='flower'/>
      </div>

    </div>
  )
}
