import Goals from '../components/Goals/Goals';
import NewGoal from '../components/NewGoal/NewGoal';
import styles from './goals.module.scss';

const Goals_page = () => {
  return (
    <section className={styles.section}>
      <Goals />
      <NewGoal />
    </section>
  );
};

export default Goals_page;
