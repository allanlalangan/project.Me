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

const Header = () => {
  return (
    <header className={styles['main-header']}>
      <section className={styles['logo-container']}>
        <Link to='/'>
          <h1 className={styles['main-title']}>project.Me</h1>
        </Link>
      </section>
      <Navbar />
    </header>
  );
};

export default Header;
