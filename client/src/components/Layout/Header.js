import React from 'react'
import styles from './Header.module.css'
import { FaPassport, FaLeaf } from 'react-icons/fa'

import Navbar from './Navbar'

const Header = () => {
  return (
    <header className={styles['main-header']}>
      <section className={styles.logo}>
        <h1 className={styles['main-heading']}>
          <FaLeaf />
        </h1>
      </section>
      <section className={styles['links']}>
        <Navbar />
      </section>
    </header>
  )
}

export default Header
