import { createStore } from 'redux'
import { myCreateStore } from '../my-redux'

const postCountElement = document.getElementById('post-count')

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

const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const myStore = myCreateStore(reducer)

console.log(store);
console.log(myStore);

console.log(store.getState())

const unsubscribe1 = myStore.subscribe(() => {
  console.log(myStore.getState())
  postCountElement.innerText = myStore.getState().post
})

const unsubscribe2 = myStore.subscribe(() => {
  console.log('Hii');
})

const unsubscribe3 = myStore.subscribe(() => {
  console.log('Hello');
})

postCountElement.innerText = myStore.getState().post

myStore.dispatch({ type: type.INCREMENT })
unsubscribe3()
myStore.dispatch({ type: type.INCREMENT })
unsubscribe2()
myStore.dispatch({ type: type.DECREMENT })
myStore.dispatch({ type: type.INCREASE_BY, payload: 15 })
myStore.dispatch({ type: type.DECREASE_BY, payload: 5 })

// setTimeout(() => {
  //   store.dispatch({ type: type.INCREASE_BY, payload: 100 })
  // }, 2000)
  
  // unsubscribe()
  
  postCountElement.addEventListener('click', () => {
    myStore.dispatch({ type: type.INCREMENT })
  })

  