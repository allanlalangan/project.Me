// IMPORT

// routing
import { Link, useNavigate } from 'react-router-dom';
// styles and ui
import styles from './Header.module.scss';
// custom components
import Navbar from './Navbar';
// icons
import { FcBiomass } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../../../features/authSlice';

///

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
    redirect('/');
  };

  return (
    <header className={`${styles['main-header']}`}>
      <Link to='/'>
        <span className={styles['main-title']}>
          <span className={styles.__project}>project</span>.
          <span className={styles.me}>Me</span>
        </span>
      </Link>
      <nav className={`${styles['main-nav']}`}>
        <ul className={styles.links}>
          {!user && (
            <>
              <Link to='/login'>
                <li className={styles.__link}>
                  <button>Login</button>
                </li>
              </Link>
              <Link to='/register'>
                <li className={styles.__link}>
                  <button>Create an account</button>
                </li>
              </Link>
            </>
          )}

          {user && (
            <>
              <li>
                <button
                  onClick={logoutHandler}
                  className={styles['logout-btn']}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
