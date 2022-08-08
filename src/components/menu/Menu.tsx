import React from 'react'
import cl from './Menu.module.css'

export default function Menu() {
  return (
    <div className={cl.containerMenu}>

        <div className={cl.containerMenuTitle}>Menu</div>
        <div className={cl.containerMenuMember}>Tobi</div>
        <div className={cl.containerMenuMember}>Meni</div>
        <div className={cl.containerMenuMember}>Eda</div>
        <div className={cl.containerMenuMember}>Korzinka</div>
        <div className={cl.containerMenuMember}>Vahod</div>
    </div>
    
    
  )
}
