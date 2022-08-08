import React from 'react'
import cl from './Header.module.css'
import flower from './assets/flower-012.png'

export default function Header() {
  return (
    <div className={cl.MainLayer}>
    <div className={cl.imgHeaderContainer}>
        <img src={flower} alt='flower'/>
    </div>
    
    <div
        className={cl.title}
        >Щегловский Бройлер</div>
    <div className={cl.imgHeaderContainer}>
        <img src={flower} alt='flower'/>
    </div>

    </div>
  )
}
