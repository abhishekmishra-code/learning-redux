import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems)
  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {!cartItems.length && <div><h3>Your Cart is empty</h3></div>}
        {cartItems.map(
          ({ productId, title, rating, price, imgUrl, quantity }) => (
            <CartItem
              key={productId}
              productId={productId}
              title={title}
              rating={rating}
              price={price}
              imgUrl={imgUrl}
              quantity={quantity}
            />
          )
        )}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">
            &#8377;
            {(
              cartItems.reduce(
                (accumulator, currentItem) =>
                  accumulator + currentItem.quantity * currentItem.price,
                0
              ) * 85.57
            ).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}
