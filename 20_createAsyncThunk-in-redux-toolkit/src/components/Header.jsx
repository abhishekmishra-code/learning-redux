import React, { useEffect } from 'react'
import CartIcon from '../assets/cart-icon.svg'
import HeartIcon from '../assets/heart-icon.svg'
import { Link, NavLink } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsData } from '../store/slices/productsSlice'
import { fetchCartItemsData } from '../store/slices/cartSlice'

const Header = () => {
  const wishlistItemCount = useSelector((state) => state.wishlist.length)

  const cartItemQuantity = useSelector((state) =>
    state.cartItems.list?.reduce(
      (accumulator, currentItem) => accumulator + currentItem.quantity,
      0
    )
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProductsData())
    dispatch(fetchCartItemsData())
  }, [dispatch])

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div className="navigation">
          <NavLink to="/wishlist" className="cart-icon">
            <img src={HeartIcon} alt="heart-icon" />
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
