import React from 'react'
import cl from './Menu.module.css'
import { Link } from 'react-router-dom'

export default function Menu () {
  return (
    <div className={cl.containerMenu}>

        <div className={cl.containerMenuTitle}>Меню</div>
        <div className={cl.containerMenuMember}>Администрирование</div>
        <Link to='/main' className={cl.containerMenuMemberLink}>
          <div className={cl.containerMenuMember}>Главная</div>
        </Link>
        <Link to='/userCabinet' className={cl.containerMenuMemberLink}>
          <div className={cl.containerMenuMember}>Личный кабинет</div>
        </Link>
        <Link to='/backet' className={cl.containerMenuMemberLink}>
          <div className={cl.containerMenuMember}>Корзина</div>
        </Link>
        <div className={cl.containerMenuMember}>Как добраться</div>
        <div className={cl.containerMenuMember}>Логин/Выход</div>
    </div>
  )
}
