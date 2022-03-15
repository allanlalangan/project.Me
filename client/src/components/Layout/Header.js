import React from 'react'
import styles from './Header.module.css'

import Navbar from './Navbar'

const Header = () => {
  return (
    <header className={styles['main-header']}>
      <section className={styles.logo}>
        <h1 className={styles['main-heading']}>Dash</h1>
      </section>
      <section className={styles['links']}>
        <Navbar />
      </section>
    </header>
  )
}

export default Header
