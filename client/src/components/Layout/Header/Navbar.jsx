// IMPORT

// redux
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../../features/authSlice';
// routing
import { Link, useNavigate } from 'react-router-dom';
// styles and ui
import styles from './Navbar.module.scss';
// icons
import { FcTodoList, FcSettings, FcKey, FcGoodDecision } from 'react-icons/fc';
import { MdLogout } from 'react-icons/md';

///

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
    redirect('/');
  };

  return (
    <nav className={styles['main-nav']}>
      <ul>
        {!user && (
          <>
            <li>
              <Link to='/login'>
                <button>
                  <FcKey className={styles['link-icons']} />
                </button>
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <button>
                  <FcGoodDecision className={styles['link-icons']} />
                </button>
              </Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              <Link to='/goals'>
                <button>
                  <FcTodoList className={styles['link-icons']} />
                </button>
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
  );
};

export default Navbar;
