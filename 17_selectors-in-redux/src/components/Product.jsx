import React from 'react'
import { addCartItem } from '../store/slices/cartSlice'
import { addWishlistItem } from '../store/slices/wishlistSlice'
import { useDispatch } from 'react-redux'

const Product = ({ productId, title, rating, price, imgUrl }) => {
  const dispatch = useDispatch()
  return (
    <div className="product">
      <div className="product-image">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">
          {+rating} &#9733; &#9733; &#9733; &#9733; &#9733;
        </p>
        <p className="price">&#8377;{(price * 85.57).toFixed()}</p>
      </div>
      <div className="cta-container">
        <button
          onClick={() => {
            dispatch(addCartItem( { productId } ))
          }}
        >
          Add to Cart
        </button>
        <button onClick={() => {
          dispatch(addWishlistItem({ productId }))
        }}>Add to Wishlist</button>
      </div>
        <button className='btn' id='buy-btn'>Buy Now</button>
    </div>
  )
}

export default Product
