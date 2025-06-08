import React from 'react'
import CartIcon from '../assets/cart-icon.svg'
import { Link, NavLink } from 'react-router'
import { useSelector } from 'react-redux'

const Header = () => {
  const wishlistItemCount = useSelector((state) => state.wishlist.length)
  const cartItemQuantity = useSelector((state) =>
    state.cartItems.reduce(
      (accumulator, currentItem) => accumulator + currentItem.quantity,
      0
    )
  )
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div className="navigation">
          <NavLink to="/wishlist" className="cart-icon">
            &#x2764;&#xfe0f;
            <div className="cart-items-count">{wishlistItemCount}</div>
          </NavLink>
          <NavLink to="/cart" className="cart-icon">
            <img src={CartIcon} alt="cart-icon" />
            <div className="cart-items-count">{cartItemQuantity}</div>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
