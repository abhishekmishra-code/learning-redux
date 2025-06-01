import React from 'react'
import './App.css'
import Product from './components/Product'
import { useSelector } from 'react-redux'

const App = () => {
  const productsList =  useSelector((state) => state.products)
  console.log(productsList)
  return (
    <div className='products-container'>
      {productsList.map(({ title, rating, price, image, id }) => (
        <Product key={id} title={title} rating={rating.rate} price={price} imgUrl={image} />
      ))}
    </div>
  )
}

export default App
