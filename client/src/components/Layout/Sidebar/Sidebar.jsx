import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const Sidebar = ({ gridItem }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className={`${gridItem} ${styles.container}`}>
      <ul className={styles.links}>
        {user && (
          <Link to='/dashboard'>
            <li className={styles.link}>
              <button className={styles['goals-button']}>Dashboard</button>
            </li>
          </Link>
        )}
        <Link to='/goals'>
          <li className={styles.link}>
            <button className={styles['goals-button']}>Goals</button>
          </li>
        </Link>
      </ul>
    </section>
  );
};
export default Sidebar;
