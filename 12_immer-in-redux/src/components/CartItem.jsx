import React from 'react'
import { useDispatch } from '../../react-redux'
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeCartItem,
} from '../store/slices/cartSlice'

export default function ({
  productId,
  title,
  rating,
  price,
  imgUrl,
  quantity,
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
            dispatch(decreaseCartItemQuantity(productId))
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => {
            dispatch(increaseCartItemQuantity(productId))
          }}
        >
          +
        </button>
        <button onClick={() => {dispatch(removeCartItem(productId))}} name='delete' title='Remove'>🗑️</button>
      </div>
      <div className="item-total">
        &#8377;{(quantity * (price * 85.57)).toFixed(2)}
      </div>
    </div>
  )
}
