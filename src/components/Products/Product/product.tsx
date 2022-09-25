import { useState } from 'react'
import AdjustOrder from '../../../UI/adjustOrder/AdjustOrder'
import { IProduct } from '../Products'
import cl from './product.module.css'

export interface IproductProps {
  product: IProduct
}

export default function Product ({ product }: IproductProps) {
  const [orderAmount, setOrderAmount] = useState<number>(0)
  const [orderRest, setOrderRest] = useState<number>(product.rest)

  const incrementOrder = () => {
    if (orderRest > 0) {
      setOrderAmount(orderAmount + 1)
      setOrderRest(orderRest - 1)
    }
  }

  const decrementOrder = () => {
    if (orderAmount > 0) {
      setOrderAmount(orderAmount - 1)
      setOrderRest(orderRest + 1)
    }
  }
  const incrementOrder2 = () => {
    console.log('Order Amount', orderAmount)
  }

  return (
    <div className={cl.containerProduct}>
        <div className={cl.containerProductOptions}>
          <h2>
            {product?.title}
          </h2>
          <div className={cl.containerProductImg}>
            <img src={product.image}/>
          </div>
          <h4>
            {product?.description}
          </h4>
          <AdjustOrder
            measurement={product.measurement}
            incrementOrder={incrementOrder}
            decrementOrder={decrementOrder}
            incrementOrder2={incrementOrder2}
            orderAmount={orderAmount}
            />

          <h6>
            Доступный остаток {orderRest + ' ' + product.measurement}
          </h6>
        </div>
    </div>
  )
}
