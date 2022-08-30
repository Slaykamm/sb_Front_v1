import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Menu from '../../components/menu/Menu'
import NavPanel from '../../components/NavPanel/NavPanel'
import cl from './UserCabinet.module.css'

export default function UserCabinet() {
  return (
    <>
    <Header/>
    <div
      className={cl.MainLayer}
    >
      <NavPanel/>
        <div className={cl.container}>
            <div className={cl.containerMenu}>
                <Menu/>
            </div>

            <div></div>

            <div className={cl.BacketMainContent}>
                <span>Hello world
                 <div>Ниже таблица где будет</div>
                 <div>Предыдущие заказы №  дата сумма желательно с возможностью развернуть </div>
                 <div>заказы за год</div>
                   __________________________________________
                итого к оплате: ,00 руб. </span>
            </div>
        </div>

    </div>
    <Footer/>
</>
  )
}
