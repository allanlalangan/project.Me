// IMPORT

// routing
import { Link } from 'react-router-dom'
// styles and ui
import styles from './Header.module.css'
// custom components
import Navbar from './Navbar'
// icons
import { FcBiomass } from 'react-icons/fc'

///

const Header = () => {
  return (
    <header className={styles['main-header']}>
      <section className={styles['logo-container']}>
        <Link to='/'>
          <div className={`${styles['logo']}`}>
            <FcBiomass className={styles['logo-icon']} />
            <h1 className={styles['logo-heading']}>project.Me</h1>
          </div>
        </Link>
      </section>
      <Navbar />
    </header>
  )
}

export default Header
