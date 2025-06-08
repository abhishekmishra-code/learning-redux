import { combineReducers, createStore } from 'redux'
import productsReducer from './productsReducer'
import cartReducer from './cartReducer'
import wishlistReducer from './wishlistReducer'

const reducer = combineReducers( {
    products: productsReducer,
    cartItems: cartReducer,
    wishlist: wishlistReducer
} )

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())