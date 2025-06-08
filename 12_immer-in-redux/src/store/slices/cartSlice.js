import { produce } from 'immer'

// Action Types
const CART_ADD_ITEM = 'cart/addItem'
const CART_REMOVE_ITEM = 'cart/removeItem'
const CART_INCREASE_ITEM_QUANTITY = 'cart/increaseItemQuantity'
const CART_DECREASE_ITEM_QUANTITY = 'cart/decreaseItemQuantity'

// Action Creators
export function addCartItem(productData, quantity = 1) {
  return { type: CART_ADD_ITEM, payload: { ...productData, quantity } }
}

export function removeCartItem(productId) {
  return { type: CART_REMOVE_ITEM, payload: { productId } }
}

export function increaseCartItemQuantity(productId) {
  return { type: CART_INCREASE_ITEM_QUANTITY, payload: { productId } }
}

export function decreaseCartItemQuantity(productId) {
  return { type: CART_DECREASE_ITEM_QUANTITY, payload: { productId } }
}

// Reducer
export default function cartSlice(originalState = [], action) {
  return produce(originalState, (state) => {
    const existingItemIndex = state.findIndex(
      (cartItem) => cartItem.productId === action.payload.productId
    )
    switch (action.type) {
      case CART_ADD_ITEM:
        if (existingItemIndex !== -1) {
          state[existingItemIndex].quantity += 1
          break
        }
        state.push({ ...action.payload, quantity: 1 })
        break

      case CART_REMOVE_ITEM:
        state.splice(existingItemIndex, 1)
        break

      case CART_INCREASE_ITEM_QUANTITY:
        state[existingItemIndex].quantity += 1
        break

      case CART_DECREASE_ITEM_QUANTITY:
        state[existingItemIndex].quantity -= 1
        if (state[existingItemIndex].quantity < 1)
          state.splice(existingItemIndex, 1)
        break

      default:
        break
    }

    return state
  })
}
