import React from 'react'
import cl from './Menu.module.css'

export default function Menu() {
  return (
    <div className={cl.containerMenu}>

        <div className={cl.containerMenuTitle}>Меню</div>
        <div className={cl.containerMenuMember}>Новости Компании</div>
        <div className={cl.containerMenuMember}>Мировые новости</div>
        <div className={cl.containerMenuMember}>Корзина</div>
        <div className={cl.containerMenuMember}>Как добраться</div>
        <div className={cl.containerMenuMember}>Логин/Выход</div>
    </div>
    
    
  )
}
