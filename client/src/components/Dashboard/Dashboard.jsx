// IMPORT

// styles and ui
import { useSelector } from 'react-redux';
import styles from './Dashboard.module.scss';
// custom components

///

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <section className={styles['dashboard-container']}>
      <h2 className={styles['heading']}>Dashboard</h2>
      <article>
        <p className={styles['welcome-msg']}>
          Welcome {user.name}! What's on today's agenda?
        </p>
      </article>
    </section>
  );
};

export default Dashboard;
