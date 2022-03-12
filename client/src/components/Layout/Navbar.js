import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles['main-nav']}>
      <ul>
        <li>Goals</li>
        <li>Tasks</li>
        <li>Lists</li>
      </ul>
    </nav>
  )
}

export default Navbar
