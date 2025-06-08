import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProductsData = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    } catch (err) {
      return rejectWithValue(err.message || 'Something went wrong!')
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    list: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
        state.error = null
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const getAllProducts = (state) => state?.products.list
export const getProductLoadingState = (state) => state?.products.loading
export const getProductError = (state) => state?.products.error

export default productsSlice.reducer
