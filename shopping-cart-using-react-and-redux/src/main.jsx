import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import CartItem from './components/CartItem'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // </StrictMode>
)
