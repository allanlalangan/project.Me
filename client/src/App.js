import React, { useState } from 'react'

import Header from './components/Layout/Header'
import Login from './components/Login/Login'
import Goals from './components/Goals/Goals'

import styles from './App.module.css'

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true)
  return (
    <main className={styles['app-container']}>
      <Header />
      <section className={styles.page}>
        {!userLoggedIn && <Login />}
        {userLoggedIn && <Goals />}
      </section>
    </main>
  )
}

export default App
