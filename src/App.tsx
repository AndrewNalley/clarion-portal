import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import './queries/SelectQueries'
import './App.scss'
import Dashboard from './pages/Dashboard'

function App() {





  return (
    <>
      <h1>Clarion Studios Database</h1>
      <section>
        <h2>DB queries</h2>
        <Dashboard />
      </section>
    </>
  )
}

export default App
