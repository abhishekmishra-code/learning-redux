import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

const findIndexItem = (state, action) =>
  state.findIndex((cartItem) => cartItem.productId === action.payload.productId)

export const fetchCartItemsData = createAsyncThunk(
  'cart/fetchCartItems',
  async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/carts/1`)
      return response.json()
    } catch (err) {
      throw err
    }
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    loading: false,
    list: [],
    error: '',
  },
  reducers: {
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItemsData.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCartItemsData.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload.products
      })
      .addCase(fetchCartItemsData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Something went wrong'
      })
  },
})

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

// export const getCartLoadingState = (state) => state.cartItems.loading
// export const getCartError = (state) => state.cartItems.error


//combined loading and error selectors
export const getCartCombinedLoading = createSelector(
  [(state) => state.cartItems.loading, (state) => state.products.loading],
  (cartLoading, productsLoading) => cartLoading || productsLoading
)

export const getCartCombinedError = createSelector(
  [(state) => state.cartItems.error, (state) => state.products.error],
  (cartError, productsError) => cartError || productsError
)

export const {
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = cartSlice.actions

export default cartSlice.reducer
