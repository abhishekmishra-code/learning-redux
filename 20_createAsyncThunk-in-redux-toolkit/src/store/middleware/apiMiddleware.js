export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    const BASE_URL = 'https://fakestoreapi.com'
    if (action.type === 'api/makeCall') {
      next(action)
      const { url, onStart, onSuccess, onError } = action.payload
      dispatch({
        type: onStart,
      })
      fetch(`${BASE_URL}/${url}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
          }
          return res.json()
        })
        .then((data) =>
          dispatch({
            type: onSuccess,
            payload: data,
          })
        )
        .catch(() => {
          dispatch({
            type: onError,
          })
        })
    } else {
      next(action)
    }
  }

export const fetchData = (payload) => ({ type: 'api/makeCall', payload })
