import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const Sidebar = ({ gridItem }) => {
  return (
    <section className={`${gridItem} ${styles.container}`}>
      <ul className={styles.links}>
        <Link to='/goals'>
          <li className={styles.links__link}>
            <button className={styles['goals-button']}>Goals</button>
          </li>
        </Link>
      </ul>
    </section>
  );
};
export default Sidebar;
