import React from 'react'
import { useSelector } from '../../react-redux'
import WishlistItem from '../components/WishlistItem'

export default function Wishlist() {
  const cartItems = useSelector((state) => state.wishlist)

  return (
    <>
      {(!cartItems.length && (
        <div>
          <h3>Wishlist is empty</h3>
        </div>
      )) || (
        <div className="cart-container">
          <h2>Items in Your Cart</h2>
          <div className="cart-items-container">
            <div className="cart-header cart-item-container">
              <div className="cart-item">Item</div>
              <div className="item-price">Price</div>
              {/* <div className="quantity">Quantity</div> */}
              {/* <div className="total">Total</div> */}
            </div>
            {cartItems.map(({ productId, title, rating, price, imgUrl }) => (
              <WishlistItem
                key={productId}
                productId={productId}
                title={title}
                rating={rating}
                price={price}
                imgUrl={imgUrl}
              />
            ))}
            {/* <div className="cart-header cart-item-container">
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
                </div> */}
          </div>
        </div>
      )}
    </>
  )
}
