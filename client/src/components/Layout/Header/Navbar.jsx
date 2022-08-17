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

const Navbar = ({ gridItem }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
    redirect('/');
  };

  return (
    <nav className={`${gridItem} ${styles['main-nav']}`}>
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
              <button onClick={logoutHandler} className={styles['logout-btn']}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
