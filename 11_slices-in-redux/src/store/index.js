import { combineReducers, createStore } from 'redux'
import cartReducer from './slices/cartSlice'
import wishlistReducer from './slices/wishlistSlice'
import productsReducer from './slices/productsSlice'

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishlist: wishlistReducer,
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
)
