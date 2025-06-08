// Action Types
const WISHLIST_ADD_ITEM = 'wishlist/addItem'
const WISHLIST_REMOVE_ITEM = 'wishlist/removeItem'

// Action Creators
export function addWishlistItem(productData) {
  return { type: WISHLIST_ADD_ITEM, payload: productData }
}

export function removeWishlistItem(productId) {
  return { type: WISHLIST_REMOVE_ITEM, payload: { productId } }
}

// Reducer
export default function wishlistReducer(state = [], action) {
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      {const existingItem = state.find(
        (wishlistItem) => wishlistItem.productId === action.payload.productId
      )
      return existingItem ? state : [...state, action.payload]}

    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (wishlistItem) => wishlistItem.productId !== action.payload.productId
      )

    default:
      return state
  }
}
