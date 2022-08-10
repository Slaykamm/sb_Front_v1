import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Menu from '../../components/menu/Menu'
import cl from './Backet.module.css'

export default function Backet() {
  return (
    <>
        <Header/>
        <div
          className={cl.MainLayer}
        >
            <div className={cl.container}>
                <div className={cl.containerMenu}>
                    <Menu/>
                </div>

                <div></div>

                <div className={cl.BacketMainContent}>
                    <span>Hello world
                     <div>Ниже таблица где будет</div>
                     <div>1. Название  -  кол-во - ед.изм  - цена за шт - цена всего</div>
                     <div>2. Название  -  кол-во - ед.изм  - цена за шт - цена всего</div>
                     <div>3. Название  -  кол-во - ед.изм  - цена за шт - цена всего</div>
                     <div>4. Название  -  кол-во - ед.изм  - цена за шт - цена всего</div>
                       __________________________________________
                    итого к оплате: 1 860,00 руб. </span>
                </div>
            </div>

        </div>
        <Footer/>
    </>
  )
}