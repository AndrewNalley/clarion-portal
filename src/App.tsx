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
import EditStudent from './components/dbActions/EditStudent'

import type { User } from '@supabase/supabase-js'
// user information to be used throughout app
type CurrentUserContextType = {
  currentUser: User
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>
}

export const CurrentUserContext = createContext<CurrentUserContextType>({
  currentUser: {
    id: 'no_user',
    app_metadata: {},
    user_metadata: {},
    aud: '',
    created_at: ''
  },
setCurrentUser: () => {}
})


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
            path: '/dashboard/new-student',
            element: <InsertNewStudent />
          },
          {
            path: '/dashboard/search-student',
            element: <SearchOneStudent />
          },
          {
            path: '/dashboard/edit-student',
            element: <EditStudent />
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

  const [currentUser, setCurrentUser] = useState<User>({} as User)

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
