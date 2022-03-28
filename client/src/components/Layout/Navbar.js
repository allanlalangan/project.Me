import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcTodoList, FcSettings, FcKey, FcGoodDecision } from 'react-icons/fc'
import styles from './Navbar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/authSlice'
import { MdLogout } from 'react-icons/md'

const Navbar = () => {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const redirect = useNavigate()

  const logoutHandler = () => {
    dispatch(logout())
    dispatch(reset())
    redirect('/')
  }

  return (
    <nav className={styles['main-nav']}>
      <ul>
        {!user && (
          <>
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
          </>
        )}

        {user && (
          <>
            <li>
              <Link to='/goals'>
                <FcTodoList className={styles['link-icons']} />
              </Link>
            </li>
            <li>
              <Link to='/'>
                <FcSettings className={styles['link-icons']} />
              </Link>
            </li>
            <li>
              <button onClick={logoutHandler} className={styles['logout-btn']}>
                <MdLogout
                  className={`${styles['link-icons']} ${styles['logout-icon']}`}
                />
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
