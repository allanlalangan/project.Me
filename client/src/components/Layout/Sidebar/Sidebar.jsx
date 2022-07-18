import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const Sidebar = ({ gridItem }) => {
  return (
    <section className={`${gridItem} ${styles.container}`}>
      <ul>
        <Link to='/goals'>
          <li>Goals</li>
        </Link>
      </ul>
    </section>
  );
};
export default Sidebar;
