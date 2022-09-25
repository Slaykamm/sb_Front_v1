import React, { useState } from 'react'
import Product from './Product/product'
import cl from './Products.module.css'
import egg from '../footer/assets/egg.jpeg'

export interface IProduct {
  id: number
  title: string
  image: string
  description: string
  production_date: string
  estimate_rediness: string
  rest: number
  measurement: string
}

export default function Products () {
  const [goods, setGoods] = useState<IProduct[]>([
    { id: 1, title: 'Eggs', image: egg, description: 'Eggess descriptions', production_date: '01.01.1980', estimate_rediness: '01.01.2050', rest: 100, measurement: 'дес.' },
    { id: 2, title: 'Курица', image: egg, description: 'куриное мяско', production_date: '01.01.1980', estimate_rediness: '01.01.2050', rest: 100, measurement: 'pcs' },
    { id: 3, title: 'Meat', image: egg, description: 'Перепелиные яйца', production_date: '01.01.1980', estimate_rediness: '01.01.2050', rest: 100, measurement: 'pcs' },
    { id: 4, title: 'smallEggs', image: egg, description: 'Перепела', production_date: '01.01.1980', estimate_rediness: '01.01.2050', rest: 100, measurement: 'pcs' },
    { id: 5, title: 'tushenka', image: egg, description: 'Тушенка', production_date: '01.01.1980', estimate_rediness: '01.01.2050', rest: 100, measurement: 'pcs' }
  ])

  return (
    <div className={cl.gridWrapper}>
      {goods.map(product => <Product key={product.id} product={product}/>)}
    </div>
  )
}
