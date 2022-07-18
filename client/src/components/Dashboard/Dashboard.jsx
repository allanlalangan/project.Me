// IMPORT

// styles and ui
import styles from './Dashboard.module.scss';
// custom components

///

const Dashboard = () => {
  return (
    <section className={styles['dashboard-container']}>
      <h2 className={styles['dashboard-heading']}>Dashboard</h2>
    </section>
  );
};

export default Dashboard;
