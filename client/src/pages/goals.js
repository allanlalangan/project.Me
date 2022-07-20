import Goals from '../components/Goals/Goals';
import NewGoal from '../components/Goals/NewGoal/NewGoal';
import styles from './goals.module.scss';

const Goals_page = () => {
  return (
    <section className={styles['container']}>
      <Goals gridItem={styles.goals} />
      <NewGoal gridItem={styles['new-goal']} />
    </section>
  );
};

export default Goals_page;
