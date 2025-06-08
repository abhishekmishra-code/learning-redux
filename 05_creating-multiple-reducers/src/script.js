import { combineReducers, createStore } from 'redux'
import cartReducer, { CART_ADD_ITEM, CART_DECREASE_ITEM_QUANTITY, CART_INCREASE_ITEM_QUANTITY, CART_REMOVE_ITEM } from './cartReducer'
import wishlistReducer, { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from './wishlistReducer'
import productsReducer from './productsReducer'

const reducer = combineReducers( {
    products: productsReducer,
    cartItems: cartReducer,
    wishlist: wishlistReducer
} )

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

console.log(store)

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 12, quantity: 1 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 15, quantity: 1 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 6, quantity: 1 } })
store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 12 } })
store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY, payload: { productId: 15 } })
store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY, payload: { productId: 6 } })
store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY, payload: { productId: 1 } })
store.dispatch({ type: CART_DECREASE_ITEM_QUANTITY, payload: { productId: 15 } })
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 15 } })
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 18 } })
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 7 } })
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 6 } })
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 6 } })
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 15 } })
store.dispatch({ type: CART_DECREASE_ITEM_QUANTITY, payload: { productId: 15 } })

console.log(store.getState());
