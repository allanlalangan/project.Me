import React from 'react'
import styles from './Header.module.css'
import { FcBiomass } from 'react-icons/fc'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'

const Header = () => {
  return (
    <header className={styles['main-header']}>
      <section className={styles['logo-container']}>
        <h1 className={styles['main-heading']}></h1>
        <Link to='/'>
          <FcBiomass className={styles['main-logo']} />
        </Link>
      </section>
      <Navbar />
    </header>
  )
}

export default Header
