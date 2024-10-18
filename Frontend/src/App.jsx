import './App.css'
import About from './Pages/About/About'
import GenPassword from './Pages/Generate-Password/GenPassword'
import Home from './Pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Signin from './Pages/Sign-in/Signin'
import Nopage from './Pages/NoPage/Nopage'
import Layout from './Pages/Layout/Layout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProctectedRoute from './Components/ProctectedRoute'
import MyPassword from './Pages/Viewpassword/MyPassword'

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about-us',
          element: <About />
        },
        {
          path: '/generate-password',
          element: <GenPassword />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/sign-in',
          element: <Signin />
        },
        {
          path: '/my-passwords',
          element: <ProctectedRoute />,
          children: [
            {
              path: '',
              element: <MyPassword />
            }
          ]
        },
        {
          path: '*',
          element: <Nopage />
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
