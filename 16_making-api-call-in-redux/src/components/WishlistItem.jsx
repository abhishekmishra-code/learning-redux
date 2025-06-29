import React from 'react'
import { removeWishlistItem } from '../store/slices/wishlistSlice'
import { useDispatch } from 'react-redux'

export default function WishlistItem({
  productId,
  title,
  rating,
  price,
  imgUrl,
}) {
  const dispatch = useDispatch()
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imgUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{+rating} &#9733; &#9733; &#9733; &#9733; &#9733;</p>
        </div>
      </div>
      <div className="item-price">&#8377;{(price * 85.57).toFixed(2)}</div>
      <div className="item-quantity">
        <button
          onClick={() => {
            dispatch(removeWishlistItem(productId))
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="28"
            height="28"
            viewBox="0 0 30 30"
          >
            <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
