import { combineReducers, createStore } from 'redux'
import cartReducer, { addCartItem, CART_ADD_ITEM, CART_DECREASE_ITEM_QUANTITY, CART_INCREASE_ITEM_QUANTITY, CART_REMOVE_ITEM, decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } from './cartReducer'
import wishlistReducer, { addWishlistItem, removeWishlistItem, WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from './wishlistReducer'
import productsReducer from './productsReducer'

const reducer = combineReducers( {
    products: productsReducer,
    cartItems: cartReducer,
    wishlist: wishlistReducer
} )

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

console.log(store)

// store.dispatch(addCartItem(1, 1))
// store.dispatch(addCartItem(12, 1))
// store.dispatch(addCartItem(15, 1))
// store.dispatch(addCartItem(6, 4))

// store.dispatch(removeCartItem(12))

// store.dispatch(increaseCartItemQuantity(15))
// store.dispatch(increaseCartItemQuantity(6))
// store.dispatch(increaseCartItemQuantity(1))

// store.dispatch(decreaseCartItemQuantity(15))
// store.dispatch(decreaseCartItemQuantity(15))

// store.dispatch(addWishlistItem(15))
// store.dispatch(addWishlistItem(18))
// store.dispatch(addWishlistItem(7))
// store.dispatch(addWishlistItem(6))

// store.dispatch(removeWishlistItem(6))
// store.dispatch(removeWishlistItem(15))


console.log(store.getState());
