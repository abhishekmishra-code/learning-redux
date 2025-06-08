export function myCreateStore(reducer) {
  let state
  const listeners = []
  const store = {
    dispatch: (action) => {
      state = reducer(state, action)
      listeners.forEach((listener) => listener())
    },
    getState: () => {
      return state
    },
    subscribe: (listener) => {
      listeners.push(listener)
      return () => {
        const listenerIndex = listeners.findIndex((registeredListeners) => registeredListeners ===  listener)
        listeners.splice(listenerIndex, 1)
      }
    },
  }
  store.dispatch({ type: '@@INIT' })
  return store
}
