import React from 'react'
import { Link } from 'react-router-dom'
import { FcTodoList, FcSettings, FcKey, FcGoodDecision } from 'react-icons/fc'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles['main-nav']}>
      <ul>
        <li>
          <Link to='/login'>
            <FcKey className={styles['link-icons']} />
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <FcGoodDecision className={styles['link-icons']} />
          </Link>
        </li>
        {/* <li>
          <Link to='/dashboard'>
            <FcTodoList className={styles['link-icons']} />
          </Link>
        </li> */}
        <li>
          <Link to='/'>
            <FcSettings className={styles['link-icons']} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
