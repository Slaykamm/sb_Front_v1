import React from 'react'
import { useState } from 'react'
import Menu from '../../components/menu/Menu'
import NavPanel from '../../components/NavPanel/NavPanel'
import Product from '../../components/Products/Product/product'
import Products from '../../components/Products/Products'
import cl from './MainPage.module.css'





export default function MainPage() {


  return (
    <div
      className={cl.MainLayer}
    >
      <NavPanel/>
    
      <div className={cl.container}>

        <div className={cl.containerMenu}>
          <Menu/>
        </div>

        <div>
          
        </div>

        <div className={cl.containerContent}>
          <Products/>

        </div>
        
        
        
      </div>

    </div>

  )
}
