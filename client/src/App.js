import React, { useState } from 'react'

import Header from './components/Layout/Header'
import Login from './components/Login/Login'
import Goals from './components/Goals/Goals'

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true)
  return (
    <>
      <Header />
      <main>
        {!userLoggedIn && <Login />}
        {userLoggedIn && <Goals />}
      </main>
    </>
  )
}

export default App
