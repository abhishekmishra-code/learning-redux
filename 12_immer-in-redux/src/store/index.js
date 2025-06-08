import { combineReducers, createStore } from 'redux'
import cartReducer from './slices/cartSlice'
import wishlistReducer from './slices/wishlistSlice'
import productsReducer from './slices/productsSlice'
import { produce } from 'immer'

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishlist: wishlistReducer,
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
)

const users = [
  {
    name: 'Abhishek',
    age: 25,
  },
  {
    name: 'Ram',
    age: 18,
  },
  {
    name: 'Lakhan',
    age: 16,
  },
]
