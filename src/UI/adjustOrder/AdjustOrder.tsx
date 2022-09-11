import React from 'react'
import cl from './AdjustOrder.module.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IproductAdjustmentProps {
  measurement: string
  orderAmount: number
  incrementOrder: any
  incrementOrder2: any
  decrementOrder: any
}

export default function AdjustOrder(
  {
    measurement,
    orderAmount,
    incrementOrder,
    decrementOrder,
    incrementOrder2,
  }: IproductAdjustmentProps) {

 // TODO анимация на + - 
  return (
    <div className={cl.adjustOrder}>
      <div style={{display: 'flex', justifyContent: 'Center'}}>
      <span onClick={() => decrementOrder()}>-</span> 
      <input onChange={()=>incrementOrder2()} disabled value={orderAmount+' ' + measurement }/>
      <span onClick={() => incrementOrder()}>+</span> 
      </div>

      <div style={{display: 'flex', justifyContent: 'Center'}}>
        <Button
          variant="secondary" 
          size="sm"
          className={cl.BtnOrder}>Добавить в корзину</Button>
      </div>
    </div>
  )
}
