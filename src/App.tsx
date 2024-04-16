import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { createContext, useState } from 'react'

// layout
import RootLayout from './layouts/RootLayout'
import './App.scss'

// main pages
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

// dashboard pages (actions)
import InsertNewStudent from './components/dbActions/InsertNewStudent'
import SearchOneStudent from './components/dbActions/SearchOneStudent'
import SeeAllStudents from './components/dbActions/SeeAllStudents'
import SeeOneStudent from './components/dbActions/SeeOneStudent'
import SearchResults from './components/dbActions/SearchResults'

import type { User } from '@supabase/supabase-js';
// user information to be used throughout app
export const CurrentUserContext = createContext({})




// instantiate router 
// TODO: add more dashboard routes
const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: '/dashboard/all-students',
            element: <SeeAllStudents />
          },
          {
            path: '/dashboard/one-student',
            element: <SeeOneStudent />
          },
          {
            path: '/dashboard/new-student',
            element: <InsertNewStudent />
          },
          {
            path: '/dashboard/search-student',
            element: <SearchOneStudent />
          },
          {
            path: '/dashboard/search-results',
            element: <SearchResults />
          }
        ]

      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser
      }}
    >
      <RouterProvider router={router} />
    </CurrentUserContext.Provider>
  )
}

export default App
