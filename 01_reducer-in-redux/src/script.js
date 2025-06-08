import { createStore } from 'redux'

const type = {
  INCREMENT: 'post/increment',
  DECREMENT: 'post/decrement',
  INCREASE_BY: 'post/increaseBy',
  DECREASE_BY: 'post/decreaseBy',
}

let initialState = {
  post: 0,
  name: 'Abhishek Mishra',
  age: 25,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case type.INCREMENT:
      return { ...state, post: state.post + 1 }

    case type.DECREMENT:
      return { ...state, post: state.post - 1 }

    case type.INCREASE_BY:
      return { ...state, post: state.post + action.payload }

    case type.DECREASE_BY:
      return { ...state, post: state.post - action.payload }

    default:
      return state
  }
}

const store = createStore(reducer)
console.log(store.getState())

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: type.INCREMENT })
store.dispatch({ type: type.INCREMENT })
store.dispatch({ type: type.DECREMENT })
store.dispatch({ type: type.INCREASE_BY, payload: 15 })
store.dispatch({ type: type.DECREASE_BY, payload: 5 })
