import AuthLayout from '@/layouts/auth-layout'
import HomePage from '@/pages/home'
import SignIn from '@/pages/sign-in'
import SignUp from '@/pages/sign-up'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
])

export default router
