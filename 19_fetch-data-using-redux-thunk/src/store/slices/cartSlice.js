import { createSelector, createSlice } from '@reduxjs/toolkit'

const findIndexItem = (state, action) =>
  state.findIndex((cartItem) => cartItem.productId === action.payload.productId)

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    loading: false,
    list: [],
    error: '',
  },
  reducers: {
    fetchCartItems(state) {
      state.loading = true
    },

    fetchCartItemsError(state, action) {
      state.loading = false
      state.error = action.payload || 'Something went wrong'
    },

    loadCartItems(state, action) {
      state.loading = false
      state.list = action.payload.products
    },

    addCartItem(state, action) {
      const existingItemIndex = findIndexItem(state.list, action)
      if (existingItemIndex !== -1) state.list[existingItemIndex].quantity += 1
      else state.list.push({ ...action.payload, quantity: 1 })
    },

    removeCartItem(state, action) {
      const existingItemIndex = findIndexItem(state.list, action)
      state.list.splice(existingItemIndex, 1)
    },

    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findIndexItem(state.list, action)
      state.list[existingItemIndex].quantity += 1
    },

    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findIndexItem(state.list, action)
      state.list[existingItemIndex].quantity -= 1
      if (state.list[existingItemIndex].quantity < 1)
        state.list.splice(existingItemIndex, 1)
    },
  },
})

// export const getCartItems = ({ products, cartItems }) => {
//   return cartItems.list
//     ?.map(({ productId, quantity }) => {
//       const cartProduct = products.list.find(
//         (product) => product.id === productId
//       )
//       return { ...cartProduct, quantity }
//     })
//     .filter(({ title }) => title)
// }

// export const getAllCartItems = createSelector(getCartItems, (state) => [...state])

// selector to get cart items with product info

export const getCartItems = createSelector(
  [(state) => state.products, (state) => state.cartItems],
  (products, cartItems) =>
    cartItems.list
      ?.map(({ productId, quantity }) => {
        const cartProduct = products.list.find(
          (product) => product.id === productId
        )
        return { ...cartProduct, quantity }
      })
      .filter(({ title }) => title)
)

// loading and error selectors
export const getCartLoadingState = (state) => state.cartItems.loading
export const getCartError = (state) => state.cartItems.error

export const fetchCartItemsData = () => (dispatch) => {
  dispatch(fetchCartItems())
  fetch(`https://fakestoreapi.com/carts/1`)
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
}

const { fetchCartItems, fetchCartItemsError, loadCartItems } = cartSlice.actions

export const {
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = cartSlice.actions

export default cartSlice.reducer
