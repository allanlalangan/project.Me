// IMPORT

// styles and ui
import styles from './NewGoal.module.scss';

// custom components
import NewGoalForm from './NewGoalForm';

///

const NewGoal = () => {
  return (
    <section className={styles['new-goal']}>
      <h3>Set a new goal</h3>
      <NewGoalForm />
    </section>
  );
};

export default NewGoal;
