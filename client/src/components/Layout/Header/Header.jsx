// IMPORT

// routing
import { Link } from 'react-router-dom';
// styles and ui
import styles from './Header.module.scss';
// custom components
import Navbar from './Navbar';
// icons
import { FcBiomass } from 'react-icons/fc';

///

const Header = ({ gridItem }) => {
  return (
    <header className={`${gridItem} ${styles['main-header']}`}>
      <section className={styles['logo']}>
        <Link to='/'>
          <h1 className={styles['main-title']}>
            <span className={styles.__project}>project</span>.
            <span className={styles.me}>Me</span>
          </h1>
        </Link>
      </section>
    </header>
  );
};

export default Header;
