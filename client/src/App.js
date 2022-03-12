import React, { useState } from 'react'

import Header from './components/Layout/Header'
import Login from './components/Login/Login'
import Goals from './components/Goals/Goals'

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true)
  return (
    <main>
      <Header />
      {!userLoggedIn && <Login />}
      <Goals />
    </main>
  )
}

export default App
