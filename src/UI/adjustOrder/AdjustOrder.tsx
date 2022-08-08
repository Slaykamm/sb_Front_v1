import React from 'react'
import cl from './AdjustOrder.module.css'

interface IproductAdjustmentProps {
  measurement: string
  orderAmount: number
  incrementOrder: any
  decrementOrder: any
}

export default function AdjustOrder(
  {
    measurement,
    orderAmount,
    incrementOrder,
    decrementOrder,
  }: IproductAdjustmentProps) {

 // TODO анимация на + - 
  return (
    <div className={cl.adjustOrder}>


    <span onClick={() => incrementOrder()}>+</span> 
    <input value={orderAmount+' ' + measurement }/>
    <span onClick={() => decrementOrder()}>-</span> 
    <div >
      <button className={cl.BtnOrder}>Добавить в корзину</button>
    </div>
  </div>
  )
}
