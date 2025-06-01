import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product'

const Home = () => {
  const productsList = useSelector((state) => state.products)
  return (
    <div className="products-container">
      {productsList.map(({ title, rating, price, image, id }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imgUrl={image}
        />
      ))}
    </div>
  )
}

export default Home
