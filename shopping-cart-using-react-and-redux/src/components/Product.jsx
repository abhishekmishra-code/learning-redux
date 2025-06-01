import React from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../store/cartReducer'
import { addWishlistItem } from '../store/wishlistReducer'

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
            dispatch(addCartItem( { productId, title, rating, price, imgUrl } ))
          }}
        >
          Add to Cart
        </button>
        <button onClick={() => {
          dispatch(addWishlistItem({ productId, title, rating, price, imgUrl }))
        }}>Add to Wishlist</button>
      </div>
        <button className='btn' id='buy-btn'>Buy Now</button>
    </div>
  )
}

export default Product
