import React from 'react'
import Product from '../components/Product'
import { useSelector } from 'react-redux'
import { getAllProducts, getProductError, getProductLoadingState } from '../store/slices/productsSlice'

const Home = () => {
  const productsList = useSelector(getAllProducts)
  const isLoading = useSelector(getProductLoadingState)
  const error = useSelector(getProductError)
  return isLoading ? (
    <h1 style={{textAlign: 'center'}}>Loading</h1>
  ) : (
    error ? <h2 style={{textAlign: 'center'}}>{error}</h2> : (
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
  )
}

export default Home
