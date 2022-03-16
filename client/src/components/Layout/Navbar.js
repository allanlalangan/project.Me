import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaHome,
  FaSignInAlt,
  FaSignOutAlt,
  FaIndent,
  FaLeaf,
  FaMapMarkerAlt,
  FaMoneyCheckAlt,
  FaMoon,
  FaMedrt,
} from 'react-icons/fa'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles['main-nav']}>
      <ul>
        <li>
          <Link to='/'>
            <FaHome className={styles['link-icons']} />
          </Link>
        </li>
        <li>
          <Link to='/login'>
            <FaSignInAlt className={styles['link-icons']} />
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <FaMedrt className={styles['link-icons']} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
