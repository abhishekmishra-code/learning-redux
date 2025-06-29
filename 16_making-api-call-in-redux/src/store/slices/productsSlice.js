import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    list: [],
    error: '',
  },
  reducers: {
    fetchProducts(state) {
      state.loading = true
    },

    fetchProductsError(state, action) {
      state.loading = false
      state.error = action.payload || 'Something went wrong!'
    },

    updateAllProducts(state, action) {
      state.loading = false
      state.list = state = action.payload
      state.error = ''
    },
  },
})

export const { updateAllProducts, fetchProducts, fetchProductsError } =
  productsSlice.actions

export default productsSlice.reducer
