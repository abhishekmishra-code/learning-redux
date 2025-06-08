import React, { useEffect } from 'react'
import CartIcon from '../assets/cart-icon.svg'
import HeartIcon from '../assets/heart-icon.svg'
import { Link, NavLink } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchProducts,
  fetchProductsError,
  updateAllProducts,
} from '../store/slices/productsSlice'
import {
  fetchCartItems,
  fetchCartItemsError,
  loadCartItems,
} from '../store/slices/cartSlice'

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
    dispatch(fetchProducts())
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => dispatch(updateAllProducts(data)))
      .catch(() => {
        dispatch(fetchProductsError())
      })

    dispatch(fetchCartItems())
    fetch('https://fakestoreapi.com/carts/1')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => dispatch(loadCartItems(data)))
      .catch(() => {
        dispatch(fetchCartItemsError())
      })
  }, [])

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
