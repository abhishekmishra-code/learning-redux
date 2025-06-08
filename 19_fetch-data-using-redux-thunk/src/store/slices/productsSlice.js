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

export const getAllProducts = (state) => state?.products.list
export const getProductLoadingState = (state) => state?.products.loading
export const getProductError = (state) => state?.products.error

export const fetchProductsData = () => (dispatch) => {
  dispatch(fetchProducts())
  fetch(`https://fakestoreapi.com/products`)
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
}

const { updateAllProducts, fetchProducts, fetchProductsError } =
  productsSlice.actions

export default productsSlice.reducer
