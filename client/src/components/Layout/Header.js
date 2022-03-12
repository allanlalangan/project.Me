import React from 'react'
import styles from './Header.module.css'

import Navbar from './Navbar'

const Header = () => {
  return (
    <header className={styles['main-header']}>
      <h1 className={styles['main-heading']}>Dash</h1>
      <Navbar />
    </header>
  )
}

export default Header
