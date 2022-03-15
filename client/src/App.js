import React, { useState } from 'react'

import Header from './components/Layout/Header'
import Login from './components/Login/Login'
import Goals from './components/Goals/Goals'
import Register from './components/Register/Register'

import styles from './App.module.css'

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  return (
    <main className={styles['app-container']}>
      <Header />
      <section className={styles.page}>
        {!userLoggedIn && <Register />}
        {userLoggedIn && <Goals />}
      </section>
    </main>
  )
}

export default App
