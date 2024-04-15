import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

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
            path: '/dashboard/new-student',
            element: <InsertNewStudent />
          },
          {
            path: '/dashboard/search-student',
            element: <SearchOneStudent />
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

  return (
    <RouterProvider router={router} />
  );
}

export default App
